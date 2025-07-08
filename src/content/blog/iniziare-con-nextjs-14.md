---
title: "Come iniziare con Next.js 14"
date: "2024-01-15"
excerpt: "Una guida completa per iniziare con Next.js 14 e le sue nuove funzionalità. Scopri tutto quello che c'è da sapere sul nuovo App Router e le performance ottimizzate."
tags: ["Next.js", "React", "JavaScript", "Tutorial", "Web Development"]
author: "Nome Cognome"
readTime: "8 min"
---

# Come iniziare con Next.js 14

Next.js 14 rappresenta un importante passo avanti nel mondo del development React, introducendo numerose migliorie in termini di performance, developer experience e funzionalità innovative.

## Cosa c'è di nuovo in Next.js 14

### App Router (Stable)
L'App Router è ora stabile e rappresenta il futuro di Next.js. Offre:
- Layout nidificati più intuitivi
- Streaming e Suspense nativo
- Migliore SEO e performance

### Turbopack (Beta)
Il nuovo bundler scritto in Rust che promette:
- Aggiornamenti 700x più veloci rispetto a Webpack
- Hot reload istantaneo
- Ottimizzazioni avanzate del bundle

## Installazione e Setup

Per iniziare con Next.js 14, usa il seguente comando:

```bash
npx create-next-app@latest my-app --typescript --tailwind --eslint --app
```

Questo creerà un progetto con:
- TypeScript configurato
- Tailwind CSS
- ESLint
- App Router

## Struttura del progetto

```
my-app/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── public/
├── next.config.js
└── package.json
```

### App Directory
La cartella `app` è il cuore del nuovo App Router:
- `layout.tsx` - Layout condiviso
- `page.tsx` - Pagina principale
- Ogni sottocartella rappresenta una route

## Server Components vs Client Components

### Server Components (Default)
I Server Components vengono renderizzati sul server:

```tsx
// app/posts/page.tsx
async function getPosts() {
  const res = await fetch('https://api.example.com/posts')
  return res.json()
}

export default async function PostsPage() {
  const posts = await getPosts()
  
  return (
    <div>
      {posts.map(post => (
        <article key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.excerpt}</p>
        </article>
      ))}
    </div>
  )
}
```

### Client Components
Per interattività lato client, usa `'use client'`:

```tsx
'use client'

import { useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)
  
  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  )
}
```

## Routing e Navigation

### File-based Routing
Il routing è basato sulla struttura delle cartelle:

```
app/
├── page.tsx          // /
├── about/
│   └── page.tsx      // /about
└── blog/
    ├── page.tsx      // /blog
    └── [slug]/
        └── page.tsx  // /blog/[slug]
```

### Dynamic Routes
Crea route dinamiche con parentesi quadre:

```tsx
// app/blog/[slug]/page.tsx
export default function BlogPost({ params }: { params: { slug: string } }) {
  return <h1>Post: {params.slug}</h1>
}
```

## Data Fetching

### Fetch API estesa
Next.js estende l'API fetch nativa:

```tsx
// Cache automatico
const data = await fetch('https://api.example.com/data')

// Revalidazione ogni 60 secondi
const data = await fetch('https://api.example.com/data', {
  next: { revalidate: 60 }
})

// No cache
const data = await fetch('https://api.example.com/data', {
  cache: 'no-store'
})
```

### generateStaticParams
Per route statiche con parametri dinamici:

```tsx
export async function generateStaticParams() {
  const posts = await fetch('https://api.example.com/posts').then(res => res.json())
  
  return posts.map((post) => ({
    slug: post.slug,
  }))
}
```

## Performance e Ottimizzazioni

### Image Optimization
Il componente Image è stato migliorato:

```tsx
import Image from 'next/image'

export default function MyComponent() {
  return (
    <Image
      src="/my-image.jpg"
      alt="Description"
      width={500}
      height={300}
      priority // Per immagini above-the-fold
    />
  )
}
```

### Font Optimization
Font Google ottimizzati automaticamente:

```tsx
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body>{children}</body>
    </html>
  )
}
```

## Deployment

### Vercel (Raccomandato)
Il deployment su Vercel è immediato:

```bash
npm run build
npx vercel deploy
```

### Self-hosting
Per deployment personalizzato:

```bash
npm run build
npm start
```

## Best Practices

1. **Usa Server Components quando possibile** - Migliori performance
2. **Client Components solo per interattività** - Mantieni il bundle leggero
3. **Implementa Progressive Enhancement** - L'app funziona anche senza JS
4. **Ottimizza le immagini** - Usa sempre il componente Image
5. **Implementa proper SEO** - metadata API e sitemap

## Conclusioni

Next.js 14 rappresenta l'evoluzione naturale del framework, offrendo performance migliori e una developer experience eccellente. L'App Router semplifica la gestione delle route complesse, mentre Turbopack promette di rivoluzionare i tempi di build.

Inizia oggi stesso a sperimentare con Next.js 14 e scopri come può migliorare i tuoi progetti React!

---

*Hai domande su Next.js 14? Lascia un commento o contattami sui social media!*