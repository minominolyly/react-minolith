import type { ColorName, Percentage, SemanticColorName } from "../../types";
import type { DivProps } from "../Div";

export default interface ProgressProps<
  BaseComponentColorNameType extends string,
> extends DivProps<BaseComponentColorNameType> {
  colorName?: ColorName | SemanticColorName;
  percentage: Percentage;
}
