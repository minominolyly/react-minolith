import type { BaseComponentProps } from "../../models";
import type { ColorName, Percentage, SemanticColorName } from "../../types";

export default interface BaseProgressProps<
  BaseComponentColorNameType extends string,
> extends BaseComponentProps<BaseComponentColorNameType> {
  colorName?: ColorName | SemanticColorName;
  percentage: Percentage;
}
