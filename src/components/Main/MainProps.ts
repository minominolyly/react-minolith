import type { ClassAttributes, HTMLAttributes } from "react";
import type BaseMainProps from "./BaseMainProps";

export default interface MainProps<BaseComponentColorNameType extends string>
  extends
    ClassAttributes<HTMLElement>,
    HTMLAttributes<HTMLElement>,
    BaseMainProps<BaseComponentColorNameType> {}
