import type { ClassAttributes, HTMLAttributes } from "react";
import type BaseNavBrandLeftProps from "./BaseNavBrandLeftProps";

export default interface NavBrandLeftProps<
  BaseComponentColorNameType extends string,
>
  extends
    ClassAttributes<HTMLDivElement>,
    HTMLAttributes<HTMLDivElement>,
    BaseNavBrandLeftProps<BaseComponentColorNameType> {}
