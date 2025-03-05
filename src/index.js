import { initMongoDB } from './db/initMongoConnection.js';
import { setupServer } from './server.js';

async function bootstrap() {
  await initMongoDB();
  setupServer();
}

bootstrap();
