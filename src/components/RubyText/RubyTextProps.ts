import type { ClassAttributes, HTMLAttributes } from "react";
import type BaseRubyTextProps from "./BaseRubyTextProps";

export default interface RubyTextProps<
  BaseComponentColorNameType extends string,
>
  extends
    ClassAttributes<HTMLElement>,
    HTMLAttributes<HTMLElement>,
    BaseRubyTextProps<BaseComponentColorNameType> {}
