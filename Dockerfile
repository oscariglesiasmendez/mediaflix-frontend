FROM node:18.13.0 as build

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN npm install -g @angular/cli

COPY . .

RUN ng build --configuration=production

FROM nginx:latest

# Copiar los archivos construidos desde la etapa de construcción a la ubicación donde nginx los servirá
COPY --from=build /app/dist/[mediaflix-frontend] /usr/share/nginx/html

# Exponer el puerto en el que nginx estará sirviendo la aplicación
EXPOSE 80