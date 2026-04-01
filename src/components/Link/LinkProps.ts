import { AnchorHTMLAttributes, ClassAttributes } from "react";
import type { BaseComponentProps } from "../../models";
import type { ColorName, SemanticColorName } from "../../types";

export default interface LinkProps<BaseComponentColorNameType extends string>
  extends
    ClassAttributes<HTMLAnchorElement>,
    AnchorHTMLAttributes<HTMLAnchorElement>,
    BaseComponentProps<BaseComponentColorNameType> {
  colorName?: ColorName | SemanticColorName;
}
