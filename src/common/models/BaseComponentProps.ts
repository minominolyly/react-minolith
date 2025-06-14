import { Interpolation, Theme } from "@emotion/react";
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
import { Property } from "csstype";

export default interface BaseComponentProps {
  fore?: {
    color?: ColorProps<ColorName | "rainbow">;
    fontSize?: FontSize;
    fontStyle?: Property.FontStyle;
    fontWeight?: FontWeight;
    textTransform?: Property.TextTransform,
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
    display?: Property.Display;
    position?: Property.Position;
    top?: Property.Top;
    right?: Property.Right;
    bottom?: Property.Bottom;
    left?: Property.Left;
    translateMiddle?: boolean;
    translateMiddleX?: boolean;
    translateMiddleY?: boolean;
  };
  sizing?: {
    width?: Property.Width;
    height?: Property.Height;
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
          x?: number | string;
          y?: number | string;
          top?: number | string;
          left?: number | string;
          bottom?: number | string;
          right?: number | string;
        }
      | number
      | string;
    padding?:
      | {
          x?: number | string;
          y?: number | string;
          top?: number | string;
          left?: number | string;
          bottom?: number | string;
          right?: number | string;
        }
      | number
      | string;
  };
  css?: Interpolation<Theme>;
}
