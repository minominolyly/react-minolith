/* eslint-disable @typescript-eslint/restrict-template-expressions */
"use client";

import type { BaseComponentProps } from "../../models";
import { css } from "@emotion/react";
import type { CSSObject, Interpolation, Theme } from "@emotion/react";
import type {
  ColorAttributes,
  ColorName,
  Gutter,
  ResponsiveBreakepointSize,
  ResponsiveFlexDirection,
  ResponsiveGutter,
} from "../../types";
import type { CSSInterpolation } from "@emotion/serialize";
import { Exception } from "sass";

const cssVariablePrefix = "minolith-";

interface ComponentStateColorCssProperty {
  default?: string;
  hover?: string;
  focus?: string;
  active?: string;
  disabled?: string;
}

function getColorProps<BaseComponentColorNameType extends string>(
  props?: {
    default?: ColorAttributes<BaseComponentColorNameType> | "transparent";
    hover?: ColorAttributes<BaseComponentColorNameType> | "transparent";
    focus?: ColorAttributes<BaseComponentColorNameType> | "transparent";
    active?: ColorAttributes<BaseComponentColorNameType> | "transparent";
    disabled?: ColorAttributes<BaseComponentColorNameType> | "transparent";
  },
  mode?: "highlighter",
): ComponentStateColorCssProperty {
  if (!props) {
    return {
      default: undefined,
      hover: undefined,
      focus: undefined,
      active: undefined,
      disabled: undefined,
    };
  }

  if (mode === "highlighter") {
    return {
      default: getHighlighterBackgroundVariable(props.default),
      hover: getHighlighterBackgroundVariable(props.hover),
      focus: getHighlighterBackgroundVariable(props.focus),
      active: getHighlighterBackgroundVariable(props.active),
      disabled: getHighlighterBackgroundVariable(props.disabled),
    };
  }

  return {
    default: getColorVariable(props.default),
    hover: getColorVariable(props.hover),
    focus: getColorVariable(props.focus),
    active: getColorVariable(props.active),
    disabled: getColorVariable(props.disabled),
  };
}

function getSchemeColorProps<
  BaseComponentColorNameType extends string = ColorName,
>(
  props?: {
    light: {
      default?: ColorAttributes<BaseComponentColorNameType> | "transparent";
      hover?: ColorAttributes<BaseComponentColorNameType> | "transparent";
      focus?: ColorAttributes<BaseComponentColorNameType> | "transparent";
      active?: ColorAttributes<BaseComponentColorNameType> | "transparent";
      disabled?: ColorAttributes<BaseComponentColorNameType> | "transparent";
    };
    dark: {
      default?: ColorAttributes<BaseComponentColorNameType> | "transparent";
      hover?: ColorAttributes<BaseComponentColorNameType> | "transparent";
      focus?: ColorAttributes<BaseComponentColorNameType> | "transparent";
      active?: ColorAttributes<BaseComponentColorNameType> | "transparent";
      disabled?: ColorAttributes<BaseComponentColorNameType> | "transparent";
    };
  },
  mode?: "highlighter",
): ComponentStateColorCssProperty {
  if (!props) {
    return {
      default: undefined,
      hover: undefined,
      focus: undefined,
      active: undefined,
      disabled: undefined,
    };
  }

  if (mode === "highlighter") {
    return {
      default:
        props.light.default && props.dark.default
          ? getSchemeColorHighlighterBackgroundVariable(
              props.light.default,
              props.dark.default,
            )
          : undefined,
      hover:
        props.light.hover && props.dark.hover
          ? getSchemeColorHighlighterBackgroundVariable(
              props.light.hover,
              props.dark.hover,
            )
          : undefined,
      focus:
        props.light.focus && props.dark.focus
          ? getSchemeColorHighlighterBackgroundVariable(
              props.light.focus,
              props.dark.focus,
            )
          : undefined,
      active:
        props.light.active && props.dark.active
          ? getSchemeColorHighlighterBackgroundVariable(
              props.light.active,
              props.dark.active,
            )
          : undefined,
      disabled:
        props.light.disabled && props.dark.disabled
          ? getSchemeColorHighlighterBackgroundVariable(
              props.light.disabled,
              props.dark.disabled,
            )
          : undefined,
    };
  }

  return {
    default:
      props.light.default && props.dark.default
        ? `light-dark(${getColorVariable(props.light.default)}, ${getColorVariable(props.dark.default)})`
        : undefined,
    hover:
      props.light.hover && props.dark.hover
        ? `light-dark(${getColorVariable(props.light.hover)}, ${getColorVariable(props.dark.hover)})`
        : undefined,
    focus:
      props.light.focus && props.dark.focus
        ? `light-dark(${getColorVariable(props.light.focus)}, ${getColorVariable(props.dark.focus)})`
        : undefined,
    active:
      props.light.active && props.dark.active
        ? `light-dark(${getColorVariable(props.light.active)}, ${getColorVariable(props.dark.active)})`
        : undefined,
    disabled:
      props.light.disabled && props.dark.disabled
        ? `light-dark(${getColorVariable(props.light.disabled)}, ${getColorVariable(props.dark.disabled)})`
        : undefined,
  };
}

function getColorVariable<
  BaseComponentColorNameType extends string = ColorName,
>(
  colorAttributes?: ColorAttributes<BaseComponentColorNameType> | "transparent",
): string | undefined {
  if (!colorAttributes) {
    return undefined;
  }

  if (typeof colorAttributes === "string") {
    return "transparent";
  }

  if (colorAttributes.name === "rainbow") {
    return "transparent";
  }

  if (colorAttributes.alpha) {
    return `oklch(from var(--${cssVariablePrefix}color-${colorAttributes.name}-${
      colorAttributes.lightness === 5 ? "05" : colorAttributes.lightness
    }) l c h / ${colorAttributes.alpha})`;
  }

  return `var(--${cssVariablePrefix}color-${colorAttributes.name}-${
    colorAttributes.lightness === 5 ? "05" : colorAttributes.lightness
  })`;
}

