import type { Theme } from "@/types/theme.type";
import { create } from "zustand";

const STORAGE_KEY = "theme";

interface IThemeStore {
  theme: Theme;
  initTheme: () => void;
  setTheme: (theme: Theme) => void;
  updateBrowserTheme: (theme: Theme) => void;
}

const useThemeStore = create<IThemeStore>((set, get) => ({
  theme: "system",
  initTheme: () => {
    const theme = localStorage.getItem(STORAGE_KEY) as Theme;

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
  updateBrowserTheme: (theme: Theme) => {
    const root = window.document.documentElement;

    root.classList.remove("light", "dark");

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

      root.classList.add(systemTheme);
      return;
    }

    root.classList.add(theme);
  },
}));

export default useThemeStore;
