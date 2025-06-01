"use client";
import classNameUtility from "../../utilities/classNameUtility";
import emotionStyleUtility from "../../utilities/emotionStyleUtility/emotionStyleUtility";
import classNames from "./RubyText.module.scss";
import RubyTextProps from "./RubyTextProps";

export default function RubyText(props: RubyTextProps): React.ReactElement {
  const assignedProps = { ...props };
  //#region BaseComponentProps
  delete assignedProps["fore"];
  delete assignedProps["back"];
  delete assignedProps["highlighter"];
  delete assignedProps["border"];
  delete assignedProps["positioning"];
  delete assignedProps["sizing"];
  delete assignedProps["spacing"];
  delete assignedProps["emotionCss"];
  //#endregion BaseComponentProps

  const assignedClassNames: string[] = [classNames["element"]];
  assignedClassNames.push(...classNameUtility.getUtilityClassNames(props));
  props.className && assignedClassNames.push(props.className);

  const css = emotionStyleUtility.getEmotionCss(props);

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
