import React from "react";
import { BaseComponentProps } from "../../models";
import { ColorName } from "../../types";

export default interface LabelProps
  extends React.DetailedHTMLProps<
      React.LabelHTMLAttributes<HTMLLabelElement>,
      HTMLLabelElement
    >,
    BaseComponentProps {
  colorName?: ColorName;
}
