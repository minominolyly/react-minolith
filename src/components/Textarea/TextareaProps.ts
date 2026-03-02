import { DetailedHTMLProps, TextareaHTMLAttributes } from "react";
import { BaseComponentProps } from "../../models";
import { ColorName } from "../../types";

export default interface TextareaProps
  extends
    DetailedHTMLProps<
      TextareaHTMLAttributes<HTMLTextAreaElement>,
      HTMLTextAreaElement
    >,
    BaseComponentProps {
  colorName?: ColorName;
}
