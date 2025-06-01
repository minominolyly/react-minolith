"use client";
import classNameUtility from "../../utilities/classNameUtility";
import emotionStyleUtility from "../../utilities/emotionStyleUtility/emotionStyleUtility";
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
  props.isXSmall && assignedClassNames.push(classNames[`is-xsmall`]);
  props.isSmallOrLess &&
    assignedClassNames.push(classNames[`is-small-or-less`]);
  props.isSmall && assignedClassNames.push(classNames[`is-small`]);
  props.isSmallOrMore &&
    assignedClassNames.push(classNames[`is-small-or-more`]);
  props.isMediumOrLess &&
    assignedClassNames.push(classNames[`is-medium-or-less`]);
  props.isMedium && assignedClassNames.push(classNames[`is-medium`]);
  props.isMediumOrMore &&
    assignedClassNames.push(classNames[`is-medium-or-more`]);
  props.isLargeOrLess &&
    assignedClassNames.push(classNames[`is-large-or-less`]);
  props.isLarge && assignedClassNames.push(classNames[`is-large`]);
  props.isLargeOrMore &&
    assignedClassNames.push(classNames[`is-large-or-more`]);
  props.isXLarge && assignedClassNames.push(classNames[`is-xlarge`]);
  assignedClassNames.push(...classNameUtility.getUtilityClassNames(props));
  props.className && assignedClassNames.push(props.className);

  const css = emotionStyleUtility.getEmotionCss(props);

  return (
    <div
      {...assignedProps}
      className={assignedClassNames.join(" ")}
      css={css}
    />
  );
}
