import { Property } from "csstype";

export default interface SizingProps {
  width?: Property.Width;
  minWidth?: Property.MinHeight;
  maxWidth?: Property.MaxWidth;
  height?: Property.Height;
  minHeight?: Property.MinHeight;
  maxHeight?: Property.MaxHeight;
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
}
