import type { ClassAttributes, HTMLAttributes } from "react";
import type BaseCardProps from "./BaseCardProps";

export default interface CardProps<BaseComponentColorNameType extends string>
  extends
    ClassAttributes<HTMLDivElement>,
    HTMLAttributes<HTMLDivElement>,
    BaseCardProps<BaseComponentColorNameType> {}
