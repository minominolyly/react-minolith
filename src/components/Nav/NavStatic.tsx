import { classNameUtility } from "../../utilities";
import classNames from "./NavStatic.module.scss";
import NavStaticProps from "./NavStaticProps";

export default function NavStatic(props: NavStaticProps): JSX.Element {
  const assignedProps = { ...props };
  delete assignedProps["isXSmall"];
  delete assignedProps["isXSmallUp"];
  delete assignedProps["isSmallDown"];
  delete assignedProps["isSmall"];
  delete assignedProps["isSmallUp"];
  delete assignedProps["isMediumDown"];
  delete assignedProps["isMedium"];
  delete assignedProps["isMediumUp"];
  delete assignedProps["isLargeDown"];
  delete assignedProps["isLarge"];
  delete assignedProps["isLargeUp"];
  delete assignedProps["isXLargeDown"];
  delete assignedProps["isXLarge"];
  //#region BaseComponentProps
  delete assignedProps["fore"];
  delete assignedProps["back"];
  delete assignedProps["border"];
  delete assignedProps["highlighter"];
  delete assignedProps["spacing"];
  //#endregion BaseComponentProps

  const assignedClassNames: string[] = [classNames["nav-static"]];
  props.isXSmall && assignedClassNames.push(classNames[`is-XSmall`]);
  props.isXSmallUp &&
    assignedClassNames.push(classNames[`is-XSmall-or-more`]);
  props.isSmallDown &&
    assignedClassNames.push(classNames[`is-Small-or-less`]);
  props.isSmall && assignedClassNames.push(classNames[`is-Small`]);
  props.isSmallUp &&
    assignedClassNames.push(classNames[`is-Small-or-more`]);
  props.isMediumDown &&
    assignedClassNames.push(classNames[`is-Medium-or-less`]);
  props.isMedium && assignedClassNames.push(classNames[`is-Medium`]);
  props.isMediumUp &&
    assignedClassNames.push(classNames[`is-Medium-or-more`]);
  props.isLargeDown &&
    assignedClassNames.push(classNames[`is-Large-or-less`]);
  props.isLarge && assignedClassNames.push(classNames[`is-Large`]);
  props.isLargeUp &&
    assignedClassNames.push(classNames[`is-Large-or-more`]);
  props.isXLargeDown &&
    assignedClassNames.push(classNames[`is-XLarge-or-less`]);
  props.isXLarge &&
    assignedClassNames.push(classNames[`is-XLarge`]);
  assignedClassNames.push(...classNameUtility.getUtilityClassNames(props));
  props.className && assignedClassNames.push(props.className);

  return (
    <div {...assignedProps} className={assignedClassNames.join(" ")} />
  )
}
