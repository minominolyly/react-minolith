import { classNameUtility, minolithStyleUtility } from "../../utilities";
import classNames from "./Dialogue.module.scss";
import DialogueProps from "./DialogueProps";

export default function Dialogue(props: DialogueProps): React.ReactElement {
  const assignedProps = { ...props };
  delete assignedProps["as"];
  delete assignedProps["colorName"];
  delete assignedProps["avatarSize"];
  delete assignedProps["borderStyle"];
  delete assignedProps["borderWidth"];
  delete assignedProps["isRight"];
  delete assignedProps["isAvatarCircle"];
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

  const assignedClassNames = [classNames["dialogue"]];
  props.colorName &&
    assignedClassNames.push(classNames[`is-${props.colorName}`]);
  if (props.isRight) {
    assignedClassNames.push(classNames[`is-right`]);
  } else {
    assignedClassNames.push(classNames[`is-left`]);
  }
  if (props.avatarSize) {
    assignedClassNames.push(classNames[`is-avatar-size-${props.avatarSize}`]);
  }
  if (props.borderStyle) {
    assignedClassNames.push(classNames[`is-border-style-${props.borderStyle}`]);
  }
  if (props.borderWidth) {
    assignedClassNames.push(classNames[`is-border-width-${props.borderWidth}`]);
  }
  props.isAvatarCircle &&
    assignedClassNames.push(classNames[`is-avatar-circle`]);
  assignedClassNames.push(...classNameUtility.getUtilityClassNames(props));
  props.className && assignedClassNames.push(props.className);

  const css = minolithStyleUtility.getEmotionCss(props);

  return props.as ? (
    <props.as
      {...assignedProps}
      className={assignedClassNames.join(" ")}
      css={css}
    />
  ) : (
    <div
      {...assignedProps}
      className={assignedClassNames.join(" ")}
      css={css}
    />
  );
}
