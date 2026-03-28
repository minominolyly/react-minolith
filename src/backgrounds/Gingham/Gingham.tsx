"use client";
import { ReactElement } from "react";
import classNameUtility from "../../utilities/classNameUtility";
import emotionStyleUtility from "../../utilities/emotionStyleUtility";
import classNames from "./Gingham.module.scss";
import GinghamProps from "./GinghamProps";
import { Interpolation, Theme } from "@emotion/react";

export default function Gingham(props: GinghamProps): ReactElement {
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

  const utilityClassNames = classNameUtility.getUtilityClassNames(props);
  if (utilityClassNames) {
    assignedClassNames.push(...utilityClassNames);
  }
  if (props.className) {
    assignedClassNames.push(props.className);
  }

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
