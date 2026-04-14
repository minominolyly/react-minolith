import type { ClassAttributes, OutputHTMLAttributes } from "react";
import type BaseOutputProps from "./BaseOutputProps";

export default interface OutputProps<BaseComponentColorNameType extends string>
  extends
    ClassAttributes<HTMLOutputElement>,
    OutputHTMLAttributes<HTMLOutputElement>,
    BaseOutputProps<BaseComponentColorNameType> {}
