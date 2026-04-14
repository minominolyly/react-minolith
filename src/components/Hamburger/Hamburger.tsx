"use client";

import type { Interpolation, Theme } from "@emotion/react";
import type { ReactElement } from "react";
import type { ColorName } from "../../types";
import { classNameUtility, emotionStyleUtility } from "../../utilities";
import type BaseHamburgerProps from "./BaseHamburgerProps";
import classNames from "./Hamburger.module.scss";
import type HamburgerProps from "./HamburgerProps";

export default function Hamburger<
  BaseComponentColorNameType extends string = ColorName | "rainbow",
  PropsType extends BaseHamburgerProps<BaseComponentColorNameType> =
    HamburgerProps<BaseComponentColorNameType>,
>(props: PropsType): ReactElement {
  const assignedProps = {
    ...props,
    fore: undefined,
    back: undefined,
    highlighter: undefined,
    border: undefined,
    positioning: undefined,
    sizing: undefined,
    spacing: undefined,
    css: undefined,
    as: undefined,
  };

  delete assignedProps["colorName"];
  delete assignedProps["isActive"];
  delete assignedProps["crownInner"];
  delete assignedProps["heelInner"];
  //#region BaseComponentProps
  delete assignedProps["fore"];
  delete assignedProps["back"];
  delete assignedProps["highlighter"];
  delete assignedProps["border"];
  delete assignedProps["positioning"];
  delete assignedProps["sizing"];
  delete assignedProps["spacing"];
  delete assignedProps["css"];
  delete assignedProps["className"];
  delete assignedProps["as"];
  //#endregion BaseComponentProps

  const assignedClassNames = [classNames["hamburger"]];

  if (props.isActive) {
    assignedClassNames.push(classNames["is-active"]);
  }

  const utilityClassNames = classNameUtility.getUtilityClassNames<BaseComponentColorNameType>(props);
  if (utilityClassNames) {
    assignedClassNames.push(...utilityClassNames);
  }
  if (props.className) {
    assignedClassNames.push(props.className);
  }

  const colorNameCss: Interpolation<Theme> = props.colorName
    ? {
        ["--minolith-hamburger-color-fore"]: `var(--minolith-color-${props.colorName}-hamburger-fore)`,
        ["--minolith-hamburger-line-color-back"]: `var(--minolith-color-${props.colorName}-hamburger-line-back, var(--minolith-color-${props.colorName}-border))`,
      }
    : undefined;

  const optionalCss = {
    ...colorNameCss,
  };

  const css = emotionStyleUtility.getEmotionCss<BaseComponentColorNameType>(props, optionalCss);

  return props.as ? (
    <props.as
      {...assignedProps}
      role="button"
      className={assignedClassNames.join(" ")}
      css={css}
    >
      <span className={classNames["crown"]}>{props.crownInner}</span>
      <span className={classNames["upperpatty"]} aria-hidden="true"></span>
      <span className={classNames["club"]} aria-hidden="true"></span>
      <span className={classNames["lowerpatty"]} aria-hidden="true"></span>
      <span className={classNames["heel"]}>{props.heelInner}</span>
    </props.as>
  ) : (
    <div
      {...assignedProps}
      role="button"
      className={assignedClassNames.join(" ")}
      css={css}
    >
      <span className={classNames["crown"]}>{props.crownInner}</span>
      <span className={classNames["upperpatty"]} aria-hidden="true"></span>
      <span className={classNames["club"]} aria-hidden="true"></span>
      <span className={classNames["lowerpatty"]} aria-hidden="true"></span>
      <span className={classNames["heel"]}>{props.heelInner}</span>
    </div>
  );
}
