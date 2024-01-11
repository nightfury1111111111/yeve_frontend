import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill';
import inject from '@rollup/plugin-inject';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    optimizeDeps: {
      esbuildOptions: {
        // Node.js global to browser globalThis
        define: {
          global: 'globalThis',
        },
        // Enable esbuild polyfill plugins
        plugins: [
          NodeGlobalsPolyfillPlugin({
            buffer: true,
          }),
        ],
      },
    },
    plugins: [react()],
    build:
      mode === 'production'
        ? {
            rollupOptions: {
              plugins: [inject({ Buffer: ['buffer/', 'Buffer'] })],
            },
            'process.env': {},
          }
        : undefined,

    define:
      mode === 'development'
        ? {
            global: {},
            'process.env': {},
          }
        : undefined,

    resolve: {
      alias: {
        '@src': path.resolve('./src'),
        '@public': path.resolve('./public'),
      },
    },
    server: {
      port: 3000,
    },
    preview: {
      port: 3000,
    },
  };
});
// export default defineConfig({
//   plugins: [react()],
//   resolve: {
//     alias: {
//       '@src': path.resolve('./src'),
//       '@public': path.resolve('./public'),
//     },
//   },
//   server: {
//     port: 3000,
//   },
//   preview: {
//     port: 3000,
//   },
// });
