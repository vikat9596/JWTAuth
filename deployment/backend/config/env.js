"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
var dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
exports.config = {
    port: process.env.PORT || 5000,
    jwtSecret: process.env.JWT_SECRET || 'your-production-secret-key-change-this',
    jwtExpiresIn: process.env.JWT_EXPIRES_IN || '24h',
    nodeEnv: process.env.NODE_ENV || 'production'
};
//# sourceMappingURL=env.js.map