import type { ClassAttributes, HTMLAttributes } from "react";
import type BaseDescriptionTermProps from "./BaseDescriptionTermProps";

export default interface DescriptionTermProps<
  BaseComponentColorNameType extends string,
> extends
    ClassAttributes<HTMLElement>,
    HTMLAttributes<HTMLElement>,
    BaseDescriptionTermProps<BaseComponentColorNameType> {}
