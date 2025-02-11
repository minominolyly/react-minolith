import { classNameUtility } from "../../utilities";
import classNames from "./Gingham.module.scss";
import GinghamProps from "./GinghamProps";

export default function Gingham(props: GinghamProps): React.ReactElement {
  const assignedProps = { ...props };
  delete assignedProps["colorName"];
  delete assignedProps["degree"];
  //#region BaseComponentProps
  delete assignedProps["fore"];
  delete assignedProps["back"];
  delete assignedProps["highlighter"];
  delete assignedProps["border"];
  delete assignedProps["positioning"];
  delete assignedProps["sizing"];
  delete assignedProps["spacing"];
  //#endregion BaseComponentProps

  const assignedClassNames = [classNames["gingham"]];
  if (props.colorName) {
    assignedClassNames.push(classNames[`is-${props.colorName}`]);
  }
  if (props.degree) {
    assignedClassNames.push(classNames[`is-${props.degree}deg`]);
  }
  assignedClassNames.push(...classNameUtility.getUtilityClassNames(props));
  props.className && assignedClassNames.push(props.className);

  return (
    <div {...assignedProps} className={assignedClassNames.join(" ")} />
  );
}
