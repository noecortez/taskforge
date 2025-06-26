import request from 'supertest';
import { describe, it, expect } from 'vitest';
import app from '../src/app';

describe("GET /api/tasks", () => {
    it("Debería devolver una lista de tareas", async () => {
        const response = await request(app).get("/api/tasks");
        expect(response.status).toBe(200);
        expect(response.body).toBeInstanceOf(Array);
        expect(response.body[0]).toHaveProperty("id");
        expect(response.body[0]).toHaveProperty("title");
        expect(response.body[0]).toHaveProperty("completed");
    });
});
