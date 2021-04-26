import { resolve } from 'path'
import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import graphql from '@rollup/plugin-graphql'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [graphql(), reactRefresh()],
  resolve: {
    alias: [
      { find: 'animation', replacement: resolve(__dirname, 'src/animation') },
      { find: 'components', replacement: resolve(__dirname, 'src/components') },
      { find: 'styles', replacement: resolve(__dirname, 'src/styles') },
      { find: 'hooks', replacement: resolve(__dirname, 'src/hooks') },
      { find: 'images', replacement: resolve(__dirname, 'src/images') },
      { find: 'figures', replacement: resolve(__dirname, 'src/figures') },
      { find: 'global', replacement: resolve(__dirname, 'src/global') },
      { find: 'ui', replacement: resolve(__dirname, 'src') },
      { find: 'utilities', replacement: resolve(__dirname, 'src/utilities') },
      { find: 'types', replacement: resolve(__dirname, 'src/types') },
    ],
  },
})
