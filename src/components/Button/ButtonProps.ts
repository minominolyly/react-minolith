import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import { BaseComponentProps } from "../../models";
import { ColorName, SemanticColorName } from "../../types";

export default interface ButtonProps
  extends
    DetailedHTMLProps<
      ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    BaseComponentProps {
  colorName?: ColorName | SemanticColorName;
}
