import {
  normalizeRelPath,
  OPEN_API_DOCUMENT_PATH,
  validatePath,
  type OpenApiDocumentType,
} from "@open-api-docs/common";
import axios from "axios";
import { create } from "zustand";

interface IOpenApiStore {
  isLoading: boolean;
  isSchemaLoaded: boolean;
  schema: OpenApiDocumentType | null;
  init: () => Promise<void>;
}

const useOpenApiStore = create<IOpenApiStore>(set => ({
  isLoading: true,
  isSchemaLoaded: false,
  schema: null,
  init: async () => {
    const schemaPath = import.meta.env.DEV
      ? `http://localhost:3000/api-docs` + OPEN_API_DOCUMENT_PATH
      : validatePath(normalizeRelPath(window.location.pathname + OPEN_API_DOCUMENT_PATH));

    try {
      const res = await axios.get<OpenApiDocumentType>(schemaPath);

      if (typeof res.data === "object") set({ schema: res.data, isSchemaLoaded: true });
    } catch {
      console.error("Error on load schema");
    } finally {
      set({ isLoading: false });
    }
  },
}));

export default useOpenApiStore;
