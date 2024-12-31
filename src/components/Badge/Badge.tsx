import { classNameUtility } from "../../utilities";
import classNames from "./Badge.module.scss";
import BadgeProps from "./BadgeProps";

export default function Badge(props: BadgeProps): React.ReactElement {
  const assignedProps = { ...props };
  delete assignedProps["colorName"];
  delete assignedProps["isSmall"];
  delete assignedProps["isClickable"];
  delete assignedProps["as"];
  //#region BaseComponentProps
  delete assignedProps["fore"];
  delete assignedProps["back"];
  delete assignedProps["highlighter"];
  delete assignedProps["border"];
  delete assignedProps["positioning"];
  delete assignedProps["sizing"];
  delete assignedProps["spacing"];
  //#endregion BaseComponentProps

  const assignedClassNames = [classNames["badge"]];
  props.colorName &&
    assignedClassNames.push(classNames[`is-${props.colorName}`]);
  props.isSmall && assignedClassNames.push(classNames[`is-small`]);
  props.isClickable && assignedClassNames.push(classNames[`is-clickable`]);
  assignedClassNames.push(...classNameUtility.getUtilityClassNames(props));
  props.className && assignedClassNames.push(props.className);

  return props.as ? (
    <props.as {...assignedProps} className={assignedClassNames.join(" ")} />
  ) : (
    <span {...assignedProps} className={assignedClassNames.join(" ")} />
  );
}
