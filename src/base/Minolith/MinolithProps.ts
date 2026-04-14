import type { ClassAttributes, HTMLAttributes } from "react";
import type BaseMinolithProps from "./BaseMinolithProps";

export default interface MinolithProps<
  BaseComponentColorNameType extends string,
>
  extends
    ClassAttributes<HTMLDivElement>,
    HTMLAttributes<HTMLDivElement>,
    BaseMinolithProps<BaseComponentColorNameType> {}
