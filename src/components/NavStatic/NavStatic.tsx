"use client";
import classNameUtility from "../../utilities/classNameUtility";
import emotionStyleUtility from "../../utilities/emotionStyleUtility";
import classNames from "./NavStatic.module.scss";
import NavStaticProps from "./NavStaticProps";

export default function NavStatic(props: NavStaticProps): React.ReactElement {
  const assignedProps = { ...props };
  delete assignedProps["isXSmall"];
  delete assignedProps["isSmallOrLess"];
  delete assignedProps["isSmall"];
  delete assignedProps["isSmallOrMore"];
  delete assignedProps["isMediumOrLess"];
  delete assignedProps["isMedium"];
  delete assignedProps["isMediumOrMore"];
  delete assignedProps["isLargeOrLess"];
  delete assignedProps["isLarge"];
  delete assignedProps["isLargeOrMore"];
  delete assignedProps["isXLarge"];
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
  const assignedClassNames: string[] = [classNames["nav-static"]];

  if (props.isXSmall) {
    assignedClassNames.push(classNames[`is-xsmall`]);
  }

  if (props.isSmallOrLess) {
    assignedClassNames.push(classNames[`is-small-or-less`]);
  }

  if (props.isSmall) {
    assignedClassNames.push(classNames[`is-small`]);
  }

  if (props.isSmallOrMore) {
    assignedClassNames.push(classNames[`is-small-or-more`]);
  }

  if (props.isMediumOrLess) {
    assignedClassNames.push(classNames[`is-medium-or-less`]);
  }

  if (props.isMedium) {
    assignedClassNames.push(classNames[`is-medium`]);
  }

  if (props.isMediumOrMore) {
    assignedClassNames.push(classNames[`is-medium-or-more`]);
  }

  if (props.isLargeOrLess) {
    assignedClassNames.push(classNames[`is-large-or-less`]);
  }

  if (props.isLarge) {
    assignedClassNames.push(classNames[`is-large`]);
  }

  if (props.isLargeOrMore) {
    assignedClassNames.push(classNames[`is-large-or-more`]);
  }

  if (props.isXLarge) {
    assignedClassNames.push(classNames[`is-xlarge`]);
  }

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
