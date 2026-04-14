import type { ClassAttributes, HTMLAttributes } from "react";
import type BaseProgressProps from "./BaseProgressProps";

export default interface ProgressProps<
  BaseComponentColorNameType extends string,
>
  extends
    ClassAttributes<HTMLDivElement>,
    HTMLAttributes<HTMLDivElement>,
    BaseProgressProps<BaseComponentColorNameType> {}
