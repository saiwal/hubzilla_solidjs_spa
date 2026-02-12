import { defineConfig, presetUno } from "unocss";

export default defineConfig({
  presets: [
    presetUno(),
  ],


  // Disable global reset to avoid CMS conflicts
  preflights: [],

  // Scan Solid files
  include: [
    /\.tsx?$/,
  ],
});
