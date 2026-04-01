import type { BorderStyle, BorderWidth, ColorProps } from "../types";

export default interface BorderDetailProps<ColorNameType extends string> {
  color?: ColorProps<ColorNameType>;
  style: BorderStyle;
  width?: BorderWidth;
}