function getHighlighterBackgroundVariable<
  BaseComponentColorNameType extends string = ColorName,
>(
  colorAttributes?: ColorAttributes<BaseComponentColorNameType> | "transparent",
): string | undefined {
  if (!colorAttributes) {
    return undefined;
  }

  if (typeof colorAttributes === "string") {
    return "transparent";
  }

  if (colorAttributes.name === "rainbow") {
    return "transparent";
  }

  if (colorAttributes.alpha) {
    return `linear-gradient(
    transparent 66.66%,
    oklch(from var(--${cssVariablePrefix}color-${colorAttributes.name}-${
      colorAttributes.lightness === 5 ? "05" : colorAttributes.lightness
    }) l c h / ${colorAttributes.alpha}) 33.33%)`;
  }

  return `linear-gradient(
    transparent 66.66%,
    var(--${cssVariablePrefix}color-${colorAttributes.name}-${
      colorAttributes.lightness === 5 ? "05" : colorAttributes.lightness
    }) 33.33%)`;
}

function getSchemeColorHighlighterBackgroundVariable<
  BaseComponentColorNameType extends string = ColorName,
>(
  lightColorAttributes?:
    | ColorAttributes<BaseComponentColorNameType>
    | "transparent",
  darkColorAttributes?:
    | ColorAttributes<BaseComponentColorNameType>
    | "transparent",
): string | undefined {
  if (!lightColorAttributes || !darkColorAttributes) {
    return undefined;
  }

  const getColor = (
    colorAttributes:
      | ColorAttributes<BaseComponentColorNameType>
      | "transparent",
  ) => {
    if (typeof colorAttributes === "string") {
      return "transparent";
    } else {
      if (colorAttributes.name === "rainbow") {
        return "transparent";
      }

      if (colorAttributes.alpha) {
        return `oklch(from var(--${cssVariablePrefix}color-${colorAttributes.name}-${
          colorAttributes.lightness === 5 ? "05" : colorAttributes.lightness
        }) l c h / ${colorAttributes.alpha})`;
      } else {
        return `var(--${cssVariablePrefix}color-${colorAttributes.name}-${
          colorAttributes.lightness === 5 ? "05" : colorAttributes.lightness
        })`;
      }
    }
  };

  const light = getColor(lightColorAttributes);
  const dark = getColor(darkColorAttributes);

  return `linear-gradient(transparent 66.66%, light-dark(${light}, ${dark}) 33.33%)`;
}

function getCssObject(props: {
  foreColor?: string;
  backColor?: string;
  highlighter?: string;
  borderColor?: string;
  borderTopColor?: string;
  borderRightColor?: string;
  borderBottomColor?: string;
  borderLeftColor?: string;
}): CSSObject | undefined {
  return props.foreColor ||
    props.backColor ||
    props.highlighter ||
    props.borderColor
    ? {
        color: props.foreColor,
        backgroundColor: props.backColor,
        backgroundImage: props.highlighter,
        borderColor: props.borderColor,
        borderTopColor: props.borderTopColor,
        borderRightColor: props.borderRightColor,
        borderBottomColor: props.borderBottomColor,
        borderLeftColor: props.borderLeftColor,
      }
    : undefined;
}

function getGutterCSSObject(
  componentName: string,
  gutter?: Gutter,
): CSSObject | undefined {
  if (gutter === undefined) {
    return undefined;
  }

  if (typeof gutter === "string") {
    return {
      [`--minolith-${componentName}-gutter-x`]: gutter,
      [`--minolith-${componentName}-gutter-y`]: gutter,
    };
  } else if (typeof gutter === "number") {
    return {
      [`--minolith-${componentName}-gutter-x`]: `${gutter}rem`,
      [`--minolith-${componentName}-gutter-y`]: `${gutter}rem`,
    };
  } else {
    let gutterX: CSSObject | undefined = undefined;
    let gutterY: CSSObject | undefined = undefined;
    if (typeof gutter.x === "string") {
      gutterX = {
        [`--minolith-${componentName}-gutter-x`]: gutter.x,
      };
    } else if (typeof gutter.x === "number") {
      gutterX = {
        [`--minolith-${componentName}-gutter-x`]: `${gutter.x}rem`,
      };
    }
    if (typeof gutter.y === "string") {
      gutterY = {
        [`--minolith-${componentName}-gutter-y`]: gutter.y,
      };
    } else if (typeof gutter.y === "number") {
      gutterY = {
        [`--minolith-${componentName}-gutter-y`]: `${gutter.y}rem`,
      };
    }

    return {
      ...gutterX,
      ...gutterY,
    };
  }
}

