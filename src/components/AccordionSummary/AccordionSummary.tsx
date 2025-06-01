"use client";
import classNameUtility from "../../utilities/classNameUtility";
import emotionStyleUtility from "../../utilities/emotionStyleUtility/emotionStyleUtility";
import AccordionSummaryProps from "./AccordionSummaryProps";
import classNames from "./AccordionSummary.module.scss";

export default function AccordionSummary(
  props: AccordionSummaryProps
): React.ReactElement {
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
  //#endregion BaseComponentProps

  const assignedClassNames = [classNames["accordion-summary"]];
  assignedClassNames.push(...classNameUtility.getUtilityClassNames(props));
  props.className && assignedClassNames.push(props.className);

  const css = emotionStyleUtility.getEmotionCss(props);

  return (
    <summary
      {...assignedProps}
      className={assignedClassNames.join(" ")}
      css={css}
    />
  );
}
