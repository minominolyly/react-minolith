"use client";

import type { Interpolation, Theme } from "@emotion/react";
import type { ReactElement } from "react";
import type { ColorName } from "../../types";
import { classNameUtility, emotionStyleUtility } from "../../utilities";
import type BaseButtonProps from "./BaseButtonProps";
import classNames from "./Button.module.scss";
import type ButtonProps from "./ButtonProps";

export default function Button<
  BaseComponentColorNameType extends string = ColorName | "rainbow",
  PropsType extends BaseButtonProps<BaseComponentColorNameType> =
    ButtonProps<BaseComponentColorNameType>,
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

  const assignedClassNames = [classNames["button"]];

  const utilityClassNames = classNameUtility.getUtilityClassNames<BaseComponentColorNameType>(props);
  if (utilityClassNames) {
    assignedClassNames.push(...utilityClassNames);
  }
  if (props.className) {
    assignedClassNames.push(props.className);
  }

  const colorNameCss: Interpolation<Theme> = props.colorName
    ? {
        ["--minolith-button-color-fore"]: `var(--minolith-color-${props.colorName}-button-fore)`,
        ["--minolith-button-color-back"]: `var(--minolith-color-${props.colorName}-button-back)`,
        ["--minolith-button-color-border"]: `var(--minolith-color-${props.colorName}-button-border)`,
        ["--minolith-button-focus-color-fore"]: `var(--minolith-color-${props.colorName}-button-focus-fore)`,
        ["--minolith-button-focus-color-back"]: `var(--minolith-color-${props.colorName}-button-focus-back)`,
        ["--minolith-button-focus-color-border"]: `var(--minolith-color-${props.colorName}-button-focus-border)`,
        ["--minolith-button-hover-color-fore"]: `var(--minolith-color-${props.colorName}-button-hover-fore)`,
        ["--minolith-button-hover-color-back"]: `var(--minolith-color-${props.colorName}-button-hover-back)`,
        ["--minolith-button-hover-color-border"]: `var(--minolith-color-${props.colorName}-button-hover-border)`,
        ["--minolith-button-active-color-fore"]: `var(--minolith-color-${props.colorName}-button-active-fore)`,
        ["--minolith-button-active-color-back"]: `var(--minolith-color-${props.colorName}-button-active-back)`,
        ["--minolith-button-active-color-border"]: `var(--minolith-color-${props.colorName}-button-active-border)`,
        ["--minolith-button-disabled-color-fore"]: `var(--minolith-color-${props.colorName}-button-disabled-fore)`,
        ["--minolith-button-disabled-color-back"]: `var(--minolith-color-${props.colorName}-button-disabled-back)`,
        ["--minolith-button-disabled-color-border"]: `var(--minolith-color-${props.colorName}-button-disabled-border)`,
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
    <button
      {...assignedProps}
      className={assignedClassNames.join(" ")}
      css={css}
    />
  );
}
