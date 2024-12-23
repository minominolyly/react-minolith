import { classNameUtility } from "../../utilities";
import DialogueAvatarProps from "./DialogueAvatarProps";
import classNames from "./DialogueAvatar.module.scss";

export default function DialogueAvatar(props: DialogueAvatarProps): JSX.Element {
  const assignedProps = { ...props };
  delete assignedProps["as"];
  delete assignedProps["isCircle"];
  //#region BaseComponentProps
  delete assignedProps["fore"];
  delete assignedProps["back"];
  delete assignedProps["highlighter"];
  delete assignedProps["border"];
  delete assignedProps["positioning"];
  delete assignedProps["sizing"];
  delete assignedProps["spacing"];
  //#endregion BaseComponentProps

  const assignedClassNames: string[] = [classNames["dialogue-avatar"]];
  props.isCircle &&
    assignedClassNames.push(classNames[`is-circle`]);
  assignedClassNames.push(...classNameUtility.getUtilityClassNames(props));
  props.className && assignedClassNames.push(props.className);

  return props.as ? (
    <props.as {...assignedProps} className={assignedClassNames.join(" ")} />
  ) : (
    <img {...assignedProps} className={assignedClassNames.join(" ")} />
  );
}
