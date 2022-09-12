import esbuild from 'esbuild';
import { existsSync, mkdirSync, writeFileSync } from 'fs';
import path, { join } from 'path';
import fs from 'fs';

const dist = join(process.cwd(), 'dist');

if (!existsSync(dist)) {
  mkdirSync(dist);
}

let files: string[] = [];

const getFilesRecursively = (directory: string) => {
  const filesInDirectory = fs.readdirSync(directory);
  for (const file of filesInDirectory) {
    const absolute = path.join(directory, file);
    if (fs.statSync(absolute).isDirectory()) {
      getFilesRecursively(absolute);
    } else {
      files.push(absolute);
    }
  }
};

getFilesRecursively('./src');

// esm output bundles with code splitting
esbuild
  .build({
    entryPoints: files,
    outdir: 'dist/layer/nodejs/node_modules',
    bundle: true,
    sourcemap: true,
    minify: true,
    platform: 'node',
    target: ['node16'],
  })
  .catch(() => process.exit(1));

// an entry file for cjs at the root of the bundle
writeFileSync(join(dist, 'index.js'), "export * from './esm/index.js';");
