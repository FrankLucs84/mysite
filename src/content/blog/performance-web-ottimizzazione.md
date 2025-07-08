---
title: "Performance Web: Ottimizzazione Avanzata"
date: "2023-12-20"
excerpt: "Tecniche avanzate per ottimizzare le performance delle tue applicazioni web e migliorare l'esperienza utente. Core Web Vitals, lazy loading e molto altro."
tags: ["Performance", "Web Vitals", "Optimization", "UX", "Frontend"]
author: "Nome Cognome"
readTime: "11 min"
---

# Performance Web: Ottimizzazione Avanzata

Le performance web sono cruciali per l'esperienza utente e il successo del tuo sito. In questa guida esploreremo tecniche avanzate per ottimizzare le prestazioni delle applicazioni web moderne.

## Core Web Vitals: Le Metriche che Contano

Google ha definito i **Core Web Vitals** come le metriche essenziali per misurare l'esperienza utente:

### 1. **LCP (Largest Contentful Paint)**
*Tempo di caricamento del contenuto principale*

```typescript
// Monitorare LCP
import { getLCP } from 'web-vitals'

getLCP((metric) => {
  console.log('LCP:', metric.value)
  // Invia dati a analytics
  analytics.track('LCP', metric.value)
})
```

**Target**: < 2.5 secondi
**Ottimizzazioni**:
- Ottimizzare immagini hero
- Usare preload per risorse critiche
- Ridurre blocking resources

### 2. **FID (First Input Delay)**
*Reattività della pagina al primo input*

```typescript
import { getFID } from 'web-vitals'

getFID((metric) => {
  console.log('FID:', metric.value)
  analytics.track('FID', metric.value)
})
```

**Target**: < 100ms
**Ottimizzazioni**:
- Ridurre JavaScript execution time
- Code splitting
- Lazy loading components

### 3. **CLS (Cumulative Layout Shift)**
*Stabilità visuale della pagina*

```typescript
import { getCLS } from 'web-vitals'

getCLS((metric) => {
  console.log('CLS:', metric.value)
  analytics.track('CLS', metric.value)
})
```

**Target**: < 0.1
**Ottimizzazioni**:
- Dimensioni esplicite per media
- Evitare inserimenti dinamici
- Font display swap

## Ottimizzazione Immagini

### 1. **Formati Moderni**
```tsx
// Next.js Image component
import Image from 'next/image'

export function OptimizedImage() {
  return (
    <Image
      src="/hero.jpg"
      alt="Hero image"
      width={800}
      height={400}
      priority // Per immagini above-the-fold
      placeholder="blur"
      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQ..."
    />
  )
}
```

### 2. **Responsive Images**
```tsx
// Sizes attribute per responsive loading
<Image
  src="/responsive-image.jpg"
  alt="Responsive image"
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  fill
  style={{ objectFit: 'cover' }}
/>
```

### 3. **Lazy Loading Nativo**
```html
<!-- HTML nativo -->
<img 
  src="image.jpg" 
  alt="Description" 
  loading="lazy" 
  decoding="async"
>
```

## Code Splitting e Lazy Loading

### 1. **Component-based Splitting**
```typescript
// React lazy loading
import { lazy, Suspense } from 'react'

const HeavyComponent = lazy(() => import('./HeavyComponent'))

export function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HeavyComponent />
    </Suspense>
  )
}
```

### 2. **Route-based Splitting**
```typescript
// Next.js dynamic imports
import dynamic from 'next/dynamic'

const DynamicComponent = dynamic(
  () => import('../components/DynamicComponent'),
  {
    loading: () => <p>Loading...</p>,
    ssr: false // Client-side only
  }
)
```

### 3. **Conditional Loading**
```typescript
// Carica solo quando necessario
const [showChart, setShowChart] = useState(false)
const [ChartComponent, setChartComponent] = useState(null)

const loadChart = async () => {
  if (!ChartComponent) {
    const { Chart } = await import('./Chart')
    setChartComponent(() => Chart)
  }
  setShowChart(true)
}
```

## Resource Hints

### 1. **Preload Critical Resources**
```html
<!-- Critical CSS -->
<link rel="preload" href="/critical.css" as="style" onload="this.onload=null;this.rel='stylesheet'">

<!-- Critical fonts -->
<link rel="preload" href="/fonts/inter.woff2" as="font" type="font/woff2" crossorigin>

<!-- Hero images -->
<link rel="preload" href="/hero.jpg" as="image">
```

### 2. **Prefetch Next Resources**
```html
<!-- Next page resources -->
<link rel="prefetch" href="/next-page.js">
<link rel="prefetch" href="/api/data">
```

### 3. **Preconnect to External Domains**
```html
<!-- External services -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://analytics.google.com">
```

## JavaScript Optimization

### 1. **Bundle Analysis**
```bash
# Analizza bundle size
npm install --save-dev @next/bundle-analyzer

# next.config.js
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer({
  // config
})
```

