import { DetailedHTMLProps, HTMLAttributes } from "react";
import { BaseComponentProps } from "../../models";
import { ColorName, SemanticColorName } from "../../types";

export default interface BadgeProps
  extends
    DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>,
    BaseComponentProps {
  colorName?: ColorName | SemanticColorName;
  isSmall?: boolean;
  isClickable?: boolean;
}
