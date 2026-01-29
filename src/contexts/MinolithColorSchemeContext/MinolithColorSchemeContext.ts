"use client";
import { createContext } from "react";
import { ColorScheme } from "../../types";

const MinolithColorSchemeContext = createContext<ColorScheme>("light");

export default MinolithColorSchemeContext;
