import type { ClassAttributes, HTMLAttributes } from "react";
import type BaseColumnProps from "./BaseColumnProps";

export default interface ColumnProps<BaseComponentColorNameType extends string>
  extends
    ClassAttributes<HTMLDivElement>,
    HTMLAttributes<HTMLDivElement>,
    BaseColumnProps<BaseComponentColorNameType> {}
