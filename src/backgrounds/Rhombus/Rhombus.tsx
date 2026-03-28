"use client";
import { ReactElement } from "react";
import classNameUtility from "../../utilities/classNameUtility";
import emotionStyleUtility from "../../utilities/emotionStyleUtility";
import classNames from "./Rhombus.module.scss";
import RhombusProps from "./RhombusProps";
import { Interpolation, Theme } from "@emotion/react";

export default function Rhombus(props: RhombusProps): ReactElement {
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

  const assignedClassNames = [classNames["rhombus"]];

  const utilityClassNames = classNameUtility.getUtilityClassNames(props);
  if (utilityClassNames) {
    assignedClassNames.push(...utilityClassNames);
  }
  if (props.className) {
    assignedClassNames.push(props.className);
  }

  const colorNameCss: Interpolation<Theme> = props.colorName
    ? {
        ["--minolith-rhombus-color-line"]: `oklch(from var(--minolith-color-${props.colorName}-rhombus-fore) l c h / 0.5)`,
        ["--minolith-rhombus-color-back"]: `var(--minolith-color-${props.colorName}-rhombus-back)`,
      }
    : undefined;

  const rhombusSizeCss = props.size
    ? props.size === "small"
      ? {
          ["--minolith-rhombus-size"]: `0.5rem`,
        }
      : props.size === "large"
        ? {
            ["--minolith-rhombus-size"]: `2rem`,
          }
        : {
            ["--minolith-rhombus-size"]: props.size,
          }
    : undefined;

  const optionalCss = {
    ...colorNameCss,
    ...rhombusSizeCss,
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
