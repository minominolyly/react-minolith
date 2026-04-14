import type { BaseComponentProps } from "../../models";
import type { ColorName, Degree, SemanticColorName } from "../../types";

export default interface BaseStripeProps<
  BaseComponentColorNameType extends string,
> extends BaseComponentProps<BaseComponentColorNameType> {
  colorName?: ColorName | SemanticColorName;
  degree?: Degree;
}
