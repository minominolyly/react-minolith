import type { BlockquoteHTMLAttributes, ClassAttributes } from "react";
import type BaseBlockquoteProps from "./BaseBlockquoteProps";

export default interface BlockquoteProps<
  BaseComponentColorNameType extends string,
>
  extends
    ClassAttributes<HTMLQuoteElement>,
    BlockquoteHTMLAttributes<HTMLQuoteElement>,
    BaseBlockquoteProps<BaseComponentColorNameType> {}
