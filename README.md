# tsup-plugin-inline-assets
Use this plugin to import

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

Maybe it also works with esbuild, because you have to use `esbuildPlugins` property, not `plugins`?

## Import Assets
```ts
import Logo from './assets/logo.png';
```

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
