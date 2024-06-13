# Etapa 1: Construcción
FROM node:18 AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build --prod

# Etapa 2: Servir la aplicación con Nginx
FROM nginx:alpine

# Eliminar la configuración por defecto de Nginx
RUN rm -rf /usr/share/nginx/html/*

# Copiar los archivos construidos desde la etapa de construcción a la ubicación donde nginx los servirá
COPY --from=build /app/dist/[mediaflix-frontend] /usr/share/nginx/html

# Copiar el archivo de configuración personalizado de Nginx para la aplicación Angular
COPY nginx.conf /etc/nginx/nginx.conf

# Exponer el puerto en el que nginx estará sirviendo la aplicación
EXPOSE 80

# Comando por defecto para iniciar nginx
CMD ["nginx", "-g", "daemon off;"]
