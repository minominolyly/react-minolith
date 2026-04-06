"use client";

import type { Interpolation, Theme } from "@emotion/react";
import type { ReactElement } from "react";
import type { ColorName } from "../../types";
import { classNameUtility, emotionStyleUtility } from "../../utilities";
import classNames from "./Dot.module.scss";
import type DotProps from "./DotProps";

export default function Dot<
  BaseComponentColorNameType extends string = ColorName | "rainbow",
>(props: DotProps<BaseComponentColorNameType>): ReactElement {
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

  const utilityClassNames = classNameUtility.getUtilityClassNames<BaseComponentColorNameType>(props);
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

  const css = emotionStyleUtility.getEmotionCss<BaseComponentColorNameType>(props, optionalCss);

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
