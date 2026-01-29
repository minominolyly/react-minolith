import {
  BorderCollapse,
  BorderDetailProps,
  BorderRadius,
  BorderStyle,
  BorderWidth,
  ColorProps,
} from "../types";

export default interface BorderProps {
  color?: ColorProps;
  collapse?: BorderCollapse;
  radius?: BorderRadius;
  style: BorderStyle;
  width?: BorderWidth;
  top?: BorderDetailProps;
  bottom?: BorderDetailProps;
  left?: BorderDetailProps;
  right?: BorderDetailProps;
}
