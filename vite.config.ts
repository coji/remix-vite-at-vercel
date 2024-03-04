import { vitePlugin as remix } from "@remix-run/dev";
import { vercelPreset } from "@vercel/remix/vite";
import { defineConfig } from "vite";
import tsConfigPaths from "vite-tsconfig-paths";
import { flatRoutes } from "remix-flat-routes";

export default defineConfig({
  server: { port: 3000 },
  plugins: [
    remix({
      ignoredRouteFiles: ["**/*"],
      routes: (defineRoutes) => flatRoutes("routes", defineRoutes),
      presets: [vercelPreset()],
    }),
    tsConfigPaths(),
  ],
});
