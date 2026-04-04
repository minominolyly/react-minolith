import type { ClassAttributes, LabelHTMLAttributes } from "react";
import type { BaseComponentProps } from "../../models";
import type { ColorName, SemanticColorName } from "../../types";

export default interface LabelProps<BaseComponentColorNameType extends string>
  extends
    ClassAttributes<HTMLLabelElement>,
    LabelHTMLAttributes<HTMLLabelElement>,
    BaseComponentProps<BaseComponentColorNameType> {
  colorName?: ColorName | SemanticColorName;
}
