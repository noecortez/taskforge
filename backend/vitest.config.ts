import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,       // Para usar describe, it, expect sin importar imports
    environment: "node", // Entorno para pruebas de backend
    include: ["tests/**/*.test.ts"], // Ruta a tus tests
  },
});
