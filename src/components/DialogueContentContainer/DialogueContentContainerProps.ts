import type { ClassAttributes, HTMLAttributes } from "react";
import type BaseDialogueContentContainerProps from "./BaseDialogueContentContainerProps";

export default interface DialogueContentContainerProps<
  BaseComponentColorNameType extends string,
>
  extends
    ClassAttributes<HTMLDivElement>,
    HTMLAttributes<HTMLDivElement>,
    BaseDialogueContentContainerProps<BaseComponentColorNameType> {}
