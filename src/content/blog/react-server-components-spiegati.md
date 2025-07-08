---
title: "React Server Components Spiegati"
date: "2024-01-01"
excerpt: "Tutto quello che devi sapere sui React Server Components e come cambiano il modo di sviluppare applicazioni React moderne."
tags: ["React", "Server Components", "Frontend", "Next.js"]
author: "Nome Cognome"
readTime: "10 min"
---

# React Server Components Spiegati

I **React Server Components** rappresentano una delle innovazioni più significative nell'ecosistema React degli ultimi anni. Questa tecnologia cambia radicalmente il modo in cui pensiamo al rendering e alla gestione dello stato nelle applicazioni React.

## Cosa sono i Server Components

I Server Components sono componenti React che vengono renderizzati **esclusivamente sul server**. A differenza dei componenti tradizionali (ora chiamati Client Components), non vengono mai eseguiti nel browser.

### Differenze chiave

| Aspetto | Server Components | Client Components |
|---------|-------------------|-------------------|
| **Renderizzazione** | Solo server | Server + Client |
| **Bundle Size** | Non influiscono | Inclusi nel bundle |
| **Accesso diretto DB** | ✅ Si | ❌ No |
| **useState/useEffect** | ❌ No | ✅ Si |
| **Event Handlers** | ❌ No | ✅ Si |

## Vantaggi dei Server Components

### 1. **Performance Migliorata**
```tsx
// ❌ Client Component - aumenta il bundle
'use client'
import { heavyLibrary } from 'heavy-lib' // 500KB!

export function ClientComponent() {
  return <div>{heavyLibrary.process()}</div>
}

// ✅ Server Component - zero impatto sul bundle
import { heavyLibrary } from 'heavy-lib' // Solo sul server!

export function ServerComponent() {
  return <div>{heavyLibrary.process()}</div>
}
```

### 2. **Accesso Diretto ai Dati**
```tsx
// Server Component con accesso diretto al database
import { db } from '@/lib/database'

export async function PostsList() {
  // Questo codice gira SOLO sul server
  const posts = await db.posts.findMany({
    where: { published: true },
    include: { author: true }
  })

  return (
    <div>
      {posts.map(post => (
        <article key={post.id}>
          <h2>{post.title}</h2>
          <p>By {post.author.name}</p>
        </article>
      ))}
    </div>
  )
}
```

### 3. **Sicurezza Migliorata**
```tsx
// ✅ API Keys e segreti rimangono sul server
export async function WeatherWidget() {
  const response = await fetch('https://api.weather.com/data', {
    headers: {
      'Authorization': `Bearer ${process.env.WEATHER_API_KEY}` // Sicuro!
    }
  })
  
  const weather = await response.json()
  
  return <div>Temperature: {weather.temp}°C</div>
}
```

## Come Funzionano

### Architettura
1. **Server**: Renderizza i Server Components in una rappresentazione speciale
2. **Network**: Invia il risultato al client come "RSC Payload"
3. **Client**: React ricostruisce l'albero dei componenti
4. **Hydration**: Solo i Client Components diventano interattivi

### RSC Payload Example
```json
{
  "type": "div",
  "props": {
    "children": [
      { "type": "h1", "props": { "children": "Welcome" }},
      { "type": "ClientButton", "props": { "onClick": "..." }}
    ]
  }
}
```

## Quando Usare Server vs Client Components

### 🖥 **Server Components** - Usa quando:
- Fetching dati dal database
- Accesso a filesystem o API backend
- Librerie pesanti che non servono al client
- Contenuto statico o che cambia raramente

### 💻 **Client Components** - Usa quando:
- Gestione eventi (click, hover, etc.)
- State management (useState, useReducer)
- Effetti collaterali (useEffect)
- Accesso a browser APIs (localStorage, geolocation)
- Librerie che usano only browser APIs

## Esempi Pratici

### Layout con Server Components
```tsx
// app/layout.tsx - Server Component by default
export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Header /> {/* Server Component */}
        <main>{children}</main>
        <Footer /> {/* Server Component */}
      </body>
    </html>
  )
}

// app/header.tsx - Server Component
import { getUser } from '@/lib/auth'

export async function Header() {
  const user = await getUser() // Direct DB access!
  
  return (
    <header>
      <nav>
        <Logo />
        <UserMenu user={user} /> {/* Pass data down */}
      </nav>
    </header>
  )
}
```