function getResponsiveFlexDirectionCSSObject(
  responsiveFlexDirection?: ResponsiveFlexDirection,
) {
  if (responsiveFlexDirection === undefined) {
    return undefined;
  }

  if (typeof responsiveFlexDirection === "string") {
    return {
      flexDirection: responsiveFlexDirection,
    };
  } else {
    let cssObject: CSSObject = {};

    if ("default" in responsiveFlexDirection) {
      cssObject = {
        ...cssObject,
        flexDirection: responsiveFlexDirection.default,
      };
    }

    if ("xsmall" in responsiveFlexDirection) {
      cssObject = {
        ...cssObject,
        ...wrapResponsiveMediaQuery("xsmall", {
          flexDirection: responsiveFlexDirection.xsmall,
        }),
      };
    }

    if ("xsmallOrMore" in responsiveFlexDirection) {
      cssObject = {
        ...cssObject,
        ...wrapResponsiveMediaQuery("xsmall", {
          flexDirection: responsiveFlexDirection.xsmallOrMore,
        }),
        ...wrapResponsiveMediaQuery("small", {
          flexDirection: responsiveFlexDirection.xsmallOrMore,
        }),
        ...wrapResponsiveMediaQuery("medium", {
          flexDirection: responsiveFlexDirection.xsmallOrMore,
        }),
        ...wrapResponsiveMediaQuery("large", {
          flexDirection: responsiveFlexDirection.xsmallOrMore,
        }),
        ...wrapResponsiveMediaQuery("xlarge", {
          flexDirection: responsiveFlexDirection.xsmallOrMore,
        }),
      };
    }

    if ("smallOrLess" in responsiveFlexDirection) {
      cssObject = {
        ...cssObject,
        ...wrapResponsiveMediaQuery("xsmall", {
          flexDirection: responsiveFlexDirection.smallOrLess,
        }),
        ...wrapResponsiveMediaQuery("small", {
          flexDirection: responsiveFlexDirection.smallOrLess,
        }),
      };
    }

    if ("small" in responsiveFlexDirection) {
      cssObject = {
        ...cssObject,
        ...wrapResponsiveMediaQuery("small", {
          flexDirection: responsiveFlexDirection.small,
        }),
      };
    }

    if ("smallOrMore" in responsiveFlexDirection) {
      cssObject = {
        ...cssObject,
        ...wrapResponsiveMediaQuery("small", {
          flexDirection: responsiveFlexDirection.smallOrMore,
        }),
        ...wrapResponsiveMediaQuery("medium", {
          flexDirection: responsiveFlexDirection.smallOrMore,
        }),
        ...wrapResponsiveMediaQuery("large", {
          flexDirection: responsiveFlexDirection.smallOrMore,
        }),
        ...wrapResponsiveMediaQuery("xlarge", {
          flexDirection: responsiveFlexDirection.smallOrMore,
        }),
      };
    }

    if ("mediumOrLess" in responsiveFlexDirection) {
      cssObject = {
        ...cssObject,
        ...wrapResponsiveMediaQuery("xsmall", {
          flexDirection: responsiveFlexDirection.mediumOrLess,
        }),
        ...wrapResponsiveMediaQuery("small", {
          flexDirection: responsiveFlexDirection.mediumOrLess,
        }),
        ...wrapResponsiveMediaQuery("medium", {
          flexDirection: responsiveFlexDirection.mediumOrLess,
        }),
      };
    }

    if ("medium" in responsiveFlexDirection) {
      cssObject = {
        ...cssObject,
        ...wrapResponsiveMediaQuery("medium", {
          flexDirection: responsiveFlexDirection.medium,
        }),
      };
    }

    if ("mediumOrMore" in responsiveFlexDirection) {
      cssObject = {
        ...cssObject,
        ...wrapResponsiveMediaQuery("medium", {
          flexDirection: responsiveFlexDirection.mediumOrMore,
        }),
        ...wrapResponsiveMediaQuery("large", {
          flexDirection: responsiveFlexDirection.mediumOrMore,
        }),
        ...wrapResponsiveMediaQuery("xlarge", {
          flexDirection: responsiveFlexDirection.mediumOrMore,
        }),
      };
    }

    if ("largeOrLess" in responsiveFlexDirection) {
      cssObject = {
        ...cssObject,
        ...wrapResponsiveMediaQuery("xsmall", {
          flexDirection: responsiveFlexDirection.largeOrLess,
        }),
        ...wrapResponsiveMediaQuery("small", {
          flexDirection: responsiveFlexDirection.largeOrLess,
        }),
        ...wrapResponsiveMediaQuery("medium", {
          flexDirection: responsiveFlexDirection.largeOrLess,
        }),
        ...wrapResponsiveMediaQuery("large", {
          flexDirection: responsiveFlexDirection.largeOrLess,
        }),
      };
    }

    if ("large" in responsiveFlexDirection) {
      cssObject = {
        ...cssObject,
        ...wrapResponsiveMediaQuery("large", {
          flexDirection: responsiveFlexDirection.large,
        }),
      };
    }

    if ("largeOrMore" in responsiveFlexDirection) {
      cssObject = {
        ...cssObject,
        ...wrapResponsiveMediaQuery("large", {
          flexDirection: responsiveFlexDirection.largeOrMore,
        }),
        ...wrapResponsiveMediaQuery("xlarge", {
          flexDirection: responsiveFlexDirection.largeOrMore,
        }),
      };
    }

    if ("xlargeOrLess" in responsiveFlexDirection) {
      cssObject = {
        ...cssObject,
        ...wrapResponsiveMediaQuery("xsmall", {
          flexDirection: responsiveFlexDirection.xlargeOrLess,
        }),
        ...wrapResponsiveMediaQuery("small", {
          flexDirection: responsiveFlexDirection.xlargeOrLess,
        }),
        ...wrapResponsiveMediaQuery("medium", {
          flexDirection: responsiveFlexDirection.xlargeOrLess,
        }),
        ...wrapResponsiveMediaQuery("large", {
          flexDirection: responsiveFlexDirection.xlargeOrLess,
        }),
        ...wrapResponsiveMediaQuery("xlarge", {
          flexDirection: responsiveFlexDirection.xlargeOrLess,
        }),
      };
    }

    if ("xlarge" in responsiveFlexDirection) {
      cssObject = {
        ...cssObject,
        ...wrapResponsiveMediaQuery("xlarge", {
          flexDirection: responsiveFlexDirection.xlarge,
        }),
      };
    }

    return cssObject;
  }
}

