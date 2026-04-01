import type { ColorProps } from "../types";

export default interface HighlighterProps<ColorNameType extends string> {
  color?: ColorProps<ColorNameType>;
}
