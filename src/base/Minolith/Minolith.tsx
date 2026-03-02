"use client";

import { ReactElement } from "react";
import { MinolithColorSchemeContext } from "../../contexts";
import Tabula from "../Tabula";
import "./Minolith.scss";
import MinolithProps from "./MinolithProps";

export default function Minolith(props: MinolithProps): ReactElement {
  const assignedProps = { ...props };

  return (
    <MinolithColorSchemeContext.Provider
      value={assignedProps.colorScheme ? assignedProps.colorScheme : "light"}
    >
      <Tabula {...assignedProps} />
    </MinolithColorSchemeContext.Provider>
  );
}
