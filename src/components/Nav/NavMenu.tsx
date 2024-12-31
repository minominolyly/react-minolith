import { classNameUtility } from "../../utilities";
import classNames from "./NavMenu.module.scss";
import NavMenuProps from "./NavMenuProps";

export default function NavMenu(props: NavMenuProps): React.ReactElement {
  const assignedProps = { ...props };
  delete assignedProps["isActive"];
  //#region BaseComponentProps
  delete assignedProps["fore"];
  delete assignedProps["back"];
  delete assignedProps["highlighter"];
  delete assignedProps["border"];
  delete assignedProps["positioning"];
  delete assignedProps["sizing"];
  delete assignedProps["spacing"];
  //#endregion BaseComponentProps

  const assignedClassNames: string[] = [classNames["nav-menu"]];
  props.isActive && assignedClassNames.push(classNames["is-active"]);
  assignedClassNames.push(...classNameUtility.getUtilityClassNames(props));
  props.className && assignedClassNames.push(props.className);

  return (
    <div {...assignedProps} className={assignedClassNames.join(" ")} />
  )
}