### Composizione Server + Client
```tsx
// ServerComponent.tsx
import ClientButton from './ClientButton'

export async function ProductPage({ id }) {
  // Data fetching sul server
  const product = await fetchProduct(id)
  const reviews = await fetchReviews(id)
  
  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      
      {/* Client Component per interattività */}
      <ClientButton productId={product.id} />
      
      {/* Server Component per contenuto */}
      <ReviewsList reviews={reviews} />
    </div>
  )
}

// ClientButton.tsx
'use client'
import { useState } from 'react'

export default function ClientButton({ productId }) {
  const [isAdded, setIsAdded] = useState(false)
  
  const addToCart = () => {
    // Logic lato client
    setIsAdded(true)
  }
  
  return (
    <button onClick={addToCart}>
      {isAdded ? 'Added!' : 'Add to Cart'}
    </button>
  )
}
```

## Streaming e Suspense

I Server Components si integrano perfettamente con Suspense per UI progressive:

```tsx
import { Suspense } from 'react'

export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      
      {/* Fast content loads immediately */}
      <QuickStats />
      
      {/* Slow content streams in */}
      <Suspense fallback={<ChartSkeleton />}>
        <ExpensiveChart />
      </Suspense>
      
      <Suspense fallback={<TableSkeleton />}>
        <DataTable />
      </Suspense>
    </div>
  )
}
```

## Limitazioni e Gotchas

### ❌ **Non puoi fare nei Server Components:**
```tsx
// useState/useEffect
const [state, setState] = useState() // ❌

// Event handlers
<button onClick={handleClick}> // ❌

// Browser APIs
localStorage.getItem('key') // ❌

// Context che dipende da Client state
const theme = useContext(ThemeContext) // ❌ (se è client state)
```

### ⚠️ **Attenzione a:**
- **Prop serialization**: Solo JSON-serializable data può essere passata
- **Import boundaries**: Non mixare client code nei server components
- **Dynamic imports**: Behavior diverso tra server e client

## Best Practices

### 1. **Component Composition**
```tsx
// ✅ Buono - Server Component wrappa Client Component
export function ProductCard({ product }) {
  return (
    <div>
      <h3>{product.name}</h3>
      <p>{product.price}</p>
      
      {/* Client Component per interattività */}
      <AddToCartButton productId={product.id} />
    </div>
  )
}

// ❌ Evita - Client Component wrappa Server Component
'use client'
export function ProductCard({ product }) {
  return (
    <div>
      <ServerComponent /> {/* Non funziona! */}
    </div>
  )
}
```

### 2. **Data Fetching Strategy**
```tsx
// ✅ Fetch data il più vicino possibile al consumo
export async function UserProfile({ userId }) {
  const user = await getUser(userId) // Top-level fetch
  
  return (
    <div>
      <UserAvatar user={user} />
      <UserDetails user={user} />
      <UserPosts userId={userId} /> {/* Fetch posts separately */}
    </div>
  )
}
```

### 3. **Error Boundaries**
```tsx
export default function Page() {
  return (
    <ErrorBoundary fallback={<ErrorPage />}>
      <Suspense fallback={<Loading />}>
        <ServerComponent />
      </Suspense>
    </ErrorBoundary>
  )
}
```

## Debugging e Development

### Tools utili
- **React DevTools**: Mostra Server vs Client Components
- **Next.js DevTools**: Analizza RSC payload
- **Browser Network Tab**: Vedi RSC requests

### Debugging Tips
```tsx
// Aggiungi logging nei Server Components
export async function DebugComponent() {
  console.log('This runs on SERVER only!') // Visible in terminal
  const data = await fetchData()
  console.log('Fetched:', data)
  
  return <div>{data.title}</div>
}
```

## Il Futuro dei Server Components

I Server Components stanno evolvendo rapidamente:

- **React 19**: Miglioramenti alla performance e DX
- **Streaming migliorato**: Granularità maggiore
- **Cache avanzata**: Invalidazione intelligente
- **Integration ecosystem**: Più librerie compatibili

## Conclusioni

I React Server Components rappresentano un cambio di paradigma che ci permette di:

- **Ridurre il bundle size** drasticamente
- **Migliorare le performance** di loading
- **Semplificare il data fetching**
- **Aumentare la sicurezza** dell'applicazione

Non sono un sostituto completo dei Client Components, ma una **potente integrazione** che, quando usata correttamente, può migliorare significativamente l'esperienza utente e la developer experience.

La chiave è capire **quando usare cosa** e come **comporre** Server e Client Components in modo efficace.

---

*Stai sperimentando con i Server Components? Condividi la tua esperienza nei commenti o contattami sui social media!*