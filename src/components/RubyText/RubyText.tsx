"use client";

import type { ReactElement } from "react";
import type { ColorName } from "../../types";
import { classNameUtility, emotionStyleUtility } from "../../utilities";
import classNames from "./RubyText.module.scss";
import type RubyTextProps from "./RubyTextProps";

export default function RubyText<
  BaseComponentColorNameType extends string = ColorName | "rainbow",
>(props: RubyTextProps<BaseComponentColorNameType>): ReactElement {
  const assignedProps = { ...props };
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
  const assignedClassNames: string[] = [classNames["element"]];

  const utilityClassNames = classNameUtility.getUtilityClassNames<BaseComponentColorNameType>(props);
  if (utilityClassNames) {
    assignedClassNames.push(...utilityClassNames);
  }
  if (props.className) {
    assignedClassNames.push(props.className);
  }
  const css = emotionStyleUtility.getEmotionCss<BaseComponentColorNameType>(props);
  return (
    <>
      <rp>(</rp>
      <rt
        {...assignedProps}
        className={assignedClassNames.join(" ")}
        css={css}
      />
      <rp>)</rp>
    </>
  );
}
