import { MinolithCssVariable } from "../../common/models";
import { TabulaProps } from "../Tabula";

export default interface MinolithProps extends TabulaProps {
  cssVariableSetting?: MinolithCssVariable;
}
