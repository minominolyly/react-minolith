import { ColorName } from "../../common/literalTypes";
import { BaseComponentProps } from "../../models";
import { DetailedHTMLProps, HTMLAttributes } from "react";

export default interface BreadcrumbsProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement>,
    BaseComponentProps {
  colorName?: ColorName;
}
