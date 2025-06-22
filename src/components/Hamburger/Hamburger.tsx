"use client";
import { useContext } from "react";
import MinolithColorSchemeContext from "../../contexts/MinolithColorSchemeContext";
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
  if (props.colorName) {
    assignedClassNames.push(classNames[`is-${props.colorName}`]);
  }

  if (props.colorName) {
    assignedClassNames.push(classNames["is-active"]);
  }

  const utilityClassNames = classNameUtility.getUtilityClassNames(props);
  if (utilityClassNames) {
    assignedClassNames.push(...utilityClassNames);
  }
  if (props.className) {
    assignedClassNames.push(props.className);
  }
  const colorScheme = useContext(MinolithColorSchemeContext);

  const css = emotionStyleUtility.getEmotionCss(props, colorScheme);
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
