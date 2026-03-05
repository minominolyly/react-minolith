import MinolithCssVariables from "../../models/MinolithCssVariables";
import {
  ComponentPart,
  ComponentStatePseudoClass,
  LightDarkColor,
  Oklch,
} from "../../models";
import ComponentColorSchemeColor from "../../models/ComponentColorSchemeColor";
import ColorSchemeColorComponents from "../../models/ColorSchemeColorComponents";
import { ColorName } from "../../react-minolith";

const cssVariablePrefix = "minolith-";

const colorNames: ColorName[] = [
  "gray",
  "red",
  "coral",
  "orange",
  "yellow",
  "lime",
  "green",
  "cyan",
  "blue",
  "violet",
  "magenta",
];

function getComponentColorVariables(
  colorName: string,
  componentPart?: ComponentPart,
  componentStateName?: string,
  elementName?: string,
): string[] {
  const styles: string[] = [];

  if (componentPart) {
    const addStyle = (
      elementPart: LightDarkColor | undefined,
      elementPartName: string,
    ) => {
      if (elementPart) {
        const cssVariable = `--${cssVariablePrefix}color-${colorName}${
          componentStateName ? `-${componentStateName}` : ""
        }${elementName ? `-${elementName}` : ""}-${elementPartName}`;

        let light: string = "";
        if (typeof elementPart.light === "string") {
          light = `${
            elementPart.light.startsWith("--")
              ? `var(${elementPart.light})`
              : `${elementPart.light}`
          }`;
        } else {
          const lightCssVariable = `var(--${cssVariablePrefix}color-${elementPart.light.name}-${elementPart.light.lightness === 5 ? "05" : elementPart.light.lightness})`;
          if (elementPart.light.alpha) {
            light = `oklch(from ${lightCssVariable} l c h / ${elementPart.light.alpha})`;
          } else {
            light = lightCssVariable;
          }
        }

        let dark: string = "";
        if (typeof elementPart.dark === "string") {
          dark = `${
            elementPart.dark.startsWith("--")
              ? `var(${elementPart.dark})`
              : `${elementPart.dark}`
          }`;
        } else {
          const darkCssVariable = `var(--${cssVariablePrefix}color-${elementPart.dark.name}-${elementPart.dark.lightness === 5 ? "05" : elementPart.dark.lightness})`;
          if (elementPart.dark.alpha) {
            dark = `oklch(from ${darkCssVariable} l c h / ${elementPart.dark.alpha})`;
          } else {
            dark = darkCssVariable;
          }
        }

        styles.push(`${cssVariable}: light-dark(${light}, ${dark});`);
      }
    };

    addStyle(componentPart.fore, "fore");
    addStyle(componentPart.back, "back");
    addStyle(componentPart.border, "border");
    addStyle(componentPart.shadow, "shadow");
    addStyle(componentPart.placeholder, "placeholder");
  }
  return styles;
}

function getColorVariables(
  colorName: string,
  componentState: ComponentStatePseudoClass,
  elementName?: string,
) {
  const derives: string[] = [];
  if (componentState.default) {
    const styles = getComponentColorVariables(
      colorName,
      componentState.default,
      undefined,
      elementName,
    );
    if (styles.length > 0) {
      derives.push(...styles);
    }
  }

  if (componentState.hover) {
    const styles = getComponentColorVariables(
      colorName,
      componentState.hover,
      "hover",
      elementName,
    );
    if (styles.length > 0) {
      derives.push(...styles);
    }
  }

  if (componentState.focus) {
    const styles = getComponentColorVariables(
      colorName,
      componentState.focus,
      "focus",
      elementName,
    );
    if (styles.length > 0) {
      derives.push(...styles);
    }
  }

  if (componentState.active) {
    const styles = getComponentColorVariables(
      colorName,
      componentState.active,
      "active",
      elementName,
    );
    if (styles.length > 0) {
      derives.push(...styles);
    }
  }

  if (componentState.disabled) {
    const styles = getComponentColorVariables(
      colorName,
      componentState.disabled,
      "disabled",
      elementName,
    );
    if (styles.length > 0) {
      derives.push(...styles);
    }
  }

  return derives;
}

