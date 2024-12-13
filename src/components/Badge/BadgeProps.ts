import { ColorName } from "../../common/literalTypes";
import { BaseComponentProps } from "../../common/models";
import React from "react";

export default interface BadgeProps
  extends React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    >,
    BaseComponentProps {
  colorName?: ColorName;
  isSmall?: boolean;
  as?: React.ElementType | undefined;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}
