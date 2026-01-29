import { Interpolation, Theme } from "@emotion/react";
import BackProps from "./BackProps";
import BorderProps from "./BorderProps";
import ForeProps from "./ForeProps";
import HighlighterProps from "./HighlighterProps";
import PositioningProps from "./PositioningProps";
import SizingProps from "./SizingProps";
import SpacingProps from "./SpacingProps";

export default interface BaseComponentProps {
  fore?: ForeProps;
  back?: BackProps;
  highlighter?: HighlighterProps;
  border?: BorderProps;
  positioning?: PositioningProps;
  sizing?: SizingProps;
  spacing?: SpacingProps;
  css?: Interpolation<Theme>;
}
