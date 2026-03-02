import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import { BaseComponentProps } from "../../models";
import { ColorName } from "../../types";

export default interface ButtonProps
  extends
    DetailedHTMLProps<
      ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    BaseComponentProps {
  colorName?: ColorName;
}
