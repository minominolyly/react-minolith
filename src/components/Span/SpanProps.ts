import { BaseComponentProps } from "../../models";
import { DetailedHTMLProps, HTMLAttributes } from "react";

export default interface SpanProps
  extends
    DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>,
    BaseComponentProps {}
