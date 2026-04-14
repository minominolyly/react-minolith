import type { ClassAttributes, HTMLAttributes } from "react";
import type BaseDefinitionProps from "./BaseDefinitionProps";

export default interface DefinitionProps<
  BaseComponentColorNameType extends string,
>
  extends
    ClassAttributes<HTMLElement>,
    HTMLAttributes<HTMLElement>,
    BaseDefinitionProps<BaseComponentColorNameType> {}
