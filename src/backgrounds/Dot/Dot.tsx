"use client";
import { ReactElement } from "react";
import classNameUtility from "../../utilities/classNameUtility";
import emotionStyleUtility from "../../utilities/emotionStyleUtility";
import classNames from "./Dot.module.scss";
import DotProps from "./DotProps";
import { Interpolation, Theme } from "@emotion/react";

export default function Dot(props: DotProps): ReactElement {
  const assignedProps = { ...props };
  delete assignedProps["colorName"];
  delete assignedProps["dotSize"];
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

  const assignedClassNames = [classNames["dot"]];

  const utilityClassNames = classNameUtility.getUtilityClassNames(props);
  if (utilityClassNames) {
    assignedClassNames.push(...utilityClassNames);
  }
  if (props.className) {
    assignedClassNames.push(props.className);
  }

  const colorNameCss: Interpolation<Theme> = props.colorName
    ? {
        ["--minolith-dot-color-dot"]: `oklch(from var(--minolith-color-${props.colorName}-dot-fore) l c h / 0.5)`,
        ["--minolith-dot-color-back"]: `var(--minolith-color-${props.colorName}-dot-back)`,
      }
    : undefined;

  const dotSizeCss = props.dotSize
    ? props.dotSize === "coin"
      ? {
          ["--minolith-dot-size"]: `30%`,
        }
      : props.dotSize === "polka"
        ? {
            ["--minolith-dot-size"]: `20%`,
          }
        : props.dotSize === "pin"
          ? {
              ["--minolith-dot-size"]: `10%`,
            }
          : undefined
    : undefined;

  const optionalCss = {
    ...colorNameCss,
    ...dotSizeCss,
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
