import { classNameUtility } from "../../utilities";
import classNames from "./Container.module.scss";
import ContainerProps from "./ContainerProps";

export default function Container(props: ContainerProps): React.ReactElement {
  const assignedProps = { ...props };
  delete assignedProps["isFluid"];
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
