<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

# Plantilla para crear un microservicio

## Descripción

Creación de un microservicio para gestionar usuarios

## Como empezar

Clona el repositorio usando el metodo que gustes

Usando HTTP

```bash
git clone https://github.com/UnCompa/microservicio-plantilla
```

Usando SSH

```bash
git clone git@github.com:UnCompa/microservicio-plantilla.git
```

## Instalar dependecias

Al clonar ejecuta el comando para instalar los paquetes nescesarios para la plantilla

Usando NPM

```bash
npm install
```

Usando PNPM

```bash
pnpm install
```

## Creacion de tablas con prisma

Dado que el proyecto usa prisma como gestor de la base de datos debes seguir estos pasos

```bash
#1. Empezar prisma
$ npx prisma init
#2. Generar tablas
$ npx prisma generate
#3. Generar migracion
$ npx prisma migrate dev
```

> [!IMPORTANT]
> Ejecutar el paso uno y paso dos para que el proyecto funcione ademas de colocar correctamente las variables de entorno de tu base de datos local

## Copilar y ejecutar el proyecto

Luego de editar tu plantilla puedes probarla ejecutando los scripts de NestJs

Con NPM

```bash
# Desarrollo
$ npm run start

# Modo watch
$ npm run start:dev

# Construir aplicación
$ npm run build

# Produccion
$ npm run start:prod
```

Con PNPM

```bash
# Desarrollo
$ pnpm run start

# Modo watch
$ pnpm run start:dev

# Construir aplicación
$ pnpm run build

# Produccion
$ pnpm run start:prod
```

## Ejecutar tests

Con NPM

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

Con PNPM

```bash
# unit tests
$ pnpm run test

# e2e tests
$ pnpm run test:e2e

# test coverage
$ pnpm run test:cov
```

## Dockerizar proyecto

La plantilla ya tiene un dockerfile que permitira crear una imagen de tu proyecto

```bash
docker build -t <nombre-de-imagen> .
```

## Arquitectura

La arquitectura usada esta basada en la hexagonal, adaptada para la creacion de microservicios

![Imagen de la arquitectura](https://i.postimg.cc/t4nvmtWh/Slide-16-9-3-1.png)
