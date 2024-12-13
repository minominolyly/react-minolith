import classNames from "./Tabula.module.scss";
import TabulaProps from "./TabulaProps";

export default function Tabula(props: TabulaProps) {
  return (
    <div className={classNames.tabula} data-color-scheme={props.colorScheme}>
      {props.children}
    </div>
  );
}
