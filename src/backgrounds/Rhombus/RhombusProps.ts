import { ColorName } from "../../common/literalTypes";
import { DivProps } from "../../components/Div";

export default interface RhombusProps extends DivProps {
  colorName?: ColorName;
  size?: "small" | "large";
}
