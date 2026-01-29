import { BaseComponentProps } from "../../models";
import React from "react";

export default interface NavMenuItemProps
  extends React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    >,
    BaseComponentProps {
  as?: React.ElementType | undefined;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}
