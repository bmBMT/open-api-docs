import api from "@/lib/api";
import {
  normalizeRelPath,
  OPEN_API_DOCUMENT_PATH,
  validatePath,
  type OpenApiDocumentType,
} from "@open-api-docs/common";
import { create } from "zustand";
import useServerStore from "./server.store";
import { makeParseRefObject } from "@open-api-docs/common";
import type { OpenAPIV3 } from "openapi-types";

interface IOpenApiStore {
  isLoading: boolean;
  isSchemaLoaded: boolean;
  schema: OpenApiDocumentType | null;
  init: () => Promise<void>;
  parseRefObject?: <T extends object>(object: OpenAPIV3.ReferenceObject | T) => T;
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
      const schema = await api<OpenApiDocumentType>(schemaPath);

      if (typeof schema === "object") {
        if (schema.document.servers) {
          useServerStore.setState({ selectedServer: schema.document.servers?.at(0)?.url || "" });
        }

        set({
          schema,
          isSchemaLoaded: true,
          parseRefObject: makeParseRefObject(schema.document),
        });
      }
    } catch {
      console.error("Error on load schema");
    } finally {
      set({ isLoading: false });
    }
  },
}));

export default useOpenApiStore;
