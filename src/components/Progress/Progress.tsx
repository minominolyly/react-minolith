"use client";

import type { Interpolation, Theme } from "@emotion/react";
import type { ReactElement } from "react";
import type { ColorName } from "../../types";
import { classNameUtility, emotionStyleUtility } from "../../utilities";
import type BaseProgressProps from "./BaseProgressProps";
import classNames from "./Progress.module.scss";
import type ProgressProps from "./ProgressProps";

export default function Progress<
  BaseComponentColorNameType extends string = ColorName | "rainbow",
  PropsType extends BaseProgressProps<BaseComponentColorNameType> =
    ProgressProps<BaseComponentColorNameType>,
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

  const assignedClassNames = [classNames["progress"]];

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
        ["--minolith-progress-color-fore"]: `var(--minolith-color-${props.colorName}-progress-fore, var(--minolith-color-${props.colorName}-fore))`,
        ["--minolith-progress-color-back"]: `var(--minolith-color-${props.colorName}-progress-back, var(--minolith-color-${props.colorName}-back))`,
        ["--minolith-progress-color-border"]: `var(--minolith-color-${props.colorName}-progress-border, var(--minolith-color-${props.colorName}-border))`,
      }
    : undefined;

  const percentageCss: Interpolation<Theme> = {
    ["--minolith-progress-percentage"]: props.percentage,
  };

  const optionalCss = {
    ...colorNameCss,
    ...percentageCss,
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
