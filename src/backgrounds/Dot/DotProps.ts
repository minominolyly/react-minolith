import { ColorName } from "../../types";
import { DivProps } from "../../components/Div";

export default interface DotProps extends DivProps {
  colorName?: ColorName;
  dotSize?: "pin" | "polka" | "coin";
}
