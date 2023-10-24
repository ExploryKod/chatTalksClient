import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import sass from 'sass'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 8002, // This is the port used in docker
    
    // add the next lines if you're using windows and hot reload doesn't work
     watch: {
       usePolling: true
     }
  },
  css: {
    preprocessorOptions: {
      scss: {
        implementation: sass,
      },
    },
  },
})
