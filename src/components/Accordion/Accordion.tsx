"use client";

import type { Interpolation, Theme } from "@emotion/react";
import type { ReactElement } from "react";
import type { ColorName } from "../../types";
import { classNameUtility, emotionStyleUtility } from "../../utilities";
import classNames from "./Accordion.module.scss";
import type AccordionProps from "./AccordionProps";

export default function Accordion<
  BaseComponentColorNameType extends string = ColorName | "rainbow",
>(props: AccordionProps<BaseComponentColorNameType>): ReactElement {
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

  const assignedClassNames = [classNames["accordion"]];

  const colorNameCss: Interpolation<Theme> = props.colorName
    ? {
        ["--minolith-accordion-color-fore"]: `var(--minolith-color-${props.colorName}-accordion-fore)`,
        ["--minolith-accordion-color-back"]: `var(--minolith-color-${props.colorName}-accordion-back)`,
        ["--minolith-accordion-color-border"]: `var(--minolith-color-${props.colorName}-accordion-border)`,
        ["--minolith-accordion-summary-color-fore"]: `var(--minolith-color-${props.colorName}-accordion-summary-fore)`,
        ["--minolith-accordion-summary-color-back"]: `var(--minolith-color-${props.colorName}-accordion-summary-back)`,
        ["--minolith-accordion-summary-color-border"]: `var(--minolith-color-${props.colorName}-accordion-summary-border)`,
        ["--minolith-accordion-details-color-fore"]: `var(--minolith-color-${props.colorName}-accordion-details-fore)`,
        ["--minolith-accordion-details-color-back"]: `var(--minolith-color-${props.colorName}-accordion-details-back)`,
        ["--minolith-accordion-details-color-border"]: `var(--minolith-color-${props.colorName}-accordion-details-border)`,
        ["--minolith-accordion-summary-color-focus-back"]: `var(--minolith-color-${props.colorName}-accordion-summary-focus-back)`,
        ["--minolith-accordion-summary-color-focus-border"]: `var(--minolith-color-${props.colorName}-accordion-summary-focus-border)`,
        ["--minolith-accordion-summary-color-hover-back"]: `var(--minolith-color-${props.colorName}-accordion-summary-hover-back)`,
        ["--minolith-accordion-summary-color-hover-border"]: `var(--minolith-color-${props.colorName}-accordion-summary-hover-border)`,
        ["--minolith-accordion-summary-color-active-back"]: `var(--minolith-color-${props.colorName}-accordion-summary-active-back)`,
        ["--minolith-accordion-summary-color-active-border"]: `var(--minolith-color-${props.colorName}-accordion-summary-active-border)`,
        ["--minolith-accordion-summary-color-disabled-back"]: `var(--minolith-color-${props.colorName}-accordion-summary-disabled-back)`,
        ["--minolith-accordion-summary-color-disabled-border"]: `var(--minolith-color-${props.colorName}-accordion-summary-active-border)`,
      }
    : undefined;

  const utilityClassNames = classNameUtility.getUtilityClassNames<BaseComponentColorNameType>(props);
  if (utilityClassNames) {
    assignedClassNames.push(...utilityClassNames);
  }
  if (props.className) {
    assignedClassNames.push(props.className);
  }

  const css = emotionStyleUtility.getEmotionCss<BaseComponentColorNameType>(props, colorNameCss);

  return props.as ? (
    <props.as
      {...assignedProps}
      className={assignedClassNames.join(" ")}
      css={css}
    />
  ) : (
    <details
      {...assignedProps}
      className={assignedClassNames.join(" ")}
      css={css}
    />
  );
}
