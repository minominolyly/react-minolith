import { Property } from "csstype";

export default interface PositioningProps {
    display?: Property.Display;
    position?: Property.Position;
    top?: Property.Top;
    right?: Property.Right;
    bottom?: Property.Bottom;
    left?: Property.Left;
    translateMiddle?: boolean;
    translateMiddleX?: boolean;
    translateMiddleY?: boolean;
}