function getResponsiveGutterCSSObject(
  componentName: string,
  responsiveGutter?: ResponsiveGutter,
): CSSObject | undefined {
  if (responsiveGutter === undefined) {
    return undefined;
  }

  if (
    typeof responsiveGutter === "number" ||
    typeof responsiveGutter === "string" ||
    "x" in responsiveGutter ||
    "y" in responsiveGutter
  ) {
    return getGutterCSSObject(componentName, responsiveGutter);
  } else {
    let cssObject: CSSObject = {};

    if ("default" in responsiveGutter) {
      const gutterCSSObject = getGutterCSSObject(
        componentName,
        responsiveGutter.default,
      );
      if (gutterCSSObject) {
        cssObject = {
          ...cssObject,
          ...gutterCSSObject,
        };
      }
    }

    if ("xsmall" in responsiveGutter) {
      const gutterCSSObject = getGutterCSSObject(
        componentName,
        responsiveGutter.xsmall,
      );
      if (gutterCSSObject) {
        cssObject = {
          ...cssObject,
          ...wrapResponsiveMediaQuery("xsmall", gutterCSSObject),
        };
      }
    }

    if ("xsmallOrMore" in responsiveGutter) {
      const gutterCSSObject = getGutterCSSObject(
        componentName,
        responsiveGutter.xsmall,
      );
      if (gutterCSSObject) {
        cssObject = {
          ...cssObject,
          ...wrapResponsiveMediaQuery("xsmall", gutterCSSObject),
          ...wrapResponsiveMediaQuery("small", gutterCSSObject),
          ...wrapResponsiveMediaQuery("medium", gutterCSSObject),
          ...wrapResponsiveMediaQuery("large", gutterCSSObject),
          ...wrapResponsiveMediaQuery("xlarge", gutterCSSObject),
        };
      }
    }

    if ("smallOrLess" in responsiveGutter) {
      const gutterCSSObject = getGutterCSSObject(
        componentName,
        responsiveGutter.smallOrLess,
      );
      if (gutterCSSObject) {
        cssObject = {
          ...cssObject,
          ...wrapResponsiveMediaQuery("xsmall", gutterCSSObject),
          ...wrapResponsiveMediaQuery("small", gutterCSSObject),
        };
      }
    }

    if ("small" in responsiveGutter) {
      const gutterCSSObject = getGutterCSSObject(
        componentName,
        responsiveGutter.small,
      );
      if (gutterCSSObject) {
        cssObject = {
          ...cssObject,
          ...wrapResponsiveMediaQuery("small", gutterCSSObject),
        };
      }
    }

    if ("smallOrMore" in responsiveGutter) {
      const gutterCSSObject = getGutterCSSObject(
        componentName,
        responsiveGutter.smallOrMore,
      );
      if (gutterCSSObject) {
        cssObject = {
          ...cssObject,
          ...wrapResponsiveMediaQuery("small", gutterCSSObject),
          ...wrapResponsiveMediaQuery("medium", gutterCSSObject),
          ...wrapResponsiveMediaQuery("large", gutterCSSObject),
          ...wrapResponsiveMediaQuery("xlarge", gutterCSSObject),
        };
      }
    }

    if ("mediumOrLess" in responsiveGutter) {
      const gutterCSSObject = getGutterCSSObject(
        componentName,
        responsiveGutter.mediumOrLess,
      );
      if (gutterCSSObject) {
        cssObject = {
          ...cssObject,
          ...wrapResponsiveMediaQuery("xsmall", gutterCSSObject),
          ...wrapResponsiveMediaQuery("small", gutterCSSObject),
          ...wrapResponsiveMediaQuery("medium", gutterCSSObject),
        };
      }
    }

    if ("medium" in responsiveGutter) {
      const gutterCSSObject = getGutterCSSObject(
        componentName,
        responsiveGutter.medium,
      );
      if (gutterCSSObject) {
        cssObject = {
          ...cssObject,
          ...wrapResponsiveMediaQuery("medium", gutterCSSObject),
        };
      }
    }

    if ("mediumOrMore" in responsiveGutter) {
      const gutterCSSObject = getGutterCSSObject(
        componentName,
        responsiveGutter.mediumOrMore,
      );
      if (gutterCSSObject) {
        cssObject = {
          ...cssObject,
          ...wrapResponsiveMediaQuery("medium", gutterCSSObject),
          ...wrapResponsiveMediaQuery("large", gutterCSSObject),
          ...wrapResponsiveMediaQuery("xlarge", gutterCSSObject),
        };
      }
    }

    if ("largeOrLess" in responsiveGutter) {
      const gutterCSSObject = getGutterCSSObject(
        componentName,
        responsiveGutter.largeOrLess,
      );
      if (gutterCSSObject) {
        cssObject = {
          ...cssObject,
          ...wrapResponsiveMediaQuery("xsmall", gutterCSSObject),
          ...wrapResponsiveMediaQuery("small", gutterCSSObject),
          ...wrapResponsiveMediaQuery("medium", gutterCSSObject),
          ...wrapResponsiveMediaQuery("large", gutterCSSObject),
        };
      }
    }

    if ("large" in responsiveGutter) {
      const gutterCSSObject = getGutterCSSObject(
        componentName,
        responsiveGutter.large,
      );
      if (gutterCSSObject) {
        cssObject = {
          ...cssObject,
          ...wrapResponsiveMediaQuery("large", gutterCSSObject),
        };
      }
    }

    if ("largeOrMore" in responsiveGutter) {
      const gutterCSSObject = getGutterCSSObject(
        componentName,
        responsiveGutter.largeOrMore,
      );
      if (gutterCSSObject) {
        cssObject = {
          ...cssObject,
          ...wrapResponsiveMediaQuery("large", gutterCSSObject),
          ...wrapResponsiveMediaQuery("xlarge", gutterCSSObject),
        };
      }
    }

    if ("xlargeOrLess" in responsiveGutter) {
      const gutterCSSObject = getGutterCSSObject(
        componentName,
        responsiveGutter.xlargeOrLess,
      );
      if (gutterCSSObject) {
        cssObject = {
          ...cssObject,
          ...wrapResponsiveMediaQuery("xsmall", gutterCSSObject),
          ...wrapResponsiveMediaQuery("small", gutterCSSObject),
          ...wrapResponsiveMediaQuery("medium", gutterCSSObject),
          ...wrapResponsiveMediaQuery("large", gutterCSSObject),
          ...wrapResponsiveMediaQuery("xlarge", gutterCSSObject),
        };
      }
    }

    if ("xlarge" in responsiveGutter) {
      const gutterCSSObject = getGutterCSSObject(
        componentName,
        responsiveGutter.xlarge,
      );
      if (gutterCSSObject) {
        cssObject = {
          ...cssObject,
          ...wrapResponsiveMediaQuery("xlarge", gutterCSSObject),
        };
      }
    }

    return cssObject;
  }
}

