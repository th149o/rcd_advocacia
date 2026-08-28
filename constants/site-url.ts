const fallbackSiteUrl = "http://localhost:3000";

export function getSiteUrl() {
  const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

  if (!configuredSiteUrl) {
    return fallbackSiteUrl;
  }

  try {
    const url = new URL(configuredSiteUrl);
    return url.toString().replace(/\/$/, "");
  } catch {
    return fallbackSiteUrl;
  }
}
