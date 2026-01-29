import { BaseComponentProps } from "../../models";
import React from "react";

export default interface ParagraphProps
  extends React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLParagraphElement>,
      HTMLParagraphElement
    >,
    BaseComponentProps {}
