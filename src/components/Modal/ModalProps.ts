import { ClassAttributes, DialogHTMLAttributes } from "react";
import type { BaseComponentProps } from "../../models";
import type { ColorName, SemanticColorName } from "../../types";

export default interface ModalProps<BaseComponentColorNameType extends string>
  extends
    ClassAttributes<HTMLDialogElement>,
    DialogHTMLAttributes<HTMLDialogElement>,
    BaseComponentProps<BaseComponentColorNameType> {
  colorName?: ColorName | SemanticColorName;
  isActive?: boolean | undefined;
}
