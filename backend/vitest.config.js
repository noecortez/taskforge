"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("vitest/config");
exports.default = (0, config_1.defineConfig)({
    test: {
        globals: true, // Para usar describe, it, expect sin importar imports
        environment: "node", // Entorno para pruebas de backend
        include: ["tests/**/*.test.ts"], // Ruta a tus tests
    },
});
