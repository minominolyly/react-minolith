import { ColorName } from "../../types";
import { BaseComponentProps } from "../../models";
import React from "react";

export default interface ButtonProps
  extends React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    BaseComponentProps {
  colorName?: ColorName;
}
