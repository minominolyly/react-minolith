import type { ClassAttributes, HTMLAttributes } from "react";
import type BaseNavAccordionProps from "./BaseNavAccordionProps";

export default interface NavAccordionProps<
  BaseComponentColorNameType extends string,
>
  extends
    ClassAttributes<HTMLDivElement>,
    HTMLAttributes<HTMLDivElement>,
    BaseNavAccordionProps<BaseComponentColorNameType> {}
