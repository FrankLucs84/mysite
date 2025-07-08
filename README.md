# 🌟 Sito Web Personale - Blog & Portfolio

Un sito web personale moderno costruito con **Next.js 14**, **TypeScript** e **Tailwind CSS**. Il progetto include un blog completo e una sezione portfolio per mostrare i tuoi progetti e competenze.

![Next.js](https://img.shields.io/badge/Next.js-14.0-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.3-38B2AC?style=flat-square&logo=tailwind-css)

## ✨ Caratteristiche

### 🏠 **Homepage**
- Design moderno e responsivo
- Sezione hero con presentazione personale
- Anteprima degli ultimi articoli del blog
- Showcase dei progetti in evidenza
- Call-to-action per contatti e portfolio

### 📝 **Blog**
- Sistema di gestione contenuti basato su Markdown
- Metadata completi (titolo, data, tags, tempo di lettura)
- Rendering HTML da Markdown con syntax highlighting
- Pagina indice con filtri e ricerca
- Pagine individuali per ogni articolo
- Design ottimizzato per la lettura

### 💼 **Portfolio**
- Galleria progetti con immagini e descrizioni
- Tecnologie utilizzate per ogni progetto
- Link a codice sorgente e demo live
- Sezione competenze tecniche organizzata per categorie
- Stati progetto (Completato/In sviluppo)

### 👤 **About**
- Biografia e storia professionale
- Timeline del percorso lavorativo/formativo
- Interessi e passioni personali
- Link ai social media e CV

### 📧 **Contatti**
- Form di contatto funzionale
- Informazioni di contatto dirette
- Link ai social media
- Sezione disponibilità per progetti

## 🚀 Avvio Rapido

### Prerequisiti
- Node.js 18+ 
- npm o yarn

### Installazione

1. **Clona il repository**
   ```bash
   git clone <url-repository>
   cd personal-website
   ```

2. **Installa le dipendenze**
   ```bash
   npm install
   ```

3. **Avvia il server di sviluppo**
   ```bash
   npm run dev
   ```

4. **Apri il browser**
   Visita [http://localhost:3000](http://localhost:3000)

## 📁 Struttura del Progetto

```
personal-website/
├── src/
│   ├── app/                    # App Router (Next.js 14)
│   │   ├── layout.tsx         # Layout principale
│   │   ├── page.tsx           # Homepage
│   │   ├── blog/              # Sezione blog
│   │   │   ├── page.tsx       # Lista articoli
│   │   │   └── [slug]/        # Pagine articoli
│   │   ├── portfolio/         # Portfolio
│   │   ├── about/             # Chi sono
│   │   ├── contact/           # Contatti
│   │   └── globals.css        # Stili globali
│   ├── components/            # Componenti riutilizzabili
│   │   ├── Header.tsx         # Navigazione
│   │   └── Footer.tsx         # Footer
│   ├── lib/                   # Utilities e helpers
│   │   └── blog.ts            # Gestione blog/markdown
│   └── content/               # Contenuti
│       ├── blog/              # Articoli markdown
│       └── portfolio/         # Dati progetti
├── public/                    # Assets statici
├── tailwind.config.ts         # Configurazione Tailwind
├── tsconfig.json             # Configurazione TypeScript
└── next.config.js            # Configurazione Next.js
```

## 📝 Gestione Contenuti

### Blog Posts

I post del blog sono file Markdown nella cartella `src/content/blog/`. Ogni file deve avere il frontmatter:

```markdown
---
title: "Titolo dell'articolo"
date: "2024-01-15"
excerpt: "Breve descrizione dell'articolo"
tags: ["Tag1", "Tag2", "Tag3"]
author: "Nome Autore"
readTime: "5 min"
---

# Contenuto dell'articolo

Il tuo contenuto in Markdown qui...
```

### Aggiungere un nuovo articolo

1. Crea un nuovo file `.md` in `src/content/blog/`
2. Aggiungi il frontmatter richiesto
3. Scrivi il contenuto in Markdown
4. Il file apparirà automaticamente nel blog

### Portfolio Projects

I progetti sono definiti direttamente nel codice della pagina portfolio (`src/app/portfolio/page.tsx`). Per aggiungere un progetto:

```typescript
{
  id: 1,
  title: "Nome Progetto",
  description: "Descrizione breve",
  technologies: ["React", "TypeScript", "Node.js"],
  githubUrl: "https://github.com/username/repo",
  liveUrl: "https://demo.example.com",
  image: "https://images.unsplash.com/...",
  date: "2024-01-15",
  status: "Completato" // o "In sviluppo"
}
```

## 🎨 Personalizzazione

### Colori e Tema

I colori sono configurati in `tailwind.config.ts`:

```typescript
colors: {
  'primary': {
    50: '#f0f9ff',
    500: '#3b82f6',
    600: '#2563eb',
    700: '#1d4ed8',
    900: '#1e3a8a',
  }
}
```

### Fonts

Il font predefinito è Inter da Google Fonts, configurato in `src/app/layout.tsx`:

```typescript
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
```

### Informazioni Personali

Aggiorna le informazioni personali in:
- `src/app/layout.tsx` - Metadata del sito
- `src/app/page.tsx` - Contenuti homepage  
- `src/app/about/page.tsx` - Biografia e timeline
- `src/app/contact/page.tsx` - Informazioni contatto
- `src/components/Header.tsx` - Nome/brand nel header
- `src/components/Footer.tsx` - Links social e contatti

## 🛠 Tecnologie Utilizzate

### Core
- **Next.js 14** - Framework React con App Router
- **TypeScript** - Type safety e migliore DX
- **Tailwind CSS** - Styling utility-first

### Content Management
- **gray-matter** - Parsing frontmatter Markdown
- **remark** - Processor Markdown
- **remark-html** - HTML rendering da Markdown

### UI/UX
- **Lucide React** - Icone moderne
- **Inter Font** - Typography professionale
- Design responsive mobile-first

### Development Tools
- **ESLint** - Linting del codice
- **PostCSS** - CSS processing
- **Autoprefixer** - Vendor prefixes automatici

## 📦 Build e Deploy

### Build di produzione
```bash
npm run build
```

### Deploy su Vercel (Raccomandato)
```bash
# Installa Vercel CLI
npm i -g vercel

# Deploy
vercel

# Per deploy automatico, collegha il repository GitHub a Vercel
```

### Deploy su altre piattaforme
Il progetto è compatibile con:
- **Netlify** - Deploy automatico da Git
- **Cloudflare Pages** - Edge deployment
- **AWS Amplify** - Hosting AWS
- **Self-hosting** - Server Node.js

## 🔧 Scripts Disponibili

```bash
npm run dev        # Sviluppo locale
npm run build      # Build produzione  
npm run start      # Start server produzione
npm run lint       # Controllo linting
```

## 📱 Responsive Design

Il sito è completamente responsivo e ottimizzato per:
- 📱 **Mobile** (320px+)
- 📱 **Tablet** (768px+) 
- 💻 **Desktop** (1024px+)
- 🖥 **Large screens** (1280px+)

## ♿ Accessibilità

- Semantic HTML markup
- Proper heading hierarchy
- Alt text per le immagini
- Focus management
- ARIA labels dove necessario
- Color contrast WCAG compliant

## 🚀 Performance

- **Server-side rendering** con Next.js
- **Static generation** per contenuti statici
- **Image optimization** automatica
- **Font optimization** con next/font
- **Bundle optimization** con Turbopack
- **CSS purging** automatico

## 🤝 Contribuire

1. Fork del progetto
2. Crea un branch per la feature (`git checkout -b feature/AmazingFeature`)
3. Commit delle modifiche (`git commit -m 'Add some AmazingFeature'`)
4. Push al branch (`git push origin feature/AmazingFeature`)
5. Apri una Pull Request

## 📄 Licenza

Questo progetto è sotto licenza MIT. Vedi il file `LICENSE` per i dettagli.

## 🆘 Supporto

Se hai domande o problemi:

1. Controlla la [documentazione Next.js](https://nextjs.org/docs)
2. Cerca nelle [Issues del progetto](../../issues)
3. Crea una nuova issue se necessario

## 🙏 Ringraziamenti

- [Next.js](https://nextjs.org/) per l'eccellente framework
- [Tailwind CSS](https://tailwindcss.com/) per il sistema di design
- [Lucide](https://lucide.dev/) per le icone
- [Unsplash](https://unsplash.com/) per le immagini di esempio

---

⭐ **Se questo progetto ti è stato utile, lascia una stella!**