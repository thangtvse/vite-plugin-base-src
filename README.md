# Vite Base Src Plugin
A simple Vite plugin which allows absolute import statements for files in src folder

![Build status](https://github.com/uendno/vite-plugin-base-src/actions/workflows/test.yml/badge.svg)

## Installation

Install the plugin 

```sh
npm install --save vite-plugin-base-src
```

## Usage

- Apply the plugin in your vite.config.js file
```js
import { defineConfig } from 'vite';
import ViteBaseSrcPlugin from 'vite-plugin-base-src';

export default defineConfig({
  plugins: [
    ViteBaseSrcPlugin({
      src: 'src',
    }),
  ]
});
```

- Given that you have a file structure like this

```
src
|- utils
   |- pusher.ts
|- components
   |- App.ts
```

- Normally, inside App.js, you have to use the following statement to import pusher.ts

```js
import pusher from '../utils/pusher';
```

- With this plugin, you can simply import like this

```js
import pusher from 'utils/pusher';
```

## Configuration

```js
ViteBaseSrcPlugin({
  src: 'src', // Required. Src folder.
  fileExtensions: ['.js', '.mjs'] // Default: ['.js', '.ts', '.jsx', '.tsx']. A list of accepted file extensions. This list is used when resolving a folder or a file without extension in the import statement.
})
```

## License

This project is licensed under the terms of the [MIT License](/LICENSE).