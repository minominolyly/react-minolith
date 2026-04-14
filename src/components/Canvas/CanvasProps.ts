import type { CanvasHTMLAttributes, ClassAttributes } from "react";
import type BaseCanvasProps from "./BaseCanvasProps";

export default interface CanvasProps<BaseComponentColorNameType extends string>
  extends
    ClassAttributes<HTMLCanvasElement>,
    CanvasHTMLAttributes<HTMLCanvasElement>,
    BaseCanvasProps<BaseComponentColorNameType> {}
