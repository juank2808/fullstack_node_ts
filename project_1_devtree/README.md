#project DEVTREE node /  typeScript

explanation for the tsconfing.json file
{
    "compilerOptions": {
        "outDir": "./dist",    // Directorio donde se colocarán los archivos JavaScript compilados. / Directory where compiled JavaScript files will be placed.
        "rootDir": "./src",    // Directorio raíz de los archivos fuente TypeScript. / Root directory of the TypeScript source files.
        "lib": ["ESNext"],     // Incluye las bibliotecas para las características más recientes de ECMAScript. / Includes libraries for the latest ECMAScript features.
        "target": "ESNext",    // Especifica la versión de JavaScript de salida (última versión ECMAScript). / Specifies the output JavaScript version (latest ECMAScript).
        "moduleResolution": "NodeNext", // Cómo se resuelven los módulos (siguiendo las reglas de resolución de Node.js). / How modules are resolved (following Node.js resolution rules).
        "module": "NodeNext",  // Establece el sistema de módulos a Node.js (tipo de módulo ESNext). / Set module system to Node.js (ESNext module type).
        "strict": "false"      // Desactiva la comprobación estricta de tipos (no recomendado en la mayoría de los casos). / Disables strict type checking (not recommended in most cases).
    }
}