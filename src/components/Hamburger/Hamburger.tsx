"use client";
import classNameUtility from "../../utilities/classNameUtility";
import emotionStyleUtility from "../../utilities/emotionStyleUtility";
import classNames from "./Hamburger.module.scss";
import HamburgerProps from "./HamburgerProps";

export default function Hamburger(props: HamburgerProps): React.ReactElement {
  const assignedProps = { ...props };
  delete assignedProps["colorName"];
  delete assignedProps["isActive"];
  delete assignedProps["crownInner"];
  delete assignedProps["heelInner"];
  //#region BaseComponentProps
  delete assignedProps["fore"];
  delete assignedProps["back"];
  delete assignedProps["highlighter"];
  delete assignedProps["border"];
  delete assignedProps["positioning"];
  delete assignedProps["sizing"];
  delete assignedProps["spacing"];
  delete assignedProps["css"];
  //#endregion BaseComponentProps

  const assignedClassNames = [classNames["hamburger"]];
  props.colorName &&
    assignedClassNames.push(classNames[`is-${props.colorName}`]);
  props.isActive && assignedClassNames.push(classNames["is-active"]);
  assignedClassNames.push(...classNameUtility.getUtilityClassNames(props));
  props.className && assignedClassNames.push(props.className);

  const css = emotionStyleUtility.getEmotionCss(props);

  return (
    <div
      {...assignedProps}
      role="button"
      className={assignedClassNames.join(" ")}
      css={css}
    >
      <span className={classNames["crown"]}>{props.crownInner}</span>
      <span className={classNames["upperpatty"]} aria-hidden="true"></span>
      <span className={classNames["club"]} aria-hidden="true"></span>
      <span className={classNames["lowerpatty"]} aria-hidden="true"></span>
      <span className={classNames["heel"]}>{props.heelInner}</span>
    </div>
  );
}
