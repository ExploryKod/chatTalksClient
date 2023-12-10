// vite.config.ts
import { defineConfig } from "file:///srv/app/node_modules/vite/dist/node/index.js";
import react from "file:///srv/app/node_modules/@vitejs/plugin-react/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 8002,
    // This is the port used in docker
    // add the next lines if you're using windows and hot reload doesn't work
    watch: {
      usePolling: true
    }
  }
  // css: {
  //   preprocessorOptions: {
  //     scss: {
  //       implementation: sass,
  //     },
  //   },
  // },
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvc3J2L2FwcFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL3Nydi9hcHAvdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL3Nydi9hcHAvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xyXG5pbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3QnXHJcbi8vIGltcG9ydCBzYXNzIGZyb20gJ3Nhc3MnXHJcblxyXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gIHBsdWdpbnM6IFtyZWFjdCgpXSxcclxuICBzZXJ2ZXI6IHtcclxuICAgIGhvc3Q6IHRydWUsXHJcbiAgICBwb3J0OiA4MDAyLCAvLyBUaGlzIGlzIHRoZSBwb3J0IHVzZWQgaW4gZG9ja2VyXHJcbiAgICBcclxuICAgIC8vIGFkZCB0aGUgbmV4dCBsaW5lcyBpZiB5b3UncmUgdXNpbmcgd2luZG93cyBhbmQgaG90IHJlbG9hZCBkb2Vzbid0IHdvcmtcclxuICAgICB3YXRjaDoge1xyXG4gICAgICAgdXNlUG9sbGluZzogdHJ1ZVxyXG4gICAgIH1cclxuICB9LFxyXG4gIC8vIGNzczoge1xyXG4gIC8vICAgcHJlcHJvY2Vzc29yT3B0aW9uczoge1xyXG4gIC8vICAgICBzY3NzOiB7XHJcbiAgLy8gICAgICAgaW1wbGVtZW50YXRpb246IHNhc3MsXHJcbiAgLy8gICAgIH0sXHJcbiAgLy8gICB9LFxyXG4gIC8vIH0sXHJcbn0pXHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBME0sU0FBUyxvQkFBb0I7QUFDdk8sT0FBTyxXQUFXO0FBSWxCLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVMsQ0FBQyxNQUFNLENBQUM7QUFBQSxFQUNqQixRQUFRO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUE7QUFBQTtBQUFBLElBR0wsT0FBTztBQUFBLE1BQ0wsWUFBWTtBQUFBLElBQ2Q7QUFBQSxFQUNIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFRRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
