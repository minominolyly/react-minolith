"use client";

import type { ReactElement } from "react";
import type { ColorName } from "../../types";
import { classNameUtility, emotionStyleUtility } from "../../utilities";
import type BaseRubyWordProps from "./BaseRubyWordProps";
import type RubyWordProps from "./RubyWordProps";
import RubyParentheses from "../RubyParentheses";
import RubyText from "../RubyText";
import Ruby from "../Ruby";

export default function RubyWord<
  BaseComponentColorNameType extends string = ColorName | "rainbow",
  PropsType extends BaseRubyWordProps<BaseComponentColorNameType> =
    RubyWordProps<BaseComponentColorNameType>,
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

  const assignedClassNames: string[] = [];

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

  return (
    <Ruby<BaseComponentColorNameType>
      {...assignedProps}
      className={assignedClassNames.join(" ")}
      css={css}
    >
      {props.children}
      {props.rubyText ? (
        <>
          <RubyParentheses<BaseComponentColorNameType>>(</RubyParentheses>
          <RubyText<BaseComponentColorNameType>>{props.rubyText}</RubyText>
          <RubyParentheses<BaseComponentColorNameType>>)</RubyParentheses>
        </>
      ) : (
        <></>
      )}
    </Ruby>
  );
}
