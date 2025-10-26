import { useLayoutEffect } from "react";
import useSwaggerStore from "./stores/swagger.store";
import ContentLayoyt from "./layouts/content.layoyt";
import { ThemeProvider } from "./providers/theme.provider";
import GroupedOperations from "./components/view/operations/grouped-operations";

function App() {
  const initSwaggerStore = useSwaggerStore(state => state.init);

  useLayoutEffect(() => {
    initSwaggerStore();
  }, [initSwaggerStore]);

  return (
    <ThemeProvider>
      <ContentLayoyt>
        <GroupedOperations />
      </ContentLayoyt>
    </ThemeProvider>
  );
}

export default App;
