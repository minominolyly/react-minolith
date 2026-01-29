import { ColorName } from "../../types";
import { BaseComponentProps } from "../../models";

export default interface AccordionProps
  extends React.DetailedHTMLProps<
      React.DetailsHTMLAttributes<HTMLDetailsElement>,
      HTMLDetailsElement
    >,
    BaseComponentProps {
  colorName?: ColorName;
}
