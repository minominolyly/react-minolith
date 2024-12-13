import { ColorScheme } from "../../common/literalTypes";
import { MinolithCssVariable } from "../../common/models";
import { PropsWithChildren } from "react";

export default interface MinolithProps extends PropsWithChildren {
  colorScheme?: ColorScheme;
  cssVariableSetting?: MinolithCssVariable;
}
