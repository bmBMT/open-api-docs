import { type DynamicModule, Module } from "@nestjs/common";
import { ServeStaticModule } from "@nestjs/serve-static";
import { join } from 'path';
export interface SwaggerUIOptions {
  path?: string;
  swaggerUrl?: string;
}

@Module({})
export class SwaggerUIModule {
  static forRoot(options: SwaggerUIOptions = {}): DynamicModule {
    const serveRoot = options.path ?? "/docs";

    const buildPath = join(process.cwd(), 'node_modules', '@bmbmt-swagger', 'swagger-layout', 'dist');

    return {
      module: SwaggerUIModule,
      imports: [
        ServeStaticModule.forRoot({
          rootPath: buildPath,
          serveRoot,
          exclude: ['/api/*']
        }),
      ],
      providers: [{ provide: "MY_DOCS_OPTIONS", useValue: options }],
      exports: [],
    };
  }
}
