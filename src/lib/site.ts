// Production URL: set NEXT_PUBLIC_SITE_URL for a custom domain; Vercel provides VERCEL_PROJECT_PRODUCTION_URL automatically.
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");
