import type { ClassAttributes, HTMLAttributes } from "react";
import type BaseColumnsProps from "./BaseColumnsProps";

export default interface ColumnsProps<BaseComponentColorNameType extends string>
  extends
    ClassAttributes<HTMLDivElement>,
    HTMLAttributes<HTMLDivElement>,
    BaseColumnsProps<BaseComponentColorNameType> {}
