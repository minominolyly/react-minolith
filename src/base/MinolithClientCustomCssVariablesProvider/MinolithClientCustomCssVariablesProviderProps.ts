import type { PropsWithChildren } from "react";
import type MinolithCssVariables from "../../models/MinolithCssVariables";

export default interface MinolithClientCustomCssVariablesProviderProps<
  BaseComponentColorNameType extends string,
> extends PropsWithChildren {
  minolithCssVariables?: MinolithCssVariables<BaseComponentColorNameType>;
}
