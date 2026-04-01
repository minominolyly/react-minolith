import type { Property } from "csstype";

export default interface BorderCssVariables {
  borderWidthXThin?: Property.BorderWidth | undefined;
  borderWidthThin?: Property.BorderWidth | undefined;
  borderWidthMedium?: Property.BorderWidth | undefined;
  borderWidthThick?: Property.BorderWidth | undefined;
  borderWidthXThick?: Property.BorderWidth | undefined;
  borderRadiusSmall?: Property.BorderRadius | undefined;
  borderRadiusMedium?: Property.BorderRadius | undefined;
  borderRadiusLarge?: Property.BorderRadius | undefined;
}
