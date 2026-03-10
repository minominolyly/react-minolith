import { AnchorHTMLAttributes, DetailedHTMLProps } from "react";
import { BaseComponentProps } from "../../models";
import { ColorName, SemanticColorName } from "../../types";

export default interface LinkProps
  extends
    DetailedHTMLProps<
      AnchorHTMLAttributes<HTMLAnchorElement>,
      HTMLAnchorElement
    >,
    BaseComponentProps {
  colorName?: ColorName | SemanticColorName;
}
