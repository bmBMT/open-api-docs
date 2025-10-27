import "react-perfect-scrollbar/dist/css/styles.css";
import AuthenticationSheet from "@/components/view/authentication/authentication-sheet";
import SchemaInfo from "@/components/view/schema-info";
import SchemaNotLoaded from "@/components/view/schema-not-loaded";
import SettingsPopover from "@/components/view/settings-popover";
import useOpenApiStore from "@/stores/open-api.store";
import type { PropsWithChildren } from "react";
import ThemeSwitcher from "@/components/view/theme-switcher";

const ContentLayoyt = ({ children }: PropsWithChildren) => {
  const isSchemaLoading = useOpenApiStore(state => state.isLoading);
  const isSchemaLoaded = useOpenApiStore(state => state.isSchemaLoaded);

  if (isSchemaLoading) return;
  if (!isSchemaLoaded && !isSchemaLoading) return <SchemaNotLoaded />;
  return (
    <div className="max-w-[1460px] mx-auto my-[25px] px-5 space-y-10">
      <div className="flex justify-between items-start">
        <SchemaInfo />
        <div className="flex flex-col space-y-5 items-end">
          <div className="flex space-x-4">
            <ThemeSwitcher />
            <SettingsPopover />
          </div>
          <AuthenticationSheet />
        </div>
      </div>
      {children}
    </div>
  );
};

export default ContentLayoyt;
