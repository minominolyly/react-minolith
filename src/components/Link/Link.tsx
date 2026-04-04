"use client";

import type { Interpolation, Theme } from "@emotion/react";
import type { ReactElement } from "react";
import type { ColorName, SemanticColorName } from "../../types";
import { classNameUtility, emotionStyleUtility } from "../../utilities";
import classNames from "./Link.module.scss";
import type LinkProps from "./LinkProps";

export default function Link<
  BaseComponentColorNameType extends string =
    | ColorName
    | SemanticColorName
    | "rainbow",
>(props: LinkProps<BaseComponentColorNameType>): ReactElement {
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
  const assignedClassNames: string[] = [classNames["link"]];

  const utilityClassNames = classNameUtility.getUtilityClassNames<BaseComponentColorNameType>(props);
  if (utilityClassNames) {
    assignedClassNames.push(...utilityClassNames);
  }
  if (props.className) {
    assignedClassNames.push(props.className);
  }

  const colorNameCss: Interpolation<Theme> = props.colorName
    ? {
        ["--minolith-link-color-fore"]: `var(--minolith-color-${props.colorName}-link-fore, var(--minolith-color-${props.colorName}-fore))`,
        ["--minolith-link-color-visited-fore"]: `var(--minolith-color-${props.colorName}-link-visited-fore, var(--minolith-color-${props.colorName}-visited-fore))`,
        // ["--minolith-link-disabled-color-fore"]: `var(--minolith-color-${props.colorName}-link-disabled-fore)`,
        ["--minolith-link-color-selection-fore"]: `var(--minolith-color-${props.colorName}-link-selection-fore, var(--minolith-color-${props.colorName}-selection-fore))`,
        ["--minolith-link-color-selection-back"]: `var(--minolith-color-${props.colorName}-link-selection-back, var(--minolith-color-${props.colorName}-selection-back))`,
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
    <a {...assignedProps} className={assignedClassNames.join(" ")} css={css} />
  );
}
