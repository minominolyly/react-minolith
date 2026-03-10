"use client";
import { ReactElement } from "react";
import classNameUtility from "../../utilities/classNameUtility";
import emotionStyleUtility from "../../utilities/emotionStyleUtility";
import classNames from "./Input.module.scss";
import InputProps from "./InputProps";
import { Interpolation, Theme } from "@emotion/react";

export default function Input(props: InputProps): ReactElement {
  const assignedProps = { ...props };
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
  delete assignedProps["as"];
  //#endregion BaseComponentProps
  const assignedClassNames: string[] = [classNames["input"]];

  const utilityClassNames = classNameUtility.getUtilityClassNames(props);
  if (utilityClassNames) {
    assignedClassNames.push(...utilityClassNames);
  }

  if (props.className) {
    assignedClassNames.push(props.className);
  }

  const colorNameCss: Interpolation<Theme> = props.colorName
    ? {
        ["--minolith-input-color-fore"]: `var(--minolith-color-${props.colorName}-input-fore)`,
        ["--minolith-input-color-back"]: `var(--minolith-color-${props.colorName}-input-back)`,
        ["--minolith-input-color-border"]: `var(--minolith-color-${props.colorName}-input-border)`,
        ["--minolith-input-color-placeholder"]: `var(--minolith-color-${props.colorName}-input-placeholder)`,
        ["--minolith-input-focus-color-back"]: `var(--minolith-color-${props.colorName}-input-focus-back)`,
        ["--minolith-input-focus-color-border"]: `var(--minolith-color-${props.colorName}-input-focus-border)`,
        ["--minolith-input-disabled-color-back"]: `var(--minolith-color-${props.colorName}-input-disabled-back)`,
        ["--minolith-input-disabled-color-border"]: `var(--minolith-color-${props.colorName}-input-disabled-border)`,
      }
    : undefined;

  const borderRadiusCss: Interpolation<Theme> = props.borderRadius
    ? {
        ["--minolith-input-border-radius"]: `var(--minolith-border-radius-${props.borderRadius})`,
      }
    : undefined;

  const borderWidthCss: Interpolation<Theme> = props.borderWidth
    ? {
        ["--minolith-input-border-width"]: `var(--minolith-border-width-${props.borderWidth})`,
      }
    : undefined;

  const optionalCss = {
    ...colorNameCss,
    ...borderRadiusCss,
    ...borderWidthCss,
  };

  const css = emotionStyleUtility.getEmotionCss(props, optionalCss);

  return props.as ? (
    <props.as
      {...assignedProps}
      className={assignedClassNames.join(" ")}
      css={css}
    />
  ) : (
    <input
      {...assignedProps}
      className={assignedClassNames.join(" ")}
      css={css}
    />
  );
}
