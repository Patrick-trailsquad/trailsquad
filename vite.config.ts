import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from "fs";
import { componentTagger } from "lovable-tagger";
import { SHARE_META, SHARE_ORIGIN } from "./src/config/shareMeta";

const escapeAttr = (value: string) =>
  value.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

const absolute = (url: string) =>
  /^https?:\/\//i.test(url) ? url : `${SHARE_ORIGIN}${url.startsWith("/") ? "" : "/"}${url}`;

/**
 * Social crawlers do not execute JavaScript, so a single index.html would give
 * every page the same share preview. At build time we emit one static HTML file
 * per page with its own title, description and hero image, while the app itself
 * still boots as a normal SPA.
 */
const shareMetaPlugin = (): Plugin => ({
  name: "share-meta-html",
  apply: "build",
  closeBundle() {
    const outDir = path.resolve(__dirname, "dist");
    const indexPath = path.join(outDir, "index.html");
    if (!fs.existsSync(indexPath)) return;
    const template = fs.readFileSync(indexPath, "utf-8");

    for (const meta of SHARE_META) {
      const image = absolute(meta.image);
      const url = absolute(meta.path);
      const html = template
        .replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeAttr(meta.title)}</title>`)
        .replace(
          /<meta name="description"[^>]*>/,
          `<meta name="description" content="${escapeAttr(meta.description)}" />`
        )
        .replace(
          /<meta property="og:title"[^>]*>/,
          `<meta property="og:title" content="${escapeAttr(meta.title)}" />`
        )
        .replace(
          /<meta property="og:description"[^>]*>/,
          `<meta property="og:description" content="${escapeAttr(meta.description)}" />`
        )
        .replace(
          /<meta property="og:image"[^>]*>/,
          `<meta property="og:image" content="${escapeAttr(image)}" />\n    <meta property="og:url" content="${escapeAttr(url)}" />`
        )
        .replace(
          /<meta name="twitter:image"[^>]*>/,
          `<meta name="twitter:image" content="${escapeAttr(image)}" />`
        );

      const target =
        meta.path === "/"
          ? indexPath
          : path.join(outDir, meta.path.replace(/^\//, ""), "index.html");
      fs.mkdirSync(path.dirname(target), { recursive: true });
      fs.writeFileSync(target, html);
    }
  },
});

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
    shareMetaPlugin(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
