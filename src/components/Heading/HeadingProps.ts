import type { ClassAttributes, HTMLAttributes } from "react";
import type BaseHeadingProps from "./BaseHeadingProps";

export default interface HeadingProps<BaseComponentColorNameType extends string>
  extends
    ClassAttributes<HTMLHeadingElement>,
    HTMLAttributes<HTMLHeadingElement>,
    BaseHeadingProps<BaseComponentColorNameType> {}
