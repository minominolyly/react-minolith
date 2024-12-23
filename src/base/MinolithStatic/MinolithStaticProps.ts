import { MinolithCssVariable } from "../../common/models";
import { TabulaProps } from "../Tabula";

export default interface MinolithStaticProps extends TabulaProps {
  cssVariableSetting?: MinolithCssVariable;
}
