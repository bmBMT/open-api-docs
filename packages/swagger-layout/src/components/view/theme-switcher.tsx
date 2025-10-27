import useThemeStore from "@/stores/theme.store";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";
import type { Theme } from "@/types/theme.type";
import { Moon, Sun, SunMoon } from "lucide-react";
import { Label } from "../ui/label";
import { cn } from "@/lib/utils";

const ThemeSwitcher = () => {
  const theme = useThemeStore(state => state.theme);
  const setTheme = useThemeStore(state => state.setTheme);

  return (
    <Tabs value={theme} onValueChange={theme => setTheme(theme as Theme)}>
      <TabsList>
        <TabsTrigger value="system">
          <div className="flex space-x-2 items-center">
            <SunMoon className={cn(theme === "system" && "fill-accent-foreground")} />
            {theme === "system" && <Label className="text-sm">System</Label>}
          </div>
        </TabsTrigger>
        <TabsTrigger value="dark">
          <div className="flex space-x-2 items-center">
            <Moon className={cn(theme === "dark" && "fill-accent-foreground")} />
            {theme === "dark" && <Label className="text-sm">Dark</Label>}
          </div>
        </TabsTrigger>
        <TabsTrigger value="light">
          <div className="flex space-x-2 items-center">
            <Sun className={cn(theme === "light" && "fill-accent-foreground")} />
            {theme === "light" && <Label className="text-sm">Light</Label>}
          </div>
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
};

export default ThemeSwitcher;
