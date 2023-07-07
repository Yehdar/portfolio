import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/portfolio",

  server: {
    // other server options...

    // Add MIME type configuration for JavaScript modules
    // This code should be placed under the `server` configuration
    // if the server is being used during development
    hmr: {
      // other hmr options...
      // ...

      // Add the MIME type configuration inside `hmr` object
      onBeforeReconnect({ server }) {
        server.middlewareManager.middlewares.use((req, res, next) => {
          if (req.originalUrl === '/index.jsx') {
            res.type('text/jsx');
          }
          next();
        });
      },
    },
  },
});
