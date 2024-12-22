import { ColorName } from "../../common/literalTypes";
import { DivProps } from "../../components/Div";

export default interface StripeProps extends DivProps {
  colorName?: ColorName;
  degree?: 0 | 45 | 90 | 135 | 180 | 225 | 270 | 315 | 360;
}
