"use client";

import type { Interpolation, Theme } from "@emotion/react";
import type { ReactElement } from "react";
import type { ColorName } from "../../types";
import { classNameUtility, emotionStyleUtility } from "../../utilities";
import type BaseCardProps from "./BaseCardProps";
import classNames from "./Card.module.scss";
import type CardProps from "./CardProps";

export default function Card<
  BaseComponentColorNameType extends string = ColorName | "rainbow",
  PropsType extends BaseCardProps<BaseComponentColorNameType> =
    CardProps<BaseComponentColorNameType>,
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

  const assignedClassNames = [classNames["card"]];

  const utilityClassNames = classNameUtility.getUtilityClassNames<BaseComponentColorNameType>(props);
  if (utilityClassNames) {
    assignedClassNames.push(...utilityClassNames);
  }
  if (props.className) {
    assignedClassNames.push(props.className);
  }

  const colorNameCss: Interpolation<Theme> = props.colorName
    ? {
        ["--minolith-card-color-fore"]: `var(--minolith-color-${props.colorName}-card-fore)`,
        ["--minolith-card-color-back"]: `var(--minolith-color-${props.colorName}-card-back)`,
        ["--minolith-card-color-border"]: `var(--minolith-color-${props.colorName}-card-border)`,
        ["--minolith-card-color-shadow"]: `var(--minolith-color-${props.colorName}-card-shadow)`,
        ["--minolith-card-selection-color-fore"]: `var(--minolith-color-${props.colorName}-card-selection-fore)`,
        ["--minolith-card-selection-color-back"]: `var(--minolith-color-${props.colorName}-card-selection-back)`,
        ["--minolith-card-header-color-fore"]: `var(--minolith-color-${props.colorName}-card-header-fore)`,
        ["--minolith-card-header-color-back"]: `var(--minolith-color-${props.colorName}-card-header-back)`,
        ["--minolith-card-header-color-border"]: `var(--minolith-color-${props.colorName}-card-header-border)`,
        ["--minolith-card-body-color-fore"]: `var(--minolith-color-${props.colorName}-card-body-fore)`,
        ["--minolith-card-body-color-back"]: `var(--minolith-color-${props.colorName}-card-body-back)`,
        ["--minolith-card-body-color-border"]: `var(--minolith-color-${props.colorName}-card-body-border)`,
        ["--minolith-card-footer-color-fore"]: `var(--minolith-color-${props.colorName}-card-footer-fore)`,
        ["--minolith-card-footer-color-back"]: `var(--minolith-color-${props.colorName}-card-footer-back)`,
        ["--minolith-card-footer-color-border"]: `var(--minolith-color-${props.colorName}-card-footer-border)`,
      }
    : undefined;

  const optionalCss = {
    ...colorNameCss,
  };

  const css = emotionStyleUtility.getEmotionCss<BaseComponentColorNameType>(props, optionalCss);

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
