import type { ClassAttributes, LabelHTMLAttributes } from "react";
import type BaseLabelProps from "./BaseLabelProps";

export default interface LabelProps<BaseComponentColorNameType extends string>
  extends
    ClassAttributes<HTMLLabelElement>,
    LabelHTMLAttributes<HTMLLabelElement>,
    BaseLabelProps<BaseComponentColorNameType> {}
