"use client";

import type { ReactElement } from "react";
import type { ColorName, SemanticColorName } from "../../types";
import { classNameUtility, emotionStyleUtility } from "../../utilities";
import classNames from "./DialogueAvatar.module.scss";
import type DialogueAvatarProps from "./DialogueAvatarProps";

export default function DialogueAvatar<
  BaseComponentColorNameType extends string =
    | ColorName
    | SemanticColorName
    | "rainbow",
>(props: DialogueAvatarProps<BaseComponentColorNameType>): ReactElement {
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

  const utilityClassNames = classNameUtility.getUtilityClassNames<BaseComponentColorNameType>(props);
  if (utilityClassNames) {
    assignedClassNames.push(...utilityClassNames);
  }
  if (props.className) {
    assignedClassNames.push(props.className);
  }
  if (props.hasBorder) {
    assignedClassNames.push(classNames["has-border"]);
  }
  const css = emotionStyleUtility.getEmotionCss<BaseComponentColorNameType>(props);

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
