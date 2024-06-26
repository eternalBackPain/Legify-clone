import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3001',  // Assuming your Express server is on port 3001
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, '') //This configuration directs all requests made to /api in the frontend to be forwarded to http://localhost:3001.
      }
    }
  }
});
