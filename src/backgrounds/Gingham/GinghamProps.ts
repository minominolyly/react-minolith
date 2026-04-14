import type { ClassAttributes, HTMLAttributes } from "react";
import type BaseGinghamProps from "./BaseGinghamProps";

export default interface GinghamProps<BaseComponentColorNameType extends string>
  extends
    ClassAttributes<HTMLDivElement>,
    HTMLAttributes<HTMLDivElement>,
    BaseGinghamProps<BaseComponentColorNameType> {}
