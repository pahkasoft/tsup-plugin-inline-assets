# @tspro/tsup-plugin-inline-assets

Use this plugin to import assets such as images and audio.

## Install
```sh
npm i --save-dev @tspro/tsup-plugin-inline-assets
```

## Use in `tsup.config.ts`
```ts
import { tsupPluginInlineAssets } from "@tspro/tsup-plugin-inline-assets";

export default defineConfig([
    {
        // ...
        esbuildPlugins: [tsupPluginInlineAssets()]
        // ...
    }
]);
```

Use verbose option to log inlining assets: `tsupPluginInlineAssets({verbose: true})`.

(Maybe this plugin works also with esbuild bundler, because you have to use `esbuildPlugins` (not the `plugins`) property?)

## Import Assets
```ts
// Declare e.g. in global.d.ts
declare module "*.png" {
  const value: string;
  export default value;
}
```

```ts
// Import assets
import Logo from './assets/logo.png';
```

`Logo` contains now the image data as base64 string e.g. `"data:image/png;base64,..."`.

Supported files are `.png`, `.jpg`, `.jpeg`, `.gif`, `.mp3`, `.ogg` and `.wav`.

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
