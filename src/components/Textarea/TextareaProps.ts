import { ColorName } from "../../types";
import { BaseComponentProps } from "../../models";

export default interface TextareaProps
  extends React.DetailedHTMLProps<
      React.TextareaHTMLAttributes<HTMLTextAreaElement>,
      HTMLTextAreaElement
    >,
    BaseComponentProps {
  colorName?: ColorName;
}
