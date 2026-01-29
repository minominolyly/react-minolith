import { BaseComponentProps } from "../../models";
import React from "react";

export default interface SectionProps
  extends React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    >,
    BaseComponentProps {}
