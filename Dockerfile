# Etapa 1: Construcción
FROM node:20.12.1 AS builder

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos de configuración y las dependencias
COPY package*.json ./
COPY tsconfig.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de los archivos del proyecto
COPY . .

# Construye la aplicación para producción
RUN npm run build

# Etapa 2: Producción
FROM nginx:alpine AS production

# Copia los archivos estáticos de la etapa de construcción al contenedor final
COPY --from=builder /app/build /usr/share/nginx/html

# Exponer el puerto 3000
EXPOSE 3000

# Comando por defecto para iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]
