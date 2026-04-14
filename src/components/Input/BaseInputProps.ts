import type { BaseComponentProps } from "../../models";
import type {
  BorderRadius,
  BorderWidth,
  ColorName,
  SemanticColorName,
} from "../../types";

export default interface BaseInputProps<BaseComponentColorNameType extends string>
  extends
    BaseComponentProps<BaseComponentColorNameType> {
  colorName?: ColorName | SemanticColorName;
  borderRadius?: BorderRadius;
  borderWidth?: BorderWidth;
}
