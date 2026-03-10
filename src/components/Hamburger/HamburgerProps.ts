import { ReactNode } from "react";
import { ColorName, SemanticColorName } from "../../types";
import DivProps from "../Div/DivProps";

export default interface HamburgerProps
  extends DivProps {
  colorName?: ColorName | SemanticColorName;
  isActive?: boolean | undefined;
  crownInner?: ReactNode | string | undefined;
  heelInner?: ReactNode | string | undefined;
}
