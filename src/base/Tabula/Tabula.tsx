"use client";

import type { ReactElement } from "react";
import type { ColorName, SemanticColorName } from "../../types";
import { classNameUtility, emotionStyleUtility } from "../../utilities";
import classNames from "./Tabula.module.scss";
import type TabulaProps from "./TabulaProps";

export default function Tabula<
  BaseComponentColorNameType extends string =
    | ColorName
    | SemanticColorName
    | "rainbow",
>(props: TabulaProps<BaseComponentColorNameType>): ReactElement {
  const assignedProps = { ...props };
  delete assignedProps["colorScheme"];
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

  const assignedClassNames = [classNames["tabula"]];
  const utilityClassNames =
    classNameUtility.getUtilityClassNames<BaseComponentColorNameType>(props);
  if (utilityClassNames) {
    assignedClassNames.push(...utilityClassNames);
  }
  if (props.className) {
    assignedClassNames.push(props.className);
  }

  const colorScheme = props.colorScheme
    ? {
        colorScheme: props.colorScheme,
      }
    : undefined;

  const css = emotionStyleUtility.getEmotionCss<BaseComponentColorNameType>(
    props,
    colorScheme,
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
