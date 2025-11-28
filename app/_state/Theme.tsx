import { ThemeInterface } from "../_definitions/ThemeInterface";
import { ThemeType } from "../_definitions/ThemeType";
import { create } from "zustand";

export const useThemeStore = create<ThemeInterface>()((set) => ({
  theme: "light",
  setTheme: () =>
    set((state) => ({ theme: state.theme === "light" ? "dark" : "light" })),
}));