### 2. **Tree Shaking**
```typescript
// ❌ Importa tutto lodash
import _ from 'lodash'

// ✅ Importa solo quello che serve
import { debounce } from 'lodash'

// ✅ Ancora meglio
import debounce from 'lodash/debounce'
```

### 3. **Dead Code Elimination**
```typescript
// Usa tools come webpack-bundle-analyzer
// Rimuovi codice non utilizzato

// ❌ Codice morto
export function unusedFunction() {
  return 'never used'
}

// ✅ Solo codice necessario
export function activeFunction() {
  return 'actually used'
}
```

## CSS Optimization

### 1. **Critical CSS**
```typescript
// Inline critical CSS
export default function Document() {
  return (
    <Html>
      <Head>
        <style dangerouslySetInnerHTML={{
          __html: `
            /* Critical CSS above-the-fold */
            body { margin: 0; font-family: Inter, sans-serif; }
            .hero { background: #f1f5f9; height: 100vh; }
          `
        }} />
      </Head>
      <body>
        <Main />
      </body>
    </Html>
  )
}
```

### 2. **CSS-in-JS Performance**
```typescript
// ✅ Styled-components with static styles
const StaticButton = styled.button`
  /* Styles that don't change */
  border: none;
  border-radius: 4px;
  padding: 12px 24px;
`

// ❌ Evita styles dinamici pesanti
const DynamicButton = styled.button<{ color: string }>`
  background: ${props => computeExpensiveColor(props.color)};
`
```

### 3. **Purge Unused CSS**
```javascript
// Tailwind CSS purge config
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

## Database e API Optimization

### 1. **Query Optimization**
```typescript
// ❌ N+1 queries
async function getBadPosts() {
  const posts = await db.post.findMany()
  for (const post of posts) {
    post.author = await db.user.findUnique({ where: { id: post.authorId }})
  }
  return posts
}

// ✅ Include relations
async function getGoodPosts() {
  return db.post.findMany({
    include: {
      author: {
        select: { id: true, name: true, avatar: true }
      }
    }
  })
}
```

### 2. **Caching Strategies**
```typescript
// API Route with caching
export async function GET() {
  const cached = await redis.get('posts')
  
  if (cached) {
    return Response.json(JSON.parse(cached), {
      headers: {
        'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300'
      }
    })
  }
  
  const posts = await db.post.findMany()
  await redis.setex('posts', 300, JSON.stringify(posts))
  
  return Response.json(posts)
}
```

### 3. **Data Fetching Patterns**
```typescript
// SWR for client-side caching
import useSWR from 'swr'

function Profile() {
  const { data, error, isLoading } = useSWR('/api/user', fetcher, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
    refreshInterval: 0
  })
  
  if (error) return <div>Error loading profile</div>
  if (isLoading) return <div>Loading...</div>
  
  return <div>Hello {data.name}!</div>
}
```

## Service Workers e Caching

### 1. **Workbox Setup**
```javascript
// workbox-config.js
module.exports = {
  globDirectory: 'out/',
  globPatterns: [
    '**/*.{html,js,css,png,jpg,jpeg,gif,svg,woff,woff2}'
  ],
  swDest: 'out/sw.js',
  runtimeCaching: [
    {
      urlPattern: /^https:\/\/api\.example\.com/,
      handler: 'StaleWhileRevalidate',
      options: {
        cacheName: 'api-cache',
        expiration: {
          maxEntries: 100,
          maxAgeSeconds: 60 * 60 * 24 // 24 hours
        }
      }
    }
  ]
}
```

### 2. **Custom Service Worker**
```javascript
// sw.js
const CACHE_NAME = 'my-app-v1'
const urlsToCache = [
  '/',
  '/static/css/main.css',
  '/static/js/main.js'
]

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  )
})

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        return response || fetch(event.request)
      })
  )
})
```

## Performance Monitoring

### 1. **Real User Monitoring (RUM)**
```typescript
// Performance observer
function observePerformance() {
  const observer = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      if (entry.entryType === 'navigation') {
        console.log('Navigation timing:', entry)
      }
      
      if (entry.entryType === 'paint') {
        console.log('Paint timing:', entry.name, entry.startTime)
      }
    }
  })
  
  observer.observe({ entryTypes: ['navigation', 'paint'] })
}
```

### 2. **Custom Metrics**
```typescript
// Track custom performance metrics
function trackCustomMetric(name: string, value: number) {
  // Send to analytics
  gtag('event', 'timing_complete', {
    name: name,
    value: Math.round(value)
  })
  
  // Performance mark
  performance.mark(`${name}-${value}`)
}

// Usage
const startTime = performance.now()
await heavyOperation()
const endTime = performance.now()
trackCustomMetric('heavy-operation', endTime - startTime)
```

### 3. **Lighthouse CI**
```yaml
# .github/workflows/lighthouse.yml
name: Lighthouse CI

