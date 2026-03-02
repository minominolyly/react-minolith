import { DetailedHTMLProps, HTMLAttributes } from "react";
import { BaseComponentProps } from "../../models";
import { ColorName } from "../../types";

export default interface NavProps
  extends
    DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>,
    BaseComponentProps {
  colorName?: ColorName;
}
