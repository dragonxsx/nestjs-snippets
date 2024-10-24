import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import {
  name as apiName,
  description as apiDescription,
  version as apiVersion,
} from '../package.json';

export default function SetupSwagger(apiPath: string, app: INestApplication) {
  const swaggerConfig = new DocumentBuilder()
    .setTitle(apiName)
    .setDescription(apiDescription)
    .setVersion(apiVersion)
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup(apiPath, app, document);

  return document;
}
