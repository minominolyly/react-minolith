import { ColorName, SemanticColorName } from "../../types";
import DivProps from "../Div/DivProps";

type LoaderSize =
  | "large"
  | "xlarge"
  | "xxlarge"
  | "xxxlarge"
  | "xxxxlarge"
  | "xxxxxlarge";

export default interface LoaderProps extends DivProps {
  colorName?: ColorName | SemanticColorName;
  size?: LoaderSize;
}
