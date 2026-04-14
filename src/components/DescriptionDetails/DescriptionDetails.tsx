"use client";

import type { ReactElement } from "react";
import type { ColorName } from "../../types";
import { classNameUtility, emotionStyleUtility } from "../../utilities";
import classNames from "./DescriptionDetails.module.scss";
import type DescriptionDetailsProps from "./DescriptionDetailsProps";
import type BaseDescriptionDetailsProps from "./BaseDescriptionDetailsProps";

export default function DescriptionDetails<
  BaseComponentColorNameType extends string = ColorName | "rainbow",
  PropsType extends BaseDescriptionDetailsProps<BaseComponentColorNameType> =
    DescriptionDetailsProps<BaseComponentColorNameType>,
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

  const assignedClassNames = [classNames["description-details"]];

  const utilityClassNames = classNameUtility.getUtilityClassNames<BaseComponentColorNameType>(props);
  if (utilityClassNames) {
    assignedClassNames.push(...utilityClassNames);
  }
  if (props.className) {
    assignedClassNames.push(props.className);
  }

  const css = emotionStyleUtility.getEmotionCss<BaseComponentColorNameType>(props);

  return props.as ? (
    <props.as
      {...assignedProps}
      className={assignedClassNames.join(" ")}
      css={css}
    />
  ) : (
    <dd
      {...assignedProps}
      className={assignedClassNames.join(" ")}
      css={css}
    />
  );
}
