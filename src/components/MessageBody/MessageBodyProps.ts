import type { ClassAttributes, HTMLAttributes } from "react";
import type BaseMessageBodyProps from "./BaseMessageBodyProps";

export default interface MessageBodyProps<
  BaseComponentColorNameType extends string,
>
  extends
    ClassAttributes<HTMLDivElement>,
    HTMLAttributes<HTMLDivElement>,
    BaseMessageBodyProps<BaseComponentColorNameType> {}
