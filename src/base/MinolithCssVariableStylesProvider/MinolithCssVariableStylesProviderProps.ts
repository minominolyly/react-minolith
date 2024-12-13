import { MinolithCssVariable } from "../../common/models";
import { PropsWithChildren } from "react";

export default interface MinolithCssVariableStylesProviderProps
  extends PropsWithChildren {
  cssVariableSetting?: MinolithCssVariable;
}
