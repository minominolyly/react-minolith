import { classNameUtility } from "../../utilities";
import classNames from "./Hamburger.module.scss";
import HamburgerProps from "./HamburgerProps";

export default function Hamburger(props: HamburgerProps): JSX.Element {
  const assignedProps = { ...props };
  delete assignedProps["isActive"];
  delete assignedProps["crownInner"];
  delete assignedProps["heelInner"];
  //#region BaseComponentProps
  delete assignedProps["fore"];
  delete assignedProps["back"];
  delete assignedProps["border"];
  delete assignedProps["highlighter"];
  delete assignedProps["spacing"];
  //#endregion BaseComponentProps

  const assignedClassNames = [classNames["hamburger"]];
  props.isActive && assignedClassNames.push(classNames["is-active"]);
  assignedClassNames.push(...classNameUtility.getUtilityClassNames(props));
  props.className && assignedClassNames.push(props.className);

  return (
    <div
      {...assignedProps}
      role="button"
      className={assignedClassNames.join(" ")}
    >
      <span className={classNames["crown"]}>{props.crownInner}</span>
      <span className={classNames["upperpatty"]} aria-hidden="true"></span>
      <span className={classNames["club"]} aria-hidden="true"></span>
      <span className={classNames["lowerpatty"]} aria-hidden="true"></span>
      <span className={classNames["heel"]}>{props.heelInner}</span>
    </div>
  );
}