function wrapResponsiveMediaQuery(
  size: ResponsiveBreakepointSize,
  cssObject: CSSObject,
): CSSObject {
  // const responsiveBreakpointXsmall = 0;
  const responsiveBreakpointSmall = 544;
  const responsiveBreakpointMedium = 768;
  const responsiveBreakpointLarge = 1024;
  const responsiveBreakpointXlarge = 1200;
  const responsiveBreakpointMaxWidthOffset = -0.02;

  switch (size) {
    case "xsmall":
      return {
        [`@media screen and (max-width: ${responsiveBreakpointSmall + responsiveBreakpointMaxWidthOffset}px)`]:
          {
            ...cssObject,
          },
      };
    case "small":
      return {
        [`@media screen (min-width: ${responsiveBreakpointSmall}px) and (max-width: ${responsiveBreakpointMedium + responsiveBreakpointMaxWidthOffset}px)`]:
          {
            ...cssObject,
          },
      };
    case "medium":
      return {
        [`@media screen (min-width: ${responsiveBreakpointMedium}px) and (max-width: ${responsiveBreakpointLarge + responsiveBreakpointMaxWidthOffset}px)`]:
          {
            ...cssObject,
          },
      };
    case "large":
      return {
        [`@media screen (min-width: ${responsiveBreakpointLarge}px) and (max-width: ${responsiveBreakpointXlarge + responsiveBreakpointMaxWidthOffset}px)`]:
          {
            ...cssObject,
          },
      };
    case "xlarge":
      return {
        [`@media screen and (min-width: ${responsiveBreakpointXlarge}px)`]: {
          ...cssObject,
        },
      };
  }
}

function getColumnsFlexDirectionCss(
  responsiveFlexDirection?: ResponsiveFlexDirection,
) {
  return getResponsiveFlexDirectionCSSObject(responsiveFlexDirection);
}

// function getColumnsGutterCss(
//   responsiveGutter?: ResponsiveGutter,
// ): CSSObject | undefined {
//   return getResponsiveGutterCSSObject("columns", responsiveGutter);
// }

function getContainerGutterCss(
  responsiveGutter?: ResponsiveGutter,
): CSSObject | undefined {
  return getResponsiveGutterCSSObject("container", responsiveGutter);
}

