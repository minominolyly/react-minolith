import { ColorName } from "../../react-minolith";
import DivProps from "../Div/DivProps";

export default interface ModalProps extends DivProps {
  colorName?: ColorName;
  isActive?: boolean | undefined;
}
