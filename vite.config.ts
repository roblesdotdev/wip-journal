import { vitePlugin as remix } from '@remix-run/dev'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

const ENV_MODE = process.env.NODE_ENV

export default defineConfig({
  build: {
    cssMinify: ENV_MODE === 'production',
    sourcemap: true,
  },
  plugins: [
    remix({
      serverModuleFormat: 'esm',
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
      },
    }),
    tsconfigPaths(),
  ],
})
