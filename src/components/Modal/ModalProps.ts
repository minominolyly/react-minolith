import { ColorName } from "../../react-minolith";
import { DivProps } from "../Div";

export default interface ModalProps extends DivProps {
  colorName?: ColorName;
  isActive?: boolean | undefined;
}
