import dotenv from 'dotenv';
import app from './app';

// Carga las variables de entorno desde el archivo .env
dotenv.config();

// Puerto en el que el servidor escuchará
const PORT = process.env.PORT || 3000;

// Inicia el servidor
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
