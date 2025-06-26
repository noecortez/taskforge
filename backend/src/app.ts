import express from "express";
import cors from "cors";
import taskRoutes from "./routes/task.routes";

// Configuración del servidor Express
const app = express();

// Middleware para permitir CORS
app.use(cors());

// Middleware para parsear el cuerpo de las solicitudes como JSON
app.use(express.json());

// Rutas
app.use('/api', taskRoutes);

export default app;
