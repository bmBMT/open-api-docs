import { useLayoutEffect } from "react";
import useSwaggerStore from "./stores/swagger.store";
import ContentLayoyt from "./layouts/content.layoyt";
import { ThemeProvider } from "./providers/theme.provider";

function App() {
  const initSwaggerStore = useSwaggerStore(state => state.init);

  useLayoutEffect(() => {
    initSwaggerStore();
  }, [initSwaggerStore]);

  return (
    <ThemeProvider>
      <ContentLayoyt></ContentLayoyt>
    </ThemeProvider>
  );
}

export default App;
