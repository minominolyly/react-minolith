import type { BaseComponentProps } from "../../models";
import type { ColorScheme } from "../../types";

export default interface BaseTabulaProps<
  BaseComponentColorNameType extends string,
> extends BaseComponentProps<BaseComponentColorNameType> {
  colorScheme?: ColorScheme;
}
