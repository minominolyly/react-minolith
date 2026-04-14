import type { ClassAttributes, TextareaHTMLAttributes } from "react";
import type BaseTextareaProps from "./BaseTextareaProps";

export default interface TextareaProps<
  BaseComponentColorNameType extends string,
>
  extends
    ClassAttributes<HTMLTextAreaElement>,
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    BaseTextareaProps<BaseComponentColorNameType> {}
