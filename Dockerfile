# Etapa 1: Construcción
FROM node:14 AS build

# Establecer el directorio de trabajo en el contenedor
WORKDIR /app

# Copiar package.json y package-lock.json al directorio de trabajo
COPY package*.json ./

# Instalar las dependencias del proyecto
RUN npm install

# Copiar el código fuente de la aplicación al directorio de trabajo
COPY . .

# Construir la aplicación para producción
RUN npm run build --prod

# Etapa 2: Servir la aplicación
FROM nginx:alpine

# Copiar los archivos construidos desde la etapa de construcción a la ubicación donde nginx los servirá
COPY --from=build /app/dist/[mediaflix-frontend] /usr/share/nginx/html

# Exponer el puerto en el que nginx estará sirviendo la aplicación
EXPOSE 80

# Comando por defecto para iniciar nginx
CMD ["nginx", "-g", "daemon off;"]
