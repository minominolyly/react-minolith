import { DivProps } from "../Div";

export default interface HamburgerProps
  extends DivProps {
  isActive?: boolean | undefined;
  crownInner?: JSX.Element | string | undefined;
  heelInner?: JSX.Element | string | undefined;
}
