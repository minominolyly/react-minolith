import type { BaseComponentProps } from "../../models";

export default interface BaseDescriptionListItemProps<
  BaseComponentColorNameType extends string,
> extends BaseComponentProps<BaseComponentColorNameType> {
  hasMarker?: boolean;
}
