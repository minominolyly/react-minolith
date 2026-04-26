"use client";

import type { Interpolation, Theme } from "@emotion/react";
import type { ReactElement } from "react";
import type { ColorName } from "../../types";
import { classNameUtility, emotionStyleUtility } from "../../utilities";
import type BaseBreadcrumbsProps from "./BaseBreadcrumbsProps";
import classNames from "./Breadcrumbs.module.scss";
import type BreadcrumbsProps from "./BreadcrumbsProps";

export default function Breadcrumbs<
  BaseComponentColorNameType extends string = ColorName | "rainbow",
  PropsType extends BaseBreadcrumbsProps<BaseComponentColorNameType> =
    BreadcrumbsProps<BaseComponentColorNameType>,
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

  const assignedClassNames: string[] = [classNames["breadcrumbs"]];

  const utilityClassNames =
    classNameUtility.getUtilityClassNames<BaseComponentColorNameType>(props);
  if (utilityClassNames) {
    assignedClassNames.push(...utilityClassNames);
  }

  if (props.className) {
    assignedClassNames.push(props.className);
  }

  const colorNameCss: Interpolation<Theme> = props.colorName
    ? {
        ["--minolith-breadcrumb-color-fore"]: `var(--minolith-color-${props.colorName}-breadcrumb-fore)`,
        ["--minolith-breadcrumb-color-selection-fore"]: `var(--minolith-color-${props.colorName}-breadcrumb-selection-fore)`,
        ["--minolith-breadcrumb-color-selection-back"]: `var(--minolith-color-${props.colorName}-breadcrumb-selection-back)`,
        ["--minolith-breadcrumb-divider-color-fore"]: `var(--minolith-color-${props.colorName}-breadcrumb-divider-fore)`,
      }
    : undefined;

  const optionalCss = {
    ...colorNameCss,
  };

  const css = emotionStyleUtility.getEmotionCss<BaseComponentColorNameType>(
    props,
    optionalCss,
  );

  return props.as ? (
    <props.as
      {...assignedProps}
      className={assignedClassNames.join(" ")}
      css={css}
    />
  ) : (
    <ul {...assignedProps} className={assignedClassNames.join(" ")} css={css} />
  );
}
