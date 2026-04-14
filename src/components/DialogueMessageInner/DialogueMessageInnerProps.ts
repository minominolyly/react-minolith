import type { ClassAttributes, HTMLAttributes } from "react";
import type BaseDialogueMessageInnerProps from "./BaseDialogueMessageInnerProps";

export default interface DialogueMessageInnerProps<
  BaseComponentColorNameType extends string,
>
  extends
    ClassAttributes<HTMLDivElement>,
    HTMLAttributes<HTMLDivElement>,
    BaseDialogueMessageInnerProps<BaseComponentColorNameType> {}
