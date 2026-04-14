import type { ClassAttributes, HTMLAttributes } from "react";
import type BaseCardBodyProps from "./BaseCardBodyProps";

export default interface CardBodyProps<
  BaseComponentColorNameType extends string,
>
  extends
    ClassAttributes<HTMLDivElement>,
    HTMLAttributes<HTMLDivElement>,
    BaseCardBodyProps<BaseComponentColorNameType> {}
