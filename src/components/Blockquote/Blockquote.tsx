"use client";
import classNameUtility from "../../utilities/classNameUtility";
import emotionStyleUtility from "../../utilities/emotionStyleUtility/emotionStyleUtility";
import classNames from "./Blockquote.module.scss";
import BlockquoteProps from "./BlockquoteProps";

export default function Blockquote(props: BlockquoteProps): React.ReactElement {
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
  delete assignedProps["emotionCss"];
  //#endregion BaseComponentProps

  const assignedClassNames: string[] = [classNames["blockquote"]];
  props.colorName &&
    assignedClassNames.push(classNames[`is-${props.colorName}`]);
  props.isItalic && assignedClassNames.push(classNames[`is-italic`]);
  if (props.hasQuote) {
    if (typeof props.hasQuote === "boolean") {
      props.hasQuote && assignedClassNames.push(classNames[`has-quote`]);
    } else {
      props.hasQuote.before &&
        assignedClassNames.push(classNames[`has-quote-before`]);
      props.hasQuote.after &&
        assignedClassNames.push(classNames[`has-quote-after`]);
    }
  }
  assignedClassNames.push(...classNameUtility.getUtilityClassNames(props));
  props.className && assignedClassNames.push(props.className);

  const css = emotionStyleUtility.getEmotionCss(props);

  return (
    <blockquote
      {...assignedProps}
      className={assignedClassNames.join(" ")}
      css={css}
    />
  );
}
