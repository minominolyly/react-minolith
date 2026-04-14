import type { ClassAttributes, HTMLAttributes } from "react";
import type BaseNavBrandCenterProps from "./BaseNavBrandCenterProps";

export default interface NavBrandCenterProps<
  BaseComponentColorNameType extends string,
> extends
    ClassAttributes<HTMLDivElement>,
    HTMLAttributes<HTMLDivElement>,
    BaseNavBrandCenterProps<BaseComponentColorNameType> {}
