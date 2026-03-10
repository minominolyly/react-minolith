"use client";
import { ReactElement } from "react";
import classNameUtility from "../../utilities/classNameUtility";
import emotionStyleUtility from "../../utilities/emotionStyleUtility";
import classNames from "./Modal.module.scss";
import ModalProps from "./ModalProps";
import { Interpolation, Theme } from "@emotion/react";

export default function Modal(props: ModalProps): ReactElement {
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
  delete assignedProps["as"];
  //#endregion BaseComponentProps
  const assignedClassNames = [classNames["modal"]];
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

  const colorNameCss: Interpolation<Theme> = props.colorName
    ? {
        ["--minolith-modal-color-back"]: `var(--minolith-color-${props.colorName}-modal-back, var(--minolith-color-${props.colorName}-back))`,
      }
    : undefined;

  const optionalCss = {
    ...colorNameCss,
  };

  const css = emotionStyleUtility.getEmotionCss(props, optionalCss);

  return props.as ? (
    <props.as
      {...assignedProps}
      className={assignedClassNames.join(" ")}
      css={css}
    />
  ) : (
    <dialog
      {...assignedProps}
      className={assignedClassNames.join(" ")}
      css={css}
    />
  );
}
