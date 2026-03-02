import { ColorName } from "../../types";
import { BaseComponentProps } from "../../models";
import { DetailedHTMLProps, HTMLAttributes } from "react";

export default interface HeaderProps
  extends
    DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>,
    BaseComponentProps {
  colorName?: ColorName;
  isSticky?: boolean | undefined;
  isFixed?: boolean | undefined;
}
