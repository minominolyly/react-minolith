import type { BaseComponentProps } from "../../models";
import type { ColorName, SemanticColorName } from "../../types";

export default interface BaseBlockquoteProps<
  BaseComponentColorNameType extends string,
> extends BaseComponentProps<BaseComponentColorNameType> {
  colorName?: ColorName | SemanticColorName;
  isItalic?: boolean;
  hasQuote?:
    | boolean
    | {
        before?: boolean;
        after?: boolean;
      };
}
