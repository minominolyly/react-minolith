import { ColorName } from "../../types";
import { DivProps } from "../../components/Div";

export default interface GinghamProps extends DivProps {
  colorName?: ColorName;
  degree?: 0 | 15 | 30 | 45 | 60 | 75 | 90;
}
