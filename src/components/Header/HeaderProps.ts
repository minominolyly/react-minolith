import { ColorName, SemanticColorName } from "../../types";
import { BaseComponentProps } from "../../models";
import { DetailedHTMLProps, HTMLAttributes } from "react";

export default interface HeaderProps
  extends
    DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>,
    BaseComponentProps {
  colorName?: ColorName | SemanticColorName;
  isSticky?: boolean | undefined;
  isFixed?: boolean | undefined;
}
