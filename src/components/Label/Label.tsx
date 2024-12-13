import { classNameUtility } from "../../utilities";
import classNames from "./Label.module.scss";
import LabelProps from "./LabelProps";

export default function Label(props: LabelProps): JSX.Element {
  const assignedProps = { ...props };

  const assignedClassNames: string[] = [classNames["label"]];
  assignedClassNames.push(...classNameUtility.getUtilityClassNames(props));
  props.className && assignedClassNames.push(props.className);

  return <label {...assignedProps} className={assignedClassNames.join(" ")} />;
}
