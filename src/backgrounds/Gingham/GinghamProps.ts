import { ColorName } from "../../common/literalTypes";
import { DivProps } from "../../components/Div";

export default interface GinghamProps extends DivProps {
  colorName?: ColorName;
  degree?: 0 | 45 | 90 | 135 | 180;
}
