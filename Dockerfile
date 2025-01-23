# Etapa de construcción
FROM node:18.19-alpine AS builder

# Establecer variables de entorno
ENV NODE_ENV=production
ENV CI=true

# Establecer el directorio de trabajo
WORKDIR /app

# Instalar dependencias de compilación
RUN apk add --no-cache python3 make g++

# Copiar archivos de configuración
COPY package*.json ./
COPY tsconfig.json ./
COPY vite.config.ts ./
COPY postcss.config.js ./
COPY tailwind.config.js ./

# Instalar dependencias
RUN npm ci --quiet

# Copiar el código fuente
COPY src/ ./src/
COPY public/ ./public/

# Construir la aplicación
RUN npm run build || (cat /root/.npm/_logs/*-debug.log && exit 1)

# Etapa de producción
FROM nginx:alpine

# Copiar la configuración de nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copiar los archivos construidos
COPY --from=builder /app/dist /usr/share/nginx/html

# Establecer permisos correctos
RUN chown -R nginx:nginx /usr/share/nginx/html && \
    chmod -R 755 /usr/share/nginx/html

# Exponer puerto
EXPOSE 3000

# Iniciar nginx
CMD ["nginx", "-g", "daemon off;"]
