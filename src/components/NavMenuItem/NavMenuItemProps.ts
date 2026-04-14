import type { ClassAttributes, HTMLAttributes } from "react";
import type BaseNavMenuItemProps from "./BaseNavMenuItemProps";

export default interface NavMenuItemProps<
  BaseComponentColorNameType extends string,
>
  extends
    ClassAttributes<HTMLSpanElement>,
    HTMLAttributes<HTMLSpanElement>,
    BaseNavMenuItemProps<BaseComponentColorNameType> {}
