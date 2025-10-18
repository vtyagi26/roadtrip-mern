import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // You can keep your frontend running on a different port like 3000
    proxy: {
      // This is the proxy configuration.
      // Any request from your React app that starts with '/api'
      // will be forwarded to your backend server at 'http://localhost:5000'.
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true, // This is important for virtual hosted sites
        secure: false,      // Set to false if your backend is not on HTTPS
      },
    },
  },
});