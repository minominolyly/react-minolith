import { BaseComponentProps } from "../../models";
import React from "react";

export default interface DivProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >, BaseComponentProps {
}
