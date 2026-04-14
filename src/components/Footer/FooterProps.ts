import type { ClassAttributes, HTMLAttributes } from "react";
import type BaseFooterProps from "./BaseFooterProps";

export default interface FooterProps<BaseComponentColorNameType extends string>
  extends
    ClassAttributes<HTMLElement>,
    HTMLAttributes<HTMLElement>,
    BaseFooterProps<BaseComponentColorNameType> {}
