"use client";
import classNameUtility from "../../utilities/classNameUtility";
import emotionStyleUtility from "../../utilities/emotionStyleUtility";
import classNames from "./Badge.module.scss";
import BadgeProps from "./BadgeProps";

export default function Badge(props: BadgeProps): React.ReactElement {
  const assignedProps = { ...props };
  delete assignedProps["colorName"];
  delete assignedProps["isSmall"];
  delete assignedProps["isClickable"];
  delete assignedProps["as"];
  //#region BaseComponentProps
  delete assignedProps["fore"];
  delete assignedProps["back"];
  delete assignedProps["highlighter"];
  delete assignedProps["border"];
  delete assignedProps["positioning"];
  delete assignedProps["sizing"];
  delete assignedProps["spacing"];
  delete assignedProps["css"];
  //#endregion BaseComponentProps
  const assignedClassNames = [classNames["badge"]];

  if (props.colorName) {
    assignedClassNames.push(classNames[`is-${props.colorName}`]);
  }

  if (props.isSmall) {
    assignedClassNames.push(classNames[`is-small`]);
  }

  if (props.isClickable) {
    assignedClassNames.push(classNames[`is-clickable`]);
  }

  const utilityClassNames = classNameUtility.getUtilityClassNames(props);
  if (utilityClassNames) {
    assignedClassNames.push(...utilityClassNames);
  }
  if (props.className) {
    assignedClassNames.push(props.className);
  }
  const css = emotionStyleUtility.getEmotionCss(props);
  return props.as ? (
    <props.as
      {...assignedProps}
      className={assignedClassNames.join(" ")}
      css={css}
    />
  ) : (
    <span
      {...assignedProps}
      className={assignedClassNames.join(" ")}
      css={css}
    />
  );
}
