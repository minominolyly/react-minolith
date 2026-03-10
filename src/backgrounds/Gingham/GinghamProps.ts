import { DivProps } from "../../components/Div";
import { ColorName, SemanticColorName } from "../../types";

export default interface GinghamProps extends DivProps {
  colorName?: ColorName | SemanticColorName;
  degree?: 0 | 15 | 30 | 45 | 60 | 75 | 90;
}
