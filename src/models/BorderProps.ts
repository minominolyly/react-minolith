import type {
  BorderCollapse,
  BorderDetailProps,
  BorderRadius,
  BorderStyle,
  BorderWidth,
  ColorProps,
} from "../types";

export default interface BorderProps<ColorNameType extends string> {
  color?: ColorProps<ColorNameType>;
  collapse?: BorderCollapse;
  radius?: BorderRadius;
  style?: BorderStyle;
  width?: BorderWidth;
  top?: BorderDetailProps<ColorNameType>;
  bottom?: BorderDetailProps<ColorNameType>;
  left?: BorderDetailProps<ColorNameType>;
  right?: BorderDetailProps<ColorNameType>;
}
