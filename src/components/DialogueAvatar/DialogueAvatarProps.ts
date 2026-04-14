import type { ClassAttributes, ImgHTMLAttributes } from "react";
import type BaseDialogueAvatarProps from "./BaseDialogueAvatarProps";

export default interface DialogueAvatarProps<
  BaseComponentColorNameType extends string,
>
  extends
    ClassAttributes<HTMLImageElement>,
    ImgHTMLAttributes<HTMLImageElement>,
    BaseDialogueAvatarProps<BaseComponentColorNameType> {}
