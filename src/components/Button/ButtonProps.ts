import type { ButtonHTMLAttributes, ClassAttributes } from "react";
import type { BaseComponentProps } from "../../models";
import type { ColorName, SemanticColorName } from "../../types";

export default interface ButtonProps<BaseComponentColorNameType extends string>
  extends
    ClassAttributes<HTMLButtonElement>,
    ButtonHTMLAttributes<HTMLButtonElement>,
    BaseComponentProps<BaseComponentColorNameType> {
  colorName?: ColorName | SemanticColorName;
}
