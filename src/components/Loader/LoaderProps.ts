import { ColorName } from "../../common/literalTypes";
import DivProps from "../Div/DivProps";

export default interface LoaderProps extends DivProps {
  colorName?: ColorName;
  size?:
    | "large"
    | "xlarge"
    | "xxlarge"
    | "xxxlarge"
    | "xxxxlarge"
    | "xxxxxlarge";
}

