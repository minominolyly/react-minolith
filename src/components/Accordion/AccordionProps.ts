import type { ClassAttributes, DetailsHTMLAttributes } from "react";
import type { BaseComponentProps } from "../../models";
import type { ColorName, SemanticColorName } from "../../types";

export default interface AccordionProps<BaseComponentColorNameType extends string>
  extends
    ClassAttributes<HTMLDetailsElement>,
    DetailsHTMLAttributes<HTMLDetailsElement>,
    BaseComponentProps<BaseComponentColorNameType> {
  colorName?: ColorName | SemanticColorName;
}
