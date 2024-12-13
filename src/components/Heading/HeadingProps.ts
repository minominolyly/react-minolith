import { BaseComponentProps } from "../../common/models";
import React from "react";

export default interface HeadingProps
  extends React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLHeadingElement>,
      HTMLHeadingElement
    >,
    BaseComponentProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
}
