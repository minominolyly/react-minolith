"use client";
import { ReactElement, useContext } from "react";
import MinolithColorSchemeContext from "../../contexts/MinolithColorSchemeContext";
import classNameUtility from "../../utilities/classNameUtility";
import emotionStyleUtility from "../../utilities/emotionStyleUtility";
import classNames from "./Ruby.module.scss";
import RubyProps from "./RubyProps";
import RubyText from "../RubyText";

export default function Ruby(props: RubyProps): ReactElement {
  const assignedProps = { ...props };
  delete assignedProps["rubyText"];
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
  const assignedClassNames: string[] = ["ruby", classNames["element"]];

  const utilityClassNames = classNameUtility.getUtilityClassNames(props);
  if (utilityClassNames) {
    assignedClassNames.push(...utilityClassNames);
  }
  if (props.className) {
    assignedClassNames.push(props.className);
  }
  const colorScheme = useContext(MinolithColorSchemeContext);

  const css = emotionStyleUtility.getEmotionCss(props, colorScheme);
  const assignedRubyTextClassNames: string[] = [
    "ruby-text",
    classNames["element"],
  ];

  if (props.rubyText) {
    assignedRubyTextClassNames.push(
      ...classNameUtility.getUtilityClassNames(props),
    );
    if (props.className) {
      assignedRubyTextClassNames.push(props.className);
    }
  }

  return props.as ? (
    <props.as
      {...assignedProps}
      className={assignedClassNames.join(" ")}
      css={css}
    >
      {props.children}
      {props.rubyText ? (
        <RubyText className={assignedRubyTextClassNames.join(" ")}>
          {props.rubyText}
        </RubyText>
      ) : (
        <></>
      )}
    </props.as>
  ) : (
    <ruby {...assignedProps} className={assignedClassNames.join(" ")} css={css}>
      {props.children}
      {props.rubyText ? (
        <RubyText className={assignedRubyTextClassNames.join(" ")}>
          {props.rubyText}
        </RubyText>
      ) : (
        <></>
      )}
    </ruby>
  );
}
