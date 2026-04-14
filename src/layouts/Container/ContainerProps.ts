import type { ClassAttributes, HTMLAttributes } from "react";
import type BaseContainerProps from "./BaseContainerProps";

export default interface ContainerProps<
  BaseComponentColorNameType extends string,
>
  extends
    ClassAttributes<HTMLDivElement>,
    HTMLAttributes<HTMLDivElement>,
    BaseContainerProps<BaseComponentColorNameType> {}
