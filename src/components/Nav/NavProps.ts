import { ColorName } from "../../types";
import { BaseComponentProps } from "../../models";
import React from "react";

export default interface NavProps
  extends React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    >,
    BaseComponentProps {
  colorName?: ColorName;
}
