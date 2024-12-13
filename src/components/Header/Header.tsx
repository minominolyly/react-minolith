import { classNameUtility } from "../../utilities";
import classNames from "./Header.module.scss";
import HeaderProps from "./HeaderProps";

export default function Header(props: HeaderProps): JSX.Element {
  const assignedProps = { ...props };
  delete assignedProps["colorName"];
  delete assignedProps["isSticky"];
  //#region BaseComponentProps
  delete assignedProps["fore"];
  delete assignedProps["back"];
  delete assignedProps["border"];
  delete assignedProps["highlighter"];
  delete assignedProps["spacing"];
  //#endregion BaseComponentProps

  const assignedClassNames: string[] = [classNames["header"]];
  props.colorName &&
    assignedClassNames.push(classNames[`is-${props.colorName}`]);
  props.isSticky && assignedClassNames.push(classNames[`is-sticky`]);
  assignedClassNames.push(...classNameUtility.getUtilityClassNames(props));
  props.className && assignedClassNames.push(props.className);

  return <header {...assignedProps} className={assignedClassNames.join(" ")} />;
}
