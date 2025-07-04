FROM node:22.0.0 AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install --legacy-peer-deps

COPY . .

RUN npm run build

# Install nginx
FROM nginx:alpine

# Copiar los archivos estáticos generados en la etapa de construcción
COPY --from=builder /app/dist /usr/share/nginx/html

# Copiar el arc hivo de configuración personalizada de Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Exponer el puerto 80 para acceder a la aplicación desde fuera del contenedor
EXPOSE 80

# Comando para iniciar Nginx y servir la aplicación
CMD ["nginx", "-g", "daemon off;"]