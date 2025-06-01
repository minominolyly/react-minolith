import { BaseComponentProps } from "../../common/models";
import { DetailedHTMLProps, LiHTMLAttributes } from "react";

export default interface BreadcrumbProps
  extends DetailedHTMLProps<
      LiHTMLAttributes<HTMLLIElement>,
      HTMLLIElement
    >,
    BaseComponentProps {}
