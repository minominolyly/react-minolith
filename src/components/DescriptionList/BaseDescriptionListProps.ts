import type { BaseComponentProps } from "../../models";

export default interface BaseDescriptionListProps<
  BaseComponentColorNameType extends string,
> extends BaseComponentProps<BaseComponentColorNameType> {
  hasMarker?: boolean;
}
