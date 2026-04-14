import type { ClassAttributes, HTMLAttributes } from "react";
import type BaseNavBrandRightProps from "./BaseNavBrandRightProps";

export default interface NavBrandRightProps<
  BaseComponentColorNameType extends string,
>
  extends
    ClassAttributes<HTMLDivElement>,
    HTMLAttributes<HTMLDivElement>,
    BaseNavBrandRightProps<BaseComponentColorNameType> {}
