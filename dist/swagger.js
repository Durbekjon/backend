"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.swaggerInit = void 0;
const swagger_1 = require("@nestjs/swagger");
const swaggerInit = async (app, appMode) => {
    if (appMode === 'development') {
        const config = new swagger_1.DocumentBuilder()
            .addBearerAuth()
            .setTitle('MAMNUN')
            .setVersion('1.0')
            .build();
        const document = swagger_1.SwaggerModule.createDocument(app, config);
        swagger_1.SwaggerModule.setup('api/docs', app, document);
    }
};
exports.swaggerInit = swaggerInit;
//# sourceMappingURL=swagger.js.map