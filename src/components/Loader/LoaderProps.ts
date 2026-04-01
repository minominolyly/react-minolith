import type { ColorName, SemanticColorName } from "../../types";
import type { DivProps } from "../Div";

type LoaderSize =
  | "large"
  | "xlarge"
  | "xxlarge"
  | "xxxlarge"
  | "xxxxlarge"
  | "xxxxxlarge";

export default interface LoaderProps<
  BaseComponentColorNameType extends string,
> extends DivProps<BaseComponentColorNameType> {
  colorName?: ColorName | SemanticColorName;
  size?: LoaderSize;
}
