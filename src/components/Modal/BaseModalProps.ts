import type { BaseComponentProps } from "../../models";
import type { ColorName, SemanticColorName } from "../../types";

export default interface BaseModalProps<
  BaseComponentColorNameType extends string,
> extends BaseComponentProps<BaseComponentColorNameType> {
  colorName?: ColorName | SemanticColorName;
  isActive?: boolean | undefined;
}
