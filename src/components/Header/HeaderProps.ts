import type { ClassAttributes, HTMLAttributes } from "react";
import type BaseHeaderProps from "./BaseHeaderProps";

export default interface HeaderProps<BaseComponentColorNameType extends string>
  extends
    ClassAttributes<HTMLElement>,
    HTMLAttributes<HTMLElement>,
    BaseHeaderProps<BaseComponentColorNameType> {}
