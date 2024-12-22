import ColumnsProps from "./ColumnsProps";
import classNames from "./Columns.module.scss";
import { classNameUtility } from "../../utilities";

export default function Columns(props: ColumnsProps): JSX.Element {
  const assignedProps = { ...props };
  delete assignedProps["isDirectionRow"];
  delete assignedProps["isDirectionRowReverse"];
  delete assignedProps["isDirectionColumn"];
  delete assignedProps["isDirectionColumnReverse"];
  delete assignedProps["isXSmallDirectionRow"];
  delete assignedProps["isXSmallOrMoreDirectionRow"];
  delete assignedProps["isSmallOrLessDirectionRow"];
  delete assignedProps["isSmallDirectionRow"];
  delete assignedProps["isSmallOrMoreDirectionRow"];
  delete assignedProps["isMediumOrLessDirectionRow"];
  delete assignedProps["isMediumDirectionRow"];
  delete assignedProps["isMediumOrMoreDirectionRow"];
  delete assignedProps["isLargeOrLessDirectionRow"];
  delete assignedProps["isLargeDirectionRow"];
  delete assignedProps["isLargeOrMoreDirectionRow"];
  delete assignedProps["isXLargeOrLessDirectionRow"];
  delete assignedProps["isXLargeDirectionRow"];
  delete assignedProps["isXSmallDirectionRowReverse"];
  delete assignedProps["isXSmallOrMoreDirectionRowReverse"];
  delete assignedProps["isSmallOrLessDirectionRowReverse"];
  delete assignedProps["isSmallDirectionRowReverse"];
  delete assignedProps["isSmallOrMoreDirectionRowReverse"];
  delete assignedProps["isMediumOrLessDirectionRowReverse"];
  delete assignedProps["isMediumDirectionRowReverse"];
  delete assignedProps["isMediumOrMoreDirectionRowReverse"];
  delete assignedProps["isLargeOrLessDirectionRowReverse"];
  delete assignedProps["isLargeDirectionRowReverse"];
  delete assignedProps["isLargeOrMoreDirectionRowReverse"];
  delete assignedProps["isXLargeOrLessDirectionRowReverse"];
  delete assignedProps["isXLargeDirectionRowReverse"];
  delete assignedProps["isXSmallDirectionColumn"];
  delete assignedProps["isXSmallOrMoreDirectionColumn"];
  delete assignedProps["isSmallOrLessDirectionColumn"];
  delete assignedProps["isSmallDirectionColumn"];
  delete assignedProps["isSmallOrMoreDirectionColumn"];
  delete assignedProps["isMediumOrLessDirectionColumn"];
  delete assignedProps["isMediumDirectionColumn"];
  delete assignedProps["isMediumOrMoreDirectionColumn"];
  delete assignedProps["isLargeOrLessDirectionColumn"];
  delete assignedProps["isLargeDirectionColumn"];
  delete assignedProps["isLargeOrMoreDirectionColumn"];
  delete assignedProps["isXLargeOrLessDirectionColumn"];
  delete assignedProps["isXLargeDirectionColumn"];
  delete assignedProps["isXSmallDirectionColumnReverse"];
  delete assignedProps["isXSmallOrMoreDirectionColumnReverse"];
  delete assignedProps["isSmallOrLessDirectionColumnReverse"];
  delete assignedProps["isSmallDirectionColumnReverse"];
  delete assignedProps["isSmallOrMoreDirectionColumnReverse"];
  delete assignedProps["isMediumOrLessDirectionColumnReverse"];
  delete assignedProps["isMediumDirectionColumnReverse"];
  delete assignedProps["isMediumOrMoreDirectionColumnReverse"];
  delete assignedProps["isLargeOrLessDirectionColumnReverse"];
  delete assignedProps["isLargeDirectionColumnReverse"];
  delete assignedProps["isLargeOrMoreDirectionColumnReverse"];
  delete assignedProps["isXLargeOrLessDirectionColumnReverse"];
  delete assignedProps["isXLargeDirectionColumnReverse"];
  //#region BaseComponentProps
  delete assignedProps["fore"];
  delete assignedProps["back"];
  delete assignedProps["highlighter"];
  delete assignedProps["border"];
  delete assignedProps["positioning"];
  delete assignedProps["sizing"];
  delete assignedProps["spacing"];
  //#endregion BaseComponentProps

  const assignedClassNames: string[] = [classNames["columns"]];

  props.isDirectionRow &&
    assignedClassNames.push(classNames["is-direction-row"]);
  props.isDirectionRowReverse &&
    assignedClassNames.push(classNames["is-direction-row-reverse"]);
  props.isDirectionColumn &&
    assignedClassNames.push(classNames["is-direction-column"]);
  props.isDirectionColumnReverse &&
    assignedClassNames.push(classNames["is-direction-column-reverse"]);
  props.isXSmallDirectionRow &&
    assignedClassNames.push(classNames["is-XSmall-direction-row"]);
  props.isXSmallOrMoreDirectionRow &&
    assignedClassNames.push(classNames["is-XSmall-or-more-direction-row"]);
  props.isSmallOrLessDirectionRow &&
    assignedClassNames.push(classNames["is-Small-or-less-direction-row"]);
  props.isSmallDirectionRow &&
    assignedClassNames.push(classNames["is-Small-direction-row"]);
  props.isSmallOrMoreDirectionRow &&
    assignedClassNames.push(classNames["is-Small-or-more-direction-row"]);
  props.isMediumOrLessDirectionRow &&
    assignedClassNames.push(classNames["is-Medium-or-less-direction-row"]);
  props.isMediumDirectionRow &&
    assignedClassNames.push(classNames["is-Medium-direction-row"]);
  props.isMediumOrMoreDirectionRow &&
    assignedClassNames.push(classNames["is-Medium-or-more-direction-row"]);
  props.isLargeOrLessDirectionRow &&
    assignedClassNames.push(classNames["is-Large-or-less-direction-row"]);
  props.isLargeDirectionRow &&
    assignedClassNames.push(classNames["is-Large-direction-row"]);
  props.isLargeOrMoreDirectionRow &&
    assignedClassNames.push(classNames["is-Large-or-more-direction-row"]);
  props.isXLargeOrLessDirectionRow &&
    assignedClassNames.push(classNames["is-XLarge-or-less-direction-row"]);
  props.isXLargeDirectionRow &&
    assignedClassNames.push(classNames["is-XLarge-direction-row"]);
  props.isXSmallDirectionRowReverse &&
    assignedClassNames.push(classNames["is-XSmall-direction-row-reverse"]);
  props.isXSmallOrMoreDirectionRowReverse &&
    assignedClassNames.push(
      classNames["is-XSmall-or-more-direction-row-reverse"]
    );
  props.isSmallOrLessDirectionRowReverse &&
    assignedClassNames.push(
      classNames["is-Small-or-less-direction-row-reverse"]
    );
  props.isSmallDirectionRowReverse &&
    assignedClassNames.push(classNames["is-Small-direction-row-reverse"]);
  props.isSmallOrMoreDirectionRowReverse &&
    assignedClassNames.push(
      classNames["is-Small-or-more-direction-row-reverse"]
    );
  props.isMediumOrLessDirectionRowReverse &&
    assignedClassNames.push(
      classNames["is-Medium-or-less-direction-row-reverse"]
    );
  props.isMediumDirectionRowReverse &&
    assignedClassNames.push(classNames["is-Medium-direction-row-reverse"]);
  props.isMediumOrMoreDirectionRowReverse &&
    assignedClassNames.push(
      classNames["is-Medium-or-more-direction-row-reverse"]
    );
  props.isLargeOrLessDirectionRowReverse &&
    assignedClassNames.push(
      classNames["is-Large-or-less-direction-row-reverse"]
    );
  props.isLargeDirectionRowReverse &&
    assignedClassNames.push(classNames["is-Large-direction-row-reverse"]);
  props.isLargeOrMoreDirectionRowReverse &&
    assignedClassNames.push(
      classNames["is-Large-or-more-direction-row-reverse"]
    );
  props.isXLargeOrLessDirectionRowReverse &&
    assignedClassNames.push(
      classNames["is-XLarge-or-less-direction-row-reverse"]
    );
  props.isXLargeDirectionRowReverse &&
    assignedClassNames.push(classNames["is-XLarge-direction-row-reverse"]);
  props.isXSmallDirectionColumn &&
    assignedClassNames.push(classNames["is-XSmall-direction-column"]);
  props.isXSmallOrMoreDirectionColumn &&
    assignedClassNames.push(classNames["is-XSmall-or-more-direction-column"]);
  props.isSmallOrLessDirectionColumn &&
    assignedClassNames.push(classNames["is-Small-or-less-direction-column"]);
  props.isSmallDirectionColumn &&
    assignedClassNames.push(classNames["is-Small-direction-column"]);
  props.isSmallOrMoreDirectionColumn &&
    assignedClassNames.push(classNames["is-Small-or-more-direction-column"]);
  props.isMediumOrLessDirectionColumn &&
    assignedClassNames.push(classNames["is-Medium-or-less-direction-column"]);
  props.isMediumDirectionColumn &&
    assignedClassNames.push(classNames["is-Medium-direction-column"]);
  props.isMediumOrMoreDirectionColumn &&
    assignedClassNames.push(classNames["is-Medium-or-more-direction-column"]);
  props.isLargeOrLessDirectionColumn &&
    assignedClassNames.push(
      classNames["is-Large-or-less-direction-column"]
    );
  props.isLargeDirectionColumn &&
    assignedClassNames.push(classNames["is-Large-direction-column"]);
  props.isLargeOrMoreDirectionColumn &&
    assignedClassNames.push(
      classNames["is-Large-or-more-direction-column"]
    );
  props.isXLargeOrLessDirectionColumn &&
    assignedClassNames.push(classNames["is-XLarge-or-less-direction-column"]);
  props.isXLargeDirectionColumn &&
    assignedClassNames.push(classNames["is-XLarge-direction-column"]);
  props.isXSmallDirectionColumnReverse &&
    assignedClassNames.push(classNames["is-XSmall-direction-column-reverse"]);
  props.isXSmallOrMoreDirectionColumnReverse &&
    assignedClassNames.push(
      classNames["is-XSmall-or-more-direction-column-reverse"]
    );
  props.isSmallOrLessDirectionColumnReverse &&
    assignedClassNames.push(
      classNames["is-Small-or-less-direction-column-reverse"]
    );
  props.isSmallDirectionColumnReverse &&
    assignedClassNames.push(classNames["is-Small-direction-column-reverse"]);
  props.isSmallOrMoreDirectionColumnReverse &&
    assignedClassNames.push(
      classNames["is-Small-or-more-direction-column-reverse"]
    );
  props.isMediumOrLessDirectionColumnReverse &&
    assignedClassNames.push(
      classNames["is-Medium-or-less-direction-column-reverse"]
    );
  props.isMediumDirectionColumnReverse &&
    assignedClassNames.push(classNames["is-Medium-direction-column-reverse"]);
  props.isMediumOrMoreDirectionColumnReverse &&
    assignedClassNames.push(
      classNames["is-Medium-or-more-direction-column-reverse"]
    );
  props.isLargeOrLessDirectionColumnReverse &&
    assignedClassNames.push(
      classNames["is-Large-or-less-direction-column-reverse"]
    );
  props.isLargeDirectionColumnReverse &&
    assignedClassNames.push(
      classNames["is-Large-direction-column-reverse"]
    );
  props.isLargeOrMoreDirectionColumnReverse &&
    assignedClassNames.push(
      classNames["is-Large-or-more-direction-column-reverse"]
    );
  props.isXLargeOrLessDirectionColumnReverse &&
    assignedClassNames.push(
      classNames["is-XLarge-or-less-direction-column-reverse"]
    );
  props.isXLargeDirectionColumnReverse &&
    assignedClassNames.push(classNames["is-XLarge-direction-column-reverse"]);

  assignedClassNames.push(...classNameUtility.getUtilityClassNames(props));
  props.className && assignedClassNames.push(props.className);

  return <div {...assignedProps} className={assignedClassNames.join(" ")} />;
}
