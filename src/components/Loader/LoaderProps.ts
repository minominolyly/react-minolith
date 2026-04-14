import type { ClassAttributes, HTMLAttributes } from "react";
import type BaseLoaderProps from "./BaseLoaderProps";

export default interface LoaderProps<BaseComponentColorNameType extends string>
  extends
    ClassAttributes<HTMLDivElement>,
    HTMLAttributes<HTMLDivElement>,
    BaseLoaderProps<BaseComponentColorNameType> {}
