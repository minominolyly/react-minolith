import type { ClassAttributes, HTMLAttributes } from "react";
import type { BaseComponentProps } from "../../models";

export default interface RubyTextProps<BaseComponentColorNameType extends string>
  extends
    ClassAttributes<HTMLElement>,
    HTMLAttributes<HTMLElement>,
    Omit<BaseComponentProps<BaseComponentColorNameType>, "as"> {}
