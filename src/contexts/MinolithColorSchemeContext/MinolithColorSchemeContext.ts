"use client";
import { createContext } from "react";
import { ColorScheme } from "../../common/literalTypes";

const MinolithColorSchemeContext = createContext<ColorScheme>("light");

export default MinolithColorSchemeContext;
