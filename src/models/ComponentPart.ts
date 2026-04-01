import type LightDarkColor from "./LightDarkColor";

export default interface ComponentPart {
  fore?: LightDarkColor | undefined;
  back?: LightDarkColor | undefined;
  border?: LightDarkColor | undefined;
  shadow?: LightDarkColor | undefined;
  placeholder?: LightDarkColor | undefined;
}
