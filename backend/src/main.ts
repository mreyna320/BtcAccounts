import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  console.log('Initializing app');
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: '*',
    methods: 'OPTIONS,GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: false,
  });

  await app.listen(3000);
}
bootstrap();
