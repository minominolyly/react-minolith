"use client";
import classNameUtility from "../../utilities/classNameUtility";
import emotionStyleUtility from "../../utilities/emotionStyleUtility";
import classNames from "./NavBrandCenter.module.scss";
import NavBrandCenterProps from "./NavBrandCenterProps";

export default function NavBrandCenter(
  props: NavBrandCenterProps
): React.ReactElement {
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
  //#endregion BaseComponentProps
  const assignedClassNames: string[] = [classNames["nav-brand-center"]];

  const utilityClassNames = classNameUtility.getUtilityClassNames(props);
  if (utilityClassNames) {
    assignedClassNames.push(...utilityClassNames);
  }
  if (props.className) {
    assignedClassNames.push(props.className);
  }
  const css = emotionStyleUtility.getEmotionCss(props);
  return (
    <div
      {...assignedProps}
      className={assignedClassNames.join(" ")}
      css={css}
    />
  );
}
