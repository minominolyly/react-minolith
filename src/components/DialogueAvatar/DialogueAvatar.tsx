"use client";
import { ReactElement } from "react";
import classNameUtility from "../../utilities/classNameUtility";
import emotionStyleUtility from "../../utilities/emotionStyleUtility";
import DialogueAvatarProps from "./DialogueAvatarProps";
import classNames from "./DialogueAvatar.module.scss";

export default function DialogueAvatar(
  props: DialogueAvatarProps,
): ReactElement {
  const assignedProps = { ...props };
  delete assignedProps["hasBorder"];
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

  const assignedClassNames: string[] = [classNames["dialogue-avatar"]];

  const utilityClassNames = classNameUtility.getUtilityClassNames(props);
  if (utilityClassNames) {
    assignedClassNames.push(...utilityClassNames);
  }
  if (props.className) {
    assignedClassNames.push(props.className);
  }
  if (props.hasBorder) {
    assignedClassNames.push(classNames["has-border"]);
  }
  const css = emotionStyleUtility.getEmotionCss(props);

  return props.as ? (
    <props.as
      {...assignedProps}
      className={assignedClassNames.join(" ")}
      css={css}
    />
  ) : (
    <img
      {...assignedProps}
      className={assignedClassNames.join(" ")}
      css={css}
    />
  );
}