on: [push]

jobs:
  lighthouse:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Audit URLs using Lighthouse
        uses: treosh/lighthouse-ci-action@v9
        with:
          uploadDir: './lighthouse-reports'
          temporaryPublicStorage: true
```

## Performance Budget

### 1. **Bundle Size Limits**
```javascript
// webpack.config.js
module.exports = {
  performance: {
    maxAssetSize: 250000, // 250KB
    maxEntrypointSize: 400000, // 400KB
    hints: 'error'
  }
}
```

### 2. **Monitoring Tools**
```json
{
  "scripts": {
    "analyze": "npm run build && npx bundlesize",
    "size-limit": "npx size-limit"
  },
  "bundlesize": [
    {
      "path": "./dist/js/*.js",
      "maxSize": "250 kB"
    }
  ]
}
```

## Advanced Techniques

### 1. **Intersection Observer for Lazy Loading**
```typescript
function useLazyImage(src: string) {
  const [imageSrc, setImageSrc] = useState<string>()
  const [imageRef, setImageRef] = useState<HTMLImageElement>()
  
  useEffect(() => {
    let observer: IntersectionObserver
    
    if (imageRef && imageSrc !== src) {
      observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              setImageSrc(src)
              observer.unobserve(imageRef)
            }
          })
        },
        { threshold: 0.1 }
      )
      observer.observe(imageRef)
    }
    
    return () => {
      if (observer && observer.unobserve) {
        observer.unobserve(imageRef)
      }
    }
  }, [imageRef, src, imageSrc])
  
  return [imageSrc, setImageRef] as const
}
```

### 2. **Virtual Scrolling**
```typescript
// react-window per liste grandi
import { FixedSizeList as List } from 'react-window'

function VirtualizedList({ items }) {
  const Row = ({ index, style }) => (
    <div style={style}>
      {items[index].name}
    </div>
  )
  
  return (
    <List
      height={400}
      itemCount={items.length}
      itemSize={50}
      width="100%"
    >
      {Row}
    </List>
  )
}
```

### 3. **Request Deduplication**
```typescript
// Evita richieste duplicate
const requestCache = new Map()

async function deduplicatedFetch(url: string) {
  if (requestCache.has(url)) {
    return requestCache.get(url)
  }
  
  const promise = fetch(url).then(res => res.json())
  requestCache.set(url, promise)
  
  try {
    const result = await promise
    return result
  } finally {
    // Pulisci cache dopo un po'
    setTimeout(() => requestCache.delete(url), 5000)
  }
}
```

## Performance Checklist

### ✅ **Loading Performance**
- [ ] Immagini ottimizzate (WebP/AVIF)
- [ ] Lazy loading implementato
- [ ] Critical CSS inline
- [ ] Resource hints configurati
- [ ] Code splitting attivo
- [ ] Bundle size < 250KB

### ✅ **Runtime Performance**
- [ ] Evitato blocking JavaScript
- [ ] Debounced inputs pesanti
- [ ] Virtual scrolling per liste lunghe
- [ ] Memoization dove appropriata
- [ ] Event listeners ottimizzati

### ✅ **Network Performance**
- [ ] Compression abilitata (gzip/brotli)
- [ ] Caching headers configurati
- [ ] CDN per assets statici
- [ ] HTTP/2 utilizzato
- [ ] Prefetch per navigazione

### ✅ **Core Web Vitals**
- [ ] LCP < 2.5s
- [ ] FID < 100ms
- [ ] CLS < 0.1
- [ ] Monitoring implementato

## Tools Essenziali

### **Measurement**
- **Lighthouse**: Audit completi
- **WebPageTest**: Testing avanzato
- **Chrome DevTools**: Debug performance
- **Real User Monitoring**: Dati reali utenti

### **Analysis**
- **webpack-bundle-analyzer**: Analisi bundle
- **source-map-explorer**: Esplorazione source maps
- **bundlephobia**: Size impact delle dipendenze

### **Optimization**
- **ImageOptim**: Ottimizzazione immagini
- **Squoosh**: Compressione online
- **PurgeCSS**: Rimozione CSS inutilizzato

## Conclusioni

L'ottimizzazione delle performance è un processo continuo che richiede:

1. **Measurement First**: Misura prima di ottimizzare
2. **User-Centric Metrics**: Focus su Core Web Vitals
3. **Progressive Enhancement**: Funzionalità base sempre disponibili
4. **Continuous Monitoring**: Performance budget e CI/CD
5. **Real User Data**: Combina lab data con field data

Ricorda: **l'ottimizzazione prematura è la radice di tutti i mali**, ma l'ignoranza delle performance è ancora peggio!

---

*Quali tecniche di ottimizzazione usi nei tuoi progetti? Condividi la tua esperienza nei commenti!*