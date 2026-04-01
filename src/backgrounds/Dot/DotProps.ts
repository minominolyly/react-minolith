import type { ColorName, SemanticColorName } from "../../types";
import type { DivProps } from "../../components/Div";

export default interface DotProps<
  BaseComponentColorNameType extends string,
> extends DivProps<BaseComponentColorNameType> {
  colorName?: ColorName | SemanticColorName;
  dotSize?: "pin" | "polka" | "coin";
}
