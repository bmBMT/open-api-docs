import type { Theme } from "@/types/theme.type";
import { create } from "zustand";

const STORAGE_KEY = "theme";

interface IThemeStore {
  theme: Theme;
  currentTheme: Omit<Theme, "system">;
  initTheme: () => void;
  setTheme: (theme: Theme) => void;
  setCurrentTheme: (theme: "dark" | "light") => void;
  updateBrowserTheme: (theme: Theme) => void;
}

const useThemeStore = create<IThemeStore>((set, get) => ({
  theme: "system",
  currentTheme: "light",
  initTheme: () => {
    const theme = localStorage.getItem(STORAGE_KEY) as Theme;

    if (!theme) return;

    const updateBrowserTheme = get().updateBrowserTheme;

    updateBrowserTheme(theme);
    set({ theme });
  },
  setTheme: theme => {
    localStorage.setItem(STORAGE_KEY, theme);

    const updateBrowserTheme = get().updateBrowserTheme;
    updateBrowserTheme(theme);
    set({ theme });
  },
  setCurrentTheme: theme => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");

    set({ currentTheme: theme });
    root.classList.add(theme);
  },
  updateBrowserTheme: (theme: Theme) => {
    const setCurrentTheme = get().setCurrentTheme;

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

      return setCurrentTheme(systemTheme);
    }

    setCurrentTheme(theme);
  },
}));

export default useThemeStore;
