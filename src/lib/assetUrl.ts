// CDN-hosted assets (/__l5e/assets-v1/...) are only served by Lovable's
// infrastructure. On the custom domain (Vercel) those paths fall through to
// index.html, so images break. Always resolve them against the Lovable origin.
const ASSET_ORIGIN = "https://trailsquad.lovable.app";

type AssetPointer = { url: string };

export const assetUrl = (asset: AssetPointer | string): string => {
  const url = typeof asset === "string" ? asset : asset.url;
  if (!url) return "";
  if (/^https?:\/\//i.test(url)) return url;
  return `${ASSET_ORIGIN}${url.startsWith("/") ? "" : "/"}${url}`;
};
