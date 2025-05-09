import esbuild from 'esbuild';
import { GasPlugin } from 'esbuild-gas-plugin';

esbuild
  .build({
    entryPoints: ['./src/main.ts'],
    bundle: true,
    minify: false,
    outfile: './dist/main.js',
    plugins: [GasPlugin],
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
