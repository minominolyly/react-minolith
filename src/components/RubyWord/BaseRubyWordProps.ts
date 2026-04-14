import type { ReactNode } from "react";
import type { BaseComponentProps } from "../../models";

export default interface BaseRubyTextProps<
  BaseComponentColorNameType extends string,
> extends Omit<BaseComponentProps<BaseComponentColorNameType>, "as"> {
  rubyText?: string | ReactNode;
}