function getEmotionCss<ColorNameType extends string>(
  props: BaseComponentProps<ColorNameType>,
  optionalCss?: Interpolation<Theme>,
): Interpolation<Theme> {
  const keys = Object.keys(props);

  const baseComponentPropsKeys = keys.filter(
    (key) =>
      key === "fore" ||
      key === "back" ||
      key === "highlighter" ||
      key === "border" ||
      key === "positioning" ||
      key === "sizing" ||
      key === "spacing",
  );

  if (baseComponentPropsKeys.length === 0) {
    const arry = [];
    if (optionalCss) {
      arry.push(optionalCss);
    }

    if (props.css) {
      arry.push(props.css);
    }
    return arry;
  }

  //#region fore
  const foreColorBase = props.fore
    ? getColorProps(props.fore.color)
    : undefined;

  const foreColorScheme =
    props.fore && props.fore.color
      ? getSchemeColorProps(props.fore.color.colorScheme)
      : undefined;

  const fontSize =
    props.fore && props.fore.fontSize
      ? `var(--${cssVariablePrefix}font-size-${props.fore.fontSize})`
      : undefined;
  const fontWeight =
    props.fore && props.fore.fontWeight
      ? `var(--${cssVariablePrefix}font-weight-${props.fore.fontWeight})`
      : undefined;
  //#endregion fore

  //#region back
  const backColorBase = props.back
    ? getColorProps(props.back.color)
    : undefined;

  const backColorScheme =
    props.back && props.back.color
      ? getSchemeColorProps(props.back.color.colorScheme)
      : undefined;

  //#endregion back

  //#region highlighter
  const highlighterColorBase =
    props.highlighter && getColorProps(props.highlighter.color, "highlighter");

  const highlighterColorScheme =
    props.highlighter && props.highlighter.color
      ? getSchemeColorProps(props.highlighter.color.colorScheme, "highlighter")
      : undefined;

  //#endregion highlighter

  //#region border
  const borderColorBase = props.border
    ? getColorProps(props.border.color)
    : undefined;

  const borderColorScheme =
    props.border && props.border.color
      ? getSchemeColorProps(props.border.color.colorScheme)
      : undefined;

  const borderTopColorBase =
    props.border && props.border.top
      ? getColorProps(props.border.top.color)
      : undefined;
  const borderTopColorScheme =
    props.border && props.border.top && props.border.top.color
      ? getSchemeColorProps(props.border.top.color.colorScheme)
      : undefined;

  const borderRightColorBase =
    props.border && props.border.right
      ? getColorProps(props.border.right.color)
      : undefined;
  const borderRightColorScheme =
    props.border && props.border.right && props.border.right.color
      ? getSchemeColorProps(props.border.right.color.colorScheme)
      : undefined;

  const borderBottomColorBase =
    props.border && props.border.bottom
      ? getColorProps(props.border.bottom.color)
      : undefined;
  const borderBottomColorScheme =
    props.border && props.border.bottom && props.border.bottom.color
      ? getSchemeColorProps(props.border.bottom.color.colorScheme)
      : undefined;

  const borderLeftColorBase =
    props.border && props.border.left && getColorProps(props.border.left.color);
  const borderLeftColorScheme =
    props.border && props.border.left && props.border.left.color
      ? getSchemeColorProps(props.border.left.color.colorScheme)
      : undefined;

  //#endregion border

  const hover = getCssObject({
    foreColor: foreColorBase ? foreColorBase.hover : undefined,
    backColor: backColorBase ? backColorBase.hover : undefined,
    highlighter: highlighterColorBase ? highlighterColorBase.hover : undefined,
    borderColor: borderColorBase ? borderColorBase.hover : undefined,
    borderTopColor: borderTopColorBase ? borderTopColorBase.hover : undefined,
    borderRightColor: borderRightColorBase
      ? borderRightColorBase.hover
      : undefined,
    borderBottomColor: borderBottomColorBase
      ? borderBottomColorBase.hover
      : undefined,
    borderLeftColor: borderLeftColorBase
      ? borderLeftColorBase.hover
      : undefined,
  });

  const focus = getCssObject({
    foreColor: foreColorBase ? foreColorBase.focus : undefined,
    backColor: backColorBase ? backColorBase.focus : undefined,
    highlighter: highlighterColorBase ? highlighterColorBase.focus : undefined,
    borderColor: borderColorBase ? borderColorBase.focus : undefined,
    borderTopColor: borderTopColorBase ? borderTopColorBase.focus : undefined,
    borderRightColor: borderRightColorBase
      ? borderRightColorBase.focus
      : undefined,
    borderBottomColor: borderBottomColorBase
      ? borderBottomColorBase.focus
      : undefined,
    borderLeftColor: borderLeftColorBase
      ? borderLeftColorBase.focus
      : undefined,
  });

  const active = getCssObject({
    foreColor: foreColorBase ? foreColorBase.active : undefined,
    backColor: backColorBase ? backColorBase.active : undefined,
    highlighter: highlighterColorBase ? highlighterColorBase.active : undefined,
    borderColor: borderColorBase ? borderColorBase.active : undefined,
    borderTopColor: borderTopColorBase ? borderTopColorBase.active : undefined,
    borderRightColor: borderRightColorBase
      ? borderRightColorBase.active
      : undefined,
    borderBottomColor: borderBottomColorBase
      ? borderBottomColorBase.active
      : undefined,
    borderLeftColor: borderLeftColorBase
      ? borderLeftColorBase.active
      : undefined,
  });

  const disabled = getCssObject({
    foreColor: foreColorBase ? foreColorBase.disabled : undefined,
    backColor: backColorBase ? backColorBase.disabled : undefined,
    highlighter: highlighterColorBase
      ? highlighterColorBase.disabled
      : undefined,
    borderColor: borderColorBase ? borderColorBase.disabled : undefined,
    borderTopColor: borderTopColorBase
      ? borderTopColorBase.disabled
      : undefined,
    borderRightColor: borderRightColorBase
      ? borderRightColorBase.disabled
      : undefined,
    borderBottomColor: borderBottomColorBase
      ? borderBottomColorBase.disabled
      : undefined,
    borderLeftColor: borderLeftColorBase
      ? borderLeftColorBase.disabled
      : undefined,
  });

  const defaultColor = css({
    color: foreColorBase ? foreColorBase.default : undefined,
    backgroundColor: backColorBase && backColorBase.default,
    backgroundImage: highlighterColorBase && highlighterColorBase.default,
    borderColor: borderColorBase && borderColorBase.default,
    borderTopColor: borderTopColorBase && borderTopColorBase.default,
    borderRightColor: borderRightColorBase && borderRightColorBase.default,
    borderBottomColor: borderBottomColorBase && borderBottomColorBase.default,
    borderLeftColor: borderLeftColorBase && borderLeftColorBase.default,
    ":hover": hover,
    ":focus": focus,
    ":active": active,
    "&[disabled]": disabled,
  });

  const hoverSchemeColor = getCssObject({
    foreColor: foreColorScheme ? foreColorScheme.hover : undefined,
    backColor: backColorScheme ? backColorScheme.hover : undefined,
    highlighter: highlighterColorScheme
      ? highlighterColorScheme.hover
      : undefined,
    borderColor: borderColorScheme ? borderColorScheme.hover : undefined,
    borderTopColor: borderTopColorScheme
      ? borderTopColorScheme.hover
      : undefined,
    borderRightColor: borderRightColorScheme
      ? borderRightColorScheme.hover
      : undefined,
    borderBottomColor: borderBottomColorScheme
      ? borderBottomColorScheme.hover
      : undefined,
    borderLeftColor: borderLeftColorScheme
      ? borderLeftColorScheme.hover
      : undefined,
  });

  const focusSchemeColor = getCssObject({
    foreColor: foreColorScheme ? foreColorScheme.focus : undefined,
    backColor: backColorScheme ? backColorScheme.focus : undefined,
    highlighter: highlighterColorScheme
      ? highlighterColorScheme.focus
      : undefined,
    borderColor: borderColorScheme ? borderColorScheme.focus : undefined,
    borderTopColor: borderTopColorScheme
      ? borderTopColorScheme.focus
      : undefined,
    borderRightColor: borderRightColorScheme
      ? borderRightColorScheme.focus
      : undefined,
    borderBottomColor: borderBottomColorScheme
      ? borderBottomColorScheme.focus
      : undefined,
    borderLeftColor: borderLeftColorScheme
      ? borderLeftColorScheme.focus
      : undefined,
  });

  const activeSchemeColor = getCssObject({
    foreColor: foreColorScheme ? foreColorScheme.active : undefined,
    backColor: backColorScheme ? backColorScheme.active : undefined,
    highlighter: highlighterColorScheme
      ? highlighterColorScheme.active
      : undefined,
    borderColor: borderColorScheme ? borderColorScheme.active : undefined,
    borderTopColor: borderTopColorScheme
      ? borderTopColorScheme.active
      : undefined,
    borderRightColor: borderRightColorScheme
      ? borderRightColorScheme.active
      : undefined,
    borderBottomColor: borderBottomColorScheme
      ? borderBottomColorScheme.active
      : undefined,
    borderLeftColor: borderLeftColorScheme
      ? borderLeftColorScheme.active
      : undefined,
  });

  const disabledSchemeColor = getCssObject({
    foreColor: foreColorScheme ? foreColorScheme.disabled : undefined,
    backColor: backColorScheme ? backColorScheme.disabled : undefined,
    highlighter: highlighterColorScheme
      ? highlighterColorScheme.disabled
      : undefined,
    borderColor: borderColorScheme ? borderColorScheme.disabled : undefined,
    borderTopColor: borderTopColorScheme
      ? borderTopColorScheme.disabled
      : undefined,
    borderRightColor: borderRightColorScheme
      ? borderRightColorScheme.disabled
      : undefined,
    borderBottomColor: borderBottomColorScheme
      ? borderBottomColorScheme.disabled
      : undefined,
    borderLeftColor: borderLeftColorScheme
      ? borderLeftColorScheme.disabled
      : undefined,
  });

  const schemeColor = css({
    color: foreColorScheme ? foreColorScheme.default : undefined,
    backgroundColor: backColorScheme ? backColorScheme.default : undefined,
    backgroundImage: highlighterColorScheme
      ? highlighterColorScheme.default
      : undefined,
    borderColor: borderColorScheme ? borderColorScheme.default : undefined,
    borderTopColor: borderTopColorScheme
      ? borderTopColorScheme.default
      : undefined,
    borderRightColor: borderRightColorScheme
      ? borderRightColorScheme.default
      : undefined,
    borderBottomColor: borderBottomColorScheme
      ? borderBottomColorScheme.default
      : undefined,
    borderLeftColor: borderLeftColorScheme
      ? borderLeftColorScheme.default
      : undefined,
    ":hover": hoverSchemeColor,
    ":focus": focusSchemeColor,
    ":active": activeSchemeColor,
    "&[disabled]": disabledSchemeColor,
  });

  const defaultCssProps: CSSInterpolation = {
    fontSize: fontSize,
    fontWeight: fontWeight,
    fontStyle: props.fore ? props.fore.fontStyle : undefined,
    textTransform: props.fore ? props.fore.textTransform : undefined,
    borderCollapse:
      props.border && props.border.collapse
        ? props.border.collapse === "collapted"
          ? "collapse"
          : "separate"
        : undefined,
    borderRadius:
      props.border && props.border.radius
        ? `var(--${cssVariablePrefix}border-radius-${props.border.radius})`
        : undefined,
    borderStyle:
      props.border && props.border.style ? props.border.style : undefined,
    borderWidth:
      props.border && props.border.width
        ? `var(--${cssVariablePrefix}border-width-${props.border.width})`
        : undefined,
    borderTopStyle:
      props.border && props.border.top && props.border.top.style
        ? props.border.top.style
        : undefined,
    borderTopWidth:
      props.border && props.border.top && props.border.top.width
        ? `var(--${cssVariablePrefix}border-width-${props.border.top.width})`
        : undefined,
    borderRightStyle:
      props.border && props.border.right && props.border.right.style
        ? props.border.right.style
        : undefined,
    borderRightWidth:
      props.border && props.border.right && props.border.right.width
        ? `var(--${cssVariablePrefix}border-width-${props.border.right.width})`
        : undefined,
    borderBottomStyle:
      props.border && props.border.bottom && props.border.bottom.style
        ? props.border.bottom.style
        : undefined,
    borderBottomWidth:
      props.border && props.border.bottom && props.border.bottom.width
        ? `var(--${cssVariablePrefix}border-width-${props.border.bottom.width})`
        : undefined,
    borderLeftStyle:
      props.border && props.border.left && props.border.left.style
        ? props.border.left.style
        : undefined,
    borderLeftWidth:
      props.border && props.border.left && props.border.left.width
        ? `var(--${cssVariablePrefix}border-width-${props.border.left.width})`
        : undefined,
    margin:
      props.spacing && props.spacing.margin
        ? typeof props.spacing.margin === "number"
          ? `${props.spacing.margin}rem`
          : typeof props.spacing.margin === "string"
            ? props.spacing.margin
            : undefined
        : undefined,
    marginTop:
      props.spacing &&
      props.spacing.margin &&
      typeof props.spacing.margin === "object" &&
      props.spacing.margin.top
        ? typeof props.spacing.margin.top === "number"
          ? `${props.spacing.margin.top}rem`
          : props.spacing.margin.top
        : props.spacing &&
            props.spacing.margin &&
            typeof props.spacing.margin === "object" &&
            props.spacing.margin.y
          ? typeof props.spacing.margin.y === "number"
            ? `${props.spacing.margin.y}rem`
            : props.spacing.margin.y
          : undefined,
    marginRight:
      props.spacing &&
      props.spacing.margin &&
      typeof props.spacing.margin === "object" &&
      props.spacing.margin.right
        ? typeof props.spacing.margin.right === "number"
          ? `${props.spacing.margin.right}rem`
          : props.spacing.margin.right
        : props.spacing &&
            props.spacing.margin &&
            typeof props.spacing.margin === "object" &&
            props.spacing.margin.x
          ? typeof props.spacing.margin.x === "number"
            ? `${props.spacing.margin.x}rem`
            : props.spacing.margin.x
          : undefined,
    marginBottom:
      props.spacing &&
      props.spacing.margin &&
      typeof props.spacing.margin === "object" &&
      props.spacing.margin.bottom
        ? typeof props.spacing.margin.bottom === "number"
          ? `${props.spacing.margin.bottom}rem`
          : props.spacing.margin.bottom
        : props.spacing &&
            props.spacing.margin &&
            typeof props.spacing.margin === "object" &&
            props.spacing.margin.y
          ? typeof props.spacing.margin.y === "number"
            ? `${props.spacing.margin.y}rem`
            : props.spacing.margin.y
          : undefined,
    marginLeft:
      props.spacing &&
      props.spacing.margin &&
      typeof props.spacing.margin === "object" &&
      props.spacing.margin.left
        ? typeof props.spacing.margin.left === "number"
          ? `${props.spacing.margin.left}rem`
          : props.spacing.margin.left
        : props.spacing &&
            props.spacing.margin &&
            typeof props.spacing.margin === "object" &&
            props.spacing.margin.x
          ? typeof props.spacing.margin.x === "number"
            ? `${props.spacing.margin.x}rem`
            : props.spacing.margin.x
          : undefined,
    padding:
      props.spacing && props.spacing.padding
        ? typeof props.spacing.padding === "number"
          ? `${props.spacing.padding}rem`
          : typeof props.spacing.padding === "string"
            ? props.spacing.padding
            : undefined
        : undefined,
    paddingTop:
      props.spacing &&
      props.spacing.padding &&
      typeof props.spacing.padding === "object" &&
      props.spacing.padding.top
        ? typeof props.spacing.padding.top === "number"
          ? `${props.spacing.padding.top}rem`
          : props.spacing.padding.top
        : props.spacing &&
            props.spacing.padding &&
            typeof props.spacing.padding === "object" &&
            props.spacing.padding.y
          ? typeof props.spacing.padding.y === "number"
            ? `${props.spacing.padding.y}rem`
            : props.spacing.padding.y
          : undefined,
    paddingRight:
      props.spacing &&
      props.spacing.padding &&
      typeof props.spacing.padding === "object" &&
      props.spacing.padding.right
        ? typeof props.spacing.padding.right === "number"
          ? `${props.spacing.padding.right}rem`
          : props.spacing.padding.right
        : props.spacing &&
            props.spacing.padding &&
            typeof props.spacing.padding === "object" &&
            props.spacing.padding.x
          ? typeof props.spacing.padding.x === "number"
            ? `${props.spacing.padding.x}rem`
            : props.spacing.padding.x
          : undefined,
    paddingBottom:
      props.spacing &&
      props.spacing.padding &&
      typeof props.spacing.padding === "object" &&
      props.spacing.padding.bottom
        ? typeof props.spacing.padding.bottom === "number"
          ? `${props.spacing.padding.bottom}rem`
          : props.spacing.padding.bottom
        : props.spacing &&
            props.spacing.padding &&
            typeof props.spacing.padding === "object" &&
            props.spacing.padding.y
          ? typeof props.spacing.padding.y === "number"
            ? `${props.spacing.padding.y}rem`
            : props.spacing.padding.y
          : undefined,
    paddingLeft:
      props.spacing &&
      props.spacing.padding &&
      typeof props.spacing.padding === "object" &&
      props.spacing.padding.left
        ? typeof props.spacing.padding.left === "number"
          ? `${props.spacing.padding.left}rem`
          : props.spacing.padding.left
        : props.spacing &&
            props.spacing.padding &&
            typeof props.spacing.padding === "object" &&
            props.spacing.padding.x
          ? typeof props.spacing.padding.x === "number"
            ? `${props.spacing.padding.x}rem`
            : props.spacing.padding.x
          : undefined,
    display: props.positioning ? props.positioning.display : undefined,
    position: props.positioning ? props.positioning.position : undefined,
    top: props.positioning ? props.positioning.top : undefined,
    left: props.positioning ? props.positioning.left : undefined,
    bottom: props.positioning ? props.positioning.bottom : undefined,
    right: props.positioning ? props.positioning.right : undefined,
    width: props.sizing ? props.sizing.width : undefined,
    minWidth: props.sizing ? props.sizing.minWidth : undefined,
    maxWidth: props.sizing ? props.sizing.maxWidth : undefined,
    height: props.sizing ? props.sizing.height : undefined,
    minHeight: props.sizing ? props.sizing.minHeight : undefined,
    maxHeight: props.sizing ? props.sizing.maxHeight : undefined,
  };

  const cssArray: CSSInterpolation[] = [];
  cssArray.push(defaultColor);

  if (schemeColor) {
    cssArray.push(schemeColor);
  }

  cssArray.push(defaultCssProps);

  const minolithUtilityStyles = css(cssArray);

  const derived = [];

  if (minolithUtilityStyles) {
    derived.push(minolithUtilityStyles);
  }

  if (optionalCss) {
    derived.push(optionalCss);
  }

  if (props.css) {
    derived.push(props.css);
  }

  return derived;
}

const emotionStyleUtility = {
  getColumnsFlexDirectionCss,
  // getColumnsGutterCss,
  getContainerGutterCss,
  getColorVariable,
  getEmotionCss,
};

export default emotionStyleUtility;
