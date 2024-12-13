import { classNameUtility } from "../../utilities";
import classNames from "./Progress.module.scss";
import ProgressProps from "./ProgressProps";

export default function Progress(props: ProgressProps): JSX.Element {
  const assignedProps = { ...props };
  delete assignedProps["colorName"];
  // //#region BaseComponentProps
  delete assignedProps["fore"];
  delete assignedProps["back"];
  delete assignedProps["border"];
  delete assignedProps["highlighter"];
  delete assignedProps["spacing"];
  //#endregion BaseComponentProps

  const assignedClassNames = [classNames["progress"]];
  assignedClassNames.push(classNames[`is-${props.colorName}`]);
  assignedClassNames.push(classNames[`is-${props.percentage}-percent`]);
  assignedClassNames.push(...classNameUtility.getUtilityClassNames(props));
  props.className && assignedClassNames.push(props.className);

  return <div {...assignedProps} className={assignedClassNames.join(" ")} />;
}
