import type { DivProps } from "../../components/Div";
import type { ColorName, SemanticColorName } from "../../types";

export default interface GinghamProps<
  BaseComponentColorNameType extends string,
> extends DivProps<BaseComponentColorNameType> {
  colorName?: ColorName | SemanticColorName;
  degree?: 0 | 15 | 30 | 45 | 60 | 75 | 90;
}
