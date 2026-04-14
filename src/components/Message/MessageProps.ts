import type { ClassAttributes, HTMLAttributes } from "react";
import type BaseMessageProps from "./BaseMessageProps";

export default interface MessageProps<BaseComponentColorNameType extends string>
  extends
    ClassAttributes<HTMLDivElement>,
    HTMLAttributes<HTMLDivElement>,
    BaseMessageProps<BaseComponentColorNameType> {}
