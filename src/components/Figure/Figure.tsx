"use client";

import type { Interpolation, Theme } from "@emotion/react";
import type { ReactElement } from "react";
import type { ColorName } from "../../types";
import { classNameUtility, emotionStyleUtility } from "../../utilities";
import classNames from "./Figure.module.scss";
import type FigureProps from "./FigureProps";
import type BaseFigureProps from "./BaseFigureProps";

export default function Figure<
  BaseComponentColorNameType extends string = ColorName | "rainbow",
  PropsType extends BaseFigureProps<BaseComponentColorNameType> =
    FigureProps<BaseComponentColorNameType>,
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
    className: undefined,
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
  delete assignedProps["className"];
  delete assignedProps["css"];
  delete assignedProps["as"];
  //#endregion BaseComponentProps

  const assignedClassNames: string[] = [classNames["figure"]];

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
        ["--minolith-figure-color-fore"]: `var(--minolith-color-${props.colorName}-figure-fore)`,
        ["--minolith-figure-color-back"]: `var(--minolith-color-${props.colorName}-figure-back)`,
        ["--minolith-figure-color-border"]: `var(--minolith-color-${props.colorName}-figure-border)`,
        ["--minolith-figure-color-selection-fore"]: `var(--minolith-color-${props.colorName}-figure-selection-fore)`,
        ["--minolith-figure-color-selection-back"]: `var(--minolith-color-${props.colorName}-figure-selection-back)`,
        ["--minolith-figure-content-color-fore"]: `var(--minolith-color-${props.colorName}-figure-content-fore)`,
        ["--minolith-figure-content-color-back"]: `var(--minolith-color-${props.colorName}-figure-content-back)`,
        ["--minolith-figure-content-color-border"]: `var(--minolith-color-${props.colorName}-figure-content-border)`,
        ["--minolith-figure-content-color-selection-fore"]: `var(--minolith-color-${props.colorName}-figure-content-selection-fore)`,
        ["--minolith-figure-content-color-selection-back"]: `var(--minolith-color-${props.colorName}-figure-content-selection-back)`,
        ["--minolith-figure-caption-color-fore"]: `var(--minolith-color-${props.colorName}-figure-caption-fore)`,
        ["--minolith-figure-caption-color-back"]: `var(--minolith-color-${props.colorName}-figure-caption-back)`,
        ["--minolith-figure-caption-color-border"]: `var(--minolith-color-${props.colorName}-figure-caption-border)`,
        ["--minolith-figure-caption-color-selection-fore"]: `var(--minolith-color-${props.colorName}-figure-caption-selection-fore)`,
        ["--minolith-figure-caption-color-selection-back"]: `var(--minolith-color-${props.colorName}-figure-caption-selection-back)`,
      }
    : undefined;

  const optionalCss = {
    ...colorNameCss,
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
    <figure
      {...assignedProps}
      className={assignedClassNames.join(" ")}
      css={css}
    />
  );
}
