import type { ClassAttributes, DelHTMLAttributes } from "react";
import type BaseDeleteProps from "./BaseDeleteProps";

export default interface DeleteProps<BaseComponentColorNameType extends string>
  extends
    ClassAttributes<HTMLModElement>,
    DelHTMLAttributes<HTMLModElement>,
    BaseDeleteProps<BaseComponentColorNameType> {}
