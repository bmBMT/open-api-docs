import { type INestApplication } from "@nestjs/common";
import type { OpenAPIObject } from "@nestjs/swagger";
import type { Response, Request } from "express";
import {
  getNestGlobalPrefix,
  normalizeRelPath,
  SWAGGER_SCHEMA_PATH,
  validateGlobalPrefix,
  validatePath,
  type IApiDocsModuleConfig,
  type SwaggerSchemaType,
} from "@bmbmt-swagger/common";
import { join } from "path";
import { readFileSync } from "fs";

export class ApiDocsModule {
  static setup(
    docsPath: string,
    app: INestApplication,
    documentOrFactory: OpenAPIObject | (() => OpenAPIObject),
    options?: IApiDocsModuleConfig
  ): void {
    const globalPrefix = getNestGlobalPrefix(app);
    const finalPath = validatePath(
      options?.useGlobalPrefix && validateGlobalPrefix(globalPrefix)
        ? `${globalPrefix}${validatePath(docsPath)}`
        : docsPath
    );
    const buildPath = join(process.cwd(), "node_modules", "@bmbmt-swagger", "swagger-layout", "dist");

    const document = typeof documentOrFactory === "function" ? documentOrFactory() : documentOrFactory;
    const finalDocument = {
      globalPrefix,
      document,
    } as SwaggerSchemaType;

    const httpAdapter = app.getHttpAdapter();

    httpAdapter.get(
      normalizeRelPath(validatePath(join(finalPath, SWAGGER_SCHEMA_PATH))),
      (_: Request, res: Response) => {
        res.type("application/json");

        res.send(finalDocument);
      }
    );

    httpAdapter.get(finalPath, (_: Request, res: Response) => {
      res.type("text/html");

      const htmlPath = join(buildPath, "index.html");
      const html = readFileSync(htmlPath, "utf-8");

      res.send(html);
    });

    httpAdapter.use(validatePath(join(finalPath, "assets")), (req: Request, res: Response) => {
      const assetPath = join(buildPath, "assets", req.path);
      res.sendFile(assetPath);
    });
  }
}
