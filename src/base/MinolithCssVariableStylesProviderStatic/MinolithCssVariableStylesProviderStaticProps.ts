import { MinolithCssVariable } from "../../common/models";
import { PropsWithChildren } from "react";

export default interface MinolithCssVariableStylesProviderStaticProps
  extends PropsWithChildren {
  cssVariableSetting?: MinolithCssVariable;
}
