import { DetailedHTMLProps, HTMLAttributes } from "react";
import { BaseComponentProps } from "../../models";

export default interface RubyProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>,
    BaseComponentProps {
  rubyText?: string;
}
