import type { ClassAttributes, HTMLAttributes } from "react";
import type { BaseDialogueContentContainerProps } from "../DialogueContentContainer";

export default interface DialogueMessageProps<
  BaseComponentColorNameType extends string,
>
  extends
    ClassAttributes<HTMLDivElement>,
    HTMLAttributes<HTMLDivElement>,
    BaseDialogueContentContainerProps<BaseComponentColorNameType> {}
