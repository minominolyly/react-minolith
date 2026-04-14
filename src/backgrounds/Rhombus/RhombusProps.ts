import type { ClassAttributes, HTMLAttributes } from "react";
import type BaseRhombusProps from "./BaseRhombusProps";

export default interface RhombusProps<BaseComponentColorNameType extends string>
  extends
    ClassAttributes<HTMLDivElement>,
    HTMLAttributes<HTMLDivElement>,
    BaseRhombusProps<BaseComponentColorNameType> {}
