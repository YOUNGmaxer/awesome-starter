import { defineConfig } from 'vite'
import { ChromeExtensionBuilder } from 'vite-plugin-chrome-builder'

export default defineConfig({
  plugins: [
    ChromeExtensionBuilder()
  ]
});
