import { DetailedHTMLProps, HTMLAttributes } from "react";
import { BaseComponentProps } from "../../react-minolith";

export default interface MainProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>,
    BaseComponentProps {}
