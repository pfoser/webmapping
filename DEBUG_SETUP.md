# 🔍 Debugging JavaScript with VS Code + Webpack + Chrome

This guide explains how to set up debugging for a JavaScript project using Webpack, npm, and Chrome in Visual Studio Code.

## ✅ Project Structure

```
sf_interleave/
├── dist/                  # Webpack build output
│   ├── bundle.js
│   ├── bundle.js.map
│   └── index.html
├── src/
│   └── script.js          # Your source code
├── webpack.config.js
├── package.json
└── .vscode/
    └── launch.json        # VS Code debugger config
```


## 🔧 1. Webpack Configuration

Ensure `webpack.config.js` includes **source maps** and a **dev server**:

```js
const path = require('path');

module.exports = {
  entry: './src/script.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'development',
  devtool: 'source-map', // ✅ Enables source maps
  devServer: {
    static: './dist',
    port: 8080,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
```


## ⚙️ 2. VS Code Debug Configuration (`.vscode/launch.json`)

Use the built-in **JavaScript Debugger** (no extension needed). Create `.vscode/launch.json`:

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Launch Chrome",
      "type": "chrome",
      "request": "launch",
      "url": "http://localhost:8080",
      "webRoot": "${workspaceFolder}",
      "sourceMaps": true
    }
  ]
}
```


## 🚀 3. Run and Debug

### 🟢 Start the Dev Server

```bash
npm start
```

Webpack Dev Server will run at: [http://localhost:8080](http://localhost:8080)


### 🐞 Start Debugging in VS Code

1. Go to the **Run and Debug** panel.
2. Select **"Launch Chrome"**.
3. Click the green ▶️ or press **F5**.
4. Set breakpoints in `src/script.js`.

You should now see breakpoints bind and be hit in Chrome!


## 🧼 Optional: Clean Build

If needed:

```bash
rm dist/bundle.js
npm biuld
```


## 🆘 Troubleshooting

- **Unbound Breakpoints**: Make sure `webRoot` is set to `${workspaceFolder}`, not `${workspaceFolder}/src`.
- **Missing Source Maps**: Verify `bundle.js.map` exists in `dist/`.
- **Port Conflicts**: Make sure nothing else is running on port 8080.

