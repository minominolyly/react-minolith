import type { PropsWithChildren } from "react";
import type MinolithCssVariables from "../../models/MinolithCssVariables";

export default interface MinolithClientCustomCssVariablesProviderProps extends PropsWithChildren {
  minolithCssVariables?: MinolithCssVariables;
}
