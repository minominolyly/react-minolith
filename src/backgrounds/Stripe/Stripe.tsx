"use client";

import type { Interpolation, Theme } from "@emotion/react";
import type { ReactElement } from "react";
import type { ColorName } from "../../types";
import { classNameUtility, emotionStyleUtility } from "../../utilities";
import type BaseStripeProps from "./BaseStripeProps";
import classNames from "./Stripe.module.scss";
import type StripeProps from "./StripeProps";

export default function Stripe<
  BaseComponentColorNameType extends string = ColorName | "rainbow",
  PropsType extends BaseStripeProps<BaseComponentColorNameType> =
    StripeProps<BaseComponentColorNameType>,
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
    className: undefined,
    css: undefined,
    as: undefined,
  };

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
  delete assignedProps["className"];
  delete assignedProps["css"];
  delete assignedProps["as"];
  //#endregion BaseComponentProps

  const assignedClassNames = [classNames["stripe"]];

  const utilityClassNames = classNameUtility.getUtilityClassNames<BaseComponentColorNameType>(props);
  if (utilityClassNames) {
    assignedClassNames.push(...utilityClassNames);
  }
  if (props.className) {
    assignedClassNames.push(props.className);
  }

  const colorNameCss: Interpolation<Theme> = props.colorName
    ? {
        ["--minolith-stripe-color-line"]: `oklch(from var(--minolith-color-${props.colorName}-stripe-fore) l c h / 0.5)`,
        ["--minolith-stripe-color-back"]: `var(--minolith-color-${props.colorName}-stripe-back)`,
      }
    : undefined;

  const degreeCss: Interpolation<Theme> = props.degree
    ? {
        ["--minolith-stripe-degree"]: `${props.degree}deg`,
      }
    : undefined;

  const optionalCss = {
    ...colorNameCss,
    ...degreeCss,
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
