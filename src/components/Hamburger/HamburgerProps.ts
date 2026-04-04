import type { ReactNode } from "react";
import type { ColorName, SemanticColorName } from "../../types";
import type { DivProps } from "../Div";

export default interface HamburgerProps<
  BaseComponentColorNameType extends string,
> extends DivProps<BaseComponentColorNameType> {
  colorName?: ColorName | SemanticColorName;
  isActive?: boolean | undefined;
  crownInner?: ReactNode | string | undefined;
  heelInner?: ReactNode | string | undefined;
}
