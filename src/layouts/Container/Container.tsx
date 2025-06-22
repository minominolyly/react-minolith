"use client";
import { useContext } from "react";
import MinolithColorSchemeContext from "../../contexts/MinolithColorSchemeContext";
import classNameUtility from "../../utilities/classNameUtility";
import emotionStyleUtility from "../../utilities/emotionStyleUtility";
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
  delete assignedProps["css"];
  //#endregion BaseComponentProps

  const assignedClassNames: string[] = [classNames["container"]];

  props.isFluid && assignedClassNames.push(classNames["is-fluid"]);

  if (props.gutter) {
    if (typeof props.gutter === "string") {
      assignedClassNames.push(classNames[`has-gutter-${props.gutter}`]);
    } else if (typeof props.gutter === "number") {
      assignedClassNames.push(classNames[`has-gutter-${props.gutter}rem`]);
    } else {
      if (props.gutter.x) {
        if (typeof props.gutter.x === "string") {
          assignedClassNames.push(classNames[`has-gutter-x-${props.gutter.x}`]);
        } else if (typeof props.gutter.x === "number") {
          assignedClassNames.push(
            classNames[`has-gutter-x-${props.gutter.x}rem`]
          );
        }
      }
      if (props.gutter.y) {
        if (typeof props.gutter.y === "string") {
          assignedClassNames.push(classNames[`has-gutter-y-${props.gutter.y}`]);
        } else if (typeof props.gutter.y === "number") {
          assignedClassNames.push(
            classNames[`has-gutter-y-${props.gutter.y}rem`]
          );
        }
      }
    }
  }

  if (props.gutterXSmall) {
    if (typeof props.gutterXSmall === "string") {
      assignedClassNames.push(
        classNames[`has-gutter-xsmall-${props.gutterXSmall}`]
      );
    } else if (typeof props.gutterXSmall === "number") {
      assignedClassNames.push(
        classNames[`has-gutter-xsmall-${props.gutterXSmall}rem`]
      );
    } else {
      if (props.gutterXSmall.x) {
        if (typeof props.gutterXSmall.x === "string") {
          assignedClassNames.push(
            classNames[`has-gutter-x--xsmall-${props.gutterXSmall.x}`]
          );
        } else if (typeof props.gutterXSmall.x === "number") {
          assignedClassNames.push(
            classNames[`has-gutter-x--xsmall-${props.gutterXSmall.x}rem`]
          );
        }
      }
      if (props.gutterXSmall.y) {
        if (typeof props.gutterXSmall.y === "string") {
          assignedClassNames.push(
            classNames[`has-gutter-y-xsmall-${props.gutterXSmall.y}`]
          );
        } else if (typeof props.gutterXSmall.y === "number") {
          assignedClassNames.push(
            classNames[`has-gutter-y-xsmall-${props.gutterXSmall.y}rem`]
          );
        }
      }
    }
  }

  if (props.gutterSmallOrLess) {
    if (typeof props.gutterSmallOrLess === "string") {
      assignedClassNames.push(
        classNames[`has-gutter-small-or-less-${props.gutterSmallOrLess}`]
      );
    } else if (typeof props.gutterSmallOrLess === "number") {
      assignedClassNames.push(
        classNames[`has-gutter-small-or-less-${props.gutterSmallOrLess}rem`]
      );
    } else {
      if (props.gutterSmallOrLess.x) {
        if (typeof props.gutterSmallOrLess.x === "string") {
          assignedClassNames.push(
            classNames[
              `has-gutter-x-small-or-less-${props.gutterSmallOrLess.x}`
            ]
          );
        } else if (typeof props.gutterSmallOrLess.x === "number") {
          assignedClassNames.push(
            classNames[
              `has-gutter-x-small-or-less-${props.gutterSmallOrLess.x}rem`
            ]
          );
        }
      }
      if (props.gutterSmallOrLess.y) {
        if (typeof props.gutterSmallOrLess.y === "string") {
          assignedClassNames.push(
            classNames[
              `has-gutter-y-small-or-less-${props.gutterSmallOrLess.y}`
            ]
          );
        } else if (typeof props.gutterSmallOrLess.y === "number") {
          assignedClassNames.push(
            classNames[
              `has-gutter-y-small-or-less-${props.gutterSmallOrLess.y}rem`
            ]
          );
        }
      }
    }
  }

  if (props.gutterSmall) {
    if (typeof props.gutterSmall === "string") {
      assignedClassNames.push(
        classNames[`has-gutter-small-${props.gutterSmall}`]
      );
    } else if (typeof props.gutterSmall === "number") {
      assignedClassNames.push(
        classNames[`has-gutter-small-${props.gutterSmall}rem`]
      );
    } else {
      if (props.gutterSmall.x) {
        if (typeof props.gutterSmall.x === "string") {
          assignedClassNames.push(
            classNames[`has-gutter-x-small-${props.gutterSmall.x}`]
          );
        } else if (typeof props.gutterSmall.x === "number") {
          assignedClassNames.push(
            classNames[`has-gutter-x-small-${props.gutterSmall.x}rem`]
          );
        }
      }
      if (props.gutterSmall.y) {
        if (typeof props.gutterSmall.y === "string") {
          assignedClassNames.push(
            classNames[`has-gutter-y-small-${props.gutterSmall.y}`]
          );
        } else if (typeof props.gutterSmall.y === "number") {
          assignedClassNames.push(
            classNames[`has-gutter-y-small-${props.gutterSmall.y}rem`]
          );
        }
      }
    }
  }

  if (props.gutterSmallOrMore) {
    if (typeof props.gutterSmallOrMore === "string") {
      assignedClassNames.push(
        classNames[`has-gutter-small-or-more-${props.gutterSmallOrMore}`]
      );
    } else if (typeof props.gutterSmallOrMore === "number") {
      assignedClassNames.push(
        classNames[`has-gutter-small-or-more-${props.gutterSmallOrMore}rem`]
      );
    } else {
      if (props.gutterSmallOrMore.x) {
        if (typeof props.gutterSmallOrMore.x === "string") {
          assignedClassNames.push(
            classNames[
              `has-gutter-x-small-or-more-${props.gutterSmallOrMore.x}`
            ]
          );
        } else if (typeof props.gutterSmallOrMore.x === "number") {
          assignedClassNames.push(
            classNames[
              `has-gutter-x-small-or-more-${props.gutterSmallOrMore.x}rem`
            ]
          );
        }
      }
      if (props.gutterSmallOrMore.y) {
        if (typeof props.gutterSmallOrMore.y === "string") {
          assignedClassNames.push(
            classNames[
              `has-gutter-y-small-or-more-${props.gutterSmallOrMore.y}`
            ]
          );
        } else if (typeof props.gutterSmallOrMore.y === "number") {
          assignedClassNames.push(
            classNames[
              `has-gutter-y-small-or-more-${props.gutterSmallOrMore.y}rem`
            ]
          );
        }
      }
    }
  }

  if (props.gutterMediumOrLess) {
    if (typeof props.gutterMediumOrLess === "string") {
      assignedClassNames.push(
        classNames[`has-gutter-medium-or-less-${props.gutterMediumOrLess}`]
      );
    } else if (typeof props.gutterMediumOrLess === "number") {
      assignedClassNames.push(
        classNames[`has-gutter-medium-or-less-${props.gutterMediumOrLess}rem`]
      );
    } else {
      if (props.gutterMediumOrLess.x) {
        if (typeof props.gutterMediumOrLess.x === "string") {
          assignedClassNames.push(
            classNames[
              `has-gutter-x-medium-or-less-${props.gutterMediumOrLess.x}`
            ]
          );
        } else if (typeof props.gutterMediumOrLess.x === "number") {
          assignedClassNames.push(
            classNames[
              `has-gutter-x-medium-or-less-${props.gutterMediumOrLess.x}rem`
            ]
          );
        }
      }
      if (props.gutterMediumOrLess.y) {
        if (typeof props.gutterMediumOrLess.y === "string") {
          assignedClassNames.push(
            classNames[
              `has-gutter-y-medium-or-less-${props.gutterMediumOrLess.y}`
            ]
          );
        } else if (typeof props.gutterMediumOrLess.y === "number") {
          assignedClassNames.push(
            classNames[
              `has-gutter-y-medium-or-less-${props.gutterMediumOrLess.y}rem`
            ]
          );
        }
      }
    }
  }

  if (props.gutterMedium) {
    if (typeof props.gutterMedium === "string") {
      assignedClassNames.push(
        classNames[`has-gutter-medium-${props.gutterMedium}`]
      );
    } else if (typeof props.gutterMedium === "number") {
      assignedClassNames.push(
        classNames[`has-gutter-medium-${props.gutterMedium}rem`]
      );
    } else {
      if (props.gutterMedium.x) {
        if (typeof props.gutterMedium.x === "string") {
          assignedClassNames.push(
            classNames[`has-gutter-x-medium-${props.gutterMedium.x}`]
          );
        } else if (typeof props.gutterMedium.x === "number") {
          assignedClassNames.push(
            classNames[`has-gutter-x-medium-${props.gutterMedium.x}rem`]
          );
        }
      }
      if (props.gutterMedium.y) {
        if (typeof props.gutterMedium.y === "string") {
          assignedClassNames.push(
            classNames[`has-gutter-y-medium-${props.gutterMedium.y}`]
          );
        } else if (typeof props.gutterMedium.y === "number") {
          assignedClassNames.push(
            classNames[`has-gutter-y-medium-${props.gutterMedium.y}rem`]
          );
        }
      }
    }
  }

  if (props.gutterMediumOrMore) {
    if (typeof props.gutterMediumOrMore === "string") {
      assignedClassNames.push(
        classNames[`has-gutter-medium-or-more-${props.gutterMediumOrMore}`]
      );
    } else if (typeof props.gutterMediumOrMore === "number") {
      assignedClassNames.push(
        classNames[`has-gutter-medium-or-more-${props.gutterMediumOrMore}rem`]
      );
    } else {
      if (props.gutterMediumOrMore.x) {
        if (typeof props.gutterMediumOrMore.x === "string") {
          assignedClassNames.push(
            classNames[
              `has-gutter-x-medium-or-more-${props.gutterMediumOrMore.x}`
            ]
          );
        } else if (typeof props.gutterMediumOrMore.x === "number") {
          assignedClassNames.push(
            classNames[
              `has-gutter-x-medium-or-more-${props.gutterMediumOrMore.x}rem`
            ]
          );
        }
      }
      if (props.gutterMediumOrMore.y) {
        if (typeof props.gutterMediumOrMore.y === "string") {
          assignedClassNames.push(
            classNames[
              `has-gutter-y-medium-or-more-${props.gutterMediumOrMore.y}`
            ]
          );
        } else if (typeof props.gutterMediumOrMore.y === "number") {
          assignedClassNames.push(
            classNames[
              `has-gutter-y-medium-or-more-${props.gutterMediumOrMore.y}rem`
            ]
          );
        }
      }
    }
  }

  if (props.gutterLargeOrLess) {
    if (typeof props.gutterLargeOrLess === "string") {
      assignedClassNames.push(
        classNames[`has-gutter-large-or-less-${props.gutterLargeOrLess}`]
      );
    } else if (typeof props.gutterLargeOrLess === "number") {
      assignedClassNames.push(
        classNames[`has-gutter-large-or-less-${props.gutterLargeOrLess}rem`]
      );
    } else {
      if (props.gutterLargeOrLess.x) {
        if (typeof props.gutterLargeOrLess.x === "string") {
          assignedClassNames.push(
            classNames[
              `has-gutter-x-large-or-less-${props.gutterLargeOrLess.x}`
            ]
          );
        } else if (typeof props.gutterLargeOrLess.x === "number") {
          assignedClassNames.push(
            classNames[
              `has-gutter-x-large-or-less-${props.gutterLargeOrLess.x}rem`
            ]
          );
        }
      }
      if (props.gutterLargeOrLess.y) {
        if (typeof props.gutterLargeOrLess.y === "string") {
          assignedClassNames.push(
            classNames[
              `has-gutter-y-large-or-less-${props.gutterLargeOrLess.y}`
            ]
          );
        } else if (typeof props.gutterLargeOrLess.y === "number") {
          assignedClassNames.push(
            classNames[
              `has-gutter-y-large-or-less-${props.gutterLargeOrLess.y}rem`
            ]
          );
        }
      }
    }
  }

  if (props.gutterLarge) {
    if (typeof props.gutterLarge === "string") {
      assignedClassNames.push(
        classNames[`has-gutter-large-${props.gutterLarge}`]
      );
    } else if (typeof props.gutterLarge === "number") {
      assignedClassNames.push(
        classNames[`has-gutter-large-${props.gutterLarge}rem`]
      );
    } else {
      if (props.gutterLarge.x) {
        if (typeof props.gutterLarge.x === "string") {
          assignedClassNames.push(
            classNames[`has-gutter-x-large-${props.gutterLarge.x}`]
          );
        } else if (typeof props.gutterLarge.x === "number") {
          assignedClassNames.push(
            classNames[`has-gutter-x-large-${props.gutterLarge.x}rem`]
          );
        }
      }
      if (props.gutterLarge.y) {
        if (typeof props.gutterLarge.y === "string") {
          assignedClassNames.push(
            classNames[`has-gutter-y-large-${props.gutterLarge.y}`]
          );
        } else if (typeof props.gutterLarge.y === "number") {
          assignedClassNames.push(
            classNames[`has-gutter-y-large-${props.gutterLarge.y}rem`]
          );
        }
      }
    }
  }

  if (props.gutterLargeOrMore) {
    if (typeof props.gutterLargeOrMore === "string") {
      assignedClassNames.push(
        classNames[`has-gutter-large-or-more-${props.gutterLargeOrMore}`]
      );
    } else if (typeof props.gutterLargeOrMore === "number") {
      assignedClassNames.push(
        classNames[`has-gutter-large-or-more-${props.gutterLargeOrMore}rem`]
      );
    } else {
      if (props.gutterLargeOrMore.x) {
        if (typeof props.gutterLargeOrMore.x === "string") {
          assignedClassNames.push(
            classNames[
              `has-gutter-x-large-or-more-${props.gutterLargeOrMore.x}`
            ]
          );
        } else if (typeof props.gutterLargeOrMore.x === "number") {
          assignedClassNames.push(
            classNames[
              `has-gutter-x-large-or-more-${props.gutterLargeOrMore.x}rem`
            ]
          );
        }
      }
      if (props.gutterLargeOrMore.y) {
        if (typeof props.gutterLargeOrMore.y === "string") {
          assignedClassNames.push(
            classNames[
              `has-gutter-y-large-or-more-${props.gutterLargeOrMore.y}`
            ]
          );
        } else if (typeof props.gutterLargeOrMore.y === "number") {
          assignedClassNames.push(
            classNames[
              `has-gutter-y-large-or-more-${props.gutterLargeOrMore.y}rem`
            ]
          );
        }
      }
    }
  }

  if (props.gutterXLarge) {
    if (typeof props.gutterXLarge === "string") {
      assignedClassNames.push(
        classNames[`has-gutter-xlarge-${props.gutterXLarge}`]
      );
    } else if (typeof props.gutterXLarge === "number") {
      assignedClassNames.push(
        classNames[`has-gutter-xlarge-${props.gutterXLarge}rem`]
      );
    } else {
      if (props.gutterXLarge.x) {
        if (typeof props.gutterXLarge.x === "string") {
          assignedClassNames.push(
            classNames[`has-gutter-x--xlarge-${props.gutterXLarge.x}`]
          );
        } else if (typeof props.gutterXLarge.x === "number") {
          assignedClassNames.push(
            classNames[`has-gutter-x--xlarge-${props.gutterXLarge.x}rem`]
          );
        }
      }
      if (props.gutterXLarge.y) {
        if (typeof props.gutterXLarge.y === "string") {
          assignedClassNames.push(
            classNames[`has-gutter-y-xlarge-${props.gutterXLarge.y}`]
          );
        } else if (typeof props.gutterXLarge.y === "number") {
          assignedClassNames.push(
            classNames[`has-gutter-y-xlarge-${props.gutterXLarge.y}rem`]
          );
        }
      }
    }
  }

  const utilityClassNames = classNameUtility.getUtilityClassNames(props);
  if (utilityClassNames) {
    assignedClassNames.push(...utilityClassNames);
  }
  if (props.className) {
    assignedClassNames.push(props.className);
  }

  const colorScheme = useContext(MinolithColorSchemeContext);

  const css = emotionStyleUtility.getEmotionCss(props, colorScheme);

  return (
    <div
      {...assignedProps}
      className={assignedClassNames.join(" ")}
      css={css}
    />
  );
}
