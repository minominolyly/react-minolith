import { ColorName, Percentage } from "../../types";
import DivProps from "../Div/DivProps";

export default interface ProgressProps extends DivProps {
  colorName?: ColorName;
  percentage: Percentage;
}
