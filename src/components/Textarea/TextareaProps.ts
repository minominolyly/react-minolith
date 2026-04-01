import {
  ClassAttributes,
  TextareaHTMLAttributes
} from "react";
import type { BaseComponentProps } from "../../models";
import type { ColorName, SemanticColorName } from "../../types";

export default interface TextareaProps<
  BaseComponentColorNameType extends string
>
  extends
    ClassAttributes<HTMLTextAreaElement>,
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    BaseComponentProps<BaseComponentColorNameType> {
  colorName?: ColorName | SemanticColorName;
}
