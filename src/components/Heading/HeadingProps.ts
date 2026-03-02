import { DetailedHTMLProps, HTMLAttributes } from "react";
import { BaseComponentProps } from "../../models";

export default interface HeadingProps
  extends
    DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>,
    BaseComponentProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
}
