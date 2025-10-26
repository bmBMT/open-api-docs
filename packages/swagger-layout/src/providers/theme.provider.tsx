import useThemeStore from "@/stores/theme.store";
import { useLayoutEffect, type PropsWithChildren } from "react";

export function ThemeProvider({ children }: PropsWithChildren) {
  const initStore = useThemeStore(state => state.initTheme);

  useLayoutEffect(initStore, [initStore]);

  return children;
}
