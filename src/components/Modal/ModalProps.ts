import { DetailedHTMLProps, DialogHTMLAttributes } from "react";
import { BaseComponentProps } from "../../models";
import ColorName from "../../types/ColorName";

export default interface ModalProps
  extends
    DetailedHTMLProps<
      DialogHTMLAttributes<HTMLDialogElement>,
      HTMLDialogElement
    >,
    BaseComponentProps {
  colorName?: ColorName;
  isActive?: boolean | undefined;
}
