"use client";

import type { Interpolation, Theme } from "@emotion/react";
import type { ReactElement } from "react";
import type { ColorName, SemanticColorName } from "../../types";
import { classNameUtility, emotionStyleUtility } from "../../utilities";
import classNames from "./Header.module.scss";
import type HeaderProps from "./HeaderProps";

export default function Header<
  BaseComponentColorNameType extends string =
    | ColorName
    | SemanticColorName
    | "rainbow",
>(props: HeaderProps<BaseComponentColorNameType>): ReactElement {
  const assignedProps = { ...props };
  delete assignedProps["colorName"];
  delete assignedProps["isSticky"];
  delete assignedProps["isFixed"];
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
  const assignedClassNames: string[] = [classNames["header"]];
  if (props.isSticky) {
    assignedClassNames.push(classNames[`is-sticky`]);
  }
  if (props.isFixed) {
    assignedClassNames.push(classNames[`is-fixed`]);
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
        ["--minolith-header-color-fore"]: `var(--minolith-color-${props.colorName}-header-fore, var(--minolith-color-${props.colorName}-fore))`,
        ["--minolith-header-color-back"]: `var(--minolith-color-${props.colorName}-header-back, var(--minolith-color-${props.colorName}-back))`,
        ["--minolith-header-color-shadow"]: `var(--minolith-color-${props.colorName}-header-shadow, var(--minolith-color-${props.colorName}-shadow))`,
      }
    : undefined;

  const optionalCss = {
    ...colorNameCss,
  };

  const css = emotionStyleUtility.getEmotionCss(props, optionalCss);

  return props.as ? (
    <props.as
      {...assignedProps}
      className={assignedClassNames.join(" ")}
      css={css}
    />
  ) : (
    <header
      {...assignedProps}
      className={assignedClassNames.join(" ")}
      css={css}
    />
  );
}
