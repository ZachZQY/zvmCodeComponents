import federation from '@originjs/vite-plugin-federation';
import react from '@vitejs/plugin-react';
import graphqlLoader from 'vite-plugin-graphql-loader';
import { defineConfig } from 'vite';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    graphqlLoader(),
    federation({
      name: 'custom-component',
      filename: 'remoteEntry.js',
      exposes: {
        './main': './src/components',
      },
      shared: [
        'classnames',
        'constate',
        'lodash',
        'moment',
        'react',
        'react-dom',
        'react-router-dom',
        'zvm-code-context',
      ],
    }),
  ],
  resolve: {
    alias: {
      '@/graphql': path.resolve('./src/graphql'),
    },
  },
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
  server: {
    port: 5819,
  },
  preview: {
    host: true,
    port: 6326,
    strictPort: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
});
