"use client";

import type { ReactElement } from "react";
import type { ColorName, SemanticColorName } from "../../types";
import { classNameUtility, emotionStyleUtility } from "../../utilities";
import classNames from "./Container.module.scss";
import type ContainerProps from "./ContainerProps";
import type { Interpolation, Theme } from "@emotion/react";

export default function Container<
  BaseComponentColorNameType extends string =
    | ColorName
    | SemanticColorName
    | "rainbow",
>(props: ContainerProps<BaseComponentColorNameType>): ReactElement {
  const assignedProps = { ...props };
  delete assignedProps["isFluid"];
  delete assignedProps["gutter"];
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

  const assignedClassNames: string[] = [classNames["container"]];

  const propsClassNames: string[] = [];
  if (props.isFluid) {
    propsClassNames.push(classNames["is-fluid"]);
  }

  assignedClassNames.push(...propsClassNames);

  const utilityClassNames =
    classNameUtility.getUtilityClassNames<BaseComponentColorNameType>(props);
  if (utilityClassNames) {
    assignedClassNames.push(...utilityClassNames);
  }
  if (props.className) {
    assignedClassNames.push(props.className);
  }

  const gutterCss = emotionStyleUtility.getContainerGutterCss(props.gutter);

  const optionalCss = { ...gutterCss };

  const css = emotionStyleUtility.getEmotionCss<BaseComponentColorNameType>(
    props,
    optionalCss,
  );

  return (
    <div
      {...assignedProps}
      className={assignedClassNames.join(" ")}
      css={css}
    />
  );
}
