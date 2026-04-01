import type { ClassAttributes, HTMLAttributes } from "react";
import type { BaseComponentProps } from "../../models";
import type { ColorName, SemanticColorName } from "../../types";

export default interface NavProps<BaseComponentColorNameType extends string>
  extends
    ClassAttributes<HTMLElement>,
    HTMLAttributes<HTMLElement>,
    BaseComponentProps<BaseComponentColorNameType> {
  colorName?: ColorName | SemanticColorName;
}
