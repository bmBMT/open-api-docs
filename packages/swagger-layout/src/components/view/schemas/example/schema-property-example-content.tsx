import { isObject } from "@/lib/is-object";
import { cn } from "@/lib/utils";
import useThemeStore from "@/stores/theme.store";
import JsonView from "react-json-view";

interface ISchemaPropertyExampleContent {
  example?: unknown;
}

function SchemaPropertyExampleContent({ example }: ISchemaPropertyExampleContent) {
  const currentTheme = useThemeStore(state => state.currentTheme);

  if (isObject(example))
    return (
      <JsonView
        src={example as object}
        name={null}
        displayDataTypes={false}
        collapsed={0}
        theme={currentTheme === "light" ? "grayscale:inverted" : "grayscale"}
        style={{ backgroundColor: "transparent" }}
      />
    );

  if (Array.isArray(example))
    return example.map((item, index) => (
      <div
        key={index}
        className={cn(isObject(item) && "basis-full", "gap-2 flex-wrap items-center", !isObject(item) && "flex")}
      >
        <SchemaPropertyExampleContent example={item} />
      </div>
    ));

  return <code className="px-2 py-1 bg-indigo-50 text-indigo-900 rounded text-xs">{example as string}</code>;
}

export default SchemaPropertyExampleContent;
