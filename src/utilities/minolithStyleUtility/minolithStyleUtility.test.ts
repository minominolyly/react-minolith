import { expect, test } from "vitest";
import minolithStyleUtility from "./minolithStyleUtility";
import { MinolithCssVariable } from "../../react-minolith";

const colors: string[] = [
  "gray",
  "red",
  "orange",
  "yellow",
  "green",
  "cyan",
  "blue",
  "violet",
  "magenta",
];

const colorchromaGray = 0.04;
const colorchromaColorful = 0.11;

test("change color black.", () => {
  const cssVariables: MinolithCssVariable = {
    color: {
      black: {
        hue: 190,
        lightness: 13,
        chroma: colorchromaGray,
      },
    },
  };

  expect(
    minolithStyleUtility.getMinolithCssVariableStyles(cssVariables)
  ).toStrictEqual([":root{--color-black-oklch: 13% 0.04 190;--color-black: oklch(var(--color-black-oklch));}"]);
});

test("change color white.", () => {
  const cssVariables: MinolithCssVariable = {
    color: {
      white: {
        hue: 190,
        lightness: 98,
        chroma: colorchromaGray,
      },
    },
  };

  expect(
    minolithStyleUtility.getMinolithCssVariableStyles(cssVariables)
  ).toStrictEqual([":root{--color-white-oklch: 98% 0.04 190;--color-white: oklch(var(--color-white-oklch));}"]);
});

colors.forEach((color) => {
  for (let i = 19; i >= 1; i--) {
    const gradation = i * 50;
    test(`change color ${color}[${gradation}]`, () => {
      const cssVariables: MinolithCssVariable = {
        color: {
          [color]: {
            [gradation]: {
              hue: 0,
              lightness: 98,
              chroma: colorchromaColorful,
            },
          },
        },
      };
      const gradStr = gradation < 100 ? "050" : `${gradation}`;
      expect(
        minolithStyleUtility.getMinolithCssVariableStyles(cssVariables)
      ).toStrictEqual([
        `:root{--color-${color}-${gradStr}-oklch: 98% 0.11 0;--color-${color}-${gradStr}: oklch(var(--color-${color}-${gradStr}-oklch));}`,
      ]);
    });
  }
});
