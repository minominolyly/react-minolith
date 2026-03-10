"use client";
import { ReactElement } from "react";
import classNameUtility from "../../utilities/classNameUtility";
import emotionStyleUtility from "../../utilities/emotionStyleUtility";
import classNames from "./Card.module.scss";
import CardProps from "./CardProps";
import { Interpolation, Theme } from "@emotion/react";

export default function Card(props: CardProps): ReactElement {
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
  const assignedClassNames = [classNames["card"]];

  const utilityClassNames = classNameUtility.getUtilityClassNames(props);
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

  const css = emotionStyleUtility.getEmotionCss(props, optionalCss);

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
