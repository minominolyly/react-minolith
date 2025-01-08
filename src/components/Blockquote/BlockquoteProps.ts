import { BaseComponentProps } from "../../common/models";
import React from "react";
import { ColorName } from "../../react-minolith";

export default interface BlockquoteProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLQuoteElement>,
    HTMLQuoteElement
  >, BaseComponentProps {
  colorName?: ColorName;
  isItalic?: boolean;
  hasQuote?: boolean | {
    before?: boolean;
    after?: boolean;
  };
}
