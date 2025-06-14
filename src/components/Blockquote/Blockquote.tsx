"use client";
import classNameUtility from "../../utilities/classNameUtility";
import emotionStyleUtility from "../../utilities/emotionStyleUtility";
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
  delete assignedProps["css"];
  //#endregion BaseComponentProps
  const assignedClassNames: string[] = [classNames["blockquote"]];

  if (props.colorName) {
    assignedClassNames.push(classNames[`is-${props.colorName}`]);
  }

  if (props.isItalic) {
    assignedClassNames.push(classNames[`is-italic`]);
  }

  if (props.hasQuote) {
    if (typeof props.hasQuote === "boolean") {
      if (props.hasQuote) {
        assignedClassNames.push(classNames[`has-quote`]);
      }
    } else {
      if (props.hasQuote.before) {
        assignedClassNames.push(classNames[`has-quote-before`]);
      }

      if (props.hasQuote.after) {
        assignedClassNames.push(classNames[`has-quote-after`]);
      }
    }
  }

  const utilityClassNames = classNameUtility.getUtilityClassNames(props);
  if (utilityClassNames) {
    assignedClassNames.push(...utilityClassNames);
  }

  if (props.className) {
    assignedClassNames.push(props.className);
  }

  const css = emotionStyleUtility.getEmotionCss(props);

  return (
    <blockquote
      {...assignedProps}
      className={assignedClassNames.join(" ")}
      css={css}
    />
  );
}
