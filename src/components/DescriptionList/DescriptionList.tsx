"use client";

import type { ReactElement } from "react";
import type { ColorName, SemanticColorName } from "../../types";
import { classNameUtility, emotionStyleUtility } from "../../utilities";
import classNames from "./DescriptionList.module.scss";
import type DescriptionListProps from "./DescriptionListProps";

export default function DescriptionList<
  BaseComponentColorNameType extends string =
    | ColorName
    | SemanticColorName
    | "rainbow",
>(props: DescriptionListProps<BaseComponentColorNameType>): ReactElement {
  const assignedProps = { ...props };
  delete assignedProps["hasMarker"];
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
  const assignedClassNames: string[] = [classNames["description-list"]];

  if (props.hasMarker) {
    assignedClassNames.push(classNames["has-marker"]);
  }

  const utilityClassNames =
    classNameUtility.getUtilityClassNames<BaseComponentColorNameType>(props);
  if (utilityClassNames) {
    assignedClassNames.push(...utilityClassNames);
  }
  if (props.className) {
    assignedClassNames.push(props.className);
  }
  const css =
    emotionStyleUtility.getEmotionCss<BaseComponentColorNameType>(props);

  return props.as ? (
    <props.as
      {...assignedProps}
      className={assignedClassNames.join(" ")}
      css={css}
    />
  ) : (
    <dl {...assignedProps} className={assignedClassNames.join(" ")} css={css} />
  );
}
