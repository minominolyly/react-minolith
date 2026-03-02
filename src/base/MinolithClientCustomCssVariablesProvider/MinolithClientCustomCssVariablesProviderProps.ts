import { PropsWithChildren } from "react";
import MinolithCssVariables from "../../models/MinolithCssVariables";

export default interface MinolithClientCustomCssVariablesProviderProps extends PropsWithChildren {
  minolithCssVariables?: MinolithCssVariables;
}
