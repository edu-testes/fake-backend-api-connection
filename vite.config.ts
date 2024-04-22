import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  /*
  build: {
    sourcemap: false,
  },
  server: {
    hmr: {
      clientPort: 3000, // Ensure this port is accessible in your environment
      overlay: false, // Disable the web server overlay
      logLevel: 'error', // Change the log level to display only errors
    },
  },*/
})
