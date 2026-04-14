import type { ClassAttributes, HTMLAttributes } from "react";
import type BaseDialogueNameProps from "./BaseDialogueNameProps";

export default interface DialogueMessageInnerProps<
  BaseComponentColorNameType extends string,
>
  extends
    ClassAttributes<HTMLDivElement>,
    HTMLAttributes<HTMLDivElement>,
    BaseDialogueNameProps<BaseComponentColorNameType> {}
