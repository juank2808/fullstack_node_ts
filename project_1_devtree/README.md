# Project DEVTREE - Node.js / TypeScript

Este proyecto utiliza **Node.js** y **TypeScript** para el desarrollo de aplicaciones modernas con la última versión de ECMAScript.

## Configuración de TypeScript (tsconfig.json)

El archivo `tsconfig.json` contiene la configuración del compilador de TypeScript. A continuación, se explica cada opción:

```json
{
    "compilerOptions": {
        "outDir": "./dist",    // Directorio donde se colocarán los archivos JavaScript compilados.
        "rootDir": "./src",    // Directorio raíz de los archivos fuente TypeScript.
        "lib": ["ESNext"],     // Incluye las bibliotecas para las características más recientes de ECMAScript.
        "target": "ESNext",    // Especifica la versión de JavaScript de salida (última versión ECMAScript).
        "moduleResolution": "NodeNext", // Cómo se resuelven los módulos (siguiendo las reglas de resolución de Node.js).
        "module": "NodeNext",  // Establece el sistema de módulos a Node.js (tipo de módulo ESNext).
        "strict": false         // Desactiva la comprobación estricta de tipos (no recomendado en la mayoría de los casos).
    }
}
```

## Instalación

Para instalar las dependencias necesarias, ejecuta el siguiente comando:

```sh
npm install
```

## Ejecución en modo desarrollo

Para ejecutar el proyecto en modo desarrollo con `nodemon` y `ts-node`:

```sh
npm run dev
```

## Compilación

Para compilar el código TypeScript a JavaScript:

```sh
npm run build
```

## Estructura del Proyecto

```
project_1_devtree/
│── src/            # Código fuente en TypeScript
│   ├── index.ts    # Archivo principal de la aplicación
│── dist/           # Archivos JavaScript compilados
│── node_modules/   # Dependencias de Node.js
│── package.json    # Configuración del proyecto
│── tsconfig.json   # Configuración de TypeScript
│── README.md       # Documentación del proyecto
```

## Autor
Desarrollado por **[juank2028]**.

