import type { ClassAttributes, HTMLAttributes } from "react";
import type BaseAbbreviationProps from "./BaseAbbreviationProps";

export default interface AbbreviationProps<
  BaseComponentColorNameType extends string,
>
  extends
    ClassAttributes<HTMLElement>,
    HTMLAttributes<HTMLElement>,
    BaseAbbreviationProps<BaseComponentColorNameType> {}
