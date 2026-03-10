import { ColorName, SemanticColorName } from "../../types";
import DivProps from "../Div/DivProps";

export default interface MessageProps extends DivProps {
  colorName?: ColorName | SemanticColorName;
}
