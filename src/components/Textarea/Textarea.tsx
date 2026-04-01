"use client";

import type { Interpolation, Theme } from "@emotion/react";
import type { ReactElement } from "react";
import type { ColorName, SemanticColorName } from "../../types";
import { classNameUtility, emotionStyleUtility } from "../../utilities";
import classNames from "./Textarea.module.scss";
import type TextareaProps from "./TextareaProps";

export default function Textarea<
  BaseComponentColorNameType extends string =
    | ColorName
    | SemanticColorName
    | "rainbow",
>(props: TextareaProps<BaseComponentColorNameType>): ReactElement {
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

  if (props.colorName) {
    assignedClassNames.push(classNames[`is-${props.colorName}`]);
  }

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

  const optionalCss = {
    ...colorNameCss,
  };

  const css = emotionStyleUtility.getEmotionCss(props, optionalCss);

  return (
    <textarea
      {...assignedProps}
      className={assignedClassNames.join(" ")}
      css={css}
    />
  );
}
