import { DetailedHTMLProps, HTMLAttributes } from "react";
import { BaseComponentProps } from "../../models";
import { ColorName } from "../../types";

export default interface BlockquoteProps
  extends
    DetailedHTMLProps<HTMLAttributes<HTMLQuoteElement>, HTMLQuoteElement>,
    BaseComponentProps {
  colorName?: ColorName;
  isItalic?: boolean;
  hasQuote?:
    | boolean
    | {
        before?: boolean;
        after?: boolean;
      };
}
