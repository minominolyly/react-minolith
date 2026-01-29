import BorderStyle from "./BorderStyle";
import BorderWidth from "./BorderWidth";
import ColorProps from "./ColorProps";

type BorderDetailProps = {
  color?: ColorProps;
  style: BorderStyle;
  width?: BorderWidth;
};

export default BorderDetailProps;
