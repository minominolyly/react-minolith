import type { Interpolation, Theme } from "@emotion/react";
import type { ElementType } from "react";
import type BackProps from "./BackProps";
import type BorderProps from "./BorderProps";
import type ForeProps from "./ForeProps";
import type HighlighterProps from "./HighlighterProps";
import type PositioningProps from "./PositioningProps";
import type SizingProps from "./SizingProps";
import type SpacingProps from "./SpacingProps";

export default interface BaseComponentProps<ColorNameType extends string> {
  fore?: ForeProps<ColorNameType> | undefined;
  back?: BackProps<ColorNameType> | undefined;
  highlighter?: HighlighterProps<ColorNameType> | undefined;
  border?: BorderProps<ColorNameType> | undefined;
  positioning?: PositioningProps | undefined;
  sizing?: SizingProps | undefined;
  spacing?: SpacingProps | undefined;
  css?: Interpolation<Theme> | undefined;
  className?: string | undefined;
  as?: ElementType | undefined;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}
