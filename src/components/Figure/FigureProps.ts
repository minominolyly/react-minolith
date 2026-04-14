import type { ClassAttributes, HTMLAttributes } from "react";
import type BaseFigureProps from "./BaseFigureProps";

export default interface FigureProps<BaseComponentColorNameType extends string>
  extends
    ClassAttributes<HTMLElement>,
    HTMLAttributes<HTMLElement>,
    BaseFigureProps<BaseComponentColorNameType> {}
