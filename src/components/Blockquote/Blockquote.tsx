"use client";

import type { Interpolation, Theme } from "@emotion/react";
import type { ReactElement } from "react";
import type { ColorName, SemanticColorName } from "../../types";
import { classNameUtility, emotionStyleUtility } from "../../utilities";
import classNames from "./Blockquote.module.scss";
import type BlockquoteProps from "./BlockquoteProps";

export default function Blockquote<
  BaseComponentColorNameType extends string =
    | ColorName
    | SemanticColorName
    | "rainbow",
>(props: BlockquoteProps<BaseComponentColorNameType>): ReactElement {
  const assignedProps = { ...props };
  delete assignedProps["colorName"];
  delete assignedProps["isItalic"];
  delete assignedProps["hasQuote"];
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
  const assignedClassNames: string[] = [classNames["blockquote"]];

  if (props.isItalic) {
    assignedClassNames.push(classNames[`is-italic`]);
  }

  if (props.hasQuote) {
    if (typeof props.hasQuote === "boolean") {
      if (props.hasQuote) {
        assignedClassNames.push(classNames[`has-quote`]);
      }
    } else {
      if (props.hasQuote.before) {
        assignedClassNames.push(classNames[`has-quote-before`]);
      }

      if (props.hasQuote.after) {
        assignedClassNames.push(classNames[`has-quote-after`]);
      }
    }
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
        ["--minolith-blockquote-color-fore"]: `var(--minolith-color-${props.colorName}-blockquote-fore)`,
        ["--minolith-blockquote-color-back"]: `var(--minolith-color-${props.colorName}-blockquote-back)`,
        ["--minolith-blockquote-color-border"]: `var(--minolith-color-${props.colorName}-blockquote-border)`,
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
    <blockquote
      {...assignedProps}
      className={assignedClassNames.join(" ")}
      css={css}
    />
  );
}
