import { classNameUtility } from "../../utilities";
import classNames from "./Breadcrumbs.module.scss";
import BreadcrumbsNavProps from "./BreadcrumbsNavProps";

export default function BreadcrumbsNav(
  props: BreadcrumbsNavProps
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
  //#endregion BaseComponentProps

  const assignedClassNames: string[] = [classNames["breadcrumbs-nav"]];
  assignedClassNames.push(...classNameUtility.getUtilityClassNames(props));
  props.className && assignedClassNames.push(props.className);

  return (
    <nav
      aria-label="breadcrumb"
      {...assignedProps}
      className={assignedClassNames.join(" ")}
    />
  );
}
