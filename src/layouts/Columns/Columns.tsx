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
  delete assignedProps["gutter"];
  delete assignedProps["gutterXSmall"];
  delete assignedProps["gutterSmallOrLess"];
  delete assignedProps["gutterSmall"];
  delete assignedProps["gutterSmallOrMore"];
  delete assignedProps["gutterMediumOrLess"];
  delete assignedProps["gutterMedium"];
  delete assignedProps["gutterMediumOrMore"];
  delete assignedProps["gutterLargeOrLess"];
  delete assignedProps["gutterLarge"];
  delete assignedProps["gutterLargeOrMore"];
  delete assignedProps["gutterXLarge"];
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
    assignedClassNames.push(classNames["is-xsmall-direction-row"]);
  props.isXSmallOrMoreDirectionRow &&
    assignedClassNames.push(classNames["is-xsmall-or-more-direction-row"]);
  props.isSmallOrLessDirectionRow &&
    assignedClassNames.push(classNames["is-small-or-less-direction-row"]);
  props.isSmallDirectionRow &&
    assignedClassNames.push(classNames["is-small-direction-row"]);
  props.isSmallOrMoreDirectionRow &&
    assignedClassNames.push(classNames["is-small-or-more-direction-row"]);
  props.isMediumOrLessDirectionRow &&
    assignedClassNames.push(classNames["is-medium-or-less-direction-row"]);
  props.isMediumDirectionRow &&
    assignedClassNames.push(classNames["is-medium-direction-row"]);
  props.isMediumOrMoreDirectionRow &&
    assignedClassNames.push(classNames["is-medium-or-more-direction-row"]);
  props.isLargeOrLessDirectionRow &&
    assignedClassNames.push(classNames["is-large-or-less-direction-row"]);
  props.isLargeDirectionRow &&
    assignedClassNames.push(classNames["is-large-direction-row"]);
  props.isLargeOrMoreDirectionRow &&
    assignedClassNames.push(classNames["is-large-or-more-direction-row"]);
  props.isXLargeOrLessDirectionRow &&
    assignedClassNames.push(classNames["is-XLarge-or-less-direction-row"]);
  props.isXLargeDirectionRow &&
    assignedClassNames.push(classNames["is-XLarge-direction-row"]);
  props.isXSmallDirectionRowReverse &&
    assignedClassNames.push(classNames["is-xsmall-direction-row-reverse"]);
  props.isXSmallOrMoreDirectionRowReverse &&
    assignedClassNames.push(
      classNames["is-xsmall-or-more-direction-row-reverse"]
    );
  props.isSmallOrLessDirectionRowReverse &&
    assignedClassNames.push(
      classNames["is-small-or-less-direction-row-reverse"]
    );
  props.isSmallDirectionRowReverse &&
    assignedClassNames.push(classNames["is-small-direction-row-reverse"]);
  props.isSmallOrMoreDirectionRowReverse &&
    assignedClassNames.push(
      classNames["is-small-or-more-direction-row-reverse"]
    );
  props.isMediumOrLessDirectionRowReverse &&
    assignedClassNames.push(
      classNames["is-medium-or-less-direction-row-reverse"]
    );
  props.isMediumDirectionRowReverse &&
    assignedClassNames.push(classNames["is-medium-direction-row-reverse"]);
  props.isMediumOrMoreDirectionRowReverse &&
    assignedClassNames.push(
      classNames["is-medium-or-more-direction-row-reverse"]
    );
  props.isLargeOrLessDirectionRowReverse &&
    assignedClassNames.push(
      classNames["is-large-or-less-direction-row-reverse"]
    );
  props.isLargeDirectionRowReverse &&
    assignedClassNames.push(classNames["is-large-direction-row-reverse"]);
  props.isLargeOrMoreDirectionRowReverse &&
    assignedClassNames.push(
      classNames["is-large-or-more-direction-row-reverse"]
    );
  props.isXLargeOrLessDirectionRowReverse &&
    assignedClassNames.push(
      classNames["is-XLarge-or-less-direction-row-reverse"]
    );
  props.isXLargeDirectionRowReverse &&
    assignedClassNames.push(classNames["is-XLarge-direction-row-reverse"]);
  props.isXSmallDirectionColumn &&
    assignedClassNames.push(classNames["is-xsmall-direction-column"]);
  props.isXSmallOrMoreDirectionColumn &&
    assignedClassNames.push(classNames["is-xsmall-or-more-direction-column"]);
  props.isSmallOrLessDirectionColumn &&
    assignedClassNames.push(classNames["is-small-or-less-direction-column"]);
  props.isSmallDirectionColumn &&
    assignedClassNames.push(classNames["is-small-direction-column"]);
  props.isSmallOrMoreDirectionColumn &&
    assignedClassNames.push(classNames["is-small-or-more-direction-column"]);
  props.isMediumOrLessDirectionColumn &&
    assignedClassNames.push(classNames["is-medium-or-less-direction-column"]);
  props.isMediumDirectionColumn &&
    assignedClassNames.push(classNames["is-medium-direction-column"]);
  props.isMediumOrMoreDirectionColumn &&
    assignedClassNames.push(classNames["is-medium-or-more-direction-column"]);
  props.isLargeOrLessDirectionColumn &&
    assignedClassNames.push(classNames["is-large-or-less-direction-column"]);
  props.isLargeDirectionColumn &&
    assignedClassNames.push(classNames["is-large-direction-column"]);
  props.isLargeOrMoreDirectionColumn &&
    assignedClassNames.push(classNames["is-large-or-more-direction-column"]);
  props.isXLargeOrLessDirectionColumn &&
    assignedClassNames.push(classNames["is-XLarge-or-less-direction-column"]);
  props.isXLargeDirectionColumn &&
    assignedClassNames.push(classNames["is-XLarge-direction-column"]);
  props.isXSmallDirectionColumnReverse &&
    assignedClassNames.push(classNames["is-xsmall-direction-column-reverse"]);
  props.isXSmallOrMoreDirectionColumnReverse &&
    assignedClassNames.push(
      classNames["is-xsmall-or-more-direction-column-reverse"]
    );
  props.isSmallOrLessDirectionColumnReverse &&
    assignedClassNames.push(
      classNames["is-small-or-less-direction-column-reverse"]
    );
  props.isSmallDirectionColumnReverse &&
    assignedClassNames.push(classNames["is-small-direction-column-reverse"]);
  props.isSmallOrMoreDirectionColumnReverse &&
    assignedClassNames.push(
      classNames["is-small-or-more-direction-column-reverse"]
    );
  props.isMediumOrLessDirectionColumnReverse &&
    assignedClassNames.push(
      classNames["is-medium-or-less-direction-column-reverse"]
    );
  props.isMediumDirectionColumnReverse &&
    assignedClassNames.push(classNames["is-medium-direction-column-reverse"]);
  props.isMediumOrMoreDirectionColumnReverse &&
    assignedClassNames.push(
      classNames["is-medium-or-more-direction-column-reverse"]
    );
  props.isLargeOrLessDirectionColumnReverse &&
    assignedClassNames.push(
      classNames["is-large-or-less-direction-column-reverse"]
    );
  props.isLargeDirectionColumnReverse &&
    assignedClassNames.push(classNames["is-large-direction-column-reverse"]);
  props.isLargeOrMoreDirectionColumnReverse &&
    assignedClassNames.push(
      classNames["is-large-or-more-direction-column-reverse"]
    );
  props.isXLargeOrLessDirectionColumnReverse &&
    assignedClassNames.push(
      classNames["is-xlarge-or-less-direction-column-reverse"]
    );
  props.isXLargeDirectionColumnReverse &&
    assignedClassNames.push(classNames["is-xlarge-direction-column-reverse"]);

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

  if (props.gutterXSmall) {
    if (typeof props.gutterXSmall === "string") {
      assignedClassNames.push(
        classNames[`has-gutter-xsmall-${props.gutterXSmall}`]
      );
    } else {
      if (props.gutterXSmall.x) {
        assignedClassNames.push(
          classNames[`has-gutter-x-xsmall-${props.gutterXSmall.x}`]
        );
      }
      if (props.gutterXSmall.y) {
        assignedClassNames.push(
          classNames[`has-gutter-y-xsmall-${props.gutterXSmall.y}`]
        );
      }
    }
  }

  if (props.gutterSmallOrLess) {
    if (typeof props.gutterSmallOrLess === "string") {
      assignedClassNames.push(
        classNames[`has-gutter-small-or-less-${props.gutterSmallOrLess}`]
      );
    } else {
      if (props.gutterSmallOrLess.x) {
        assignedClassNames.push(
          classNames[`has-gutter-x-small-or-less-${props.gutterSmallOrLess.x}`]
        );
      }
      if (props.gutterSmallOrLess.y) {
        assignedClassNames.push(
          classNames[`has-gutter-y-small-or-less-${props.gutterSmallOrLess.y}`]
        );
      }
    }
  }

  if (props.gutterSmall) {
    if (typeof props.gutterSmall === "string") {
      assignedClassNames.push(
        classNames[`has-gutter-small-${props.gutterSmall}`]
      );
    } else {
      if (props.gutterSmall.x) {
        assignedClassNames.push(
          classNames[`has-gutter-x-small-${props.gutterSmall.x}`]
        );
      }
      if (props.gutterSmall.y) {
        assignedClassNames.push(
          classNames[`has-gutter-y-small-${props.gutterSmall.y}`]
        );
      }
    }
  }

  if (props.gutterSmallOrMore) {
    if (typeof props.gutterSmallOrMore === "string") {
      assignedClassNames.push(
        classNames[`has-gutter-small-or-more-${props.gutterSmallOrMore}`]
      );
    } else {
      if (props.gutterSmallOrMore.x) {
        assignedClassNames.push(
          classNames[`has-gutter-x-small-or-more-${props.gutterSmallOrMore.x}`]
        );
      }
      if (props.gutterSmallOrMore.y) {
        assignedClassNames.push(
          classNames[`has-gutter-y-small-or-more-${props.gutterSmallOrMore.y}`]
        );
      }
    }
  }

  if (props.gutterMediumOrLess) {
    if (typeof props.gutterMediumOrLess === "string") {
      assignedClassNames.push(
        classNames[`has-gutter-medium-or-less-${props.gutterMediumOrLess}`]
      );
    } else {
      if (props.gutterMediumOrLess.x) {
        assignedClassNames.push(
          classNames[
            `has-gutter-x-medium-or-less-${props.gutterMediumOrLess.x}`
          ]
        );
      }
      if (props.gutterMediumOrLess.y) {
        assignedClassNames.push(
          classNames[
            `has-gutter-y-medium-or-less-${props.gutterMediumOrLess.y}`
          ]
        );
      }
    }
  }

  if (props.gutterMedium) {
    if (typeof props.gutterMedium === "string") {
      assignedClassNames.push(
        classNames[`has-gutter-medium-${props.gutterMedium}`]
      );
    } else {
      if (props.gutterMedium.x) {
        assignedClassNames.push(
          classNames[`has-gutter-x-medium-${props.gutterMedium.x}`]
        );
      }
      if (props.gutterMedium.y) {
        assignedClassNames.push(
          classNames[`has-gutter-y-medium-${props.gutterMedium.y}`]
        );
      }
    }
  }

  if (props.gutterMediumOrMore) {
    if (typeof props.gutterMediumOrMore === "string") {
      assignedClassNames.push(
        classNames[`has-gutter-medium-or-more-${props.gutterMediumOrMore}`]
      );
    } else {
      if (props.gutterMediumOrMore.x) {
        assignedClassNames.push(
          classNames[
            `has-gutter-x-medium-or-more-${props.gutterMediumOrMore.x}`
          ]
        );
      }
      if (props.gutterMediumOrMore.y) {
        assignedClassNames.push(
          classNames[
            `has-gutter-y-medium-or-more-${props.gutterMediumOrMore.y}`
          ]
        );
      }
    }
  }

  if (props.gutterLargeOrLess) {
    if (typeof props.gutterLargeOrLess === "string") {
      assignedClassNames.push(
        classNames[`has-gutter-large-or-less-${props.gutterLargeOrLess}`]
      );
    } else {
      if (props.gutterLargeOrLess.x) {
        assignedClassNames.push(
          classNames[`has-gutter-x-large-or-less-${props.gutterLargeOrLess.x}`]
        );
      }
      if (props.gutterLargeOrLess.y) {
        assignedClassNames.push(
          classNames[`has-gutter-y-large-or-less-${props.gutterLargeOrLess.y}`]
        );
      }
    }
  }

  if (props.gutterLarge) {
    if (typeof props.gutterLarge === "string") {
      assignedClassNames.push(
        classNames[`has-gutter-large-${props.gutterLarge}`]
      );
    } else {
      if (props.gutterLarge.x) {
        assignedClassNames.push(
          classNames[`has-gutter-x-large-${props.gutterLarge.x}`]
        );
      }
      if (props.gutterLarge.y) {
        assignedClassNames.push(
          classNames[`has-gutter-y-large-${props.gutterLarge.y}`]
        );
      }
    }
  }

  if (props.gutterLargeOrMore) {
    if (typeof props.gutterLargeOrMore === "string") {
      assignedClassNames.push(
        classNames[`has-gutter-large-or-more-${props.gutterLargeOrMore}`]
      );
    } else {
      if (props.gutterLargeOrMore.x) {
        assignedClassNames.push(
          classNames[`has-gutter-x-large-or-more-${props.gutterLargeOrMore.x}`]
        );
      }
      if (props.gutterLargeOrMore.y) {
        assignedClassNames.push(
          classNames[`has-gutter-y-large-or-more-${props.gutterLargeOrMore.y}`]
        );
      }
    }
  }

  assignedClassNames.push(...classNameUtility.getUtilityClassNames(props));
  props.className && assignedClassNames.push(props.className);

  return <div {...assignedProps} className={assignedClassNames.join(" ")} />;
}
