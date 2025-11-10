import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import sass from 'sass'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 8002, // This is the port used in docker
    
    // Security configuration for development server
    fs: {
      // Deny access to files outside of the project root
      strict: true,
      // Allow access to necessary project directories
      // Vite needs to read files from these directories to function properly
      allow: [
        // Allow the project root directory (for index.html, public/, src/, etc.)
        process.cwd(),
        // Allow the project's own node_modules directory
        // This is necessary for Vite to resolve and transform dependencies
        process.cwd() + '/node_modules',
      ],
      // Deny access to sensitive files and directories
      // Note: We allow node_modules for Vite processing, but deny specific sensitive files
      deny: [
        // Deny access to .git directory
        '**/.git/**',
        // Deny access to .env files (outside node_modules)
        process.cwd() + '/.env*',
        // Deny access to package-lock.json in project root
        process.cwd() + '/package-lock.json',
        // Deny access to sensitive config files
        '**/vite.config.ts.timestamp*',
        // Note: We cannot deny JS/TS files in node_modules because Vite needs them
        // to transform and bundle dependencies. The strict: true setting already
        // prevents access to files outside the project root, which is the main security concern.
      ],
    },
    
    // add the next lines if you're using windows and hot reload doesn't work
     watch: {
       usePolling: true
     }
  },
  // css: {
  //   preprocessorOptions: {
  //     scss: {
  //       implementation: sass,
  //     },
  //   },
  // },
})
