import type { INestApplication } from '@nestjs/common';

export function getNestGlobalPrefix(app: INestApplication): string {
  const internalConfigRef = (app as any).config;
  return (internalConfigRef && internalConfigRef.getGlobalPrefix()) || '';
}