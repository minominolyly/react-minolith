import type { ColorName, SemanticColorName } from "../../types";
import type { DivProps } from "../Div";

export default interface MessageProps<
  BaseComponentColorNameType extends string,
> extends DivProps<BaseComponentColorNameType> {
  colorName?: ColorName | SemanticColorName;
}
