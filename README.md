# Portfolio_web

Bilingual (Mongolian / English) personal portfolio frontend for Margad-Erdene Byambabasan — IT student and cybersecurity specialist.

Stack: Next.js 14 (App Router), TypeScript, Tailwind CSS, Framer Motion, lucide-react.

---

## Local setup

Requirements: Node.js 18.17+ (20 LTS recommended) and npm 9+. Verify with `node -v` and `npm -v`.

```bash
git clone https://github.com/Zaprilli/Portfolio_web.git
cd Portfolio_web
npm install
```

### Development

```bash
npm run dev
```

Open http://localhost:3000.

### Production

```bash
npm run build
npm run start
```

`npm run start` must be preceded by `npm run build`.

### Available scripts

| Script | Purpose |
| --- | --- |
| `npm run dev` | Development server with hot reload |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |

---

## Project structure

```
app/
  layout.tsx        Root layout, metadata, providers
  page.tsx          Page composition
  globals.css       Tailwind base, theme variables, glass/neon utilities
components/
  Navbar.tsx        Sticky navigation, language and theme toggles, mobile menu
  Hero.tsx          Typewriter headline, profile card, terminal card
  Achievements.tsx  Scroll-linked award timeline and CTF links
  Skills.tsx        Skill categories and marquee strip
  Projects.tsx      Project cards
  Experience.tsx    Education, work and service timeline
  Interests.tsx     Personal interests
  Contact.tsx       Contact form with client-side validation
  Footer.tsx        Social links, language and theme toggles
  SectionHeading.tsx Shared animated heading and reveal helpers
  Socials.tsx       Social link definitions and copy-to-clipboard Discord handle
  icons.tsx         Name-to-icon registry (lucide-react)
lib/
  content.ts        All bilingual strings and structured data
  lang-context.tsx  Language context (useLang)
  theme-context.tsx Theme context (useTheme): green and purple accents
public/
  images/           Profile photo
  cv/               CV PDFs (Mongolian and English)
  certificates/     Certificate PDFs
  theme-init.js     Pre-hydration theme/lang restore (no inline script)
next.config.js      Security HTTP headers
```

---

## Editing content

Every user-facing string lives in `lib/content.ts` as `{ mn: string; en: string }` pairs. Structured data (achievements, skills, projects, timeline, CTF links) is exported from the same file.

```ts
export const content = {
  hero: {
    title: {
      mn: 'IT Сурагч & Кибер Аюулгүй Байдлын Мэргэжилтэн',
      en: 'IT Student & Cybersecurity Specialist',
    },
  },
};
```

The language toggle in the navigation bar persists the choice in `localStorage`. The dictionary can later be handed to an i18n library or an API without restructuring the components.

---

## Theming

Two accent themes are defined as CSS custom properties in `app/globals.css`:

- `green` — neon green accent (default)
- `purple` — violet/pink accent

The active theme is stored in `localStorage` under `portfolio-theme` and applied through `data-theme` on the document element. `public/theme-init.js` restores it before hydration to avoid a flash of the wrong theme. The toggle button lives in the navbar and the footer.

---

## Security

`next.config.js` applies the following headers to every route:

- `Content-Security-Policy` (default-src 'self'; frame-ancestors 'none'; object-src 'none'; ...)
- `X-Frame-Options: DENY`
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Strict-Transport-Security`
- `Permissions-Policy: camera=(), microphone=(), geolocation=()`

Additional rules followed throughout the codebase:

- Every external link (`target="_blank"`) carries `rel="noopener noreferrer"`.
- No user-supplied `dangerouslySetInnerHTML`.
- The theme bootstrap is a static external script (`public/theme-init.js`), not an inline payload.
- The contact form performs client-side validation only and is ready for a future API endpoint.
- No personal contact data beyond what is deliberately published (social links, Discord handle).

---

## Content and asset sources

- Bilingual copy, achievements, skills, projects and timeline entries are maintained in `lib/content.ts`.
- CV and certificate PDFs are served from `public/` and referenced with explicit links.
- Third-party code or repositories are never presented as personal work; project entries correspond to repositories owned by the author.

---

## Roadmap

- [ ] Connect the contact form to an API or email service
- [ ] Replace placeholder project links with canonical repository URLs
- [ ] Optional: migrate the dictionary to an i18n library
- [ ] Optional: light theme
