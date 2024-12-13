import { classNameUtility } from "../../utilities";
import classNames from "./Heading.module.scss";
import HeadingProps from "./HeadingProps";

export default function Heading(props: HeadingProps): JSX.Element {
  const assignedProps = { ...props };
  delete assignedProps["level"];
  //#region BaseComponentProps
  delete assignedProps["fore"];
  delete assignedProps["back"];
  delete assignedProps["border"];
  delete assignedProps["highlighter"];
  delete assignedProps["spacing"];
  //#endregion BaseComponentProps

  const level = props.level;
  const assignedClassNames: string[] = [classNames[`heading-${props.level}`]];
  assignedClassNames.push(...classNameUtility.getUtilityClassNames(props));
  props.className && assignedClassNames.push(props.className);

  if (level) {
    switch (level) {
      case 1:
        return <h1 {...assignedProps} className={assignedClassNames.join(" ")} />;
      case 2:
        return <h2 {...assignedProps} className={assignedClassNames.join(" ")} />;
      case 3:
        return <h3 {...assignedProps} className={assignedClassNames.join(" ")} />;
      case 4:
        return <h4 {...assignedProps} className={assignedClassNames.join(" ")} />;
      case 5:
        return <h5 {...assignedProps} className={assignedClassNames.join(" ")} />;
      case 6:
        return <h6 {...assignedProps} className={assignedClassNames.join(" ")} />;
    }
  }

  return <h1 {...assignedProps} className={assignedClassNames.join(" ")} />;
}
