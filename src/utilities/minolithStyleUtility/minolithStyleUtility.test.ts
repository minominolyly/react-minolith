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

const colorchromaColorful = 0.11;

colors.forEach((color) => {
  for (let i = 19; i >= 1; i--) {
    const gradation = i * 5;
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
      const gradStr = gradation < 10 ? "05" : `${gradation}`;
      expect(
        minolithStyleUtility.getMinolithCssVariableStyles(cssVariables)
      ).toStrictEqual([
        `:root{--minolith-color-${color}-${gradStr}-oklch: 98% 0.11 0;--minolith-color-${color}-${gradStr}: oklch(98% 0.11 0);}`,
      ]);
    });
  }
});

test("change color light accordion-summary fore.", () => {
  const cssVariables: MinolithCssVariable = {
    color: {
      light: {
        components: {
          accordion: {
            accordionSummary: {
              default: {
                default: {
                  fore: "--minolith-color-gray-50",
                },
              },
            },
          },
        },
      },
    },
  };

  expect(
    minolithStyleUtility.getMinolithCssVariableStyles(cssVariables)
  ).toStrictEqual([
    ":root{--minolith-color-default-accordion-summary-fore: var(--minolith-color-gray-50);}",
    '[data-color-scheme="light"]{--minolith-color-default-accordion-summary-fore: var(--minolith-color-gray-50);}',
  ]);
});

test("change color dark accordion-summary fore.", () => {
  const cssVariables: MinolithCssVariable = {
    color: {
      dark: {
        components: {
          accordion: {
            accordionSummary: {
              default: {
                default: {
                  fore: "--minolith-color-gray-50",
                },
              },
            },
          },
        },
      },
    },
  };

  expect(
    minolithStyleUtility.getMinolithCssVariableStyles(cssVariables)
  ).toStrictEqual([
    '[data-color-scheme="dark"]{--minolith-color-default-accordion-summary-fore: var(--minolith-color-gray-50);}',
  ]);
});

test("change color light loader fore.", () => {
  const cssVariables: MinolithCssVariable = {
    color: {
      light: {
        components: {
          loader: {
            default: {
              default: {
                fore: "--minolith-color-gray-50",
              },
            },
          },
        },
      },
    },
  };

  expect(
    minolithStyleUtility.getMinolithCssVariableStyles(cssVariables)
  ).toStrictEqual([
    ":root{--minolith-color-default-loader-fore: var(--minolith-color-gray-50);}",
    '[data-color-scheme="light"]{--minolith-color-default-loader-fore: var(--minolith-color-gray-50);}',
  ]);
});

test("change color dark loader fore.", () => {
  const cssVariables: MinolithCssVariable = {
    color: {
      dark: {
        components: {
          loader: {
            default: {
              default: {
                fore: "--minolith-color-gray-50",
              },
            },
          },
        },
      },
    },
  };

  expect(
    minolithStyleUtility.getMinolithCssVariableStyles(cssVariables)
  ).toStrictEqual([
    '[data-color-scheme="dark"]{--minolith-color-default-loader-fore: var(--minolith-color-gray-50);}',
  ]);
});
