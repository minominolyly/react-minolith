import type { ClassAttributes, HTMLAttributes } from "react";
import type BaseRubyWordProps from "./BaseRubyWordProps";

export default interface RubyWordProps<
  BaseComponentColorNameType extends string,
>
  extends
    ClassAttributes<HTMLElement>,
    HTMLAttributes<HTMLElement>,
    BaseRubyWordProps<BaseComponentColorNameType> {}
