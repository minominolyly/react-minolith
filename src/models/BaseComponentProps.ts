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
  fore?: ForeProps<ColorNameType>;
  back?: BackProps<ColorNameType>;
  highlighter?: HighlighterProps<ColorNameType>;
  border?: BorderProps<ColorNameType>;
  positioning?: PositioningProps;
  sizing?: SizingProps;
  spacing?: SpacingProps;
  css?: Interpolation<Theme>;
  as?: ElementType | undefined;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}
