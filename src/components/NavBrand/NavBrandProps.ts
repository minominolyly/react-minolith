import { BaseComponentProps } from "../../models";
import React from "react";

export default interface NavBrandProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >, BaseComponentProps {
}
