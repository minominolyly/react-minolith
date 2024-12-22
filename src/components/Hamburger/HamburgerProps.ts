import { ColorName } from "../../common/literalTypes";
import { DivProps } from "../Div";

export default interface HamburgerProps
  extends DivProps {
  colorName?: ColorName;
  isActive?: boolean | undefined;
  crownInner?: JSX.Element | string | undefined;
  heelInner?: JSX.Element | string | undefined;
}
