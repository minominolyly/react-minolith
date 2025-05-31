import { classNameUtility, minolithStyleUtility } from "../../utilities";
import ColumnProps from "./ColumnProps";
import classNames from "./Column.module.scss";

export default function Column(props: ColumnProps): React.ReactElement {
  const assignedProps = { ...props };
  delete assignedProps["isFull"];
  delete assignedProps["size"];
  delete assignedProps["sizeXSmall"];
  delete assignedProps["sizeSmallOrLess"];
  delete assignedProps["sizeSmall"];
  delete assignedProps["sizeSmallOrMore"];
  delete assignedProps["sizeMediumOrLess"];
  delete assignedProps["sizeMedium"];
  delete assignedProps["sizeMediumOrMore"];
  delete assignedProps["sizeLargeOrLess"];
  delete assignedProps["sizeLarge"];
  delete assignedProps["sizeLargeOrMore"];
  delete assignedProps["sizeXLarge"];
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

  const assignedClassNames: string[] = [classNames["column"]];

  props.isFull && assignedClassNames.push(classNames["is-full"]);
  props.size && assignedClassNames.push(classNames[`column-${props.size}`]);
  props.sizeXSmall &&
    assignedClassNames.push(classNames[`is-xsmall-${props.sizeXSmall}`]);
  props.sizeSmallOrLess &&
    assignedClassNames.push(
      classNames[`is-small-or-less-${props.sizeSmallOrLess}`]
    );
  props.sizeSmall &&
    assignedClassNames.push(classNames[`is-small-${props.sizeSmall}`]);
  props.sizeSmallOrMore &&
    assignedClassNames.push(
      classNames[`is-small-or-more-${props.sizeSmallOrMore}`]
    );
  props.sizeMediumOrLess &&
    assignedClassNames.push(
      classNames[`is-medium-or-less-${props.sizeMediumOrLess}`]
    );
  props.sizeMedium &&
    assignedClassNames.push(classNames[`is-medium-${props.sizeMedium}`]);
  props.sizeMediumOrMore &&
    assignedClassNames.push(
      classNames[`is-medium-or-more-${props.sizeMediumOrMore}`]
    );
  props.sizeLargeOrLess &&
    assignedClassNames.push(
      classNames[`is-large-or-less-${props.sizeLargeOrLess}`]
    );
  props.sizeLarge &&
    assignedClassNames.push(classNames[`is-large-${props.sizeLarge}`]);
  props.sizeLargeOrMore &&
    assignedClassNames.push(
      classNames[`is-large-or-more-${props.sizeLargeOrMore}`]
    );
  props.sizeXLarge &&
    assignedClassNames.push(classNames[`is-xlarge-${props.sizeXLarge}`]);

  assignedClassNames.push(...classNameUtility.getUtilityClassNames(props));
  props.className && assignedClassNames.push(props.className);

  const css = minolithStyleUtility.getEmotionCss(props);

  return (
    <div
      {...assignedProps}
      className={assignedClassNames.join(" ")}
      css={css}
    />
  );
}
