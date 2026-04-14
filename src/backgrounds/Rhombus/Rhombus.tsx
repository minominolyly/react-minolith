"use client";

import type { Interpolation, Theme } from "@emotion/react";
import type { ReactElement } from "react";
import type { ColorName } from "../../types";
import { classNameUtility, emotionStyleUtility } from "../../utilities";
import type BaseRhombusProps from "./BaseRhombusProps";
import classNames from "./Rhombus.module.scss";
import type RhombusProps from "./RhombusProps";

export default function Rhombus<
  BaseComponentColorNameType extends string = ColorName | "rainbow",
  PropsType extends BaseRhombusProps<BaseComponentColorNameType> =
    RhombusProps<BaseComponentColorNameType>,
>(props: PropsType): ReactElement {
  const assignedProps = {
    ...props,
    fore: undefined,
    back: undefined,
    highlighter: undefined,
    border: undefined,
    positioning: undefined,
    sizing: undefined,
    spacing: undefined,
    css: undefined,
    as: undefined,
  };

  delete assignedProps["colorName"];
  delete assignedProps["size"];
  //#region BaseComponentProps
  delete assignedProps["fore"];
  delete assignedProps["back"];
  delete assignedProps["highlighter"];
  delete assignedProps["border"];
  delete assignedProps["positioning"];
  delete assignedProps["sizing"];
  delete assignedProps["spacing"];
  delete assignedProps["css"];
  delete assignedProps["className"];
  delete assignedProps["as"];
  //#endregion BaseComponentProps

  const assignedClassNames = [classNames["rhombus"]];

  const utilityClassNames =
    classNameUtility.getUtilityClassNames<BaseComponentColorNameType>(props);
  if (utilityClassNames) {
    assignedClassNames.push(...utilityClassNames);
  }
  if (props.className) {
    assignedClassNames.push(props.className);
  }

  const colorNameCss: Interpolation<Theme> = props.colorName
    ? {
        ["--minolith-rhombus-color-line"]: `oklch(from var(--minolith-color-${props.colorName}-rhombus-fore) l c h / 0.5)`,
        ["--minolith-rhombus-color-back"]: `var(--minolith-color-${props.colorName}-rhombus-back)`,
      }
    : undefined;

  const rhombusSizeCss = props.size
    ? props.size === "small"
      ? {
          ["--minolith-rhombus-size"]: `0.5rem`,
        }
      : props.size === "large"
        ? {
            ["--minolith-rhombus-size"]: `2rem`,
          }
        : {
            ["--minolith-rhombus-size"]: props.size,
          }
    : undefined;

  const optionalCss = {
    ...colorNameCss,
    ...rhombusSizeCss,
  };

  const css = emotionStyleUtility.getEmotionCss<BaseComponentColorNameType>(
    props,
    optionalCss,
  );

  return props.as ? (
    <props.as
      {...assignedProps}
      className={assignedClassNames.join(" ")}
      css={css}
    />
  ) : (
    <div
      {...assignedProps}
      className={assignedClassNames.join(" ")}
      css={css}
    />
  );
}
