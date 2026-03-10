"use client";
import { ReactElement } from "react";
import classNameUtility from "../../utilities/classNameUtility";
import emotionStyleUtility from "../../utilities/emotionStyleUtility";
import BreadcrumbsProps from "./BreadcrumbsProps";
import classNames from "./Breadcrumbs.module.scss";
import { Interpolation, Theme } from "@emotion/react";

export default function Breadcrumbs(props: BreadcrumbsProps): ReactElement {
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
  const assignedClassNames: string[] = [classNames["breadcrumbs"]];

  const utilityClassNames = classNameUtility.getUtilityClassNames(props);
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

  const css = emotionStyleUtility.getEmotionCss(props, optionalCss);

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
