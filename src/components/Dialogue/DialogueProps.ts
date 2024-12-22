import React from "react";
import { ColorName } from "../../common/literalTypes";
import { DivProps } from "../Div";

export default interface DialogueProps extends DivProps {
  colorName?: ColorName;
  as?: React.ElementType | undefined;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
  isAvatarRight?: boolean;
}
