import type { ClassAttributes, HTMLAttributes } from "react";
import type BaseRubyProps from "./BaseRubyProps";

export default interface RubyProps<BaseComponentColorNameType extends string>
  extends
    ClassAttributes<HTMLElement>,
    HTMLAttributes<HTMLElement>,
    BaseRubyProps<BaseComponentColorNameType> {}
