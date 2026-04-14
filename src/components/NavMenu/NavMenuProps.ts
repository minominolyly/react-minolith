import type { ClassAttributes, HTMLAttributes } from "react";
import type BaseNavMenuProps from "./BaseNavMenuProps";

export default interface NavMenuProps<BaseComponentColorNameType extends string>
  extends
    ClassAttributes<HTMLDivElement>,
    HTMLAttributes<HTMLDivElement>,
    BaseNavMenuProps<BaseComponentColorNameType> {}
