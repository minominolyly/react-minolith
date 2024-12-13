import { PropsWithChildren } from "react";
import { BaseComponentProps } from "../../common/models";

export default interface RubyProps extends PropsWithChildren, BaseComponentProps {
  rubyText?: string | undefined | React.ReactNode;
  className?: string | undefined;
}
