import { expect, test } from "vitest";
import minolithStyleUtility from "./minolithStyleUtility";
import { MinolithCssVariables } from "../../react-minolith";

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

const colorchromaColorful = 0.11;

colors.forEach((color) => {
  for (let i = 19; i >= 1; i--) {
    const gradation = i * 5;
    test(`change color ${color}[${gradation}]`, () => {
      const cssVariables: MinolithCssVariables = {
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
      const gradStr = gradation < 10 ? "05" : `${gradation}`;
      expect(
        minolithStyleUtility.getMinolithCssVariableStyles(cssVariables),
      ).toStrictEqual([
        `:root{--minolith-color-${color}-${gradStr}-oklch: 98% 0.11 0;--minolith-color-${color}-${gradStr}: oklch(98% 0.11 0);}`,
      ]);
    });
  }
});

test("change color accordion-summary fore.", () => {
  const cssVariables: MinolithCssVariables = {
    color: {
      colorScheme: {
        components: {
          accordion: {
            accordionSummary: {
              default: {
                default: {
                  fore: {
                    light: "--minolith-color-gray-50",
                    dark: "--minolith-color-gray-50",
                  },
                },
              },
            },
          },
        },
      },
    },
  };

  expect(
    minolithStyleUtility.getMinolithCssVariableStyles(cssVariables),
  ).toStrictEqual([
    ":root{--minolith-color-default-accordion-summary-fore: light-dark(var(--minolith-color-gray-50), var(--minolith-color-gray-50));}",
  ]);
});

test("change color loader fore.", () => {
  const cssVariables: MinolithCssVariables = {
    color: {
      colorScheme: {
        components: {
          loader: {
            default: {
              default: {
                fore: {
                  light: "--minolith-color-gray-50",
                  dark: "--minolith-color-gray-50",
                },
              },
            },
          },
        },
      },
    },
  };

  expect(
    minolithStyleUtility.getMinolithCssVariableStyles(cssVariables),
  ).toStrictEqual([
    ":root{--minolith-color-default-loader-fore: light-dark(var(--minolith-color-gray-50), var(--minolith-color-gray-50));}",
  ]);
});
