import { ColorName, SemanticColorName } from "../../types";
import { DivProps } from "../../components/Div";

export default interface ZigzagProps extends DivProps {
  colorName?: ColorName | SemanticColorName;
  size?: "small" | "large" | `${number}rem`;
}
