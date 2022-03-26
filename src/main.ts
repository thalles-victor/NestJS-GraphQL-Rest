import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 3000;

  await app
    .listen(3000)
    .then(() => {
      console.log(`🚀 For Rest API access 
          http://localhost:${port}
      `);
      console.log(`🚀 For Graphql API access with end point /graphql
          http://localhost:${port}/graphql  
      `);

      console.log(`Thanks ❤️ ✌️`);
    })
    .catch((error) => {
      console.log(error);
    });
}
bootstrap();
