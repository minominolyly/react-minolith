import type { ClassAttributes, InputHTMLAttributes } from "react";
import type { BaseComponentProps } from "../../models";
import type {
  BorderRadius,
  BorderWidth,
  ColorName,
  SemanticColorName,
} from "../../types";

export default interface InputProps<BaseComponentColorNameType extends string>
  extends
    ClassAttributes<HTMLInputElement>,
    InputHTMLAttributes<HTMLInputElement>,
    BaseComponentProps<BaseComponentColorNameType> {
  colorName?: ColorName | SemanticColorName;
  borderRadius?: BorderRadius;
  borderWidth?: BorderWidth;
}
