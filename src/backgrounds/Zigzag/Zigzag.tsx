"use client";

import type { Interpolation, Theme } from "@emotion/react";
import type { ReactElement } from "react";
import type { ColorName, SemanticColorName } from "../../types";
import { classNameUtility, emotionStyleUtility } from "../../utilities";
import classNames from "./Zigzag.module.scss";
import type ZigzagProps from "./ZigzagProps";

export default function Zigzag<
  BaseComponentColorNameType extends string =
    | ColorName
    | SemanticColorName
    | "rainbow",
>(props: ZigzagProps<BaseComponentColorNameType>): ReactElement {
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
        ["--minolith-zigzag-color-line"]: `oklch(from var(--minolith-color-${props.colorName}-zigzag-fore) l c h / 0.5)`,
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
