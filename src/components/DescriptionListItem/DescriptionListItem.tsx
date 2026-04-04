"use client";

import type { ReactElement } from "react";
import type { ColorName, SemanticColorName } from "../../types";
import { classNameUtility, emotionStyleUtility } from "../../utilities";
import classNames from "./DescriptionListItem.module.scss";
import type DescriptionListItemProps from "./DescriptionListItemProps";

export default function DescriptionListItem<
  BaseComponentColorNameType extends string =
    | ColorName
    | SemanticColorName
    | "rainbow",
>(props: DescriptionListItemProps<BaseComponentColorNameType>): ReactElement {
  const assignedProps = { ...props };
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
  const assignedClassNames = [classNames["description-list-item"]];

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
    <div
      {...assignedProps}
      className={assignedClassNames.join(" ")}
      css={css}
    />
  );
}
