# Francesco Lucignano — Portfolio Personale

Portfolio professionale di **Francesco Lucignano**, PMO | ICT | Business Analyst.  
Costruito con Next.js 14, TypeScript e Tailwind CSS. Deployato su GitHub Pages.

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38B2AC?style=flat-square&logo=tailwind-css)
![GitHub Pages](https://img.shields.io/badge/Deploy-GitHub%20Pages-222?style=flat-square&logo=github)

**Sito live:** [franklucs84.github.io/mysite](https://franklucs84.github.io/mysite/)

---

## Chi sono

Specializzato in Project Management con focus su progetti software, unisco il rigore metodologico del PMI all'integrazione di soluzioni basate sull'IA.  
Attualmente **Head of PMO** presso Maurelli Group SPA (Napoli).

- LinkedIn: [linkedin.com/in/francescolucignano84](https://www.linkedin.com/in/francescolucignano84/)
- GitHub: [github.com/FrankLucs84](https://github.com/FrankLucs84)
- Email: [francesco.lucignano@gmail.com](mailto:francesco.lucignano@gmail.com)

---

## Sezioni del sito

| Pagina | Percorso | Contenuto |
| --- | --- | --- |
| Home | `/` | Hero, numeri chiave, preview competenze ed esperienza |
| Chi sono | `/about` | Profilo, timeline esperienza, istruzione |
| Competenze | `/portfolio` | Strumenti con rating, aree di competenza, certificazioni |
| Contatti | `/contact` | Form di contatto, email, telefono, social |

---

## Stack tecnologico

- **Next.js 14** — App Router, static export
- **TypeScript** — Type safety
- **Tailwind CSS** — Styling utility-first
- **Lucide React** — Icone
- **GitHub Actions** — CI/CD automatico
- **GitHub Pages** — Hosting statico

---

## Avvio locale

```bash
git clone https://github.com/FrankLucs84/mysite.git
cd mysite
npm install
npm run dev
```

Apri [http://localhost:3000](http://localhost:3000).

---

## Build e deploy

Il deploy è automatico: ogni push su `main` triggera il workflow GitHub Actions (`.github/workflows/nextjs.yml`) che esegue il build e pubblica su GitHub Pages.

```bash
npm run build   # Build statico in ./out
npm run lint    # Linting
```

---

## Struttura del progetto

```text
mysite/
├── src/
│   ├── app/
│   │   ├── page.tsx           # Homepage
│   │   ├── about/page.tsx     # Chi sono & Esperienza
│   │   ├── portfolio/page.tsx # Competenze & Strumenti
│   │   ├── contact/page.tsx   # Contatti
│   │   └── globals.css
│   └── components/
│       ├── Header.tsx
│       └── Footer.tsx
├── .github/workflows/
│   └── nextjs.yml             # Deploy automatico GitHub Pages
├── next.config.js
├── tailwind.config.ts
└── tsconfig.json
```

---

## Licenza

Codice sorgente disponibile per scopi di studio e ispirazione.  
Contenuti e testi © Francesco Lucignano — tutti i diritti riservati.
