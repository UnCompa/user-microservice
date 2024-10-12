import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { LoggerService } from './core/application/loggger/logger.service';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { appConfig } from './shared/config/app.config';
import * as yaml from 'js-yaml';
import * as fs from 'fs';
async function bootstrap() {
  const logger = new LoggerService();
  const app = await NestFactory.create(AppModule, {
    logger: new LoggerService(),
  });
  app.useGlobalPipes(new ValidationPipe());
  const config = new DocumentBuilder()
    .setTitle('User API')
    .setDescription(
      `This a microservice using NestJs for ${appConfig.mode} mode`,
    )
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  // Convierte el documento JSON a YAML
  const yamlDocument = yaml.dump(document);
  // Guarda el archivo YAML si es necesario
  fs.writeFileSync('./swagger.yml', yamlDocument);
  SwaggerModule.setup('api', app, document);
  await app.listen(appConfig.port);
  logger.log(
    `🚀 Microservice started on port ${appConfig.port} in ${appConfig.mode.toUpperCase()} mode`,
  );
}
bootstrap();
