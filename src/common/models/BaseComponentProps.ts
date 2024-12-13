import {
  BorderCollapse,
  BorderDetailProps,
  BorderRadius,
  BorderStyle,
  BorderWidth,
  ColorProps,
  FontSize,
  FontWeight,
} from "../literalTypes";

export default interface BaseComponentProps {
  fore?: {
    color?: ColorProps;
    fontSize?: FontSize;
    fontWeight?: FontWeight;
    isItalic?: boolean;
  };
  back?: {
    color?: ColorProps;
  };
  highlighter?: {
    color?: ColorProps;
  };
  border?: {
    color?: ColorProps;
    collapse?: BorderCollapse;
    radius?: BorderRadius;
    style: BorderStyle;
    width?: BorderWidth;
    top?: BorderDetailProps;
    bottom?: BorderDetailProps;
    left?: BorderDetailProps;
    right?: BorderDetailProps;
  };
  spacing?: {
    margin?: {
      top?: number | "auto" | undefined;
      left?: number | "auto" | undefined;
      bottom?: number | "auto" | undefined;
      right?: number | "auto" | undefined;
    };
    padding?: {
      top?: number | "auto" | undefined;
      left?: number | "auto" | undefined;
      bottom?: number | "auto" | undefined;
      right?: number | "auto" | undefined;
    };
  };
}
