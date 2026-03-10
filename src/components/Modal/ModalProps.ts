import { DetailedHTMLProps, DialogHTMLAttributes } from "react";
import { BaseComponentProps } from "../../models";
import { ColorName, SemanticColorName } from "../../types";

export default interface ModalProps
  extends
    DetailedHTMLProps<
      DialogHTMLAttributes<HTMLDialogElement>,
      HTMLDialogElement
    >,
    BaseComponentProps {
  colorName?: ColorName | SemanticColorName;
  isActive?: boolean | undefined;
}
