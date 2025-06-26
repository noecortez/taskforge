import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// Carga las variables de entorno desde el archivo .env
dotenv.config();

// Configuración del servidor Express
const app = express();

// Middleware para permitir CORS
app.use(cors());

// Middleware para parsear el cuerpo de las solicitudes como JSON
app.use(express.json());

// Ruta inicial de ejemplo
app.get('/', (_req, res) => {
    res.send('TaskForge API is running!');
});

// Puerto en el que el servidor escuchará
const PORT = process.env.PORT || 3000;

// Inicia el servidor
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
