import { DetailedHTMLProps, LabelHTMLAttributes } from "react";
import { BaseComponentProps } from "../../models";
import { ColorName, SemanticColorName } from "../../types";

export default interface LabelProps
  extends
    DetailedHTMLProps<LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>,
    BaseComponentProps {
  colorName?: ColorName | SemanticColorName;
}
