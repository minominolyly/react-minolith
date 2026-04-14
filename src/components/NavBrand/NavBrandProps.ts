import type { ClassAttributes, HTMLAttributes } from "react";
import type BaseNavBrandProps from "./BaseNavBrandProps";

export default interface NavBrandProps<
  BaseComponentColorNameType extends string,
>
  extends
    ClassAttributes<HTMLDivElement>,
    HTMLAttributes<HTMLDivElement>,
    BaseNavBrandProps<BaseComponentColorNameType> {}
