import { ReactNode } from "react";
import { ColorName } from "../../types";
import DivProps from "../Div/DivProps";

export default interface HamburgerProps
  extends DivProps {
  colorName?: ColorName;
  isActive?: boolean | undefined;
  crownInner?: ReactNode | string | undefined;
  heelInner?: ReactNode | string | undefined;
}
