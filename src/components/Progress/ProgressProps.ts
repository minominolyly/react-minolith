import { ColorName, Percentage } from "../../common/literalTypes";
import { DivProps } from "../Div";

export default interface ProgressProps extends DivProps {
  colorName?: ColorName;
  percentage: Percentage;
}
