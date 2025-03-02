"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("./swagger");
const dotenv = require("dotenv");
const common_1 = require("@nestjs/common");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    dotenv.config();
    app.enableShutdownHooks();
    app.enableCors({ origin: '*' });
    app.enableVersioning({ type: common_1.VersioningType.URI });
    app.useGlobalPipes(new common_1.ValidationPipe({ transform: true }));
    app.setGlobalPrefix('api');
    await (0, swagger_1.swaggerInit)(app, process.env.APP_MODE);
    await app.listen(4000);
}
bootstrap();
//# sourceMappingURL=main.js.map