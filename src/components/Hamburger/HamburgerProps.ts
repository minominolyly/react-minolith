import { ColorName } from "../../common/literalTypes";
import { DivProps } from "../Div";

export default interface HamburgerProps
  extends DivProps {
  colorName?: ColorName;
  isActive?: boolean | undefined;
  crownInner?: React.ReactNode | string | undefined;
  heelInner?: React.ReactNode | string | undefined;
}
