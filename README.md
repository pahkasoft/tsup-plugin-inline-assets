# @tspro/tsup-plugin-inline-assets

Use this plugin to import assets such as images and audio files.

Supported files are `.png`, `.jpg`, `.jpeg`, `.gif`, `.mp3`, `.ogg` and `.wav`.

```ts
import Logo from './assets/logo.png';

console.log(typeof Logo); // "string"
console.log(Logo);        // "data:image/png;base64,..."

// Example use
let img = document.getElementById('img');
let img = new Image();
img.src = Logo;
```

You might need to declare e.g. in `global.d.ts`:

```ts
declare module "*.png" {
  const value: string;
  export default value;
}
```

## Usage
Install as dev dependency:
```sh
npm i --save-dev @tspro/tsup-plugin-inline-assets
```

Configure `tsup.config.ts`:
```ts
import { tsupPluginInlineAssets } from "@tspro/tsup-plugin-inline-assets";

export default defineConfig([
    {
        // ...
        esbuildPlugins: [tsupPluginInlineAssets()]
        // plugins: [tsupPluginInlineAssets()] did not work.
        // ...
    }
]);
```
Log inlining assets: `tsupPluginInlineAssets({verbose: true})`.

## License
This plugin is public domain. Plugin itself was written by ChatGPT.

## Publish
```sh
# Update changelog
git log --pretty="- %s"

# Update version
npm version major|minor|patch

# Build
npm run build

# Publish
npm login
npm publish --access public
```

## Changelog
### [1.0.0] - 2025-07-12
#### Added
- First release.
