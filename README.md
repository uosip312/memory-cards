# Juego Memory Cards 🧠

<img src="https://github.com/uosip312/memory-cards/assets/52187478/ad147d06-647f-4da9-9c07-a979e99bc76d" alt="Logo Memory Cards ED" width="200"/>

¡Bienvenido a Memory Cards, la aplicación de juego de cartas para mejorar tu memoria!

## 📄Descripción del Proyecto
Aplicación móvil web progresiva basada en el juego de “Memory Cards”. En el cual debes memorizas 9 numeros y pasado cierto tiempo debes recordar donde está posicionado el numero por el cual se pregunte.

[DEMO](https://uosip312.github.io/memory-cards/)

- `Home`: Pantalla inicial donde debes colocar tu nombre y presionar el boton Iniciar.
- `Game`: Antes de comenzar a jugar debes elegir un nivel en la parte superior, y hacer click en el botón jugar, se mostraran una serie de numeros que debes memorizar, estos numeros se ocultaran dependiendo en el nivel que hayas elegido previamente y tendras que adivinar donde se oculta el numero por el que se pregunta, si aciertas irás acumulando puntos (basados en el nivel seleccionado), sino aciertas se reinicia la puntuacion y el juego.

| Nivel | Tiempo | Puntos |
| ----- | ------ | ------ |
| Bajo  | 10s    | 10     |
| Medio | 5s     | 20     |
| Alto  | 2s     | 30     |

## 📋Requisitos Previos
Asegúrate de tener instalados los siguientes elementos en tu sistema:

- [Node.js](https://nodejs.org/) (versión 20.x o superior)
- [NPM](https://www.npmjs.com/) (viene con Node.js, pero asegúrate de tener la última versión)
- [Angular CLI](https://angular.io/cli) version 14.2.10 (instálalo globalmente usando npm install -g @angular/cli)

## 🔧Instalación
Ejecuta los siguientes pasos:

1. **Clona el repositorio:**
```
git clone https://github.com/uosip312/memory-cards.git
```
2. **Accede al directorio del proyecto clonado:**
```
cd memory-cards
```
3. **Instala las dependencias:**
```
npm install
```

## 💻Ejecución de la aplicación
1. **Inicia la aplicación:**
```
ng serve
```
2. **Accede a la aplicación:**
Abre tu navegador web y visita [http://localhost:4200/](http://localhost:4200/)

## 🔨Desplegue del proyecto

Si deseas construir el proyecto para producción, utiliza el siguiente comando:
```
ng build
```
Esto generará una carpeta `dist/` que contiene los archivos optimizados para producción.

## ⚙️Ejecución de pruebas
Para ejecutar las pruebas unitarias, utiliza el siguiente comando:
```
ng test
```

## 🛠️Construido con:
- [Angular](https://angular.io/) Framework para aplicaciones web
- [NPM](https://www.npmjs.com/) Sistema de gestión de paquetes
- [Jasmine](https://jasmine.github.io/) Framwork de pruebas para JavaScript
- [Karma](https://karma-runner.github.io/) Ejecutor de pruebas para JavaScript
