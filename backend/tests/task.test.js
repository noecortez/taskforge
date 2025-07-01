"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const vitest_1 = require("vitest");
const app_1 = __importDefault(require("../src/app"));
(0, vitest_1.describe)("GET /api/tasks", () => {
    (0, vitest_1.it)("Debería devolver una lista de tareas", async () => {
        const response = await (0, supertest_1.default)(app_1.default).get("/api/tasks");
        (0, vitest_1.expect)(response.status).toBe(200);
        (0, vitest_1.expect)(response.body).toBeInstanceOf(Array);
        (0, vitest_1.expect)(response.body[0]).toHaveProperty("id");
        (0, vitest_1.expect)(response.body[0]).toHaveProperty("title");
        (0, vitest_1.expect)(response.body[0]).toHaveProperty("completed");
    });
});
