import { classNameUtility } from "../../utilities";
import AccordionSummaryProps from "./AccordionSummaryProps";
import classNames from "./AccordionSummary.module.scss";

export default function AccordionSummary(props: AccordionSummaryProps): React.ReactElement {
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

  const assignedClassNames = [classNames["accordion-summary"]];
  assignedClassNames.push(...classNameUtility.getUtilityClassNames(props));
  props.className && assignedClassNames.push(props.className);

  return <summary {...assignedProps} className={assignedClassNames.join(" ")} />;
}
