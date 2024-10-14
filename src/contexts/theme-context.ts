import { Signal, createContextId, useContext } from "@builder.io/qwik";

export type Theme = "light" | "dark";

export const ThemeContext = createContextId<Signal<string>>("theme");

export const useTheme = () => useContext(ThemeContext);
