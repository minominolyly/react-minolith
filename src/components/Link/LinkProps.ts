import type { AnchorHTMLAttributes, ClassAttributes } from "react";
import type BaseLinkProps from "./BaseLinkProps";

export default interface LinkProps<BaseComponentColorNameType extends string>
  extends
    ClassAttributes<HTMLAnchorElement>,
    AnchorHTMLAttributes<HTMLAnchorElement>,
    BaseLinkProps<BaseComponentColorNameType> {}
