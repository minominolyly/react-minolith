import MinolithCssVariable from "../../common/models/MinolithCssVariable";
import {
  ComponentPart,
  ComponentStatePseudoClass,
  Oklch,
} from "../../common/models";
import ComponentColor from "../../common/models/ComponentSchemeColor";
import SchemeColorComponents from "../../common/models/SchemeColorComponents";

const cssVariablePrefix = "minolith-";

function getComponentColorVariables(
  colorName: string,
  componentPart?: ComponentPart,
  componentStateName?: string,
  elementName?: string
): string[] {
  const styles: string[] = [];

  if (componentPart) {
    if (componentPart.fore) {
      styles.push(
        `--${cssVariablePrefix}color-${colorName}${
          componentStateName ? `-${componentStateName}` : ""
        }${elementName ? `-${elementName}` : ""}-fore: ${
          componentPart.fore.startsWith("--")
            ? `var(${componentPart.fore});`
            : `${componentPart.fore};`
        }`
      );
    }
    if (componentPart.back) {
      styles.push(
        `--${cssVariablePrefix}color-${colorName}${
          componentStateName ? `-${componentStateName}` : ""
        }${elementName ? `-${elementName}` : ""}-back: ${
          componentPart.back.startsWith("--")
            ? `var(${componentPart.back});`
            : `${componentPart.back};`
        }`
      );
    }
    if (componentPart.border) {
      styles.push(
        `--${cssVariablePrefix}color-${colorName}${
          componentStateName ? `-${componentStateName}` : ""
        }${elementName ? `-${elementName}` : ""}-border: ${
          componentPart.border.startsWith("--")
            ? `var(${componentPart.border});`
            : `${componentPart.border};`
        }`
      );
    }
    if (componentPart.shadow) {
      styles.push(
        `--${cssVariablePrefix}color-${colorName}${
          componentStateName ? `-${componentStateName}` : ""
        }${elementName ? `-${elementName}` : ""}-shadow: ${
          componentPart.shadow.startsWith("--")
            ? `var(${componentPart.shadow});`
            : `${componentPart.shadow};`
        }`
      );
    }
    if (componentPart.placeholder) {
      styles.push(
        `--${cssVariablePrefix}color-${colorName}${
          componentStateName ? `-${componentStateName}` : ""
        }${elementName ? `-${elementName}` : ""}-placeholder: ${
          componentPart.placeholder.startsWith("--")
            ? `var(${componentPart.placeholder});`
            : `${componentPart.placeholder};`
        }`
      );
    }
  }
  return styles;
}

function getColorVariables(
  colorName: string,
  componentState: ComponentStatePseudoClass,
  elementName?: string
) {
  const derives: string[] = [];
  if (componentState.default) {
    const styles = getComponentColorVariables(
      colorName,
      componentState.default,
      undefined,
      elementName
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
      elementName
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
      elementName
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
      elementName
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
      elementName
    );
    if (styles.length > 0) {
      derives.push(...styles);
    }
  }

  return derives;
}

function getComponentColorStyles(
  component: ComponentColor,
  componentName: string
): string[] {
  const schemeStyles: string[] = [];
  if (component.default) {
    const styles = getColorVariables(
      "default",
      component.default,
      componentName
    );
    if (styles.length > 0) {
      schemeStyles.push(...styles);
    }
  }

  if (component.gray) {
    const styles = getColorVariables("gray", component.gray, componentName);
    if (styles.length > 0) {
      schemeStyles.push(...styles);
    }
  }

  if (component.red) {
    const styles = getColorVariables("red", component.red, componentName);
    if (styles.length > 0) {
      schemeStyles.push(...styles);
    }
  }
  if (component.orange) {
    const styles = getColorVariables("orange", component.orange, componentName);
    if (styles.length > 0) {
      schemeStyles.push(...styles);
    }
  }
  if (component.yellow) {
    const styles = getColorVariables("yellow", component.yellow, componentName);
    if (styles.length > 0) {
      schemeStyles.push(...styles);
    }
  }

  if (component.green) {
    const styles = getColorVariables("green", component.green, componentName);
    if (styles.length > 0) {
      schemeStyles.push(...styles);
    }
  }

  if (component.cyan) {
    const styles = getColorVariables("cyan", component.cyan, componentName);
    if (styles.length > 0) {
      schemeStyles.push(...styles);
    }
  }

  if (component.blue) {
    const styles = getColorVariables("blue", component.blue, componentName);
    if (styles.length > 0) {
      schemeStyles.push(...styles);
    }
  }

  if (component.violet) {
    const styles = getColorVariables("violet", component.violet, componentName);
    if (styles.length > 0) {
      schemeStyles.push(...styles);
    }
  }

  if (component.magenta) {
    const styles = getColorVariables(
      "magenta",
      component.magenta,
      componentName
    );
    if (styles.length > 0) {
      schemeStyles.push(...styles);
    }
  }

  return schemeStyles;
}

