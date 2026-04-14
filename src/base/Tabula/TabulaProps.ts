import type { ClassAttributes, HTMLAttributes } from "react";
import type BaseTabulaProps from "./BaseTabulaProps";

export default interface TabulaProps<BaseComponentColorNameType extends string>
  extends
    ClassAttributes<HTMLDivElement>,
    HTMLAttributes<HTMLDivElement>,
    BaseTabulaProps<BaseComponentColorNameType> {}
