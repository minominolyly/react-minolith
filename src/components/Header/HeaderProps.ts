import { ColorName } from "../../common/literalTypes";
import { BaseComponentProps } from "../../common/models";
import React from "react";

export default interface HeaderProps
  extends React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    >,
    BaseComponentProps {
  colorName?: ColorName;
  isSticky?: boolean | undefined;
  isFixed?: boolean | undefined;
}
