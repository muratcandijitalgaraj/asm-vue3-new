import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/auth": {
        target: "https://auth.comed.com.tr/",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/auth/, ""),
      },
    },
  },
  plugins: [vue()],
});
