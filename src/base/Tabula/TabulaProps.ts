import { ColorScheme } from "../../types";
import { DivProps } from "../../react-minolith";

export default interface TabulaProps extends DivProps {
  as?:
    | React.ElementType
    | undefined;
  colorScheme?: ColorScheme;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}
