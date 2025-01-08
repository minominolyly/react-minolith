import { classNameUtility } from "../../utilities";
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
  //#endregion BaseComponentProps

  const assignedClassNames: string[] = [classNames["paragraph"]];
  assignedClassNames.push(...classNameUtility.getUtilityClassNames(props));
  props.className && assignedClassNames.push(props.className);

  return <p {...assignedProps} className={assignedClassNames.join(" ")} />;
}
