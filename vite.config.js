import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from "node:url";
const filesNeedToExclude = ["src/App.jsx", "src//main.jsx"];

const filesPathToExclude = filesNeedToExclude.map((src) => {
  return fileURLToPath(new URL(src, import.meta.url));
});
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve("src", './Modal.jsx'),
      name: 'react-modalium',
      fileName: (format) => `react-modalium.${format}.js`
    },
    rollupOptions: {
      external: ['react', 'react-dom', ...filesPathToExclude],
      output: {
        globals: {
          react: 'React'
        }
      }
    }
  },
  plugins: [react()]
})