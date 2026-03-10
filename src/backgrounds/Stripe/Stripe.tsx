"use client";
import { ReactElement } from "react";
import classNameUtility from "../../utilities/classNameUtility";
import emotionStyleUtility from "../../utilities/emotionStyleUtility";
import classNames from "./Stripe.module.scss";
import StripeProps from "./StripeProps";
import { Interpolation, Theme } from "@emotion/react";

export default function Stripe(props: StripeProps): ReactElement {
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

  const assignedClassNames = [classNames["stripe"]];

  const utilityClassNames = classNameUtility.getUtilityClassNames(props);
  if (utilityClassNames) {
    assignedClassNames.push(...utilityClassNames);
  }
  if (props.className) {
    assignedClassNames.push(props.className);
  }

  const colorNameCss: Interpolation<Theme> = props.colorName
    ? {
        ["--minolith-stripe-color-fore"]: `oklch(from var(--minolith-color-${props.colorName}-stripe-fore) l c h / 0.5)`,
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
