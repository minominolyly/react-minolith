import type { ClassAttributes, HTMLAttributes } from "react";
import type BaseMessageHeaderProps from "./BaseMessageHeaderProps";

export default interface MessageHeaderProps<
  BaseComponentColorNameType extends string,
>
  extends
    ClassAttributes<HTMLDivElement>,
    HTMLAttributes<HTMLDivElement>,
    BaseMessageHeaderProps<BaseComponentColorNameType> {}
