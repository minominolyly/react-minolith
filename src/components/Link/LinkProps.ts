import { AnchorHTMLAttributes, DetailedHTMLProps } from "react";
import { BaseComponentProps } from "../../models";
import { ColorName } from "../../types";

export default interface LinkProps
  extends
    DetailedHTMLProps<
      AnchorHTMLAttributes<HTMLAnchorElement>,
      HTMLAnchorElement
    >,
    BaseComponentProps {
  colorName?: ColorName;
}
