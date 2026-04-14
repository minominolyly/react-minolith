import type { ClassAttributes, HTMLAttributes } from "react";
import type BaseCardFooterProps from "./BaseCardFooterProps";

export default interface CardFooterProps<
  BaseComponentColorNameType extends string
>
  extends
    ClassAttributes<HTMLDivElement>,
    HTMLAttributes<HTMLDivElement>,
    BaseCardFooterProps<BaseComponentColorNameType> {}
