import { classNameUtility } from "../../utilities";
import DialogueAvatarProps from "./DialogueAvatarProps";
import classNames from "./DialogueAvatar.module.scss";

export default function DialogueAvatar(props: DialogueAvatarProps): React.ReactElement {
  const assignedProps = { ...props };
  delete assignedProps["as"];
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
  assignedClassNames.push(...classNameUtility.getUtilityClassNames(props));
  props.className && assignedClassNames.push(props.className);

  return props.as ? (
    <props.as {...assignedProps} className={assignedClassNames.join(" ")} />
  ) : (
    <img {...assignedProps} className={assignedClassNames.join(" ")} />
  );
}
