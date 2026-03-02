import { DetailedHTMLProps, HTMLAttributes } from "react";
import { BaseComponentProps } from "../../models";

export default interface NavMenuItemProps
  extends
    DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>,
    BaseComponentProps {}
