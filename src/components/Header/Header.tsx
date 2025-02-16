import { classNameUtility } from "../../utilities";
import classNames from "./Header.module.scss";
import HeaderProps from "./HeaderProps";

export default function Header(props: HeaderProps): React.ReactElement {
  const assignedProps = { ...props };
  delete assignedProps["colorName"];
  delete assignedProps["isSticky"];
  delete assignedProps["isFixed"];
  //#region BaseComponentProps
  delete assignedProps["fore"];
  delete assignedProps["back"];
  delete assignedProps["highlighter"];
  delete assignedProps["border"];
  delete assignedProps["positioning"];
  delete assignedProps["sizing"];
  delete assignedProps["spacing"];
  //#endregion BaseComponentProps

  const assignedClassNames: string[] = [classNames["header"]];
  if (props.colorName) {
    assignedClassNames.push(classNames[`is-${props.colorName}`]);
  }

  if (props.isSticky) {
    assignedClassNames.push(classNames[`is-sticky`]);
  }

  if (props.isFixed) {
    assignedClassNames.push(classNames[`is-fixed`]);
  }

  assignedClassNames.push(...classNameUtility.getUtilityClassNames(props));
  props.className && assignedClassNames.push(props.className);

  return <header {...assignedProps} className={assignedClassNames.join(" ")} />;
}
