import { normalizeRelPath, SWAGGER_SCHEMA_PATH, validatePath, type SwaggerSchemaType } from "@bmbmt-swagger/common";
import axios from "axios";
import { create } from "zustand";

interface ISwaggerStore {
  isLoading: boolean;
  isSchemaLoaded: boolean;
  schema: SwaggerSchemaType | null;
  init: () => Promise<void>;
}

const useSwaggerStore = create<ISwaggerStore>(set => ({
  isLoading: true,
  isSchemaLoaded: false,
  schema: null,
  init: async () => {
    const schemaPath = import.meta.env.DEV
      ? `http://localhost:3000/api-docs` + SWAGGER_SCHEMA_PATH
      : validatePath(normalizeRelPath(window.location.pathname + SWAGGER_SCHEMA_PATH));

    try {
      const res = await axios.get<SwaggerSchemaType>(schemaPath);

      if (typeof res.data === "object") set({ schema: res.data, isSchemaLoaded: true });
    } catch {
      console.error("Error on load schema");
    } finally {
      set({ isLoading: false });
    }
  },
}));

export default useSwaggerStore;
