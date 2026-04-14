import type { ButtonHTMLAttributes, ClassAttributes } from "react";
import type BaseButtonProps from "./BaseButtonProps";

export default interface ButtonProps<BaseComponentColorNameType extends string>
  extends
    ClassAttributes<HTMLButtonElement>,
    ButtonHTMLAttributes<HTMLButtonElement>,
    BaseButtonProps<BaseComponentColorNameType> {}
