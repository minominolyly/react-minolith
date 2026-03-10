"use client";
import { ReactElement } from "react";
import classNameUtility from "../../utilities/classNameUtility";
import emotionStyleUtility from "../../utilities/emotionStyleUtility";
import classNames from "./Dialogue.module.scss";
import DialogueProps from "./DialogueProps";
import { Interpolation, Theme } from "@emotion/react";

export default function Dialogue(props: DialogueProps): ReactElement {
  const assignedProps = { ...props };
  delete assignedProps["colorName"];
  delete assignedProps["avatarSize"];
  delete assignedProps["borderStyle"];
  delete assignedProps["borderWidth"];
  delete assignedProps["isRight"];
  delete assignedProps["isAvatarCircle"];
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
  const assignedClassNames = [classNames["dialogue"]];

  if (props.isRight) {
    assignedClassNames.push(classNames[`is-right`]);
  } else {
    assignedClassNames.push(classNames[`is-left`]);
  }

  if (props.isAvatarCircle) {
    assignedClassNames.push(classNames[`is-avatar-circle`]);
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
        ["--minolith-dialogue-color-fore"]: `var(--minolith-color-${props.colorName}-dialogue-fore, var(--minolith-color-${props.colorName}-fore))`,
        ["--minolith-dialogue-color-back"]: `var(--minolith-color-${props.colorName}-dialogue-back, var(--minolith-color-${props.colorName}-back))`,
        ["--minolith-dialogue-color-border"]: `var(--minolith-color-${props.colorName}-dialogue-border, var(--minolith-color-${props.colorName}-border))`,
        ["--minolith-dialogue-selection-color-fore"]: `var(--minolith-color-${props.colorName}-dialogue-selection-fore, var(--minolith-color-${props.colorName}-selection-fore))`,
        ["--minolith-dialogue-selection-color-back"]: `var(--minolith-color-${props.colorName}-dialogue-selection-back, var(--minolith-color-${props.colorName}-selection-back))`,
        ["--minolith-dialogue-avatar-color-back"]: `var(--minolith-color-${props.colorName}-dialogue-avatar-back, var(--minolith-color-${props.colorName}-back))`,
        ["--minolith-dialogue-avatar-color-border"]: `var(--minolith-color-${props.colorName}-dialogue-avatar-border, var(--minolith-color-${props.colorName}-border))`,
        ["--minolith-dialogue-name-color-fore"]: `var(--minolith-color-${props.colorName}-dialogue-name-fore, var(--minolith-color-${props.colorName}-fore))`,
        ["--minolith-dialogue-name-color-back"]: `var(--minolith-color-${props.colorName}-dialogue-name-back, var(--minolith-color-${props.colorName}-back))`,
        ["--minolith-dialogue-name-color-border"]: `var(--minolith-color-${props.colorName}-dialogue-name-border, var(--minolith-color-${props.colorName}-border))`,
        ["--minolith-dialogue-message-color-fore"]: `var(--minolith-color-${props.colorName}-dialogue-message-fore, var(--minolith-color-${props.colorName}-fore))`,
        ["--minolith-dialogue-message-color-back"]: `var(--minolith-color-${props.colorName}-dialogue-message-back, var(--minolith-color-${props.colorName}-back))`,
        ["--minolith-dialogue-message-color-border"]: `var(--minolith-color-${props.colorName}-dialogue-message-border, var(--minolith-color-${props.colorName}-border))`,
      }
    : undefined;

  const avatarSizeCss: Interpolation<Theme> = props.avatarSize
    ? {
        ["--minolith-dialogue-avatar-size"]: props.avatarSize,
      }
    : undefined;

  const borderStyleCss: Interpolation<Theme> = props.borderStyle
    ? {
        ["--minolith-dialogue-border-style"]: props.borderStyle,
      }
    : undefined;

  const borderWidthCss: Interpolation<Theme> = props.borderWidth
    ? {
        ["--minolith-dialogue-border-width"]: `var(--minolith-border-width-${props.borderWidth})`,
      }
    : undefined;

  const optionalCss = {
    ...colorNameCss,
    ...avatarSizeCss,
    ...borderStyleCss,
    ...borderWidthCss,
  };

  const css = emotionStyleUtility.getEmotionCss(props, optionalCss);

  return props.as ? (
    <props.as
      {...assignedProps}
      className={assignedClassNames.join(" ")}
      css={css}
    />
  ) : (
    <div
      {...assignedProps}
      className={assignedClassNames.join(" ")}
      css={css}
    />
  );
}
