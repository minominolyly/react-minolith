"use client";
import { useContext } from "react";
import MinolithColorSchemeContext from "../../contexts/MinolithColorSchemeContext";
import classNameUtility from "../../utilities/classNameUtility";
import emotionStyleUtility from "../../utilities/emotionStyleUtility";
import classNames from "./Columns.module.scss";
import ColumnsProps from "./ColumnsProps";

export default function Columns(props: ColumnsProps): React.ReactElement {
  const assignedProps = { ...props };
  delete assignedProps["flexDirection"];
  delete assignedProps["gutter"];
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

  const assignedClassNames: string[] = [classNames["columns"]];

  const propsClassNames: string[] = [];
  if (props.flexDirection) {
    if (typeof props.flexDirection === "string") {
      propsClassNames.push(
        ...classNameUtility.setFlexDirectionClassNames(
          classNames,
          props.flexDirection,
        ),
      );
    } else {
      propsClassNames.push(
        ...classNameUtility.setFlexDirectionClassNames(
          classNames,
          props.flexDirection.default,
        ),
      );
      propsClassNames.push(
        ...classNameUtility.setFlexDirectionClassNames(
          classNames,
          props.flexDirection.xsmallOrMore,
          "xsmall-or-more",
        ),
      );
      propsClassNames.push(
        ...classNameUtility.setFlexDirectionClassNames(
          classNames,
          props.flexDirection.smallOrLess,
          "small-or-less",
        ),
      );
      propsClassNames.push(
        ...classNameUtility.setFlexDirectionClassNames(
          classNames,
          props.flexDirection.small,
          "small",
        ),
      );
      propsClassNames.push(
        ...classNameUtility.setFlexDirectionClassNames(
          classNames,
          props.flexDirection.smallOrMore,
          "small-or-more",
        ),
      );
      propsClassNames.push(
        ...classNameUtility.setFlexDirectionClassNames(
          classNames,
          props.flexDirection.mediumOrLess,
          "medium-or-less",
        ),
      );
      propsClassNames.push(
        ...classNameUtility.setFlexDirectionClassNames(
          classNames,
          props.flexDirection.medium,
          "medium",
        ),
      );
      propsClassNames.push(
        ...classNameUtility.setFlexDirectionClassNames(
          classNames,
          props.flexDirection.mediumOrMore,
          "medium-or-more",
        ),
      );
      propsClassNames.push(
        ...classNameUtility.setFlexDirectionClassNames(
          classNames,
          props.flexDirection.largeOrLess,
          "large-or-less",
        ),
      );
      propsClassNames.push(
        ...classNameUtility.setFlexDirectionClassNames(
          classNames,
          props.flexDirection.large,
          "large",
        ),
      );
      propsClassNames.push(
        ...classNameUtility.setFlexDirectionClassNames(
          classNames,
          props.flexDirection.largeOrMore,
          "large-or-more",
        ),
      );
      propsClassNames.push(
        ...classNameUtility.setFlexDirectionClassNames(
          classNames,
          props.flexDirection.xlargeOrLess,
          "xlarge-or-less",
        ),
      );
      propsClassNames.push(
        ...classNameUtility.setFlexDirectionClassNames(
          classNames,
          props.flexDirection.xlarge,
          "xlarge",
        ),
      );
    }
  }

  if (props.gutter) {
    if (
      typeof props.gutter === "number" ||
      typeof props.gutter === "string" ||
      "x" in props.gutter ||
      "y" in props.gutter
    ) {
      propsClassNames.push(
        ...classNameUtility.getGutterClassNames(classNames, props.gutter),
      );
    } else {
      if ("default" in props.gutter) {
        propsClassNames.push(
          ...classNameUtility.getGutterClassNames(
            classNames,
            props.gutter.default,
          ),
        );
      }
      if ("xsmall" in props.gutter) {
        propsClassNames.push(
          ...classNameUtility.getGutterClassNames(
            classNames,
            props.gutter.xsmall,
            "xsmall",
          ),
        );
      }
      if ("xsmallOrMore" in props.gutter) {
        propsClassNames.push(
          ...classNameUtility.getGutterClassNames(
            classNames,
            props.gutter.xsmallOrMore,
            "xsmall-or-more",
          ),
        );
      }
      if ("smallOrLess" in props.gutter) {
        propsClassNames.push(
          ...classNameUtility.getGutterClassNames(
            classNames,
            props.gutter.smallOrLess,
            "small-or-less",
          ),
        );
      }
      if ("small" in props.gutter) {
        propsClassNames.push(
          ...classNameUtility.getGutterClassNames(
            classNames,
            props.gutter.small,
            "small",
          ),
        );
      }
      if ("smallOrMore" in props.gutter) {
        propsClassNames.push(
          ...classNameUtility.getGutterClassNames(
            classNames,
            props.gutter.smallOrMore,
            "small-or-more",
          ),
        );
      }
      if ("mediumOrLess" in props.gutter) {
        propsClassNames.push(
          ...classNameUtility.getGutterClassNames(
            classNames,
            props.gutter.mediumOrLess,
            "medium-or-less",
          ),
        );
      }
      if ("medium" in props.gutter) {
        propsClassNames.push(
          ...classNameUtility.getGutterClassNames(
            classNames,
            props.gutter.medium,
            "medium",
          ),
        );
      }
      if ("mediumOrMore" in props.gutter) {
        propsClassNames.push(
          ...classNameUtility.getGutterClassNames(
            classNames,
            props.gutter.mediumOrMore,
            "medium-or-more",
          ),
        );
      }
      if ("largeOrLess" in props.gutter) {
        propsClassNames.push(
          ...classNameUtility.getGutterClassNames(
            classNames,
            props.gutter.largeOrLess,
            "large-or-less",
          ),
        );
      }
      if ("large" in props.gutter) {
        propsClassNames.push(
          ...classNameUtility.getGutterClassNames(
            classNames,
            props.gutter.large,
            "large",
          ),
        );
      }
      if ("largeOrMore" in props.gutter) {
        propsClassNames.push(
          ...classNameUtility.getGutterClassNames(
            classNames,
            props.gutter.largeOrMore,
            "large-or-more",
          ),
        );
      }
      if ("xlargeOrLess" in props.gutter) {
        propsClassNames.push(
          ...classNameUtility.getGutterClassNames(
            classNames,
            props.gutter.xlargeOrLess,
            "xlarge-or-less",
          ),
        );
      }
      if ("xlarge" in props.gutter) {
        propsClassNames.push(
          ...classNameUtility.getGutterClassNames(
            classNames,
            props.gutter.xlarge,
            "xlarge",
          ),
        );
      }
    }
  }

  assignedClassNames.push(...propsClassNames);

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
