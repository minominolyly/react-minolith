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
  delete assignedProps["isXSmallUpDirectionRow"];
  delete assignedProps["isSmallDownDirectionRow"];
  delete assignedProps["isSmallDirectionRow"];
  delete assignedProps["isSmallUpDirectionRow"];
  delete assignedProps["isMediumDownDirectionRow"];
  delete assignedProps["isMediumDirectionRow"];
  delete assignedProps["isMediumUpDirectionRow"];
  delete assignedProps["isLargeDownDirectionRow"];
  delete assignedProps["isLargeDirectionRow"];
  delete assignedProps["isLargeUpDirectionRow"];
  delete assignedProps["isXLargeDownDirectionRow"];
  delete assignedProps["isXLargeDirectionRow"];
  delete assignedProps["isXSmallDirectionRowReverse"];
  delete assignedProps["isXSmallUpDirectionRowReverse"];
  delete assignedProps["isSmallDownDirectionRowReverse"];
  delete assignedProps["isSmallDirectionRowReverse"];
  delete assignedProps["isSmallUpDirectionRowReverse"];
  delete assignedProps["isMediumDownDirectionRowReverse"];
  delete assignedProps["isMediumDirectionRowReverse"];
  delete assignedProps["isMediumUpDirectionRowReverse"];
  delete assignedProps["isLargeDownDirectionRowReverse"];
  delete assignedProps["isLargeDirectionRowReverse"];
  delete assignedProps["isLargeUpDirectionRowReverse"];
  delete assignedProps["isXLargeDownDirectionRowReverse"];
  delete assignedProps["isXLargeDirectionRowReverse"];
  delete assignedProps["isXSmallDirectionColumn"];
  delete assignedProps["isXSmallUpDirectionColumn"];
  delete assignedProps["isSmallDownDirectionColumn"];
  delete assignedProps["isSmallDirectionColumn"];
  delete assignedProps["isSmallUpDirectionColumn"];
  delete assignedProps["isMediumDownDirectionColumn"];
  delete assignedProps["isMediumDirectionColumn"];
  delete assignedProps["isMediumUpDirectionColumn"];
  delete assignedProps["isLargeDownDirectionColumn"];
  delete assignedProps["isLargeDirectionColumn"];
  delete assignedProps["isLargeUpDirectionColumn"];
  delete assignedProps["isXLargeDownDirectionColumn"];
  delete assignedProps["isXLargeDirectionColumn"];
  delete assignedProps["isXSmallDirectionColumnReverse"];
  delete assignedProps["isXSmallUpDirectionColumnReverse"];
  delete assignedProps["isSmallDownDirectionColumnReverse"];
  delete assignedProps["isSmallDirectionColumnReverse"];
  delete assignedProps["isSmallUpDirectionColumnReverse"];
  delete assignedProps["isMediumDownDirectionColumnReverse"];
  delete assignedProps["isMediumDirectionColumnReverse"];
  delete assignedProps["isMediumUpDirectionColumnReverse"];
  delete assignedProps["isLargeDownDirectionColumnReverse"];
  delete assignedProps["isLargeDirectionColumnReverse"];
  delete assignedProps["isLargeUpDirectionColumnReverse"];
  delete assignedProps["isXLargeDownDirectionColumnReverse"];
  delete assignedProps["isXLargeDirectionColumnReverse"];
  //#region BaseComponentProps
  delete assignedProps["fore"];
  delete assignedProps["back"];
  delete assignedProps["border"];
  delete assignedProps["highlighter"];
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
  props.isXSmallUpDirectionRow &&
    assignedClassNames.push(classNames["is-XSmall-or-more-direction-row"]);
  props.isSmallDownDirectionRow &&
    assignedClassNames.push(classNames["is-Small-or-less-direction-row"]);
  props.isSmallDirectionRow &&
    assignedClassNames.push(classNames["is-Small-direction-row"]);
  props.isSmallUpDirectionRow &&
    assignedClassNames.push(classNames["is-Small-or-more-direction-row"]);
  props.isMediumDownDirectionRow &&
    assignedClassNames.push(classNames["is-Medium-or-less-direction-row"]);
  props.isMediumDirectionRow &&
    assignedClassNames.push(classNames["is-Medium-direction-row"]);
  props.isMediumUpDirectionRow &&
    assignedClassNames.push(classNames["is-Medium-or-more-direction-row"]);
  props.isLargeDownDirectionRow &&
    assignedClassNames.push(classNames["is-Large-or-less-direction-row"]);
  props.isLargeDirectionRow &&
    assignedClassNames.push(classNames["is-Large-direction-row"]);
  props.isLargeUpDirectionRow &&
    assignedClassNames.push(classNames["is-Large-or-more-direction-row"]);
  props.isXLargeDownDirectionRow &&
    assignedClassNames.push(classNames["is-XLarge-or-less-direction-row"]);
  props.isXLargeDirectionRow &&
    assignedClassNames.push(classNames["is-XLarge-direction-row"]);
  props.isXSmallDirectionRowReverse &&
    assignedClassNames.push(classNames["is-XSmall-direction-row-reverse"]);
  props.isXSmallUpDirectionRowReverse &&
    assignedClassNames.push(
      classNames["is-XSmall-or-more-direction-row-reverse"]
    );
  props.isSmallDownDirectionRowReverse &&
    assignedClassNames.push(
      classNames["is-Small-or-less-direction-row-reverse"]
    );
  props.isSmallDirectionRowReverse &&
    assignedClassNames.push(classNames["is-Small-direction-row-reverse"]);
  props.isSmallUpDirectionRowReverse &&
    assignedClassNames.push(
      classNames["is-Small-or-more-direction-row-reverse"]
    );
  props.isMediumDownDirectionRowReverse &&
    assignedClassNames.push(
      classNames["is-Medium-or-less-direction-row-reverse"]
    );
  props.isMediumDirectionRowReverse &&
    assignedClassNames.push(classNames["is-Medium-direction-row-reverse"]);
  props.isMediumUpDirectionRowReverse &&
    assignedClassNames.push(
      classNames["is-Medium-or-more-direction-row-reverse"]
    );
  props.isLargeDownDirectionRowReverse &&
    assignedClassNames.push(
      classNames["is-Large-or-less-direction-row-reverse"]
    );
  props.isLargeDirectionRowReverse &&
    assignedClassNames.push(classNames["is-Large-direction-row-reverse"]);
  props.isLargeUpDirectionRowReverse &&
    assignedClassNames.push(
      classNames["is-Large-or-more-direction-row-reverse"]
    );
  props.isXLargeDownDirectionRowReverse &&
    assignedClassNames.push(
      classNames["is-XLarge-or-less-direction-row-reverse"]
    );
  props.isXLargeDirectionRowReverse &&
    assignedClassNames.push(classNames["is-XLarge-direction-row-reverse"]);
  props.isXSmallDirectionColumn &&
    assignedClassNames.push(classNames["is-XSmall-direction-column"]);
  props.isXSmallUpDirectionColumn &&
    assignedClassNames.push(classNames["is-XSmall-or-more-direction-column"]);
  props.isSmallDownDirectionColumn &&
    assignedClassNames.push(classNames["is-Small-or-less-direction-column"]);
  props.isSmallDirectionColumn &&
    assignedClassNames.push(classNames["is-Small-direction-column"]);
  props.isSmallUpDirectionColumn &&
    assignedClassNames.push(classNames["is-Small-or-more-direction-column"]);
  props.isMediumDownDirectionColumn &&
    assignedClassNames.push(classNames["is-Medium-or-less-direction-column"]);
  props.isMediumDirectionColumn &&
    assignedClassNames.push(classNames["is-Medium-direction-column"]);
  props.isMediumUpDirectionColumn &&
    assignedClassNames.push(classNames["is-Medium-or-more-direction-column"]);
  props.isLargeDownDirectionColumn &&
    assignedClassNames.push(
      classNames["is-Large-or-less-direction-column"]
    );
  props.isLargeDirectionColumn &&
    assignedClassNames.push(classNames["is-Large-direction-column"]);
  props.isLargeUpDirectionColumn &&
    assignedClassNames.push(
      classNames["is-Large-or-more-direction-column"]
    );
  props.isXLargeDownDirectionColumn &&
    assignedClassNames.push(classNames["is-XLarge-or-less-direction-column"]);
  props.isXLargeDirectionColumn &&
    assignedClassNames.push(classNames["is-XLarge-direction-column"]);
  props.isXSmallDirectionColumnReverse &&
    assignedClassNames.push(classNames["is-XSmall-direction-column-reverse"]);
  props.isXSmallUpDirectionColumnReverse &&
    assignedClassNames.push(
      classNames["is-XSmall-or-more-direction-column-reverse"]
    );
  props.isSmallDownDirectionColumnReverse &&
    assignedClassNames.push(
      classNames["is-Small-or-less-direction-column-reverse"]
    );
  props.isSmallDirectionColumnReverse &&
    assignedClassNames.push(classNames["is-Small-direction-column-reverse"]);
  props.isSmallUpDirectionColumnReverse &&
    assignedClassNames.push(
      classNames["is-Small-or-more-direction-column-reverse"]
    );
  props.isMediumDownDirectionColumnReverse &&
    assignedClassNames.push(
      classNames["is-Medium-or-less-direction-column-reverse"]
    );
  props.isMediumDirectionColumnReverse &&
    assignedClassNames.push(classNames["is-Medium-direction-column-reverse"]);
  props.isMediumUpDirectionColumnReverse &&
    assignedClassNames.push(
      classNames["is-Medium-or-more-direction-column-reverse"]
    );
  props.isLargeDownDirectionColumnReverse &&
    assignedClassNames.push(
      classNames["is-Large-or-less-direction-column-reverse"]
    );
  props.isLargeDirectionColumnReverse &&
    assignedClassNames.push(
      classNames["is-Large-direction-column-reverse"]
    );
  props.isLargeUpDirectionColumnReverse &&
    assignedClassNames.push(
      classNames["is-Large-or-more-direction-column-reverse"]
    );
  props.isXLargeDownDirectionColumnReverse &&
    assignedClassNames.push(
      classNames["is-XLarge-or-less-direction-column-reverse"]
    );
  props.isXLargeDirectionColumnReverse &&
    assignedClassNames.push(classNames["is-XLarge-direction-column-reverse"]);

  assignedClassNames.push(...classNameUtility.getUtilityClassNames(props));
  props.className && assignedClassNames.push(props.className);

  return <div {...assignedProps} className={assignedClassNames.join(" ")} />;
}
