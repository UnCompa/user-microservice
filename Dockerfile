# Usa una imagen base ligera de Node.js
FROM node:18-alpine AS base

WORKDIR /app

COPY package*.json ./


RUN npm install --production

COPY . .

ARG DATABASE_URL

ENV DATABASE_URL=${DATABASE_URL}

# Genera las definiciones de la API con Prisma
RUN npx prisma generate

# Instalar Nest CLI y Swagger solo en desarrollo
RUN npm install @nestjs/swagger

RUN npm install @nestjs/cli

# Construir la aplicación
RUN npm run build

FROM node:18-alpine AS production

# Crea un area de trabajo
WORKDIR /app

# Copia los archivos necesarios
COPY --from=base /app/node_modules ./node_modules
COPY --from=base /app/dist ./dist
COPY --from=base /app/prisma ./prisma

# Establece el proyecto en modo produción
ENV NODE_ENV=production

# Expone el puerto del proyecto
EXPOSE 3000

# Ejecuta las migraciones y luego la aplicación
CMD ["sh", "-c", "npx prisma migrate deploy && node dist/main"]
