import { classNameUtility } from "../../utilities";
import classNames from "./Container.module.scss";
import ContainerProps from "./ContainerProps";

export default function Container(props: ContainerProps): JSX.Element {
  const assignedProps = { ...props };
  delete assignedProps["gutter"];
  delete assignedProps["isFluid"];
  //#region BaseComponentProps
  delete assignedProps["fore"];
  delete assignedProps["back"];
  delete assignedProps["highlighter"];
  delete assignedProps["border"];
  delete assignedProps["positioning"];
  delete assignedProps["sizing"];
  delete assignedProps["spacing"];
  //#endregion BaseComponentProps

  const assignedClassNames: string[] = [classNames["container"]];

  props.isFluid &&
    assignedClassNames.push(classNames["is-fluid"]);
  if (props.gutter) {
    if (typeof props.gutter === "string") {
      assignedClassNames.push(classNames[`has-gutter-${props.gutter}`]);
    } else {
      if (props.gutter.x) {
        assignedClassNames.push(classNames[`has-gutter-x-${props.gutter.x}`]);
      }
      if (props.gutter.y) {
        assignedClassNames.push(classNames[`has-gutter-y-${props.gutter.y}`]);
      }
    }
  }

  assignedClassNames.push(...classNameUtility.getUtilityClassNames(props));
  props.className && assignedClassNames.push(props.className);

  return <div {...assignedProps} className={assignedClassNames.join(" ")} />;
}
