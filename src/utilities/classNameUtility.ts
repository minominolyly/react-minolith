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
    // state &&
    //   assignedClassNames.push(
    //
    //       `${name}${colorScheme ? `-${colorScheme}` : ""}${
    //         stateStr === "default" ? "" : `-${stateStr}`
    //       }-${state.name}-${state.lightness}`
    //     ]
    //   );

    state &&
      assignedClassNames.push(
        `${name}${colorScheme ? `-${colorScheme}` : ""}${
          stateStr === "default" ? "" : `-${stateStr}`
        }-${state.name}-${state.lightness}`
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

    // props.fore.fontSize &&
    //   assignedClassNames.push(`is-font-size-${props.fore.fontSize}`);
    // props.fore.fontWeight &&
    //   assignedClassNames.push(`is-font-weight-${props.fore.fontWeight}`);
    // props.fore.isItalic && assignedClassNames.push(`is-italic`]);
    props.fore.fontSize &&
      assignedClassNames.push(`is-font-size-${props.fore.fontSize}`);
    props.fore.fontWeight &&
      assignedClassNames.push(`is-font-weight-${props.fore.fontWeight}`);
    props.fore.isItalic && assignedClassNames.push(`is-italic`);
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
    assignedClassNames.push(`has-border-${props.border.style}`);

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

    // props.border.width &&
    //   assignedClassNames.push(`is-border-width-${props.border.width}`);

    // props.border.collapse &&
    //   assignedClassNames.push(`is-border-${props.border.collapse}`);

    // props.border.radius &&
    //   assignedClassNames.push(`is-border-radius-${props.border.radius}`);

    props.border.width &&
      assignedClassNames.push(`is-border-width-${props.border.width}`);

    props.border.collapse &&
      assignedClassNames.push(`is-border-${props.border.collapse}`);

    props.border.radius &&
      assignedClassNames.push(`is-border-radius-${props.border.radius}`);

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
          `is-border-${position}-style-${borderDetailProps.style}`
        );

      borderDetailProps.width &&
        assignedClassNames.push(
          `is-border-${position}-width-${borderDetailProps.width}`
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

  if (props.spacing && props.spacing.margin && props.spacing.margin.top) {
    if (props.spacing.margin.top === "auto") {
      assignedClassNames.push(`mt-auto`);
    } else {
      assignedClassNames.push(`mt-${props.spacing.margin.top}rem`);
    }
  }

  if (props.spacing && props.spacing.margin && props.spacing.margin.right) {
    if (props.spacing.margin.right === "auto") {
      assignedClassNames.push(`mr-auto`);
    } else {
      assignedClassNames.push(`mr-${props.spacing.margin.right}rem`);
    }
  }

  if (props.spacing && props.spacing.margin && props.spacing.margin.bottom) {
    if (props.spacing.margin.bottom === "auto") {
      assignedClassNames.push(`mb-auto`);
    } else {
      assignedClassNames.push(`mb-${props.spacing.margin.bottom}rem`);
    }
  }

  if (props.spacing && props.spacing.margin && props.spacing.margin.left) {
    if (props.spacing.margin.left === "auto") {
      assignedClassNames.push(`ml-auto`);
    } else {
      assignedClassNames.push(`ml-${props.spacing.margin.left}rem`);
    }
  }

  if (props.spacing && props.spacing.padding && props.spacing.padding.top) {
    if (props.spacing.padding.top === "auto") {
      assignedClassNames.push(`pt-auto`);
    } else {
      assignedClassNames.push(`pt-${props.spacing.padding.top}rem`);
    }
  }

  if (props.spacing && props.spacing.padding && props.spacing.padding.right) {
    if (props.spacing.padding.right === "auto") {
      assignedClassNames.push(`pr-auto`);
    } else {
      assignedClassNames.push(`pr-${props.spacing.padding.right}rem`);
    }
  }

  if (props.spacing && props.spacing.padding && props.spacing.padding.bottom) {
    if (props.spacing.padding.bottom === "auto") {
      assignedClassNames.push(`pb-auto`);
    } else {
      assignedClassNames.push(`pb-${props.spacing.padding.bottom}rem`);
    }
  }

  if (props.spacing && props.spacing.padding && props.spacing.padding.left) {
    if (props.spacing.padding.left === "auto") {
      assignedClassNames.push(`pl-auto`);
    } else {
      assignedClassNames.push(`pl-${props.spacing.padding.left}rem`);
    }
  }
  return assignedClassNames;
}

const classNameUtility = {
  getUtilityClassNames,
};

export default classNameUtility;
