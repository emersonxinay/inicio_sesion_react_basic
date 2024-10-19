# React + Vite

## sesion basica

para crear con vite

```bash
npm create vite
```

Seguir estos pasos al crear con vite
nombre_proyecto: sesionbasic
Libreria: React
Lenguaje: javascript

para moverse a la carpeta creada

```bash
cd nombre_proyecto
```

instalar los paquetes

```bash
npm install
```

para levantar el proyecto

```bash
npm run dev
```

## Para hacer Deploy a Githubpages

Recordar que ya debe estar subido a github

instalar los paquetes

```bash
npm install gh-pages --save-dev
```

en package.json deberia quedar algo asi:

```json
{
  "name": "iniciando_sesion",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "homepage": "https://emersonxinay.github.io/inicio_sesion_react_basic",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview",
    "predeploy": "vite build",
    "deploy": "gh-pages -d dist"
  },
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1"
  },
  "devDependencies": {
    "@eslint/js": "^9.9.0",
    "@types/react": "^18.3.3",
    "@types/react-dom": "^18.3.0",
    "@vitejs/plugin-react": "^4.3.1",
    "eslint": "^9.9.0",
    "eslint-plugin-react": "^7.35.0",
    "eslint-plugin-react-hooks": "^5.1.0-rc.0",
    "eslint-plugin-react-refresh": "^0.4.9",
    "gh-pages": "^6.2.0",
    "globals": "^15.9.0",
    "vite": "^5.4.1"
  }
}
```

verificar el archivo vite.config.js y debe quedar algo asi:

```js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/inicio_sesion_react_basic', // Asegúrate de que esto coincida con el nombre de tu repositorio
});
```

comprimir las carpetas antes del deploy

```bash
  npm run build
```

y luego hacer deploy

```bash
npm run deploy
```

## verificar en github
