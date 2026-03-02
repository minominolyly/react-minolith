import { DetailedHTMLProps, HTMLAttributes } from "react";
import { BaseComponentProps } from "../../models";

export default interface NavBrandProps
  extends
    DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
    BaseComponentProps {}
