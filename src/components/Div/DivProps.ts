import type { ClassAttributes, HTMLAttributes } from "react";
import type BaseDivProps from "./BaseDivProps";

export default interface DivProps<BaseComponentColorNameType extends string>
  extends
    ClassAttributes<HTMLDivElement>,
    HTMLAttributes<HTMLDivElement>,
    BaseDivProps<BaseComponentColorNameType> {}
