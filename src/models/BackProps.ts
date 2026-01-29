import { ColorProps, ColorName } from "../types";

export default interface BackProps {
  color?: ColorProps<ColorName | "rainbow">;
}
