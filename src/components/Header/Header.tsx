"use client";
import { useContext } from "react";
import MinolithColorSchemeContext from "../../contexts/MinolithColorSchemeContext";
import classNameUtility from "../../utilities/classNameUtility";
import emotionStyleUtility from "../../utilities/emotionStyleUtility";
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
  delete assignedProps["css"];
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
    <header
      {...assignedProps}
      className={assignedClassNames.join(" ")}
      css={css}
    />
  );
}
