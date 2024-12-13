import { classNameUtility } from "../../utilities";
import ColumnProps from "./ColumnProps";
import classNames from "./Column.module.scss";

export default function Column(props: ColumnProps): JSX.Element {
  const assignedProps = { ...props };
  delete assignedProps["isFull"];
  delete assignedProps["size"];
  delete assignedProps["sizeXSmall"];
  delete assignedProps["sizeXSmallUp"];
  delete assignedProps["sizeSmallDown"];
  delete assignedProps["sizeSmall"];
  delete assignedProps["sizeSmallUp"];
  delete assignedProps["sizeMediumDown"];
  delete assignedProps["sizeMedium"];
  delete assignedProps["sizeMediumUp"];
  delete assignedProps["sizeLargeDown"];
  delete assignedProps["sizeLarge"];
  delete assignedProps["sizeLargeUp"];
  delete assignedProps["sizeXLargeDown"];
  delete assignedProps["sizeXLarge"];
  //#region BaseComponentProps
  delete assignedProps["fore"];
  delete assignedProps["back"];
  delete assignedProps["border"];
  delete assignedProps["highlighter"];
  delete assignedProps["spacing"];
  //#endregion BaseComponentProps

  const assignedClassNames: string[] = [classNames["column"]];

  props.isFull && assignedClassNames.push(classNames["is-full"]);
  props.size && assignedClassNames.push(classNames[`column-${props.size}`]);
  props.sizeXSmall &&
    assignedClassNames.push(classNames[`is-xsmall-${props.sizeXSmall}`]);
  props.sizeXSmallUp &&
    assignedClassNames.push(
      classNames[`is-xsmall-up-${props.sizeXSmallUp}`]
    );
  props.sizeSmallDown &&
    assignedClassNames.push(
      classNames[`is-small-down-${props.sizeSmallDown}`]
    );
  props.sizeSmall &&
    assignedClassNames.push(classNames[`is-small-${props.sizeSmall}`]);
  props.sizeSmallUp &&
    assignedClassNames.push(
      classNames[`is-small-up-${props.sizeSmallUp}`]
    );
  props.sizeMediumDown &&
    assignedClassNames.push(
      classNames[`is-medium-down-${props.sizeMediumDown}`]
    );
  props.sizeMedium &&
    assignedClassNames.push(classNames[`is-medium-${props.sizeMedium}`]);
  props.sizeMediumUp &&
    assignedClassNames.push(
      classNames[`is-medium-up-${props.sizeMediumUp}`]
    );
  props.sizeLargeDown &&
    assignedClassNames.push(
      classNames[`is-large-down-${props.sizeLargeDown}`]
    );
  props.sizeLarge &&
    assignedClassNames.push(
      classNames[`is-large-${props.sizeLarge}`]
    );
  props.sizeLargeUp &&
    assignedClassNames.push(
      classNames[`is-large-up-${props.sizeLargeUp}`]
    );
  props.sizeXLargeDown &&
    assignedClassNames.push(
      classNames[`is-xlarge-down-${props.sizeXLargeDown}`]
    );
  props.sizeXLarge &&
    assignedClassNames.push(classNames[`is-xlarge-${props.sizeXLarge}`]);

  assignedClassNames.push(...classNameUtility.getUtilityClassNames(props));
  props.className && assignedClassNames.push(props.className);

  return <div {...assignedProps} className={assignedClassNames.join(" ")} />;
}
