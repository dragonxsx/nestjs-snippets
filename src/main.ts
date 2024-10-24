import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
import SetupSwagger from './app.swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  SetupSwagger('/explorer', app);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
