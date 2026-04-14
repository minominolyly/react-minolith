import type { ClassAttributes, HTMLAttributes } from "react";
import type BaseCardHeaderProps from "./BaseCardHeaderProps";

export default interface CardFooterProps<
  BaseComponentColorNameType extends string
>
  extends
    ClassAttributes<HTMLDivElement>,
    HTMLAttributes<HTMLDivElement>,
    BaseCardHeaderProps<BaseComponentColorNameType> {}
