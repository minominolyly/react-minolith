"use client";
import { classNameUtility, minolithStyleUtility } from "../../utilities";
import classNames from "./Paragraph.module.scss";
import ParagraphProps from "./ParagraphProps";

export default function Paragraph(props: ParagraphProps): React.ReactElement {
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

  const assignedClassNames: string[] = [classNames["paragraph"]];
  assignedClassNames.push(...classNameUtility.getUtilityClassNames(props));
  props.className && assignedClassNames.push(props.className);

  const css = minolithStyleUtility.getEmotionCss(props);

  return (
    <p {...assignedProps} className={assignedClassNames.join(" ")} css={css} />
  );
}
