import { MinolithCssVariable } from "../../models";
import { TabulaProps } from "../Tabula";

export default interface MinolithStaticProps extends TabulaProps {
  cssVariableSetting?: MinolithCssVariable;
}