function getSchemeColorComponentsStyles(
  schemeColorComponents: SchemeColorComponents
) {
  const schemeStyles: string[] = [];

  if (schemeColorComponents.badge) {
    const styles = getComponentColorStyles(
      schemeColorComponents.badge,
      "badge"
    );
    if (styles.length > 0) {
      schemeStyles.push(...styles);
    }
  }

  if (schemeColorComponents.accordion) {
    const styles = getComponentColorStyles(schemeColorComponents.accordion, "accordion");
    if (styles.length > 0) {
      schemeStyles.push(...styles);
    }
    if (schemeColorComponents.accordion.accordionSummary) {
      const styles = getComponentColorStyles(
        schemeColorComponents.accordion.accordionSummary,
        "accordion-summary"
      );
      if (styles.length > 0) {
        schemeStyles.push(...styles);
      }
    }
    if (schemeColorComponents.accordion.accordionDetails) {
      const styles = getComponentColorStyles(
        schemeColorComponents.accordion.accordionDetails,
        "accordion-details"
      );
      if (styles.length > 0) {
        schemeStyles.push(...styles);
      }
    }
  }

  if (schemeColorComponents.button) {
    const styles = getComponentColorStyles(
      schemeColorComponents.button,
      "button"
    );
    if (styles.length > 0) {
      schemeStyles.push(...styles);
    }
  }

  if (schemeColorComponents.card) {
    const styles = getComponentColorStyles(schemeColorComponents.card, "card");
    if (styles.length > 0) {
      schemeStyles.push(...styles);
    }
    if (schemeColorComponents.card.cardHeader) {
      const styles = getComponentColorStyles(
        schemeColorComponents.card.cardHeader,
        "card-header"
      );
      if (styles.length > 0) {
        schemeStyles.push(...styles);
      }
    }
    if (schemeColorComponents.card.cardBody) {
      const styles = getComponentColorStyles(
        schemeColorComponents.card.cardBody,
        "card-body"
      );
      if (styles.length > 0) {
        schemeStyles.push(...styles);
      }
    }
    if (schemeColorComponents.card.cardFooter) {
      const styles = getComponentColorStyles(
        schemeColorComponents.card.cardFooter,
        "card-footer"
      );
      if (styles.length > 0) {
        schemeStyles.push(...styles);
      }
    }
  }

  if (schemeColorComponents.dialogue) {
    const styles = getComponentColorStyles(schemeColorComponents.dialogue, "dialogue");
    if (styles.length > 0) {
      schemeStyles.push(...styles);
    }
    if (schemeColorComponents.dialogue.dialogueAvatar) {
      const styles = getComponentColorStyles(
        schemeColorComponents.dialogue.dialogueAvatar,
        "dialogue-avatar"
      );
      if (styles.length > 0) {
        schemeStyles.push(...styles);
      }
    }
    if (schemeColorComponents.dialogue.dialogueName) {
      const styles = getComponentColorStyles(
        schemeColorComponents.dialogue.dialogueName,
        "dialogue-name"
      );
      if (styles.length > 0) {
        schemeStyles.push(...styles);
      }
    }
    if (schemeColorComponents.dialogue.dialogueMessage) {
      const styles = getComponentColorStyles(
        schemeColorComponents.dialogue.dialogueMessage,
        "dialogue-message"
      );
      if (styles.length > 0) {
        schemeStyles.push(...styles);
      }
    }
  }

  if (schemeColorComponents.header) {
    const styles = getComponentColorStyles(
      schemeColorComponents.header,
      "header"
    );
    if (styles.length > 0) {
      schemeStyles.push(...styles);
    }
  }

  if (schemeColorComponents.label) {
    const styles = getComponentColorStyles(
      schemeColorComponents.label,
      "label"
    );
    if (styles.length > 0) {
      schemeStyles.push(...styles);
    }
  }

  if (schemeColorComponents.link) {
    const styles = getComponentColorStyles(
      schemeColorComponents.link,
      "link"
    );
    if (styles.length > 0) {
      schemeStyles.push(...styles);
    }
  }

  if (schemeColorComponents.loader) {
    const styles = getComponentColorStyles(
      schemeColorComponents.loader,
      "loader"
    );
    if (styles.length > 0) {
      schemeStyles.push(...styles);
    }
  }

  if (schemeColorComponents.message) {
    const styles = getComponentColorStyles(
      schemeColorComponents.message,
      "message"
    );
    if (styles.length > 0) {
      schemeStyles.push(...styles);
    }
    if (schemeColorComponents.message.messageHeader) {
      const styles = getComponentColorStyles(
        schemeColorComponents.message.messageHeader,
        "message-header"
      );
      if (styles.length > 0) {
        schemeStyles.push(...styles);
      }
    }
    if (schemeColorComponents.message.messageBody) {
      const styles = getComponentColorStyles(
        schemeColorComponents.message.messageBody,
        "message-body"
      );
      if (styles.length > 0) {
        schemeStyles.push(...styles);
      }
    }
  }

  if (schemeColorComponents.progress) {
    const styles = getComponentColorStyles(
      schemeColorComponents.progress,
      "progress"
    );
    if (styles.length > 0) {
      schemeStyles.push(...styles);
    }
  }

  return schemeStyles;
}

