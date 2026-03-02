import { DetailedHTMLProps, HTMLAttributes } from "react";
import { BaseComponentProps } from "../../models";

export default interface DivProps
  extends
    DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
    BaseComponentProps {}
