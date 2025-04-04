import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    extensions: ['.js', '.jsx'],  // Ensures Vite resolves JSX files correctly
  },
  esbuild: {
    loader: 'jsx',
    include: /src\/.*\.jsx?$/, // Ensures ESBuild processes JSX files
    exclude: [],
  },
});