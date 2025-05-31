"use client";
import classNameUtility from "../../utilities/classNameUtility";
import emotionStyleUtility from "../../utilities/emotionStyleUtility";
import classNames from "./Heading.module.scss";
import HeadingProps from "./HeadingProps";

export default function Heading(props: HeadingProps): React.ReactElement {
  const assignedProps = { ...props };
  delete assignedProps["level"];
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

  const level = props.level;
  const assignedClassNames: string[] = [classNames[`heading-${props.level}`]];
  assignedClassNames.push(...classNameUtility.getUtilityClassNames(props));
  props.className && assignedClassNames.push(props.className);

  const css = emotionStyleUtility.getEmotionCss(props);

  if (level) {
    switch (level) {
      case 1:
        return (
          <h1
            {...assignedProps}
            className={assignedClassNames.join(" ")}
            css={css}
          />
        );
      case 2:
        return (
          <h2
            {...assignedProps}
            className={assignedClassNames.join(" ")}
            css={css}
          />
        );
      case 3:
        return (
          <h3
            {...assignedProps}
            className={assignedClassNames.join(" ")}
            css={css}
          />
        );
      case 4:
        return (
          <h4
            {...assignedProps}
            className={assignedClassNames.join(" ")}
            css={css}
          />
        );
      case 5:
        return (
          <h5
            {...assignedProps}
            className={assignedClassNames.join(" ")}
            css={css}
          />
        );
      case 6:
        return (
          <h6
            {...assignedProps}
            className={assignedClassNames.join(" ")}
            css={css}
          />
        );
    }
  }

  return (
    <h1 {...assignedProps} className={assignedClassNames.join(" ")} css={css} />
  );
}
