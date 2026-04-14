import type { ClassAttributes, HTMLAttributes } from "react";
import type BaseHamburgerProps from "./BaseHamburgerProps";

export default interface HamburgerProps<
  BaseComponentColorNameType extends string,
>
  extends
    ClassAttributes<HTMLDivElement>,
    HTMLAttributes<HTMLDivElement>,
    BaseHamburgerProps<BaseComponentColorNameType> {}