function getComponentColorStyles(
  component: ComponentColorSchemeColor,
  componentName: string,
): string[] {
  const schemeStyles: string[] = [];
  if (component.default) {
    const styles = getColorVariables(
      "default",
      component.default,
      componentName,
    );
    if (styles.length > 0) {
      schemeStyles.push(...styles);
    }
  }

  for (const colorName of colorNames) {
    if (component[colorName]) {
      const styles = getColorVariables(
        colorName,
        component[colorName],
        componentName,
      );
      if (styles.length > 0) {
        schemeStyles.push(...styles);
      }
    }
  }

  return schemeStyles;
}

function getColorSchemeColorComponentsStyles(
  colorSchemeColorComponents: ColorSchemeColorComponents,
) {
  const schemeStyles: string[] = [];

  if (colorSchemeColorComponents.badge) {
    const styles = getComponentColorStyles(
      colorSchemeColorComponents.badge,
      "badge",
    );
    if (styles.length > 0) {
      schemeStyles.push(...styles);
    }
  }

  if (colorSchemeColorComponents.accordion) {
    const styles = getComponentColorStyles(
      colorSchemeColorComponents.accordion,
      "accordion",
    );
    if (styles.length > 0) {
      schemeStyles.push(...styles);
    }
    if (colorSchemeColorComponents.accordion.accordionSummary) {
      const styles = getComponentColorStyles(
        colorSchemeColorComponents.accordion.accordionSummary,
        "accordion-summary",
      );
      if (styles.length > 0) {
        schemeStyles.push(...styles);
      }
    }
    if (colorSchemeColorComponents.accordion.accordionDetails) {
      const styles = getComponentColorStyles(
        colorSchemeColorComponents.accordion.accordionDetails,
        "accordion-details",
      );
      if (styles.length > 0) {
        schemeStyles.push(...styles);
      }
    }
  }

  if (colorSchemeColorComponents.button) {
    const styles = getComponentColorStyles(
      colorSchemeColorComponents.button,
      "button",
    );
    if (styles.length > 0) {
      schemeStyles.push(...styles);
    }
  }

  if (colorSchemeColorComponents.card) {
    const styles = getComponentColorStyles(colorSchemeColorComponents.card, "card");
    if (styles.length > 0) {
      schemeStyles.push(...styles);
    }
    if (colorSchemeColorComponents.card.cardHeader) {
      const styles = getComponentColorStyles(
        colorSchemeColorComponents.card.cardHeader,
        "card-header",
      );
      if (styles.length > 0) {
        schemeStyles.push(...styles);
      }
    }
    if (colorSchemeColorComponents.card.cardBody) {
      const styles = getComponentColorStyles(
        colorSchemeColorComponents.card.cardBody,
        "card-body",
      );
      if (styles.length > 0) {
        schemeStyles.push(...styles);
      }
    }
    if (colorSchemeColorComponents.card.cardFooter) {
      const styles = getComponentColorStyles(
        colorSchemeColorComponents.card.cardFooter,
        "card-footer",
      );
      if (styles.length > 0) {
        schemeStyles.push(...styles);
      }
    }
  }

  if (colorSchemeColorComponents.dialogue) {
    const styles = getComponentColorStyles(
      colorSchemeColorComponents.dialogue,
      "dialogue",
    );
    if (styles.length > 0) {
      schemeStyles.push(...styles);
    }
    if (colorSchemeColorComponents.dialogue.dialogueAvatar) {
      const styles = getComponentColorStyles(
        colorSchemeColorComponents.dialogue.dialogueAvatar,
        "dialogue-avatar",
      );
      if (styles.length > 0) {
        schemeStyles.push(...styles);
      }
    }
    if (colorSchemeColorComponents.dialogue.dialogueName) {
      const styles = getComponentColorStyles(
        colorSchemeColorComponents.dialogue.dialogueName,
        "dialogue-name",
      );
      if (styles.length > 0) {
        schemeStyles.push(...styles);
      }
    }
    if (colorSchemeColorComponents.dialogue.dialogueMessage) {
      const styles = getComponentColorStyles(
        colorSchemeColorComponents.dialogue.dialogueMessage,
        "dialogue-message",
      );
      if (styles.length > 0) {
        schemeStyles.push(...styles);
      }
    }
  }

  if (colorSchemeColorComponents.header) {
    const styles = getComponentColorStyles(
      colorSchemeColorComponents.header,
      "header",
    );
    if (styles.length > 0) {
      schemeStyles.push(...styles);
    }
  }

  if (colorSchemeColorComponents.label) {
    const styles = getComponentColorStyles(
      colorSchemeColorComponents.label,
      "label",
    );
    if (styles.length > 0) {
      schemeStyles.push(...styles);
    }
  }

  if (colorSchemeColorComponents.link) {
    const styles = getComponentColorStyles(colorSchemeColorComponents.link, "link");
    if (styles.length > 0) {
      schemeStyles.push(...styles);
    }
  }

  if (colorSchemeColorComponents.loader) {
    const styles = getComponentColorStyles(
      colorSchemeColorComponents.loader,
      "loader",
    );
    if (styles.length > 0) {
      schemeStyles.push(...styles);
    }
  }

  if (colorSchemeColorComponents.message) {
    const styles = getComponentColorStyles(
      colorSchemeColorComponents.message,
      "message",
    );
    if (styles.length > 0) {
      schemeStyles.push(...styles);
    }
    if (colorSchemeColorComponents.message.messageHeader) {
      const styles = getComponentColorStyles(
        colorSchemeColorComponents.message.messageHeader,
        "message-header",
      );
      if (styles.length > 0) {
        schemeStyles.push(...styles);
      }
    }
    if (colorSchemeColorComponents.message.messageBody) {
      const styles = getComponentColorStyles(
        colorSchemeColorComponents.message.messageBody,
        "message-body",
      );
      if (styles.length > 0) {
        schemeStyles.push(...styles);
      }
    }
  }

  if (colorSchemeColorComponents.progress) {
    const styles = getComponentColorStyles(
      colorSchemeColorComponents.progress,
      "progress",
    );
    if (styles.length > 0) {
      schemeStyles.push(...styles);
    }
  }

  return schemeStyles;
}

