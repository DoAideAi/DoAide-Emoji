/**
 * SEO metadata for every indexable route. Shared by the useSEO hook (client
 * navigation) and scripts/prerender-routes.mjs (static HTML + sitemap), so
 * keep this file plain JS with no JSX or browser-only imports.
 */

export const SITE = {
  name: 'DoAide Emoji',
  baseUrl: 'https://emoji.doaide.com',
  ogImage: 'https://emoji.doaide.com/og-emoji.png',
}

// `tool` is the tab id rendered by App for this path.
export const routes = [
  {
    path: '/',
    tool: 'search',
    h1: 'Emoji Search',
    title: 'DoAide Emoji — Free Emoji Search, Copy & Paste Toolkit',
    description:
      'Search 500+ emojis by name or keyword and copy with one click. Free emoji toolkit with kitchen, text generator and maker — no login required.',
  },
  {
    path: '/emoji-kitchen',
    tool: 'kitchen',
    h1: 'Emoji Kitchen',
    title: 'Emoji Kitchen — Combine Two Emojis Online Free | DoAide Emoji',
    description:
      'Pick any two emojis and see a creative mashup combination. Free online emoji kitchen that works in your browser — no app or login needed.',
  },
  {
    path: '/emoji-text-generator',
    tool: 'text',
    h1: 'Emoji Text Generator',
    title: 'Emoji Text Generator — Convert Text to Emoji | DoAide Emoji',
    description:
      'Turn plain text into emoji-styled text for Instagram, WhatsApp and Twitter bios, captions and messages. Free, instant, copy with one click.',
  },
  {
    path: '/emoji-maker',
    tool: 'maker',
    h1: 'Custom Emoji Maker',
    title: 'Custom Emoji Maker — Draw Your Own Emoji PNG | DoAide Emoji',
    description:
      'Draw your own custom emoji on a canvas and download it as a PNG for Slack, Discord or WhatsApp stickers. Free, runs in your browser.',
  },
  {
    path: '/emoji-stats',
    tool: 'stats',
    h1: 'Emoji Stats',
    title: 'Emoji Counter & Sentiment Analyzer — Emoji Stats | DoAide Emoji',
    description:
      'Paste any text to count emojis, see the most used ones and get a quick sentiment read. Free emoji usage statistics tool, no login.',
  },
  {
    path: '/emoji-rain',
    tool: 'rain',
    h1: 'Emoji Rain',
    title: 'Emoji Rain — Make Emojis Rain Down Your Screen | DoAide Emoji',
    description:
      'Pick your favourite emojis and watch them rain down the screen. A free, fun emoji animation toy that runs right in your browser.',
  },
]

export const canonicalFor = (path) => `${SITE.baseUrl}${path}`

export const metaForPath = (path) => routes.find((r) => r.path === path)

export function jsonLdFor(route) {
  if (route.path === '/') {
    return {
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      name: SITE.name,
      url: canonicalFor('/'),
      description: route.description,
      applicationCategory: 'UtilitiesApplication',
      operatingSystem: 'Any',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR' },
      author: { '@type': 'Organization', name: 'DoAide', url: 'https://doaide.com' },
    }
  }
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: route.h1,
    url: canonicalFor(route.path),
    description: route.description,
    isPartOf: { '@type': 'WebApplication', name: SITE.name, url: canonicalFor('/') },
  }
}
