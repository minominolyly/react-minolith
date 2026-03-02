import { DetailedHTMLProps, HTMLAttributes } from "react";
import { BaseComponentProps } from "../../models";

export default interface ParagraphProps
  extends
    DetailedHTMLProps<
      HTMLAttributes<HTMLParagraphElement>,
      HTMLParagraphElement
    >,
    BaseComponentProps {}
