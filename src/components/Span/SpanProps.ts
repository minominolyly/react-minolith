import { BaseComponentProps } from "../../models";
import React from "react";

export default interface SpanProps
  extends React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLSpanElement>,
      HTMLSpanElement
    >,
    BaseComponentProps {}
