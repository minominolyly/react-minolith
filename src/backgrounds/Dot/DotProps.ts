import type { ClassAttributes, HTMLAttributes } from "react";
import type BaseDotProps from "./BaseDotProps";

export default interface DotProps<BaseComponentColorNameType extends string>
  extends
    ClassAttributes<HTMLDivElement>,
    HTMLAttributes<HTMLDivElement>,
    BaseDotProps<BaseComponentColorNameType> {}
