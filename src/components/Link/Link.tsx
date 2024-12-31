import { classNameUtility } from "../../utilities";
import classNames from "./Link.module.scss";
import LinkProps from "./LinkProps";

export default function Link(props: LinkProps): React.ReactElement {
  const assignedProps = { ...props };
  delete assignedProps["as"];
  delete assignedProps["colorName"];
  //#region BaseComponentProps
  delete assignedProps["fore"];
  delete assignedProps["back"];
  delete assignedProps["highlighter"];
  delete assignedProps["border"];
  delete assignedProps["positioning"];
  delete assignedProps["sizing"];
  delete assignedProps["spacing"];
  //#endregion BaseComponentProps

  const assignedClassNames: string[] = [classNames["link"]];
  props.colorName &&
    assignedClassNames.push(classNames[`is-${props.colorName}`]);
  assignedClassNames.push(...classNameUtility.getUtilityClassNames(props));
  props.className && assignedClassNames.push(props.className);

  return props.as ? (
    <props.as {...assignedProps} className={assignedClassNames.join(" ")} />
  ) : (
    <a {...assignedProps} className={assignedClassNames.join(" ")} />
  );
}
