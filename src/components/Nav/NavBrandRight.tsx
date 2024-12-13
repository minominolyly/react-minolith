import { classNameUtility } from "../../utilities";
import classNames from "./NavBrandRight.module.scss";
import NavBrandRightProps from "./NavBrandRightProps";

export default function NavBrandRight(props: NavBrandRightProps): JSX.Element {
  const assignedProps = { ...props };
  //#region BaseComponentProps
  delete assignedProps["fore"];
  delete assignedProps["back"];
  delete assignedProps["border"];
  delete assignedProps["highlighter"];
  delete assignedProps["spacing"];
  //#endregion BaseComponentProps

  const assignedClassNames: string[] = [classNames["nav-brand-right"]];
  assignedClassNames.push(...classNameUtility.getUtilityClassNames(props));
  props.className && assignedClassNames.push(props.className);

  return (
    <div {...assignedProps} className={assignedClassNames.join(" ")} />
  )
}