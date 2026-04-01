import type { ColorName, SemanticColorName } from "../../types";
import type { DivProps } from "../Div";

export default interface CardProps<
  BaseComponentColorNameType extends string,
> extends DivProps<BaseComponentColorNameType> {
  colorName?: ColorName | SemanticColorName;
}