function getMinolithCssVariableStyles(
  cssVariableSetting?: MinolithCssVariables,
): string[] {
  const minolithStyles: string[] = [];

  const rootStyles = getRootStyles(cssVariableSetting);
  if (rootStyles.length > 0) {
    minolithStyles.push(`:root{${rootStyles.join("")}}`);
  }

  return minolithStyles;
}

function getRootStyles(cssVariableSetting?: MinolithCssVariables): string[] {
  const rootStyles: string[] = [];

  if (cssVariableSetting) {
    if (cssVariableSetting.animation) {
      const animation = cssVariableSetting.animation;
      if (animation.speedHeavey) {
        rootStyles.push(
          `--${cssVariablePrefix}animation-speed-heavy: ${animation.speedHeavey};`,
        );
      }
      if (animation.speedSlower) {
        rootStyles.push(
          `--${cssVariablePrefix}animation-speed-slower: ${animation.speedSlower};`,
        );
      }
      if (animation.speedSlow) {
        rootStyles.push(
          `--${cssVariablePrefix}animation-speed-slow: ${animation.speedSlow};`,
        );
      }
      if (animation.speedNormal) {
        rootStyles.push(
          `--${cssVariablePrefix}animation-speed-normal: ${animation.speedNormal};`,
        );
      }
      if (animation.speedfFast) {
        rootStyles.push(
          `--${cssVariablePrefix}animation-speed-fast: ${animation.speedfFast};`,
        );
      }
      if (animation.speedfFaster) {
        rootStyles.push(
          `--${cssVariablePrefix}animation-speed-faster: ${animation.speedfFaster};`,
        );
      }
      if (animation.speedfFlash) {
        rootStyles.push(
          `--${cssVariablePrefix}animation-speed-flash: ${animation.speedfFlash};`,
        );
      }
    }

    if (cssVariableSetting.border) {
      const border = cssVariableSetting.border;
      if (border.borderWidthXThin) {
        rootStyles.push(
          `--${cssVariablePrefix}border-width-xthin: ${border.borderWidthXThin};`,
        );
      }
      if (border.borderWidthThin) {
        rootStyles.push(
          `--${cssVariablePrefix}border-width-thin: ${border.borderWidthThin};`,
        );
      }
      if (border.borderWidthMedium) {
        rootStyles.push(
          `--${cssVariablePrefix}border-width-medium: ${border.borderWidthMedium};`,
        );
      }
      if (border.borderWidthThick) {
        rootStyles.push(
          `--${cssVariablePrefix}border-width-thick: ${border.borderWidthThick};`,
        );
      }
      if (border.borderWidthXThick) {
        rootStyles.push(
          `--${cssVariablePrefix}border-width-xthick: ${border.borderWidthXThick};`,
        );
      }

      if (border.borderRadiusSmall) {
        rootStyles.push(
          `--${cssVariablePrefix}border-radius-small: ${border.borderRadiusSmall};`,
        );
      }
      if (border.borderRadiusMedium) {
        rootStyles.push(
          `--${cssVariablePrefix}border-radius-medium: ${border.borderRadiusMedium};`,
        );
      }
      if (border.borderRadiusLarge) {
        rootStyles.push(
          `--${cssVariablePrefix}border-radius-large: ${border.borderRadiusLarge};`,
        );
      }
    }

    if (cssVariableSetting.color) {
      const color = cssVariableSetting.color;
      const setColorDetailVariable = (
        colorName: string,
        lightness: string,
        oklch?: Oklch,
      ) => {
        if (oklch) {
          const oklchString = `${oklch.lightness}% ${oklch.chroma} ${oklch.hue}`;
          rootStyles.push(
            `--${cssVariablePrefix}color-${colorName}-${lightness}: oklch(${oklchString});`,
          );
        }
      };

      for (const colorName of colorNames) {
        if (color[colorName]) {
          const gradation = color[colorName];
          setColorDetailVariable(colorName, "95", gradation[95]);
          setColorDetailVariable(colorName, "90", gradation[90]);
          setColorDetailVariable(colorName, "85", gradation[85]);
          setColorDetailVariable(colorName, "80", gradation[80]);
          setColorDetailVariable(colorName, "75", gradation[75]);
          setColorDetailVariable(colorName, "70", gradation[70]);
          setColorDetailVariable(colorName, "65", gradation[65]);
          setColorDetailVariable(colorName, "60", gradation[60]);
          setColorDetailVariable(colorName, "55", gradation[55]);
          setColorDetailVariable(colorName, "50", gradation[50]);
          setColorDetailVariable(colorName, "45", gradation[45]);
          setColorDetailVariable(colorName, "40", gradation[40]);
          setColorDetailVariable(colorName, "35", gradation[35]);
          setColorDetailVariable(colorName, "30", gradation[30]);
          setColorDetailVariable(colorName, "25", gradation[25]);
          setColorDetailVariable(colorName, "20", gradation[20]);
          setColorDetailVariable(colorName, "15", gradation[15]);
          setColorDetailVariable(colorName, "10", gradation[10]);
          setColorDetailVariable(colorName, "05", gradation[5]);
        }
      }

      if (color.colorScheme) {
        if (color.colorScheme.default) {
          const styles = getColorVariables(
            "default",
            color.colorScheme.default,
          );
          if (styles.length > 0) {
            rootStyles.push(...styles);
          }
        }

        for (const colorName of colorNames) {
          if (color.colorScheme[colorName]) {
            const variable = color.colorScheme[colorName];
            const styles = getColorVariables(colorName, variable);
            if (styles.length > 0) {
              rootStyles.push(...styles);
            }
          }
        }

        if (color.colorScheme.components) {
          const components = color.colorScheme.components;
          const styles = getColorSchemeColorComponentsStyles(components);
          if (styles.length > 0) {
            rootStyles.push(...styles);
          }
        }
      }
    }

    if (cssVariableSetting.miscellaneous) {
      const miscellaneous = cssVariableSetting.miscellaneous;
      if (miscellaneous.zIndexTabula) {
        rootStyles.push(
          `--${cssVariablePrefix}z-index-tabula: ${miscellaneous.zIndexTabula};`,
        );
      }
      if (miscellaneous.zIndexModal) {
        rootStyles.push(
          `--${cssVariablePrefix}z-index-modal: ${miscellaneous.zIndexModal};`,
        );
      }
      if (miscellaneous.zIndexModalContent) {
        rootStyles.push(
          `--${cssVariablePrefix}z-index-tabula-content: ${miscellaneous.zIndexModalContent};`,
        );
      }
      if (miscellaneous.zIndexHeaderIsSticky) {
        rootStyles.push(
          `--${cssVariablePrefix}z-index-header-is-sticky: ${miscellaneous.zIndexHeaderIsSticky};`,
        );
      }
    }

    if (cssVariableSetting.typography) {
      const typography = cssVariableSetting.typography;
      if (typography.fontFamily) {
        if (typography.fontFamily.sansSerif) {
          rootStyles.push(
            `--${cssVariablePrefix}font-family-sans-serif: ${typography.fontFamily.sansSerif};`,
          );
        }
        if (typography.fontFamily.serif) {
          rootStyles.push(
            `--${cssVariablePrefix}font-family-serif: ${typography.fontFamily.serif};`,
          );
        }
        if (typography.fontFamily.monospace) {
          rootStyles.push(
            `--${cssVariablePrefix}font-family-monospace: ${typography.fontFamily.monospace};`,
          );
        }
        if (typography.fontFamily.main) {
          rootStyles.push(
            `--${cssVariablePrefix}font-family-main: ${typography.fontFamily.main};`,
          );
        }
        if (typography.fontFamily.heading) {
          rootStyles.push(
            `--${cssVariablePrefix}font-family-heading: ${typography.fontFamily.heading};`,
          );
        }
        if (typography.fontFamily.code) {
          rootStyles.push(
            `--${cssVariablePrefix}font-family-code: ${typography.fontFamily.code};`,
          );
        }
      }
      if (typography.fontSize) {
        if (typography.fontSize.xsmall) {
          rootStyles.push(
            `--${cssVariablePrefix}font-size-xsmall: ${typography.fontSize.xsmall};`,
          );
        }
        if (typography.fontSize.small) {
          rootStyles.push(
            `--${cssVariablePrefix}font-size-small: ${typography.fontSize.small};`,
          );
        }
        if (typography.fontSize.normal) {
          rootStyles.push(
            `--${cssVariablePrefix}font-size-normal: ${typography.fontSize.normal};`,
          );
        }
        if (typography.fontSize.medium) {
          rootStyles.push(
            `--${cssVariablePrefix}font-size-medium: ${typography.fontSize.medium};`,
          );
        }
        if (typography.fontSize.large) {
          rootStyles.push(
            `--${cssVariablePrefix}font-size-large: ${typography.fontSize.large};`,
          );
        }
        if (typography.fontSize.xlarge) {
          rootStyles.push(
            `--${cssVariablePrefix}font-size-xlarge: ${typography.fontSize.xlarge};`,
          );
        }
        if (typography.fontSize.xxlarge) {
          rootStyles.push(
            `--${cssVariablePrefix}font-size-xxlarge: ${typography.fontSize.xxlarge};`,
          );
        }
        if (typography.fontSize.xxxlarge) {
          rootStyles.push(
            `--${cssVariablePrefix}font-size-xxxlarge: ${typography.fontSize.xxxlarge};`,
          );
        }
        if (typography.fontSize.xxxxlarge) {
          rootStyles.push(
            `--${cssVariablePrefix}font-size-xxxxlarge: ${typography.fontSize.xxxxlarge};`,
          );
        }
        if (typography.fontSize.xxxxxlarge) {
          rootStyles.push(
            `--${cssVariablePrefix}font-size-xxxxxlarge: ${typography.fontSize.xxxxxlarge};`,
          );
        }
      }
      if (typography.fontWeight) {
        if (typography.fontWeight.light) {
          rootStyles.push(
            `--${cssVariablePrefix}font-weight-light: ${typography.fontWeight.light};`,
          );
        }
        if (typography.fontWeight.normal) {
          rootStyles.push(
            `--${cssVariablePrefix}font-weight-normal: ${typography.fontWeight.normal};`,
          );
        }
        if (typography.fontWeight.medium) {
          rootStyles.push(
            `--${cssVariablePrefix}font-weight-medium: ${typography.fontWeight.medium};`,
          );
        }
        if (typography.fontWeight.semibold) {
          rootStyles.push(
            `--${cssVariablePrefix}font-weight-semibold: ${typography.fontWeight.semibold};`,
          );
        }
        if (typography.fontWeight.bold) {
          rootStyles.push(
            `--${cssVariablePrefix}font-weight-bold: ${typography.fontWeight.bold};`,
          );
        }
      }
    }

    if (cssVariableSetting.components) {
      const components = cssVariableSetting.components;

      if (components.breadcrumbs) {
        const breadcrumbs = components.breadcrumbs;
        if (breadcrumbs.breadcrumbDivider) {
          rootStyles.push(
            `--${cssVariablePrefix}breadcrumb-divider: ${breadcrumbs.breadcrumbDivider};`,
          );
        }
      }

      if (components.button) {
        const button = components.button;
        if (button.paddingX) {
          rootStyles.push(
            `--${cssVariablePrefix}button-padding-x: ${button.paddingX};`,
          );
        }
        if (button.paddingY) {
          rootStyles.push(
            `--${cssVariablePrefix}button-padding-y: ${button.paddingY};`,
          );
        }
      }

      if (components.dialogue) {
        const dialogue = components.dialogue;
        if (dialogue.avatarSizeDefault) {
          rootStyles.push(
            `--${cssVariablePrefix}dialogue-avatar-size-default: ${dialogue.avatarSizeDefault};`,
          );
        }
        if (dialogue.avatarSizeSmall) {
          rootStyles.push(
            `--${cssVariablePrefix}dialogue-avatar-size-small: ${dialogue.avatarSizeSmall};`,
          );
        }
        if (dialogue.avatarSizeLarge) {
          rootStyles.push(
            `--${cssVariablePrefix}dialogue-avatar-size-large: ${dialogue.avatarSizeLarge};`,
          );
        }
        if (dialogue.avatarTopOffset) {
          rootStyles.push(
            `--${cssVariablePrefix}dialogue-avatar-top-offset: ${dialogue.avatarTopOffset};`,
          );
        }
        if (dialogue.nameFontSize) {
          if (typeof dialogue.nameFontSize.includes("rem")) {
            rootStyles.push(
              `--${cssVariablePrefix}dialogue-name-font-size: ${dialogue.nameFontSize};`,
            );
          } else {
            rootStyles.push(
              `--${cssVariablePrefix}dialogue-name-font-size: var(--${cssVariablePrefix}font-size-${dialogue.nameFontSize});`,
            );
          }
        }
        if (dialogue.namePaddingX) {
          rootStyles.push(
            `--${cssVariablePrefix}dialogue-name-padding-x: ${dialogue.namePaddingX};`,
          );
        }
        if (dialogue.namePaddingY) {
          rootStyles.push(
            `--${cssVariablePrefix}dialogue-name-padding-y: ${dialogue.namePaddingY};`,
          );
        }
        if (dialogue.messageArrowHeight) {
          rootStyles.push(
            `--${cssVariablePrefix}dialogue-messege-arrow-height: ${dialogue.messageArrowHeight};`,
          );
        }
        if (dialogue.messageArrowWidth) {
          rootStyles.push(
            `--${cssVariablePrefix}dialogue-messege-arrow-width: ${dialogue.messageArrowWidth};`,
          );
        }
        if (dialogue.messageInnerPaddingX) {
          rootStyles.push(
            `--${cssVariablePrefix}dialogue-message-inner-padding-x: ${dialogue.messageInnerPaddingX};`,
          );
        }
        if (dialogue.messageInnerPaddingY) {
          rootStyles.push(
            `--${cssVariablePrefix}dialogue-message-inner-padding-y: ${dialogue.messageInnerPaddingY};`,
          );
        }
      }

      if (components.header) {
        const header = components.header;
        if (header.backdropFilter) {
          rootStyles.push(
            `--${cssVariablePrefix}header-backdrop-filter: ${header.backdropFilter};`,
          );
        }

        if (header.zIndexIsSticky) {
          if (header.zIndexIsSticky === "auto") {
            rootStyles.push(
              `--${cssVariablePrefix}header-z-index-is-sticky: "auto";`,
            );
          } else {
            rootStyles.push(
              `--${cssVariablePrefix}header-z-index-is-sticky: ${header.zIndexIsSticky};`,
            );
          }
        }

        if (header.zIndexIsFixed) {
          if (header.zIndexIsFixed === "auto") {
            rootStyles.push(
              `--${cssVariablePrefix}header-z-index-is-fixed: "auto";`,
            );
          } else {
            rootStyles.push(
              `--${cssVariablePrefix}header-z-index-is-fixed: ${header.zIndexIsFixed};`,
            );
          }
        }
      }

      if (components.heading) {
        const heading = components.heading;
        if (heading.fontFamily) {
          rootStyles.push(
            `--${cssVariablePrefix}font-family-heading: ${heading.fontFamily};`,
          );
        }
      }
    }
  }

  return rootStyles;
}

const minolithStyleUtility = {
  getMinolithCssVariableStyles,
  getRootStyles,
};

export default minolithStyleUtility;
