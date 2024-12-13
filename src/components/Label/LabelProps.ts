import React from "react";
import { BaseComponentProps } from "../../common/models";

export default interface LabelProps
  extends React.DetailedHTMLProps<
      React.LabelHTMLAttributes<HTMLLabelElement>,
      HTMLLabelElement
    >,
    BaseComponentProps {}
