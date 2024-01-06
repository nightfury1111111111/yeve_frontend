import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import inject from '@rollup/plugin-inject';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    plugins: [react()],
    build:
      mode === 'production'
        ? {
            rollupOptions: {
              plugins: [inject({ Buffer: ['buffer', 'Buffer'] })],
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
