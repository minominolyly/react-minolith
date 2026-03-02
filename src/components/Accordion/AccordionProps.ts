import { DetailedHTMLProps, DetailsHTMLAttributes } from "react";
import { BaseComponentProps } from "../../models";
import { ColorName } from "../../types";

export default interface AccordionProps
  extends
    DetailedHTMLProps<
      DetailsHTMLAttributes<HTMLDetailsElement>,
      HTMLDetailsElement
    >,
    BaseComponentProps {
  colorName?: ColorName;
}
