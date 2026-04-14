import type { ClassAttributes, HTMLAttributes } from "react";
import type BaseDialogueProps from "./BaseDialogueProps";

export default interface DialogueProps<
  BaseComponentColorNameType extends string,
>
  extends
    ClassAttributes<HTMLDivElement>,
    HTMLAttributes<HTMLDivElement>,
    BaseDialogueProps<BaseComponentColorNameType> {}
