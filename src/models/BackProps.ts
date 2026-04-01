import type { ColorProps } from "../types";

export default interface BackProps<ColorNameType extends string> {
  color?: ColorProps<ColorNameType>;
}
