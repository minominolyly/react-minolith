import type { BaseComponentProps } from "../../models";
import type { ColorName, SemanticColorName } from "../../types";

export default interface BaseHeaderProps<BaseComponentColorNameType extends string>
  extends
    BaseComponentProps<BaseComponentColorNameType> {
  colorName?: ColorName | SemanticColorName;
  isSticky?: boolean | undefined;
  isFixed?: boolean | undefined;
}
