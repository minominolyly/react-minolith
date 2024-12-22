import React from "react";
import { DivProps } from "../Div";

export default interface DialogueNameProps extends DivProps {
  as?: React.ElementType | undefined;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}
