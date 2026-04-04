import type { BlockquoteHTMLAttributes, ClassAttributes } from "react";
import type { BaseComponentProps } from "../../models";
import type { ColorName, SemanticColorName } from "../../types";

export default interface BlockquoteProps<
  BaseComponentColorNameType extends string,
>
  extends
    ClassAttributes<HTMLQuoteElement>,
    BlockquoteHTMLAttributes<HTMLQuoteElement>,
    BaseComponentProps<BaseComponentColorNameType> {
  colorName?: ColorName | SemanticColorName;
  isItalic?: boolean;
  hasQuote?:
    | boolean
    | {
        before?: boolean;
        after?: boolean;
      };
}
