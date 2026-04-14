import type { ClassAttributes, DialogHTMLAttributes } from "react";
import type BaseModalProps from "./BaseModalProps";

export default interface ModalProps<BaseComponentColorNameType extends string>
  extends
    ClassAttributes<HTMLDialogElement>,
    DialogHTMLAttributes<HTMLDialogElement>,
    BaseModalProps<BaseComponentColorNameType> {}
