import React from "react";
import { ColorName } from "../../common/literalTypes";
import DivProps from "../Div/DivProps";

export default interface CardProps extends DivProps {
  colorName?: ColorName;
  as?: React.ElementType | undefined;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}
