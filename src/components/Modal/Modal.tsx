import { classNameUtility } from "../../utilities";
import classNames from "./Modal.module.scss";
import ModalProps from "./ModalProps";

export default function Modal(props: ModalProps): React.ReactElement {
  const assignedProps = { ...props };
  delete assignedProps["isActive"];
  delete assignedProps["colorName"];
  //#region BaseComponentProps
  delete assignedProps["fore"];
  delete assignedProps["back"];
  delete assignedProps["highlighter"];
  delete assignedProps["border"];
  delete assignedProps["positioning"];
  delete assignedProps["sizing"];
  delete assignedProps["spacing"];
  //#endregion BaseComponentProps

  const assignedClassNames = [classNames["modal"]];
  props.isActive && assignedClassNames.push(classNames["is-active"]);
  props.colorName && assignedClassNames.push(classNames[`is-${props.colorName}`]);
  assignedClassNames.push(...classNameUtility.getUtilityClassNames(props));
  props.className && assignedClassNames.push(props.className);

  return <div {...assignedProps} className={assignedClassNames.join(" ")} />;
}
