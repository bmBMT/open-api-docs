import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { ApiDocsModule } from '@open-api-docs/nestjs';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  const swaggerConfig = new DocumentBuilder()
    .setTitle('example')
    .setDescription(`example API description`)
    .setVersion(process.env.VERSION! || process.env.npm_package_version!)
    .setTermsOfService('test')
    .setContact('namqwedase', 'url', 'email')
    .setLicense('license1', 'url')
    .addOAuth2()
    // .addSecurity('keycloak', {
    //   type: 'openIdConnect',
    //   openIdConnectUrl: 'https://test.com',
    // })
    .addBearerAuth()
    .addBasicAuth()
    .addApiKey()
    .addCookieAuth();

  const swaggerBuiltConfig = swaggerConfig.build();

  const swaggerDocument = SwaggerModule.createDocument(app, swaggerBuiltConfig);

  // app.setGlobalPrefix('/api');

  SwaggerModule.setup('/docs', app, swaggerDocument, {
    swaggerOptions: {
      tagsSorter: 'alpha',
      operationsSorter: 'method',
      persistAuthorization: true,
    },
  });

  app.enableCors({
    origin: '*',
  });

  ApiDocsModule.setup('/api-docs', app, swaggerDocument, {
    operationsSorter: 'method',
  });

  await app.listen(process.env.PORT ?? 3000);

  Logger.log(
    `Application is running on: http://localhost:${process.env.PORT ?? 3000}`,
  );
}

bootstrap();
