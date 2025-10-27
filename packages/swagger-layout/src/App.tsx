import { useLayoutEffect } from "react";
import useOpenApiStore from "./stores/open-api.store";
import ContentLayoyt from "./layouts/content.layoyt";
import { ThemeProvider } from "./providers/theme.provider";
import GroupedOperations from "./components/view/operations/grouped-operations";

function App() {
  const initOpenApiStore = useOpenApiStore(state => state.init);

  useLayoutEffect(() => {
    initOpenApiStore();
  }, [initOpenApiStore]);

  return (
    <ThemeProvider>
      <ContentLayoyt>
        <GroupedOperations />
      </ContentLayoyt>
    </ThemeProvider>
  );
}

export default App;
