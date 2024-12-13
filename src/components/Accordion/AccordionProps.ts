import { ColorName } from "../../common/literalTypes";
import { BaseComponentProps } from "../../common/models";

export default interface AccordionProps
  extends React.DetailedHTMLProps<
      React.DetailsHTMLAttributes<HTMLDetailsElement>,
      HTMLDetailsElement
    >,
    BaseComponentProps {
  colorName?: ColorName;
}
