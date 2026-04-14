import type { BaseComponentProps } from "../../models";
import type { ColorName, LoaderSize, SemanticColorName } from "../../types";

export default interface BaseLoaderProps<
  BaseComponentColorNameType extends string,
> extends BaseComponentProps<BaseComponentColorNameType> {
  colorName?: ColorName | SemanticColorName;
  size?: LoaderSize;
}
