import type { DivProps } from "../../components/Div";
import type { ColorName, SemanticColorName } from "../../types";
import type { Degree } from "../../types";

export default interface StripeProps<
  BaseComponentColorNameType extends string,
> extends DivProps<BaseComponentColorNameType> {
  colorName?: ColorName | SemanticColorName;
  degree?: Degree;
}
