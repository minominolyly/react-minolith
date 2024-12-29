import BaseComponentProps from "../common/models/BaseComponentProps";
import { BorderDetailProps, ColorAttributes } from "../common/literalTypes";

function getUtilityClassNames(props: BaseComponentProps): string[] {
  const assignedClassNames: string[] = [];
  const assignStateColor = (
    name: string,
    stateStr: string,
    state?: ColorAttributes,
    colorScheme?: string
  ) => {
    state &&
      assignedClassNames.push(
        `${name}${colorScheme ? `-${colorScheme}` : ""}${
          stateStr === "default" ? "" : `-${stateStr}`
        }-${state.name}-${state.lightness === 5 ? `05` : state.lightness}`
      );
  };

  if (props.fore) {
    if (props.fore.color) {
      assignStateColor("forecolor", "default", props.fore.color.default);
      assignStateColor("forecolor", "hover", props.fore.color.hover);
      assignStateColor("forecolor", "focus", props.fore.color.focus);
      assignStateColor("forecolor", "active", props.fore.color.active);
      assignStateColor("forecolor", "disabled", props.fore.color.disabled);

      if (props.fore.color.light) {
        const foreColorLight = props.fore.color.light;

        assignStateColor(
          "forecolor",
          "default",
          foreColorLight.default,
          "light"
        );
        assignStateColor("forecolor", "hover", foreColorLight.hover, "light");
        assignStateColor("forecolor", "focus", foreColorLight.focus, "light");
        assignStateColor("forecolor", "active", foreColorLight.active, "light");
        assignStateColor(
          "forecolor",
          "disabled",
          foreColorLight.disabled,
          "light"
        );
      }
      if (props.fore.color.dark) {
        const foreColorDark = props.fore.color.dark;

        assignStateColor("forecolor", "default", foreColorDark.default, "dark");
        assignStateColor("forecolor", "hover", foreColorDark.hover, "dark");
        assignStateColor("forecolor", "focus", foreColorDark.focus, "dark");
        assignStateColor("forecolor", "active", foreColorDark.active, "dark");
        assignStateColor(
          "forecolor",
          "disabled",
          foreColorDark.disabled,
          "dark"
        );
      }
    }

    props.fore.fontSize &&
      assignedClassNames.push(`font-size-${props.fore.fontSize}`);
    props.fore.fontWeight &&
      assignedClassNames.push(`font-weight-${props.fore.fontWeight}`);
    props.fore.isItalic && assignedClassNames.push(`italic`);
  }

  if (props.back) {
    if (props.back.color) {
      assignStateColor("backcolor", "default", props.back.color.default);
      assignStateColor("backcolor", "hover", props.back.color.hover);
      assignStateColor("backcolor", "focus", props.back.color.focus);
      assignStateColor("backcolor", "active", props.back.color.active);
      assignStateColor("backcolor", "disabled", props.back.color.disabled);
      if (props.back.color.light) {
        const backColorLight = props.back.color.light;

        assignStateColor(
          "backcolor",
          "default",
          backColorLight.default,
          "light"
        );
        assignStateColor("backcolor", "hover", backColorLight.hover, "light");
        assignStateColor("backcolor", "focus", backColorLight.focus, "light");
        assignStateColor("backcolor", "active", backColorLight.active, "light");
        assignStateColor(
          "backcolor",
          "disabled",
          backColorLight.disabled,
          "light"
        );
      }
      if (props.back.color.dark) {
        const backColorDark = props.back.color.dark;

        assignStateColor("backcolor", "default", backColorDark.default, "dark");
        assignStateColor("backcolor", "hover", backColorDark.hover, "dark");
        assignStateColor("backcolor", "focus", backColorDark.focus, "dark");
        assignStateColor("backcolor", "active", backColorDark.active, "dark");
        assignStateColor(
          "backcolor",
          "disabled",
          backColorDark.disabled,
          "dark"
        );
      }
    }
  }

  if (props.highlighter) {
    if (props.highlighter.color) {
      assignStateColor(
        "highlighter",
        "default",
        props.highlighter.color.default
      );
      assignStateColor("highlighter", "hover", props.highlighter.color.hover);
      assignStateColor("highlighter", "focus", props.highlighter.color.focus);
      assignStateColor("highlighter", "active", props.highlighter.color.active);
      assignStateColor(
        "highlighter",
        "disabled",
        props.highlighter.color.disabled
      );
      if (props.highlighter.color.light) {
        const highlighterColorLight = props.highlighter.color.light;

        assignStateColor(
          "highlighter",
          "default",
          highlighterColorLight.default,
          "light"
        );
        assignStateColor(
          "highlighter",
          "hover",
          highlighterColorLight.hover,
          "light"
        );
        assignStateColor(
          "highlighter",
          "focus",
          highlighterColorLight.focus,
          "light"
        );
        assignStateColor(
          "highlighter",
          "active",
          highlighterColorLight.active,
          "light"
        );
        assignStateColor(
          "highlighter",
          "disabled",
          highlighterColorLight.disabled,
          "light"
        );
      }
      if (props.highlighter.color.dark) {
        const highlighterColorDark = props.highlighter.color.dark;

        assignStateColor(
          "highlighter",
          "default",
          highlighterColorDark.default,
          "dark"
        );
        assignStateColor(
          "highlighter",
          "hover",
          highlighterColorDark.hover,
          "dark"
        );
        assignStateColor(
          "highlighter",
          "focus",
          highlighterColorDark.focus,
          "dark"
        );
        assignStateColor(
          "highlighter",
          "active",
          highlighterColorDark.active,
          "dark"
        );
        assignStateColor(
          "highlighter",
          "disabled",
          highlighterColorDark.disabled,
          "dark"
        );
      }
    }
  }

  if (props.border) {
    assignedClassNames.push(`border-${props.border.style}`);

    if (props.border.color) {
      assignStateColor("bordercolor", "default", props.border.color.default);
      assignStateColor("bordercolor", "hover", props.border.color.hover);
      assignStateColor("bordercolor", "focus", props.border.color.focus);
      assignStateColor("bordercolor", "active", props.border.color.active);
      assignStateColor("bordercolor", "disabled", props.border.color.disabled);
      if (props.border.color.light) {
        const borderColorLight = props.border.color.light;

        assignStateColor(
          "bordercolor",
          "default",
          borderColorLight.default,
          "light"
        );
        assignStateColor(
          "bordercolor",
          "hover",
          borderColorLight.hover,
          "light"
        );
        assignStateColor(
          "bordercolor",
          "focus",
          borderColorLight.focus,
          "light"
        );
        assignStateColor(
          "bordercolor",
          "active",
          borderColorLight.active,
          "light"
        );
        assignStateColor(
          "bordercolor",
          "disabled",
          borderColorLight.disabled,
          "light"
        );
      }
      if (props.border.color.dark) {
        const borderColorDark = props.border.color.dark;

        assignStateColor(
          "bordercolor",
          "default",
          borderColorDark.default,
          "dark"
        );
        assignStateColor("bordercolor", "hover", borderColorDark.hover, "dark");
        assignStateColor("bordercolor", "focus", borderColorDark.focus, "dark");
        assignStateColor(
          "bordercolor",
          "active",
          borderColorDark.active,
          "dark"
        );
        assignStateColor(
          "bordercolor",
          "disabled",
          borderColorDark.disabled,
          "dark"
        );
      }
    }

    props.border.width &&
      assignedClassNames.push(`border-width-${props.border.width}`);

    props.border.collapse &&
      assignedClassNames.push(`border-${props.border.collapse}`);

    props.border.radius &&
      assignedClassNames.push(`border-radius-${props.border.radius}`);

    const assignBorderDetail = (
      borderDetailProps: BorderDetailProps,
      position: "top" | "bottom" | "left" | "right"
    ) => {
      if (borderDetailProps.color) {
        assignStateColor(
          `bordercolor-${position}`,
          "default",
          borderDetailProps.color.default
        );
        assignStateColor(
          `bordercolor-${position}`,
          "hover",
          borderDetailProps.color.hover
        );
        assignStateColor(
          `bordercolor-${position}`,
          "focus",
          borderDetailProps.color.focus
        );
        assignStateColor(
          `bordercolor-${position}`,
          "active",
          borderDetailProps.color.active
        );
        assignStateColor(
          `bordercolor-${position}`,
          "disabled",
          borderDetailProps.color.disabled
        );
      }
      borderDetailProps.style &&
        assignedClassNames.push(
          `border-${position}-style-${borderDetailProps.style}`
        );

      borderDetailProps.width &&
        assignedClassNames.push(
          `border-${position}-width-${borderDetailProps.width}`
        );
    };

    if (props.border.top) {
      assignBorderDetail(props.border.top, "top");
    }
    if (props.border.right) {
      assignBorderDetail(props.border.right, "right");
    }
    if (props.border.bottom) {
      assignBorderDetail(props.border.bottom, "bottom");
    }
    if (props.border.left) {
      assignBorderDetail(props.border.left, "left");
    }
  }

  if (props.positioning) {
    if (props.positioning.display) {
      assignedClassNames.push(`display-${props.positioning.display}`);
    }
    if (props.positioning.position) {
      assignedClassNames.push(`position-${props.positioning.position}`);
    }
    if (props.positioning.top) {
      if (typeof props.positioning.top === "number") {
        assignedClassNames.push(`top-${props.positioning.top}rem`);
      } else if (typeof props.positioning.top === "string") {
        if (props.positioning.top.includes("%")) {
          const val = props.positioning.top.replace("%", "");
          assignedClassNames.push(`top-${val}percent`);
        } else {
          assignedClassNames.push(`top-${props.positioning.top}`);
        }
      }
    }
    if (props.positioning.bottom) {
      if (typeof props.positioning.bottom === "number") {
        assignedClassNames.push(`bottom-${props.positioning.bottom}rem`);
      } else if (typeof props.positioning.bottom === "string") {
        if (props.positioning.bottom.includes("%")) {
          const val = props.positioning.bottom.replace("%", "");
          assignedClassNames.push(`bottom-${val}percent`);
        } else {
          assignedClassNames.push(`bottom-${props.positioning.bottom}`);
        }
      }
    }
    if (props.positioning.left) {
      if (typeof props.positioning.left === "number") {
        assignedClassNames.push(`left-${props.positioning.left}rem`);
      } else if (typeof props.positioning.left === "string") {
        if (props.positioning.left.includes("%")) {
          const val = props.positioning.left.replace("%", "");
          assignedClassNames.push(`left-${val}percent`);
        } else {
          assignedClassNames.push(`left-${props.positioning.left}`);
        }
      }
    }
    if (props.positioning.right) {
      if (typeof props.positioning.right === "number") {
        assignedClassNames.push(`right-${props.positioning.right}rem`);
      } else if (typeof props.positioning.right === "string") {
        if (props.positioning.right.includes("%")) {
          const val = props.positioning.right.replace("%", "");
          assignedClassNames.push(`right-${val}percent`);
        } else {
          assignedClassNames.push(`right-${props.positioning.right}`);
        }
      }
    }
    if (props.positioning.translateMiddle) {
      assignedClassNames.push(`translate-middle`);
    }
    if (props.positioning.translateMiddleX) {
      assignedClassNames.push(`translate-middle-x`);
    }
    if (props.positioning.translateMiddleY) {
      assignedClassNames.push(`translate-middle-y`);
    }
  }

  if (props.sizing) {
    if (props.sizing.width) {
      if (typeof props.sizing.width === "number") {
        assignedClassNames.push(`width-${props.sizing.width}rem`);
      } else if (typeof props.sizing.width === "string") {
        switch (props.sizing.width) {
          case "0%":
            assignedClassNames.push(`width-0percent`);
            break;
          case "25%":
            assignedClassNames.push(`width-25percent`);
            break;
          case "50%":
            assignedClassNames.push(`width-50percent`);
            break;
          case "75%":
            assignedClassNames.push(`width-75percent`);
            break;
          case "100%":
            assignedClassNames.push(`width-100percent`);
            break;
          case "auto":
            assignedClassNames.push(`width-auto`);
            break;
        }
      }
    }

    if (props.sizing.height) {
      if (typeof props.sizing.height === "number") {
        assignedClassNames.push(`height-${props.sizing.height}rem`);
      } else if (typeof props.sizing.height === "string") {
        switch (props.sizing.height) {
          case "0%":
            assignedClassNames.push(`height-0percent`);
            break;
          case "25%":
            assignedClassNames.push(`height-25percent`);
            break;
          case "50%":
            assignedClassNames.push(`height-50percent`);
            break;
          case "75%":
            assignedClassNames.push(`height-75percent`);
            break;
          case "100%":
            assignedClassNames.push(`height-100percent`);
            break;
          case "auto":
            assignedClassNames.push(`height-auto`);
            break;
        }
      }
    }

    if (props.sizing.aspectRatio) {
      if (props.sizing.aspectRatio.includes(":")) {
        assignedClassNames.push(
          `aspect-ratio-${props.sizing.aspectRatio.replace(":", "-")}`
        );
      } else {
        assignedClassNames.push(`aspect-ratio-${props.sizing.aspectRatio}`);
      }
    }
  }

  if (props.spacing) {
    if (props.spacing.margin) {
      if (typeof props.spacing.margin === "number") {
        assignedClassNames.push(`m-${props.spacing.margin}rem`);
      } else if (typeof props.spacing.margin === "string") {
        assignedClassNames.push(`m-auto`);
      } else {
        if (props.spacing.margin.x) {
          if (props.spacing.margin.x === "auto") {
            assignedClassNames.push(`mx-auto`);
          } else {
            assignedClassNames.push(`mx-${props.spacing.margin.x}rem`);
          }
        }

        if (props.spacing.margin.y) {
          if (props.spacing.margin.y === "auto") {
            assignedClassNames.push(`my-auto`);
          } else {
            assignedClassNames.push(`my-${props.spacing.margin.y}rem`);
          }
        }

        if (props.spacing.margin.top) {
          if (props.spacing.margin.top === "auto") {
            assignedClassNames.push(`mt-auto`);
          } else {
            assignedClassNames.push(`mt-${props.spacing.margin.top}rem`);
          }
        }

        if (props.spacing.margin.right) {
          if (props.spacing.margin.right === "auto") {
            assignedClassNames.push(`mr-auto`);
          } else {
            assignedClassNames.push(`mr-${props.spacing.margin.right}rem`);
          }
        }

        if (props.spacing.margin.bottom) {
          if (props.spacing.margin.bottom === "auto") {
            assignedClassNames.push(`mb-auto`);
          } else {
            assignedClassNames.push(`mb-${props.spacing.margin.bottom}rem`);
          }
        }

        if (props.spacing.margin.left) {
          if (props.spacing.margin.left === "auto") {
            assignedClassNames.push(`ml-auto`);
          } else {
            assignedClassNames.push(`ml-${props.spacing.margin.left}rem`);
          }
        }
      }
    }

    if (props.spacing.padding) {
      if (typeof props.spacing.padding === "number") {
        assignedClassNames.push(`p-${props.spacing.padding}rem`);
      } else if (typeof props.spacing.padding === "string") {
        assignedClassNames.push(`p-auto`);
      } else {
        if (props.spacing.padding.x) {
          if (props.spacing.padding.x === "auto") {
            assignedClassNames.push(`px-auto`);
          } else {
            assignedClassNames.push(`px-${props.spacing.padding.x}rem`);
          }
        }

        if (props.spacing.padding.y) {
          if (props.spacing.padding.y === "auto") {
            assignedClassNames.push(`py-auto`);
          } else {
            assignedClassNames.push(`py-${props.spacing.padding.y}rem`);
          }
        }

        if (props.spacing.padding.top) {
          if (props.spacing.padding.top === "auto") {
            assignedClassNames.push(`pt-auto`);
          } else {
            assignedClassNames.push(`pt-${props.spacing.padding.top}rem`);
          }
        }

        if (props.spacing.padding.right) {
          if (props.spacing.padding.right === "auto") {
            assignedClassNames.push(`pr-auto`);
          } else {
            assignedClassNames.push(`pr-${props.spacing.padding.right}rem`);
          }
        }

        if (props.spacing.padding.bottom) {
          if (props.spacing.padding.bottom === "auto") {
            assignedClassNames.push(`pb-auto`);
          } else {
            assignedClassNames.push(`pb-${props.spacing.padding.bottom}rem`);
          }
        }

        if (props.spacing.padding.left) {
          if (props.spacing.padding.left === "auto") {
            assignedClassNames.push(`pl-auto`);
          } else {
            assignedClassNames.push(`pl-${props.spacing.padding.left}rem`);
          }
        }
      }
    }
  }

  return assignedClassNames;
}

const classNameUtility = {
  getUtilityClassNames,
};

export default classNameUtility;
