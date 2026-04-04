import type { ColorName, SemanticColorName } from "../../types";
import type { SpanProps } from "../Span";

export default interface BadgeProps<
  BaseComponentColorNameType extends string,
> extends SpanProps<BaseComponentColorNameType> {
  colorName?: ColorName | SemanticColorName;
  isSmall?: boolean;
  isClickable?: boolean;
}
