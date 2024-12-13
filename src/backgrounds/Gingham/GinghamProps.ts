import React from "react";
import { ColorLightness, ColorName } from "../../common/literalTypes";
import { BaseComponentProps } from "../../common/models";

export default interface GinghamProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >, BaseComponentProps {
  patternColor?: {
    name: ColorName;
    lightness: ColorLightness;
  } | undefined;
}
