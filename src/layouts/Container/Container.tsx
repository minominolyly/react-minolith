"use client";

import type { ReactElement } from "react";
import type { ColorName } from "../../types";
import { classNameUtility, emotionStyleUtility } from "../../utilities";
import type BaseContainerProps from "./BaseContainerProps";
import classNames from "./Container.module.scss";
import type ContainerProps from "./ContainerProps";

export default function Container<
  BaseComponentColorNameType extends string = ColorName | "rainbow",
  PropsType extends BaseContainerProps<BaseComponentColorNameType> =
    ContainerProps<BaseComponentColorNameType>,
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
  delete assignedProps["className"];
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
