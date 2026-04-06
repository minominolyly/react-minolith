"use client";

import type { Interpolation, Theme } from "@emotion/react";
import type { ReactElement } from "react";
import type { ColorName } from "../../types";
import { classNameUtility, emotionStyleUtility } from "../../utilities";
import classNames from "./Gingham.module.scss";
import type GinghamProps from "./GinghamProps";

export default function Gingham<
  BaseComponentColorNameType extends string = ColorName | "rainbow",
>(props: GinghamProps<BaseComponentColorNameType>): ReactElement {
  const assignedProps = { ...props };
  delete assignedProps["colorName"];
  delete assignedProps["degree"];
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

  const assignedClassNames = [classNames["gingham"]];

  const colorNameCss: Interpolation<Theme> = props.colorName
    ? {
        ["--minolith-gingham-color-line"]: `oklch(from var(--minolith-color-${props.colorName}-gingham-fore) l c h / 0.5)`,
        ["--minolith-gingham-color-back"]: `var(--minolith-color-${props.colorName}-gingham-back)`,
      }
    : undefined;

  const degreeCss: Interpolation<Theme> = props.degree
    ? {
        ["--minolith-gingham-degree"]: `${props.degree}deg`,
      }
    : undefined;

  const optionalCss = {
    ...colorNameCss,
    ...degreeCss,
  };

  const utilityClassNames = classNameUtility.getUtilityClassNames<BaseComponentColorNameType>(props);
  if (utilityClassNames) {
    assignedClassNames.push(...utilityClassNames);
  }
  if (props.className) {
    assignedClassNames.push(props.className);
  }

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
