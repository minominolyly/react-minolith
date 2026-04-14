import type { ClassAttributes, HTMLAttributes } from "react";
import type BasePreformattedTextProps from "./BasePreformattedTextProps";

export default interface PreformattedTextProps<
  BaseComponentColorNameType extends string,
>
  extends
    ClassAttributes<HTMLPreElement>,
    HTMLAttributes<HTMLPreElement>,
    BasePreformattedTextProps<BaseComponentColorNameType> {}
