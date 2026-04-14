import type { ClassAttributes, InputHTMLAttributes } from "react";
import type BaseInputProps from "./BaseInputProps";

export default interface InputProps<BaseComponentColorNameType extends string>
  extends
    ClassAttributes<HTMLInputElement>,
    InputHTMLAttributes<HTMLInputElement>,
    BaseInputProps<BaseComponentColorNameType> {}
