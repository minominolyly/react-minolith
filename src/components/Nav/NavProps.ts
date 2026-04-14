import type { ClassAttributes, HTMLAttributes } from "react";
import type BaseNavProps from "./BaseNavProps";

export default interface NavProps<BaseComponentColorNameType extends string>
  extends
    ClassAttributes<HTMLElement>,
    HTMLAttributes<HTMLElement>,
    BaseNavProps<BaseComponentColorNameType> {}
