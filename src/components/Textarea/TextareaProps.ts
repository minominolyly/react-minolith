import { DetailedHTMLProps, TextareaHTMLAttributes } from "react";
import { BaseComponentProps } from "../../models";
import { ColorName, SemanticColorName } from "../../types";

export default interface TextareaProps
  extends
    DetailedHTMLProps<
      TextareaHTMLAttributes<HTMLTextAreaElement>,
      HTMLTextAreaElement
    >,
    BaseComponentProps {
  colorName?: ColorName | SemanticColorName;
}
