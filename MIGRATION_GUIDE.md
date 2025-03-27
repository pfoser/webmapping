# 🛠️ Migrating a CodePen Project to Local Development with Webpack

This guide walks you through converting a CodePen project into a modern local development setup using **Node.js**, **Webpack**, and **npm**.

## 📁 1. Create Your Project Structure

```bash
mkdir my-map-project
cd my-map-project
npm init -y
```

Create the following folder structure:

```
my-map-project/
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

## 4. Create `index.html` in `dist/`

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>My Deck.gl App</title>
</head>
<body>
  <div id="container"></div>
  <script src="bundle.js"></script>
</body>
</html>
```

## 5. Update Your JavaScript (`src/index.js`)

Example for Mapbox GL JS + Deck.gl:

```js
import mapboxgl from 'mapbox-gl';
import { MapboxOverlay } from '@deck.gl/mapbox';
import { GeoJsonLayer } from '@deck.gl/layers';
import 'mapbox-gl/dist/mapbox-gl.css';
import './style.css';

... remains unchanged...
```

## 6. Add `npm` Scripts to `package.json`

```json
"scripts": {
  "start": "webpack serve",
  "build": "webpack"
}
```


## 7. Run the Dev Server

```bash
npm start
```

Visit:  
**http://localhost:8080**


## To Build for Deployment

```bash
npm run build
```

Upload the `dist/` folder to your web server or use GitHub Pages / Netlify for hosting.

---
