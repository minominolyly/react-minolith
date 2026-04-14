import type { ClassAttributes, HTMLAttributes } from "react";
import type BaseDialogueAvatarContainerProps from "./BaseDialogueAvatarContainerProps";

export default interface DialogueAvatarContainerProps<
  BaseComponentColorNameType extends string,
>
  extends
    ClassAttributes<HTMLDivElement>,
    HTMLAttributes<HTMLDivElement>,
    BaseDialogueAvatarContainerProps<BaseComponentColorNameType> {}
