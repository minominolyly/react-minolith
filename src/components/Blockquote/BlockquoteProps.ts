import { DetailedHTMLProps, HTMLAttributes } from "react";
import { BaseComponentProps } from "../../models";
import { ColorName, SemanticColorName } from "../../types";

export default interface BlockquoteProps
  extends
    DetailedHTMLProps<HTMLAttributes<HTMLQuoteElement>, HTMLQuoteElement>,
    BaseComponentProps {
  colorName?: ColorName | SemanticColorName;
  isItalic?: boolean;
  hasQuote?:
    | boolean
    | {
        before?: boolean;
        after?: boolean;
      };
}
