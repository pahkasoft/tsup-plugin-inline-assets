import { Plugin } from 'esbuild';
import fs from 'fs';
import path from 'path';

export function tsupPluginInlineAssets(options?: { verbose?: boolean }): Plugin {
    return {
        name: 'inline-assets',
        setup(build) {
            build.onLoad({ filter: /\.(png|jpg|jpeg|gif|mp3|ogg|wav)$/ }, async (args) => {
                if (options?.verbose) {
                    const relativePath = path.relative(process.cwd(), args.path);
                    console.log(`Inlining asset: ${relativePath}`);
                }

                const ext = path.extname(args.path).slice(1);
                const mime = {
                    png: 'image/png',
                    jpg: 'image/jpg',
                    jpeg: 'image/jpeg',
                    gif: 'image/gif',
                    mp3: 'audio/mpeg',
                    wav: 'audio/wav',
                    ogg: 'audio/ogg',
                }[ext] || 'application/octet-stream';

                const buffer = await fs.promises.readFile(args.path);
                const base64 = buffer.toString('base64');
                const contents = `export default "data:${mime};base64,${base64}"`;

                return {
                    contents,
                    loader: 'js',
                }
            });
        }
    }
}
