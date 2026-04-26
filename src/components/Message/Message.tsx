"use client";

import type { Interpolation, Theme } from "@emotion/react";
import type { ReactElement } from "react";
import type { ColorName } from "../../types";
import { classNameUtility, emotionStyleUtility } from "../../utilities";
import classNames from "./Message.module.scss";
import type MessageProps from "./MessageProps";
import type BaseMessageProps from "./BaseMessageProps";

export default function Message<
  BaseComponentColorNameType extends string = ColorName | "rainbow",
  PropsType extends BaseMessageProps<BaseComponentColorNameType> =
    MessageProps<BaseComponentColorNameType>,
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

  const assignedClassNames: string[] = [classNames["message"]];

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
        ["--minolith-message-color-fore"]: `var(--minolith-color-${props.colorName}-message-fore)`,
        ["--minolith-message-color-back"]: `var(--minolith-color-${props.colorName}-message-back)`,
        ["--minolith-message-color-border"]: `var(--minolith-color-${props.colorName}-message-border)`,
        ["--minolith-message-color-selection-fore"]: `var(--minolith-color-${props.colorName}-message-selection-fore)`,
        ["--minolith-message-color-selection-back"]: `var(--minolith-color-${props.colorName}-message-selection-back)`,
        ["--minolith-message-header-color-fore"]: `var(--minolith-color-${props.colorName}-message-header-fore)`,
        ["--minolith-message-header-color-back"]: `var(--minolith-color-${props.colorName}-message-header-back)`,
        ["--minolith-message-header-color-border"]: `var(--minolith-color-${props.colorName}-message-header-border)`,
        ["--minolith-message-body-color-fore"]: `var(--minolith-color-${props.colorName}-message-body-fore)`,
        ["--minolith-message-body-color-back"]: `var(--minolith-color-${props.colorName}-message-body-back)`,
        ["--minolith-message-body-color-border"]: `var(--minolith-color-${props.colorName}-message-body-border)`,
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
    <div
      {...assignedProps}
      className={assignedClassNames.join(" ")}
      css={css}
    />
  );
}
