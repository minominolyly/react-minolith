"use client";
import { ReactElement } from "react";
import classNameUtility from "../../utilities/classNameUtility";
import emotionStyleUtility from "../../utilities/emotionStyleUtility";
import classNames from "./Zigzag.module.scss";
import ZigzagProps from "./ZigzagProps";
import { Interpolation, Theme } from "@emotion/react";

export default function Zigzag(props: ZigzagProps): ReactElement {
  const assignedProps = { ...props };
  delete assignedProps["colorName"];
  delete assignedProps["size"];
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

  const assignedClassNames = [classNames["zigzag"]];

  const utilityClassNames = classNameUtility.getUtilityClassNames(props);
  if (utilityClassNames) {
    assignedClassNames.push(...utilityClassNames);
  }
  if (props.className) {
    assignedClassNames.push(props.className);
  }

  const colorNameCss: Interpolation<Theme> = props.colorName
    ? {
        ["--minolith-zigzag-color-fore"]: `oklch(from var(--minolith-color-${props.colorName}-zigzag-fore) l c h / 0.5)`,
        ["--minolith-zigzag-color-back"]: `var(--minolith-color-${props.colorName}-zigzag-back)`,
      }
    : undefined;

  const sizeCss = props.size
    ? props.size === "small"
      ? {
          ["--minolith-zigzag-size"]: `0.5rem`,
        }
      : props.size === "large"
        ? {
            ["--minolith-zigzag-size"]: `4rem`,
          }
        : {
            ["--minolith-zigzag-size"]: props.size,
          }
    : undefined;

  const optionalCss = {
    ...colorNameCss,
    ...sizeCss,
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
