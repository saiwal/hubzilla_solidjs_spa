import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'
import UnoCSS from 'unocss/vite';

export default defineConfig({
  plugins: [
		UnoCSS(),
		solid(),
	],
	server: {
    proxy: {
      "/api": {
        target: "https://hz-ddev.ddev.site",
        changeOrigin: true,
        secure: false,
      },
    },
	},
  base: './',
})
