import { ColorName } from "../../types";
import DivProps from "../Div/DivProps";

export default interface CardProps extends DivProps {
  colorName?: ColorName;
}
