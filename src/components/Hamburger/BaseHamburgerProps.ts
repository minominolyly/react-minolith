import type { ReactNode } from "react";
import type { ColorName, SemanticColorName } from "../../types";
import type { BaseComponentProps } from "../../models";

export default interface BaseHamburgerProps<
  BaseComponentColorNameType extends string,
> extends BaseComponentProps<BaseComponentColorNameType> {
  colorName?: ColorName | SemanticColorName;
  isActive?: boolean | undefined;
  crownInner?: ReactNode | string | undefined;
  heelInner?: ReactNode | string | undefined;
}
