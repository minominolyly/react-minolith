import { ColorName } from "../../common/literalTypes";
import { DivProps } from "../Div";

export default interface LoaderProps extends DivProps {
  colorName?: ColorName;
}
