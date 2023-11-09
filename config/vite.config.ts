import { defineConfig, splitVendorChunkPlugin, loadEnv, UserConfig, ConfigEnv } from 'vite'

// TSConfig Paths is mostly for package Atomic Singularity, since it uses module paths
// which confuse Vite & SWC during the build
import tsconfigPaths from 'vite-tsconfig-paths'

// This is to generate types, since SWC does not do this
import dts from 'vite-plugin-dts';

// SWC for vite to actually handle the rendering
import swc from 'unplugin-swc'

// We use Vue in this project, so the compiler needs a way to handle that via plugins
import vue from '@vitejs/plugin-vue'

export default defineConfig((config: ConfigEnv): UserConfig => {
  let plugins = [
    tsconfigPaths(),
    splitVendorChunkPlugin(),
    dts({
      rollupTypes: true,
    }),
    swc.vite({
      configFile: './config/.swcrc',
    }),
    vue(),
  ]

  return {
    plugins: plugins,
    build: {
      lib: {
        fileName: "atomic-vue",
        entry: "./src/index.ts",
        name: "AtomicVue"
      },
      rollupOptions: {
        output: {
          // Weird fix that properly imports our CSS. It's okay if this gets
          // tree shaken out by user's compilers, since the Warning component
          // should never reach a production view
          // intro: "import './style.css';",
          globals: {
            "vue": "Vue",
          }
        },
        external: [
          "vue",
          "vue-router",
          "@atomicdesign/atomic-singularity"
        ]
      },
      minify: false
    },

    clearScreen: true
  }
})