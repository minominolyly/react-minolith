import type { ClassAttributes, HTMLAttributes } from "react";
import type BaseModalContentProps from "./BaseModalContentProps";

export default interface ModalContentProps<
  BaseComponentColorNameType extends string,
>
  extends
    ClassAttributes<HTMLDivElement>,
    HTMLAttributes<HTMLDivElement>,
    BaseModalContentProps<BaseComponentColorNameType> {}
