import { ColorName } from "../../common/literalTypes";
import { BaseComponentProps } from "../../common/models";

export default interface TextareaProps
  extends React.DetailedHTMLProps<
      React.TextareaHTMLAttributes<HTMLTextAreaElement>,
      HTMLTextAreaElement
    >,
    BaseComponentProps {
  colorName?: ColorName;
}
