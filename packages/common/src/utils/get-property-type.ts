import type { OpenAPIV3 } from "openapi-types";
import { hasReference } from "./parse-ref-object";

export const getPropertyType = (
  schema: OpenAPIV3.SchemaObject | OpenAPIV3.ReferenceObject,
  processedSchemas = new WeakSet()
) => {
  if (typeof schema !== "object") {
    return "any";
  }

  if (hasReference(schema)) {
    return "object";
  }

  const notReferencedSchema = schema as OpenAPIV3.SchemaObject;

  const { type } = notReferencedSchema;

  if (processedSchemas.has(schema)) {
    return "any"; // detect a cycle
  }
  processedSchemas.add(schema);

  const getArrayType = (): string => {
    const arraySchema = schema as OpenAPIV3.ArraySchemaObject;

    if (arraySchema?.items) {
      const itemsType = getPropertyType(arraySchema.items, processedSchemas);
      return `array [${itemsType}]`;
    } else {
      return "array [any]";
    }
  };

  const getPrimitiveType = (schema: OpenAPIV3.SchemaObject) => {
    if (schema.format) return `${schema.type} <${schema.format}>`;

    return schema.type;
  };

  const typeString =
    type === "array"
      ? getArrayType()
      : ["null", "boolean", "object", "array", "number", "integer", "string"].includes(type ?? "")
        ? getPrimitiveType(schema as OpenAPIV3.SchemaObject)
        : null;

  const handleCombiningKeywords = (keyword: "oneOf" | "anyOf" | "allOf", separator: string): string | null => {
    if (Array.isArray(notReferencedSchema[keyword])) {
      const combinedTypes = notReferencedSchema[keyword].map(subSchema => {
        if (hasReference(subSchema)) return "object";

        return getPrimitiveType(subSchema as OpenAPIV3.SchemaObject);
      });
      return combinedTypes.join(separator);
    }
    return null;
  };

  const oneOfString = handleCombiningKeywords("oneOf", " | ");
  const anyOfString = handleCombiningKeywords("anyOf", " | ");
  const allOfString = handleCombiningKeywords("allOf", " & ");

  const combinedStrings = [typeString, oneOfString, anyOfString, allOfString].filter(Boolean).join(" | ");

  processedSchemas.delete(schema);

  return combinedStrings || "any";
};
