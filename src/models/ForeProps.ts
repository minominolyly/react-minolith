import { Property } from "csstype";
import { ColorProps, ColorName, FontSize, FontWeight } from "../types";

export default interface ForeProps {
  color?: ColorProps<ColorName | "rainbow">;
  fontSize?: FontSize;
  fontStyle?: Property.FontStyle;
  fontWeight?: FontWeight;
  textTransform?: Property.TextTransform;
}
