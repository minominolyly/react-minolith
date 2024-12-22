import React from "react";
import { BaseComponentProps } from "../../common/models";
import { ColorName } from "../../common/literalTypes";

export default interface LabelProps
  extends React.DetailedHTMLProps<
      React.LabelHTMLAttributes<HTMLLabelElement>,
      HTMLLabelElement
    >,
    BaseComponentProps {
  colorName?: ColorName;
}

