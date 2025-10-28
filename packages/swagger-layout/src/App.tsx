import { useLayoutEffect } from "react";
import useOpenApiStore from "./stores/open-api.store";
import GroupedOperations from "./components/view/operations/grouped-operations";
import { useRef } from "react";
import { Scrollbars } from "react-custom-scrollbars-2";
import DocumentNotLoaded from "./components/view/document-not-loaded";
import DocumentInfo from "./components/view/document-info";
import ThemeSwitcher from "./components/view/theme-switcher";
import SettingsPopover from "./components/view/settings-popover";
import AuthenticationSheet from "./components/view/authentication/authentication-sheet";
import Scrollbar from "./components/ui/scrollbar";
import SchemasInfo from './components/view/schemas-info';

function App() {
  const initOpenApiStore = useOpenApiStore(state => state.init);
  const isSchemaLoading = useOpenApiStore(state => state.isLoading);
  const isSchemaLoaded = useOpenApiStore(state => state.isSchemaLoaded);
  const scrollbarRef = useRef<Scrollbars>(null);

  useLayoutEffect(() => {
    initOpenApiStore();
  }, [initOpenApiStore]);

  if (isSchemaLoading) return;
  if (!isSchemaLoaded && !isSchemaLoading) return <DocumentNotLoaded />;
  return (
    <Scrollbar ref={scrollbarRef}>
      <div className="max-w-[1460px] min-h-[100vh] mx-auto py-[25px] px-5 space-y-10">
        <div className="flex justify-between items-start">
          <DocumentInfo />
          <div className="flex flex-col space-y-5 items-end">
            <div className="flex space-x-4">
              <ThemeSwitcher />
              <SettingsPopover />
            </div>
            <AuthenticationSheet />
          </div>
        </div>
        <GroupedOperations scrollbarRef={scrollbarRef} />
        <SchemasInfo />
      </div>
    </Scrollbar>
  );
}

export default App;
