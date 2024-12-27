import { DivProps } from "../../components/Div";

export default interface ContainerProps extends DivProps {
  isFluid?: boolean;
  gutter?:
    | `${number}rem`
    | {
        x?: `${number}rem`;
        y?: `${number}rem`;
      };
}

