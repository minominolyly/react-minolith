import type { ClassAttributes, HTMLAttributes } from "react";
import type BaseNavStaticProps from "./BaseNavStaticProps";

export default interface NavStaticProps<
  BaseComponentColorNameType extends string,
>
  extends
    ClassAttributes<HTMLDivElement>,
    HTMLAttributes<HTMLDivElement>,
    BaseNavStaticProps<BaseComponentColorNameType> {}
