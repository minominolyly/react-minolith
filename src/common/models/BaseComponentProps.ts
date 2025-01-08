import {
  BorderCollapse,
  BorderDetailProps,
  BorderRadius,
  BorderStyle,
  BorderWidth,
  ColorName,
  ColorProps,
  FontSize,
  FontWeight,
} from "../literalTypes";

export default interface BaseComponentProps {
  fore?: {
    color?: ColorProps<ColorName | "rainbow">;
    fontSize?: FontSize;
    fontWeight?: FontWeight;
    isItalic?: boolean;
  };
  back?: {
    color?: ColorProps<ColorName | "rainbow">;
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
  positioning?: {
    display?: "block" | "inline" | "inline-block" | "flex" | "grid";
    position?: "relative" | "absolute" | "fixed" | "sticky";
    top?: `0%` | `25%` | `50%` | `75%` | `100%` | "auto" | "unset";
    right?: `0%` | `25%` | `50%` | `75%` | `100%` | "auto" | "unset";
    bottom?: `0%` | `25%` | `50%` | `75%` | `100%` | "auto" | "unset";
    left?: `0%` | `25%` | `50%` | `75%` | `100%` | "auto" | "unset";
    translateMiddle?: boolean;
    translateMiddleX?: boolean;
    translateMiddleY?: boolean;
  };
  sizing?: {
    width?: number | `0%` | `25%` | `50%` | `75%` | `100%` | "auto" | "100%";
    height?: number | `0%` | `25%` | `50%` | `75%` | `100%` | "auto" | "100%";
    aspectRatio?:
      | "square"
      | "paper-landscape"
      | "paper-portlait"
      | "2:3"
      | "3:2"
      | "3:4"
      | "4:3"
      | "4:5"
      | "5:4"
      | "5:8"
      | "8:5"
      | "9:16"
      | "16:9";
  };
  spacing?: {
    margin?:
      | {
          x?: number | "auto";
          y?: number | "auto";
          top?: number | "auto";
          left?: number | "auto";
          bottom?: number | "auto";
          right?: number | "auto";
        }
      | number
      | "auto";
    padding?:
      | {
          x?: number | "auto";
          y?: number | "auto";
          top?: number | "auto";
          left?: number | "auto";
          bottom?: number | "auto";
          right?: number | "auto";
        }
      | number
      | "auto";
  };
}
