import type { ClassAttributes, HTMLAttributes } from "react";
import type BaseRubyParenthesesProps from "./BaseRubyParenthesesProps";

export default interface RubyParenthesesProps<
  BaseComponentColorNameType extends string,
>
  extends
    ClassAttributes<HTMLElement>,
    HTMLAttributes<HTMLElement>,
    BaseRubyParenthesesProps<BaseComponentColorNameType> {}
