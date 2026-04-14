import type { ClassAttributes, HTMLAttributes } from "react";
import type BaseCenteringProps from "./BaseCenteringProps";

export default interface CenteringProps<
  BaseComponentColorNameType extends string,
>
  extends
    ClassAttributes<HTMLDivElement>,
    HTMLAttributes<HTMLDivElement>,
    BaseCenteringProps<BaseComponentColorNameType> {}
