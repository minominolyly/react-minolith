"use client";
import classNameUtility from "../../utilities/classNameUtility";
import emotionStyleUtility from "../../utilities/emotionStyleUtility";
import classNames from "./Ruby.module.scss";
import RubyProps from "./RubyProps";
import RubyText from "../RubyText";

export default function Ruby(props: RubyProps): React.ReactElement {
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
  //#endregion BaseComponentProps
  const assignedClassNames: string[] = ["ruby", classNames["element"]];

  const utilityClassNames = classNameUtility.getUtilityClassNames(props);
  if (utilityClassNames) {
    assignedClassNames.push(...utilityClassNames);
  }
  if (props.className) {
    assignedClassNames.push(props.className);
  }
  const css = emotionStyleUtility.getEmotionCss(props);
  const assignedRubyTextClassNames: string[] = [
    "ruby-text",
    classNames["element"],
  ];

  if (props.rubyText) {
    assignedRubyTextClassNames.push(
      ...classNameUtility.getUtilityClassNames(props)
    );
    if (props.className) {
      assignedRubyTextClassNames.push(props.className);
    }
  }

  return (
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
