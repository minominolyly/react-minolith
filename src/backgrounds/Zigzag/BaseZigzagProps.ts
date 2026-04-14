import type { BaseComponentProps } from "../../models";
import type { ColorName, SemanticColorName } from "../../types";

export default interface BaseZigzagProps<
  BaseComponentColorNameType extends string,
> extends BaseComponentProps<BaseComponentColorNameType> {
  colorName?: ColorName | SemanticColorName;
  size?: "small" | "large" | `${number}rem`;
}
