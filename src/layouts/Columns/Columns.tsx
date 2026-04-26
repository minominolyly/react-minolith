"use client";

import type { ReactElement } from "react";
import type { ColorName } from "../../types";
import { classNameUtility, emotionStyleUtility } from "../../utilities";
import type BaseColumnsProps from "./BaseColumnsProps";
import classNames from "./Columns.module.scss";
import type ColumnsProps from "./ColumnsProps";

export default function Columns<
  BaseComponentColorNameType extends string = ColorName | "rainbow",
  PropsType extends BaseColumnsProps<BaseComponentColorNameType> =
    ColumnsProps<BaseComponentColorNameType>,
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

  delete assignedProps["flexDirection"];
  delete assignedProps["gutter"];
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

  const assignedClassNames: string[] = [classNames["columns"]];

  const propsClassNames: string[] = [];

  if (props.gutter) {
    if (
      typeof props.gutter === "number" ||
      typeof props.gutter === "string" ||
      "x" in props.gutter ||
      "y" in props.gutter
    ) {
      propsClassNames.push(
        ...classNameUtility.getGutterClassNames(classNames, props.gutter),
      );
    } else {
      if ("default" in props.gutter) {
        propsClassNames.push(
          ...classNameUtility.getGutterClassNames(
            classNames,
            props.gutter.default,
          ),
        );
      }
      if ("xsmall" in props.gutter) {
        propsClassNames.push(
          ...classNameUtility.getGutterClassNames(
            classNames,
            props.gutter.xsmall,
            "xsmall",
          ),
        );
      }
      if ("xsmallOrMore" in props.gutter) {
        propsClassNames.push(
          ...classNameUtility.getGutterClassNames(
            classNames,
            props.gutter.xsmallOrMore,
            "xsmall-or-more",
          ),
        );
      }
      if ("smallOrLess" in props.gutter) {
        propsClassNames.push(
          ...classNameUtility.getGutterClassNames(
            classNames,
            props.gutter.smallOrLess,
            "small-or-less",
          ),
        );
      }
      if ("small" in props.gutter) {
        propsClassNames.push(
          ...classNameUtility.getGutterClassNames(
            classNames,
            props.gutter.small,
            "small",
          ),
        );
      }
      if ("smallOrMore" in props.gutter) {
        propsClassNames.push(
          ...classNameUtility.getGutterClassNames(
            classNames,
            props.gutter.smallOrMore,
            "small-or-more",
          ),
        );
      }
      if ("mediumOrLess" in props.gutter) {
        propsClassNames.push(
          ...classNameUtility.getGutterClassNames(
            classNames,
            props.gutter.mediumOrLess,
            "medium-or-less",
          ),
        );
      }
      if ("medium" in props.gutter) {
        propsClassNames.push(
          ...classNameUtility.getGutterClassNames(
            classNames,
            props.gutter.medium,
            "medium",
          ),
        );
      }
      if ("mediumOrMore" in props.gutter) {
        propsClassNames.push(
          ...classNameUtility.getGutterClassNames(
            classNames,
            props.gutter.mediumOrMore,
            "medium-or-more",
          ),
        );
      }
      if ("largeOrLess" in props.gutter) {
        propsClassNames.push(
          ...classNameUtility.getGutterClassNames(
            classNames,
            props.gutter.largeOrLess,
            "large-or-less",
          ),
        );
      }
      if ("large" in props.gutter) {
        propsClassNames.push(
          ...classNameUtility.getGutterClassNames(
            classNames,
            props.gutter.large,
            "large",
          ),
        );
      }
      if ("largeOrMore" in props.gutter) {
        propsClassNames.push(
          ...classNameUtility.getGutterClassNames(
            classNames,
            props.gutter.largeOrMore,
            "large-or-more",
          ),
        );
      }
      if ("xlargeOrLess" in props.gutter) {
        propsClassNames.push(
          ...classNameUtility.getGutterClassNames(
            classNames,
            props.gutter.xlargeOrLess,
            "xlarge-or-less",
          ),
        );
      }
      if ("xlarge" in props.gutter) {
        propsClassNames.push(
          ...classNameUtility.getGutterClassNames(
            classNames,
            props.gutter.xlarge,
            "xlarge",
          ),
        );
      }
    }
  }

  assignedClassNames.push(...propsClassNames);

  const utilityClassNames =
    classNameUtility.getUtilityClassNames<BaseComponentColorNameType>(props);
  if (utilityClassNames) {
    assignedClassNames.push(...utilityClassNames);
  }
  if (props.className) {
    assignedClassNames.push(props.className);
  }

  const flexDirectionCss = emotionStyleUtility.getColumnsFlexDirectionCss(
    props.flexDirection,
  );
  const optionalCss = { ...flexDirectionCss };

  const css = emotionStyleUtility.getEmotionCss<BaseComponentColorNameType>(
    props,
    optionalCss,
  );

  return (
    <div
      {...assignedProps}
      className={assignedClassNames.join(" ")}
      css={css}
    />
  );
}
