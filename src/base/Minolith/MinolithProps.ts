import { MinolithCssVariable } from "../../models";
import { TabulaProps } from "../Tabula";

export default interface MinolithProps extends TabulaProps {
  cssVariableSetting?: MinolithCssVariable;
}
