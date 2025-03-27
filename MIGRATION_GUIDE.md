# Migrating a CodePen Project to Local Development with Webpack

This guide walks you through converting a CodePen project into a modern local development setup using **Node.js**, **Webpack**, and **npm**.
The example we will be using is the San Francisco Web map that shows the home locations of a synthetic population (100k agents).

## 0. Download CodePen Files

Before starting the migration, download your existing CodePen project files.

### 👉 CodePen URL

Your project: [https://codepen.io/pfoser/pen/YPzOJNJ](https://codepen.io/pfoser/pen/YPzOJNJ)

### Export as .zip

1. Click the **Settings gear** or the dropdown menu near the top-right.
2. Select **“Export → Export .zip”**.
3. Unzip the file. Inside the exported folder, go to the `dist/` folder.
4. Use the files from `dist/` once you set up your project as follows:
   - `index.html` → move to your project’s `dist/` folder
   - `script.js` → move to `src/index.js`
   - `style.css` → move to `src/style.css`

## 📁 1. Create Your Project Structure

```bash
mkdir sf_deck
cd sf_deck
npm init -y
```

Create the following folder structure:

```
sf_deck/
├── dist/
│   └── index.html          ← your HTML file
├── src/
│   ├── index.js            ← your main JavaScript logic
│   └── style.css           ← your custom styles
├── package.json
└── webpack.config.js       ← Webpack configuration
```


## 2. Install Dependencies

```bash
npm install mapbox-gl deck.gl
npm install --save-dev webpack webpack-cli webpack-dev-server style-loader css-loader
```


## 3. Create `webpack.config.js`

```js
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'development',
  devServer: {
    static: './dist',
    port: 8080
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
};
```

## 4. Modify `index.html` in `dist/`

Modify the index.html files in your dist folder as follows. All modifications relate to javascript libraries and style files, i.e., there are no more links to other files on the internet, only a single link to a bundle.js file.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>SF Deck.gl App</title>
</head>
<body>
  <div id="container"></div>
  <script src="bundle.js"></script>
</body>
</html>
```

## 5. Update Your JavaScript (`src/index.js`)

Since we use node.js, npm and a bundler to develop our code, all libraries are downloaded locally and are "imported" into our code. 

```js
import mapboxgl from 'mapbox-gl';
import { MapboxOverlay } from '@deck.gl/mapbox';
import { GeoJsonLayer } from '@deck.gl/layers';
import 'mapbox-gl/dist/mapbox-gl.css';
import './style.css';

... rest remains unchanged...
```

## 6. Add `npm` Scripts to `package.json`

Some scripts to run the Web map locally (start) and to deploy it (build). The latter step also bundles all libraries into a single javascript file - bundle.js.

```json
"scripts": {
  "start": "webpack serve",
  "build": "webpack"
}
```


## 7. Run the Dev Server

Starts the development server to see the Web map in the browser.

```bash
npm start
```

Visit:  
**http://localhost:8080**


## To Build for Deployment

Bundles the libraries so that you can deploy it to a Web server. 

```bash
npm run build
```

Upload the `dist/` folder to your web server or use GitHub Pages / Netlify for hosting.

---
