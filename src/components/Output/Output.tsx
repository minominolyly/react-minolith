"use client";

import type { ReactElement } from "react";
import type { ColorName } from "../../types";
import { classNameUtility, emotionStyleUtility } from "../../utilities";
import classNames from "./Output.module.scss";
import type OutputProps from "./OutputProps";
import type BaseOutputProps from "./BaseOutputProps";

export default function Output<
  BaseComponentColorNameType extends string = ColorName | "rainbow",
  PropsType extends BaseOutputProps<BaseComponentColorNameType> =
    OutputProps<BaseComponentColorNameType>,
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
    css: undefined,
    as: undefined,
  };

  //#region BaseComponentProps
  delete assignedProps["fore"];
  delete assignedProps["back"];
  delete assignedProps["highlighter"];
  delete assignedProps["border"];
  delete assignedProps["positioning"];
  delete assignedProps["sizing"];
  delete assignedProps["spacing"];
  delete assignedProps["css"];
  delete assignedProps["className"];
  delete assignedProps["as"];
  //#endregion BaseComponentProps

  const assignedClassNames: string[] = [classNames["element"]];

  const utilityClassNames =
    classNameUtility.getUtilityClassNames<BaseComponentColorNameType>(props);
  if (utilityClassNames) {
    assignedClassNames.push(...utilityClassNames);
  }
  if (props.className) {
    assignedClassNames.push(props.className);
  }

  const css =
    emotionStyleUtility.getEmotionCss<BaseComponentColorNameType>(props);

  return props.as ? (
    <props.as
      {...assignedProps}
      className={assignedClassNames.join(" ")}
      css={css}
    />
  ) : (
    <output
      {...assignedProps}
      className={assignedClassNames.join(" ")}
      css={css}
    />
  );
}
