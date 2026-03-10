import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import { BaseComponentProps } from "../../models";
import {
  BorderRadius,
  BorderWidth,
  ColorName,
  SemanticColorName,
} from "../../types";

export default interface InputProps
  extends
    DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
    BaseComponentProps {
  colorName?: ColorName | SemanticColorName;
  borderRadius?: BorderRadius;
  borderWidth?: BorderWidth;
}
