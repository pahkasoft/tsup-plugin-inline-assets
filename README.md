# TsupPluginInlineAssets - An Inline Assets Plugin for Tsup

Use this plugin to import assets such as images and audio files
as Base64 encoded strings.

## Resources

[NPM Package](https://www.npmjs.com/package/@tspro/tsup-plugin-inline-assets) |
[GitHub Repository](https://github.com/pahkasoft/tsup-plugin-inline-assets)

## Supported File Extensions

Supported file extensions:
- `.png`
- `.jpg`
- `.jpeg`
- `.gif`
- `.mp3`
- `.ogg`
- `.wav`

## Quick Start

### Install

```sh
npm install -D @tspro/tsup-plugin-inline-assets
```

### Config `tsup.config.ts`

```ts
import { tsupPluginInlineAssets } from "@tspro/tsup-plugin-inline-assets";

export default defineConfig([
    {
        esbuildPlugins: [tsupPluginInlineAssets({ verbose: true })]
    }
]);
```

Note! `{ verbose: true }` is optional.

## Example Use

Edit for example `global.d.ts`:

```ts
declare module "*.png" {
  const value: string;
  export default value;
}
```

Import and use asset:

```ts
import Logo from './assets/logo.png';

// Logo is now Base64 encoded string.
console.log(typeof Logo); // "string"
console.log(Logo);        // "data:image/png;base64,..."

// Example
let img = new Image();
img.src = Logo;
```

## License

This project is public domain.

The full license text is available in the project repository.

## Disclaimer

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED.
