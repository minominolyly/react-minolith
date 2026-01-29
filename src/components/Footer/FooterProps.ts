import { ColorName } from "../../common/literalTypes";
import { BaseComponentProps } from "../../models";
import React from "react";

export default interface FooterProps
  extends React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    >,
    BaseComponentProps {
  colorName?: ColorName;
}
