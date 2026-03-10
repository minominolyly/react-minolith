import { IntRange } from "type-fest";
import { DivProps } from "../../components/Div";
import { ColorName, SemanticColorName } from "../../types";

export default interface StripeProps extends DivProps {
  colorName?: ColorName | SemanticColorName;
  degree?: IntRange<0, 360>;
}
