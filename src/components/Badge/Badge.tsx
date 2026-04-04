"use client";

import type { Interpolation, Theme } from "@emotion/react";
import type { ReactElement } from "react";
import type { ColorName, SemanticColorName } from "../../types";
import { classNameUtility, emotionStyleUtility } from "../../utilities";
import classNames from "./Badge.module.scss";
import type BadgeProps from "./BadgeProps";

export default function Badge<
  BaseComponentColorNameType extends string =
    | ColorName
    | SemanticColorName
    | "rainbow",
>(props: BadgeProps<BaseComponentColorNameType>): ReactElement {
  const assignedProps = { ...props };
  delete assignedProps["colorName"];
  delete assignedProps["isSmall"];
  delete assignedProps["isClickable"];
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
  const assignedClassNames = [classNames["badge"]];

  if (props.isSmall) {
    assignedClassNames.push(classNames[`is-small`]);
  }

  if (props.isClickable) {
    assignedClassNames.push(classNames[`is-clickable`]);
  }

  const utilityClassNames = classNameUtility.getUtilityClassNames<BaseComponentColorNameType>(props);
  if (utilityClassNames) {
    assignedClassNames.push(...utilityClassNames);
  }
  if (props.className) {
    assignedClassNames.push(props.className);
  }

  const colorNameCss: Interpolation<Theme> = props.colorName
    ? {
        ["--minolith-badge-color-fore"]: `var(--minolith-color-${props.colorName}-badge-fore)`,
        ["--minolith-badge-color-back"]: `var(--minolith-color-${props.colorName}-badge-back)`,
        ["--minolith-badge-color-border"]: `var(--minolith-color-${props.colorName}-badge-border)`,
        ["--minolith-badge-color-focus-fore"]: `var(--minolith-color-${props.colorName}-badge-focus-fore)`,
        ["--minolith-badge-color-focus-back"]: `var(--minolith-color-${props.colorName}-badge-focus-back)`,
        ["--minolith-badge-color-focus-border"]: `var(--minolith-color-${props.colorName}-badge-focus-border)`,
        ["--minolith-badge-color-hover-fore"]: `var(--minolith-color-${props.colorName}-badge-hover-fore)`,
        ["--minolith-badge-color-hover-back"]: `var(--minolith-color-${props.colorName}-badge-hover-back)`,
        ["--minolith-badge-color-hover-border"]: `var(--minolith-color-${props.colorName}-badge-hover-border)`,
        ["--minolith-badge-color-active-fore"]: `var(--minolith-color-${props.colorName}-badge-active-fore)`,
        ["--minolith-badge-color-active-back"]: `var(--minolith-color-${props.colorName}-badge-active-back)`,
        ["--minolith-badge-color-active-border"]: `var(--minolith-color-${props.colorName}-badge-active-border)`,
        ["--minolith-badge-color-disabled-fore"]: `var(--minolith-color-${props.colorName}-badge-disabled-fore)`,
        ["--minolith-badge-color-disabled-back"]: `var(--minolith-color-${props.colorName}-badge-disabled-back)`,
        ["--minolith-badge-color-disabled-border"]: `var(--minolith-color-${props.colorName}-badge-disabled-border)`,
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
    <span
      {...assignedProps}
      className={assignedClassNames.join(" ")}
      css={css}
    />
  );
}
