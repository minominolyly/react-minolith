import { classNameUtility } from "../../utilities";
import BreadcrumbsProps from "./BreadcrumbsProps";
import classNames from "./Breadcrumbs.module.scss";

export default function Breadcrumbs(props: BreadcrumbsProps): React.ReactElement {
  const assignedProps = { ...props };
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

  const assignedClassNames: string[] = [classNames["breadcrumbs"]];
  props.colorName &&
    assignedClassNames.push(classNames[`is-${props.colorName}`]);
  assignedClassNames.push(...classNameUtility.getUtilityClassNames(props));
  props.className && assignedClassNames.push(props.className);

  return <ul {...assignedProps} className={assignedClassNames.join(" ")} />;
}
