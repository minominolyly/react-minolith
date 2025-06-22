"use client";
import { useContext } from "react";
import MinolithColorSchemeContext from "../../contexts/MinolithColorSchemeContext";
import classNameUtility from "../../utilities/classNameUtility";
import emotionStyleUtility from "../../utilities/emotionStyleUtility";
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
  delete assignedProps["css"];
  //#endregion BaseComponentProps
  const assignedClassNames: string[] = [classNames["nav-menu"]];

  if (props.isActive) {
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
      className={assignedClassNames.join(" ")}
      css={css}
    />
  );
}
