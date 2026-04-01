"use client";

import type { Interpolation, Theme } from "@emotion/react";
import type { ReactElement } from "react";
import type { ColorName, SemanticColorName } from "../../types";
import { classNameUtility, emotionStyleUtility } from "../../utilities";
import classNames from "./Nav.module.scss";
import type NavProps from "./NavProps";

export default function Nav<
  BaseComponentColorNameType extends string =
    | ColorName
    | SemanticColorName
    | "rainbow",
>(props: NavProps<BaseComponentColorNameType>): ReactElement {
  const assignedProps = { ...props };
  delete assignedProps["colorName"];
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
  const assignedClassNames: string[] = [classNames["nav"]];

  const utilityClassNames = classNameUtility.getUtilityClassNames(props);
  if (utilityClassNames) {
    assignedClassNames.push(...utilityClassNames);
  }
  if (props.className) {
    assignedClassNames.push(props.className);
  }

  const colorNameCss: Interpolation<Theme> = props.colorName
    ? {
        ["--minolith-nav-color-fore"]: `var(--minolith-color-${props.colorName}-nav-fore, var(--minolith-color-${props.colorName}-fore))`,
        ["--minolith-nav-color-back"]: `var(--minolith-color-${props.colorName}-nav-back, var(--minolith-color-${props.colorName}-back))`,
        ["--minolith-nav-color-border"]: `var(--minolith-color-${props.colorName}-nav-border, var(--minolith-color-${props.colorName}-border))`,
        ["--minolith-nav-menu-item-color-fore"]: `var(--minolith-color-${props.colorName}-nav-menu-item-fore, var(--minolith-color-${props.colorName}-fore))`,
        ["--minolith-nav-menu-item-color-shadow"]: `var(--minolith-color-${props.colorName}-nav-menu-item-shadow, var(--minolith-color-${props.colorName}-shadow))`,
        ["--minolith-nav-menu-item-color-focus-fore"]: `var(--minolith-color-${props.colorName}-nav-menu-item-focus-fore, var(--minolith-color-${props.colorName}-focus-fore))`,
        ["--minolith-nav-menu-item-color-focus-shadow"]: `var(--minolith-color-${props.colorName}-nav-menu-item-focus-shadow, var(--minolith-color-${props.colorName}-focus-shadow))`,
        ["--minolith-nav-menu-item-color-hover-fore"]: `var(--minolith-color-${props.colorName}-nav-menu-item-hover-fore, var(--minolith-color-${props.colorName}-hover-fore))`,
        ["--minolith-nav-menu-item-color-hover-shadow"]: `var(--minolith-color-${props.colorName}-nav-menu-item-hover-shadow, var(--minolith-color-${props.colorName}-hover-shadow))`,
        ["--minolith-nav-menu-item-color-active-fore"]: `var(--minolith-color-${props.colorName}-nav-menu-item-active-fore, var(--minolith-color-${props.colorName}-active-fore))`,
        ["--minolith-nav-menu-item-color-active-shadow"]: `var(--minolith-color-${props.colorName}-nav-menu-item-active-shadow, var(--minolith-color-${props.colorName}-active-shadow))`,
        ["--minolith-nav-menu-item-color-disabled-fore"]: `var(--minolith-color-${props.colorName}-nav-menu-item-disabled-fore, var(--minolith-color-${props.colorName}-disabled-fore))`,
        ["--minolith-nav-menu-item-color-disabled-shadow"]: `var(--minolith-color-${props.colorName}-nav-menu-item-disabled-shadow, var(--minolith-color-${props.colorName}-disabled-shadow))`,
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
    <nav
      {...assignedProps}
      className={assignedClassNames.join(" ")}
      css={css}
    />
  );
}
