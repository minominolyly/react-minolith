import { classNameUtility } from "../../utilities";
import BreadcrumbProps from "./BreadcrumbProps";
import classNames from "./Breadcrumb.module.scss";

export default function Breadcrumb(props: BreadcrumbProps): React.ReactElement {
  const assignedProps = { ...props };
  //#region BaseComponentProps
  delete assignedProps["fore"];
  delete assignedProps["back"];
  delete assignedProps["highlighter"];
  delete assignedProps["border"];
  delete assignedProps["positioning"];
  delete assignedProps["sizing"];
  delete assignedProps["spacing"];
  //#endregion BaseComponentProps

  const assignedClassNames: string[] = [classNames["breadcrumb"]];
  assignedClassNames.push(...classNameUtility.getUtilityClassNames(props));
  props.className && assignedClassNames.push(props.className);

  return <li {...assignedProps} className={assignedClassNames.join(" ")} />;
}
