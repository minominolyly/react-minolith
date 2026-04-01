import type { ColorName, SemanticColorName } from "../../types";
import type { DivProps } from "../../components/Div";

export default interface RhombusProps<
  BaseComponentColorNameType extends string,
> extends DivProps<BaseComponentColorNameType> {
  colorName?: ColorName | SemanticColorName;
  size?: "small" | "large" | `${number}rem`;
}
