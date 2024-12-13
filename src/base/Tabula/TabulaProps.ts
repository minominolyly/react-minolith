import { ColorScheme } from "../../common/literalTypes";
import { PropsWithChildren } from "react";

export default interface TabulaProps extends PropsWithChildren {
  colorScheme?: ColorScheme;
}