function getMinolithCssVariableStyles(
  cssVariableSetting?: MinolithCssVariable
): string[] {
  const minolithStyles: string[] = [];

  const rootStyles = getRootStyles(cssVariableSetting);
  const lightSchemeStyles = getLightSchemeStyles(cssVariableSetting);
  const darkSchemeStyles = getDarkSchemeStyles(cssVariableSetting);

  rootStyles.length > 0 && minolithStyles.push(`:root{${rootStyles.join("")}}`);
  lightSchemeStyles.length > 0 &&
    minolithStyles.push(`:root{${lightSchemeStyles.join("")}}`);
  lightSchemeStyles.length > 0 &&
    minolithStyles.push(
      `[data-color-scheme="light"]{${lightSchemeStyles.join("")}}`
    );
  darkSchemeStyles.length > 0 &&
    minolithStyles.push(
      `[data-color-scheme="dark"]{${darkSchemeStyles.join("")}}`
    );

  return minolithStyles;
}

function getRootStyles(cssVariableSetting?: MinolithCssVariable): string[] {
  const rootStyles: string[] = [];

  if (cssVariableSetting) {
    if (cssVariableSetting.animation) {
      const animation = cssVariableSetting.animation;
      if (animation.speedHeavey) {
        rootStyles.push(
          `--${cssVariablePrefix}animation-speed-heavy: ${animation.speedHeavey};`
        );
      }
      if (animation.speedSlower) {
        rootStyles.push(
          `--${cssVariablePrefix}animation-speed-slower: ${animation.speedSlower};`
        );
      }
      if (animation.speedSlow) {
        rootStyles.push(
          `--${cssVariablePrefix}animation-speed-slow: ${animation.speedSlow};`
        );
      }
      if (animation.speedNormal) {
        rootStyles.push(
          `--${cssVariablePrefix}animation-speed-normal: ${animation.speedNormal};`
        );
      }
      if (animation.speedfFast) {
        rootStyles.push(
          `--${cssVariablePrefix}animation-speed-fast: ${animation.speedfFast};`
        );
      }
      if (animation.speedfFaster) {
        rootStyles.push(
          `--${cssVariablePrefix}animation-speed-faster: ${animation.speedfFaster};`
        );
      }
      if (animation.speedfFlash) {
        rootStyles.push(
          `--${cssVariablePrefix}animation-speed-flash: ${animation.speedfFlash};`
        );
      }
    }

    if (cssVariableSetting.border) {
      const border = cssVariableSetting.border;
      if (border.borderWidthXThin) {
        rootStyles.push(
          `--${cssVariablePrefix}border-width-xthin: ${border.borderWidthXThin};`
        );
      }
      if (border.borderWidthThin) {
        rootStyles.push(
          `--${cssVariablePrefix}border-width-thin: ${border.borderWidthThin};`
        );
      }
      if (border.borderWidthMedium) {
        rootStyles.push(
          `--${cssVariablePrefix}border-width-medium: ${border.borderWidthMedium};`
        );
      }
      if (border.borderWidthThick) {
        rootStyles.push(
          `--${cssVariablePrefix}border-width-thick: ${border.borderWidthThick};`
        );
      }
      if (border.borderWidthXThick) {
        rootStyles.push(
          `--${cssVariablePrefix}border-width-xthick: ${border.borderWidthXThick};`
        );
      }

      if (border.borderRadiusSmall) {
        rootStyles.push(
          `--${cssVariablePrefix}border-radius-small: ${border.borderRadiusSmall};`
        );
      }
      if (border.borderRadiusMedium) {
        rootStyles.push(
          `--${cssVariablePrefix}border-radius-medium: ${border.borderRadiusMedium};`
        );
      }
      if (border.borderRadiusLarge) {
        rootStyles.push(
          `--${cssVariablePrefix}border-radius-large: ${border.borderRadiusLarge};`
        );
      }
    }

    if (cssVariableSetting.color) {
      const color = cssVariableSetting.color;
      const setColorDetailVariable = (
        colorName: string,
        lightness: string,
        oklch?: Oklch
      ) => {
        if (oklch) {
          const oklchString = `${oklch.lightness}% ${oklch.chroma} ${oklch.hue}`;
          rootStyles.push(
            `--${cssVariablePrefix}color-${colorName}-${lightness}-oklch: ${oklchString};`
          );
          rootStyles.push(
            `--${cssVariablePrefix}color-${colorName}-${lightness}: oklch(${oklchString});`
          );
        }
      };

      if (color.gray) {
        const gradation = color.gray;
        const colorName = "gray";
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

      if (color.red) {
        const gradation = color.red;
        const colorName = "red";
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

      if (color.orange) {
        const gradation = color.orange;
        const colorName = "orange";
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

      if (color.yellow) {
        const gradation = color.yellow;
        const colorName = "yellow";
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

      if (color.green) {
        const gradation = color.green;
        const colorName = "green";
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

      if (color.cyan) {
        const gradation = color.cyan;
        const colorName = "cyan";
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

      if (color.blue) {
        const gradation = color.blue;
        const colorName = "blue";
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

      if (color.violet) {
        const gradation = color.violet;
        const colorName = "violet";
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

      if (color.magenta) {
        const gradation = color.magenta;
        const colorName = "magenta";
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

    if (cssVariableSetting.miscellaneous) {
      const miscellaneous = cssVariableSetting.miscellaneous;
      if (miscellaneous.zIndexTabula) {
        rootStyles.push(
          `--${cssVariablePrefix}z-index-tabula: ${miscellaneous.zIndexTabula};`
        );
      }
      if (miscellaneous.zIndexModal) {
        rootStyles.push(
          `--${cssVariablePrefix}z-index-modal: ${miscellaneous.zIndexModal};`
        );
      }
      if (miscellaneous.zIndexModalContent) {
        rootStyles.push(
          `--${cssVariablePrefix}z-index-tabula-content: ${miscellaneous.zIndexModalContent};`
        );
      }
      if (miscellaneous.zIndexHeaderIsSticky) {
        rootStyles.push(
          `--${cssVariablePrefix}z-index-header-is-sticky: ${miscellaneous.zIndexHeaderIsSticky};`
        );
      }
    }

    if (cssVariableSetting.typography) {
      const typography = cssVariableSetting.typography;
      if (typography.fontFamily) {
        if (typography.fontFamily.sansSerif) {
          rootStyles.push(
            `--${cssVariablePrefix}font-family-sans-serif: ${typography.fontFamily.sansSerif};`
          );
        }
        if (typography.fontFamily.serif) {
          rootStyles.push(
            `--${cssVariablePrefix}font-family-serif: ${typography.fontFamily.serif};`
          );
        }
        if (typography.fontFamily.monospace) {
          rootStyles.push(
            `--${cssVariablePrefix}font-family-monospace: ${typography.fontFamily.monospace};`
          );
        }
        if (typography.fontFamily.main) {
          rootStyles.push(
            `--${cssVariablePrefix}font-family-main: ${typography.fontFamily.main};`
          );
        }
        if (typography.fontFamily.heading) {
          rootStyles.push(
            `--${cssVariablePrefix}font-family-heading: ${typography.fontFamily.heading};`
          );
        }
        if (typography.fontFamily.code) {
          rootStyles.push(
            `--${cssVariablePrefix}font-family-code: ${typography.fontFamily.code};`
          );
        }
      }
      if (typography.fontSize) {
        if (typography.fontSize.xsmall) {
          rootStyles.push(
            `--${cssVariablePrefix}font-size-xsmall: ${typography.fontSize.xsmall};`
          );
        }
        if (typography.fontSize.small) {
          rootStyles.push(
            `--${cssVariablePrefix}font-size-small: ${typography.fontSize.small};`
          );
        }
        if (typography.fontSize.normal) {
          rootStyles.push(
            `--${cssVariablePrefix}font-size-normal: ${typography.fontSize.normal};`
          );
        }
        if (typography.fontSize.medium) {
          rootStyles.push(
            `--${cssVariablePrefix}font-size-medium: ${typography.fontSize.medium};`
          );
        }
        if (typography.fontSize.large) {
          rootStyles.push(
            `--${cssVariablePrefix}font-size-large: ${typography.fontSize.large};`
          );
        }
        if (typography.fontSize.xlarge) {
          rootStyles.push(
            `--${cssVariablePrefix}font-size-xlarge: ${typography.fontSize.xlarge};`
          );
        }
        if (typography.fontSize.xxlarge) {
          rootStyles.push(
            `--${cssVariablePrefix}font-size-xxlarge: ${typography.fontSize.xxlarge};`
          );
        }
        if (typography.fontSize.xxxlarge) {
          rootStyles.push(
            `--${cssVariablePrefix}font-size-xxxlarge: ${typography.fontSize.xxxlarge};`
          );
        }
        if (typography.fontSize.xxxxlarge) {
          rootStyles.push(
            `--${cssVariablePrefix}font-size-xxxxlarge: ${typography.fontSize.xxxxlarge};`
          );
        }
        if (typography.fontSize.xxxxxlarge) {
          rootStyles.push(
            `--${cssVariablePrefix}font-size-xxxxxlarge: ${typography.fontSize.xxxxxlarge};`
          );
        }
      }
      if (typography.fontWeight) {
        if (typography.fontWeight.light) {
          rootStyles.push(
            `--${cssVariablePrefix}font-weight-light: ${typography.fontWeight.light};`
          );
        }
        if (typography.fontWeight.normal) {
          rootStyles.push(
            `--${cssVariablePrefix}font-weight-normal: ${typography.fontWeight.normal};`
          );
        }
        if (typography.fontWeight.medium) {
          rootStyles.push(
            `--${cssVariablePrefix}font-weight-medium: ${typography.fontWeight.medium};`
          );
        }
        if (typography.fontWeight.semibold) {
          rootStyles.push(
            `--${cssVariablePrefix}font-weight-semibold: ${typography.fontWeight.semibold};`
          );
        }
        if (typography.fontWeight.bold) {
          rootStyles.push(
            `--${cssVariablePrefix}font-weight-bold: ${typography.fontWeight.bold};`
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
            `--${cssVariablePrefix}breadcrumb-divider: ${breadcrumbs.breadcrumbDivider};`
          );
        }
      }
      if (components.button) {
        const button = components.button;
        if (button.paddingX) {
          rootStyles.push(
            `--${cssVariablePrefix}button-padding-x: ${button.paddingX};`
          );
        }
        if (button.paddingY) {
          rootStyles.push(
            `--${cssVariablePrefix}button-padding-y: ${button.paddingY};`
          );
        }
      }
      if (components.dialogue) {
        const dialogue = components.dialogue;
        if (dialogue.avatarSizeDefault) {
          rootStyles.push(
            `--${cssVariablePrefix}dialogue-avatar-size-default: ${dialogue.avatarSizeDefault};`
          );
        }
        if (dialogue.avatarSizeSmall) {
          rootStyles.push(
            `--${cssVariablePrefix}dialogue-avatar-size-small: ${dialogue.avatarSizeSmall};`
          );
        }
        if (dialogue.avatarSizeLarge) {
          rootStyles.push(
            `--${cssVariablePrefix}dialogue-avatar-size-large: ${dialogue.avatarSizeLarge};`
          );
        }
        if (dialogue.avatarTopOffset) {
          rootStyles.push(
            `--${cssVariablePrefix}dialogue-avatar-top-offset: ${dialogue.avatarTopOffset};`
          );
        }
        if (dialogue.nameFontSize) {
          if (typeof dialogue.nameFontSize.includes("rem")) {
            rootStyles.push(
              `--${cssVariablePrefix}dialogue-name-font-size: ${dialogue.nameFontSize};`
            );
          } else {
            rootStyles.push(
              `--${cssVariablePrefix}dialogue-name-font-size: var(--${cssVariablePrefix}font-size-${dialogue.nameFontSize});`
            );
          }
        }
        if (dialogue.namePaddingX) {
          rootStyles.push(
            `--${cssVariablePrefix}dialogue-name-padding-x: ${dialogue.namePaddingX};`
          );
        }
        if (dialogue.namePaddingY) {
          rootStyles.push(
            `--${cssVariablePrefix}dialogue-name-padding-y: ${dialogue.namePaddingY};`
          );
        }
        if (dialogue.messageArrowHeight) {
          rootStyles.push(
            `--${cssVariablePrefix}dialogue-messege-arrow-height: ${dialogue.messageArrowHeight};`
          );
        }
        if (dialogue.messageArrowWidth) {
          rootStyles.push(
            `--${cssVariablePrefix}dialogue-messege-arrow-width: ${dialogue.messageArrowWidth};`
          );
        }
        if (dialogue.messageInnerPaddingX) {
          rootStyles.push(
            `--${cssVariablePrefix}dialogue-message-inner-padding-x: ${dialogue.messageInnerPaddingX};`
          );
        }
        if (dialogue.messageInnerPaddingY) {
          rootStyles.push(
            `--${cssVariablePrefix}dialogue-message-inner-padding-y: ${dialogue.messageInnerPaddingY};`
          );
        }
      }
    }
  }

  return rootStyles;
}

function getLightSchemeStyles(
  cssVariableSetting?: MinolithCssVariable
): string[] {
  const lightSchemeStyles: string[] = [];

  if (cssVariableSetting) {
    if (cssVariableSetting.color) {
      const color = cssVariableSetting.color;
      if (color.light) {
        if (color.light.default) {
          const styles = getColorVariables("default", color.light.default);
          if (styles.length > 0) {
            lightSchemeStyles.push(...styles);
          }
        }
        if (color.light.gray) {
          const styles = getColorVariables("gray", color.light.gray);
          if (styles.length > 0) {
            lightSchemeStyles.push(...styles);
          }
        }
        if (color.light.red) {
          const styles = getColorVariables("red", color.light.red);
          if (styles.length > 0) {
            lightSchemeStyles.push(...styles);
          }
        }
        if (color.light.orange) {
          const styles = getColorVariables("orange", color.light.orange);
          if (styles.length > 0) {
            lightSchemeStyles.push(...styles);
          }
        }
        if (color.light.yellow) {
          const styles = getColorVariables("yellow", color.light.yellow);
          if (styles.length > 0) {
            lightSchemeStyles.push(...styles);
          }
        }
        if (color.light.green) {
          const styles = getColorVariables("green", color.light.green);
          if (styles.length > 0) {
            lightSchemeStyles.push(...styles);
          }
        }
        if (color.light.cyan) {
          const styles = getColorVariables("cyan", color.light.cyan);
          if (styles.length > 0) {
            lightSchemeStyles.push(...styles);
          }
        }
        if (color.light.blue) {
          const styles = getColorVariables("blue", color.light.blue);
          if (styles.length > 0) {
            lightSchemeStyles.push(...styles);
          }
        }
        if (color.light.violet) {
          const styles = getColorVariables("violet", color.light.violet);
          if (styles.length > 0) {
            lightSchemeStyles.push(...styles);
          }
        }
        if (color.light.components) {
          const components = color.light.components;
          const styles = getSchemeColorComponentsStyles(components);
          if (styles.length > 0) {
            lightSchemeStyles.push(...styles);
          }
        }
      }
    }
  }

  return lightSchemeStyles;
}

function getDarkSchemeStyles(
  cssVariableSetting?: MinolithCssVariable
): string[] {
  const darkSchemeStyles: string[] = [];

  if (cssVariableSetting) {
    if (cssVariableSetting.color) {
      const color = cssVariableSetting.color;
      if (color.dark) {
        if (color.dark.default) {
          const styles = getColorVariables("default", color.dark.default);
          if (styles.length > 0) {
            darkSchemeStyles.push(...styles);
          }
        }
        if (color.dark.gray) {
          const styles = getColorVariables("gray", color.dark.gray);
          if (styles.length > 0) {
            darkSchemeStyles.push(...styles);
          }
        }
        if (color.dark.red) {
          const styles = getColorVariables("red", color.dark.red);
          if (styles.length > 0) {
            darkSchemeStyles.push(...styles);
          }
        }
        if (color.dark.orange) {
          const styles = getColorVariables("orange", color.dark.orange);
          if (styles.length > 0) {
            darkSchemeStyles.push(...styles);
          }
        }
        if (color.dark.yellow) {
          const styles = getColorVariables("yellow", color.dark.yellow);
          if (styles.length > 0) {
            darkSchemeStyles.push(...styles);
          }
        }
        if (color.dark.green) {
          const styles = getColorVariables("green", color.dark.green);
          if (styles.length > 0) {
            darkSchemeStyles.push(...styles);
          }
        }
        if (color.dark.cyan) {
          const styles = getColorVariables("cyan", color.dark.cyan);
          if (styles.length > 0) {
            darkSchemeStyles.push(...styles);
          }
        }
        if (color.dark.blue) {
          const styles = getColorVariables("blue", color.dark.blue);
          if (styles.length > 0) {
            darkSchemeStyles.push(...styles);
          }
        }
        if (color.dark.violet) {
          const styles = getColorVariables("violet", color.dark.violet);
          if (styles.length > 0) {
            darkSchemeStyles.push(...styles);
          }
        }
        if (color.dark.magenta) {
          const styles = getColorVariables("magenta", color.dark.magenta);
          if (styles.length > 0) {
            darkSchemeStyles.push(...styles);
          }
        }
        if (color.dark.components) {
          const components = color.dark.components;
          const styles = getSchemeColorComponentsStyles(components);
          if (styles.length > 0) {
            darkSchemeStyles.push(...styles);
          }
        }
      }
    }
  }

  return darkSchemeStyles;
}

const minolithStyleUtility = {
  getMinolithCssVariableStyles,
  getRootStyles,
  getLightSchemeStyles,
  getDarkSchemeStyles,
};

export default minolithStyleUtility;
