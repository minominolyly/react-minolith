import { ColorName } from "../../common/literalTypes";
import { BaseComponentProps } from "../../common/models";

export default interface InputProps
  extends React.DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >,
    BaseComponentProps {
  colorName?: ColorName;
}
