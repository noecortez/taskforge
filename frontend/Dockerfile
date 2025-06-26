# Etapa de construcción
FROM node:20.19.1 as builder

# Crear directorio de trabajo
WORKDIR /app

# Copiar todos los archivos
COPY . .

# Instalar dependencias y construir la aplicación
RUN npm install && npm run build

# Etapa de producción
FROM nginx:alpine

# Copiar archivos de construcción al contenedor de Nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Exponer el puerto 80
EXPOSE 80
