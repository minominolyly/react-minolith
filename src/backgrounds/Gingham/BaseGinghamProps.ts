import type { BaseComponentProps } from "../../models";
import type { ColorName, SemanticColorName } from "../../types";

export default interface BaseGinghamProps<
  BaseComponentColorNameType extends string,
> extends BaseComponentProps<BaseComponentColorNameType> {
  colorName?: ColorName | SemanticColorName;
  degree?: 0 | 15 | 30 | 45 | 60 | 75 | 90;
}
