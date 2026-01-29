/* eslint-disable @typescript-eslint/restrict-template-expressions */
import BaseComponentProps from "../../models/BaseComponentProps";
import { ColorAttributes, ColorName, Gutter } from "../../types";
import { Property } from "csstype";

function setFlexDirectionClassNames(
  classNames: CSSModuleClasses,
  flexDirection?: Property.FlexDirection,
  sizeString?: string,
): string[] {
  if (!flexDirection) {
    return [];
  }

  const flexDirectionClassNames: string[] = [];
  if (
    flexDirection === "row" ||
    flexDirection === "row-reverse" ||
    flexDirection === "column" ||
    flexDirection === "column-reverse"
  ) {
    if (sizeString) {
      flexDirectionClassNames.push(
        classNames[`is-${sizeString}-direction-${flexDirection}`],
      );
    } else {
      flexDirectionClassNames.push(classNames[`is-direction-${flexDirection}`]);
    }
  }

  return flexDirectionClassNames;
}

function getGutterClassNames(
  classNames: CSSModuleClasses,
  gutter?: Gutter,
  sizeString?: string,
): string[] {
  if (!gutter) {
    return [];
  }

  const gutterClassNames: string[] = [];

  if (typeof gutter === "string") {
    if (sizeString) {
      gutterClassNames.push(classNames[`has-gutter-${sizeString}-${gutter}`]);
    } else {
      gutterClassNames.push(classNames[`has-gutter-${gutter}`]);
    }
    return gutterClassNames;
  }

  if (typeof gutter === "number") {
    if (sizeString) {
      gutterClassNames.push(
        classNames[`has-gutter-${sizeString}-${gutter}rem`],
      );
    } else {
      gutterClassNames.push(classNames[`has-gutter-${gutter}rem`]);
    }
    return gutterClassNames;
  }

  if ("x" in gutter) {
    if (typeof gutter.x === "string") {
      if (sizeString) {
        gutterClassNames.push(
          classNames[`has-gutter-x-${sizeString}-${gutter.x}`],
        );
      } else {
        gutterClassNames.push(classNames[`has-gutter-x-${gutter.x}`]);
      }
    } else if (typeof gutter.x === "number") {
      if (sizeString) {
        gutterClassNames.push(
          classNames[`has-gutter-x-${sizeString}-${gutter.x}rem`],
        );
      } else {
        gutterClassNames.push(classNames[`has-gutter-x-${gutter.x}rem`]);
      }
    }
  }

  if ("y" in gutter) {
    if (typeof gutter.y === "string") {
      if (sizeString) {
        gutterClassNames.push(
          classNames[`has-gutter-y-${sizeString}-${gutter.y}`],
        );
      } else {
        gutterClassNames.push(classNames[`has-gutter-y-${gutter.y}`]);
      }
    } else if (typeof gutter.y === "number") {
      if (sizeString) {
        gutterClassNames.push(
          classNames[`has-gutter-y-${sizeString}-${gutter.y}rem`],
        );
      } else {
        gutterClassNames.push(classNames[`has-gutter-y-${gutter.y}rem`]);
      }
    }
  }

  return gutterClassNames;
}

function getUtilityClassNames(props: BaseComponentProps): string[] {
  const assignedClassNames: string[] = [];

  const assignStateColor = <ColorNameType = ColorName>(
    name: string,
    stateStr: string,
    state?: ColorAttributes<ColorNameType> | "transparent",
    colorScheme?: string,
  ) => {
    if (state && typeof state === "object" && state.name === "rainbow") {
      assignedClassNames.push(
        `${name}${colorScheme ? `-${colorScheme}` : ""}${
          stateStr === "default" ? "" : `-${stateStr}`
        }-${state.name}-${state.lightness === 5 ? `05` : state.lightness}`,
      );
    }
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
          "light",
        );
        assignStateColor("forecolor", "hover", foreColorLight.hover, "light");
        assignStateColor("forecolor", "focus", foreColorLight.focus, "light");
        assignStateColor("forecolor", "active", foreColorLight.active, "light");
        assignStateColor(
          "forecolor",
          "disabled",
          foreColorLight.disabled,
          "light",
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
          "dark",
        );
      }
    }
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
          "light",
        );
        assignStateColor("backcolor", "hover", backColorLight.hover, "light");
        assignStateColor("backcolor", "focus", backColorLight.focus, "light");
        assignStateColor("backcolor", "active", backColorLight.active, "light");
        assignStateColor(
          "backcolor",
          "disabled",
          backColorLight.disabled,
          "light",
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
          "dark",
        );
      }
    }
  }

  if (props.positioning) {
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
    if (props.sizing.aspectRatio) {
      if (props.sizing.aspectRatio.includes(":")) {
        assignedClassNames.push(
          `aspect-ratio-${props.sizing.aspectRatio.replace(":", "-")}`,
        );
      } else {
        assignedClassNames.push(`aspect-ratio-${props.sizing.aspectRatio}`);
      }
    }
  }

  return assignedClassNames;
}

const classNameUtility = {
  setFlexDirectionClassNames,
  getGutterClassNames,
  getUtilityClassNames,
};

export default classNameUtility;
