"use client";
import { classNameUtility, minolithStyleUtility } from "../../utilities";
import classNames from "./Section.module.scss";
import SectionProps from "./SectionProps";

export default function Section(props: SectionProps): React.ReactElement {
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

  const assignedClassNames: string[] = [classNames["element"]];
  assignedClassNames.push(...classNameUtility.getUtilityClassNames(props));
  props.className && assignedClassNames.push(props.className);

  const css = minolithStyleUtility.getEmotionCss(props);

  return (
    <section
      {...assignedProps}
      className={assignedClassNames.join(" ")}
      css={css}
    />
  );
}
