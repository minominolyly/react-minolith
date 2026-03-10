import { ColorName, SemanticColorName } from "../../types";
import { DivProps } from "../../components/Div";

export default interface DotProps extends DivProps {
  colorName?: ColorName | SemanticColorName;
  dotSize?: "pin" | "polka" | "coin";
}
