import { ColorName } from "../../types";
import { DivProps } from "../../components/Div";

export default interface ZigzagProps extends DivProps {
  colorName?: ColorName;
  size?: "small" | "large";
}
