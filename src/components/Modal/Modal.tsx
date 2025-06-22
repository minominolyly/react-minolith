"use client";
import { useContext } from "react";
import MinolithColorSchemeContext from "../../contexts/MinolithColorSchemeContext";
import classNameUtility from "../../utilities/classNameUtility";
import emotionStyleUtility from "../../utilities/emotionStyleUtility";
import classNames from "./Modal.module.scss";
import ModalProps from "./ModalProps";

export default function Modal(props: ModalProps): React.ReactElement {
  const assignedProps = { ...props };
  delete assignedProps["isActive"];
  delete assignedProps["colorName"];
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
  const assignedClassNames = [classNames["modal"]];
  if (props.isActive) {
    assignedClassNames.push(classNames["is-active"]);
  }
  if (props.colorName) {
    assignedClassNames.push(classNames[`is-${props.colorName}`]);
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
