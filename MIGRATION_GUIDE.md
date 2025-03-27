# 🛠️ Migrating a CodePen Project to Local Development with Webpack

This guide walks you through converting a CodePen project into a modern local development setup using **Node.js**, **Webpack**, and **npm**.

---

## ✅ Step-by-Step Plan to Migrate to Local Development

---

### 📁 1. Create Your Project Structure

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

---

### 📦 2. Install Dependencies

```bash
npm install mapbox-gl deck.gl
npm install --save-dev webpack webpack-cli webpack-dev-server style-loader css-loader
```

---

### 🧩 3. Create `webpack.config.js`

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

---

### 🧾 4. Create `index.html` in `dist/`

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

---

### 🧠 5. Update Your JavaScript (`src/index.js`)

Example for Mapbox GL JS + Deck.gl:

```js
import mapboxgl from 'mapbox-gl';
import { MapboxOverlay } from '@deck.gl/mapbox';
import { GeoJsonLayer } from '@deck.gl/layers';
import 'mapbox-gl/dist/mapbox-gl.css';
import './style.css';

mapboxgl.accessToken = 'YOUR_MAPBOX_ACCESS_TOKEN';

function getAgeColor(age, alpha = 200) {
  let base;
  if (age <= 20) base = [0, 128, 255];
  else if (age <= 40) base = [0, 255, 128];
  else if (age <= 60) base = [255, 255, 0];
  else base = [200, 200, 200];
  return [...base, alpha];
}

function getTooltip({ object }) {
  return object && `Age: ${object.properties.age}\nGender: ${object.properties.gender}`;
}

const map = new mapboxgl.Map({
  container: document.body,
  style: 'mapbox://styles/mapbox/light-v9',
  center: [-122.4422, 37.7526],
  zoom: 15,
  pitch: 60,
  antialias: true
});

map.on('load', () => {
  const firstLabelLayerId = map.getStyle().layers.find(l => l.type === 'symbol').id;

  map.addLayer(
    {
      id: '3d-buildings',
      source: 'composite',
      'source-layer': 'building',
      filter: ['==', 'extrude', 'true'],
      type: 'fill-extrusion',
      minzoom: 15,
      paint: {
        'fill-extrusion-color': '#aaa',
        'fill-extrusion-height': [
          'interpolate', ['linear'], ['zoom'], 15, 0, 15.05, ['get', 'height']
        ],
        'fill-extrusion-base': [
          'interpolate', ['linear'], ['zoom'], 15, 0, 15.05, ['get', 'min_height']
        ],
        'fill-extrusion-opacity': 0.1
      }
    },
    firstLabelLayerId
  );

  const deckOverlay = new MapboxOverlay({
    interleaved: true,
    layers: [
      new GeoJsonLayer({
        data: 'https://example.com/data.geojson',
        stroked: false,
        filled: true,
        pointType: 'circle',
        pickable: true,
        getFillColor: d => getAgeColor(d.properties.age, 150),
        getLineColor: [160, 160, 180, 200],
        getLineWidth: 20,
        getPointRadius: 10
      })
    ],
    getTooltip
  });

  map.addControl(deckOverlay);
});
```

---

### 🏃 6. Add `npm` Scripts to `package.json`

```json
"scripts": {
  "start": "webpack serve",
  "build": "webpack"
}
```

---

### 🚀 7. Run the Dev Server

```bash
npm start
```

Visit:  
**http://localhost:8080**

---

## 📦 To Build for Deployment

```bash
npm run build
```

Upload the `dist/` folder to your web server or use GitHub Pages / Netlify for hosting.

---
