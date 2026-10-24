# Portfolio_web

Bilingual (MN / EN) personal portfolio frontend for **Margad-Erdene Byambabasan** — IT Student & Cybersecurity Specialist.

Built with **Next.js 14 (App Router)** · **TypeScript** · **Tailwind CSS** · **Framer Motion**.

---

## 🖥️ Local Setup (Локал дээр ажиллуулах)

### 1. Requirements (Шаардлага)

- **Node.js** 18.17+ (санал: 20 LTS) — шалгах: `node -v`
- **npm** 9+ — шалгах: `npm -v`

### 2. Install (Тохиргоо)

```bash
git clone https://github.com/Zaprilli/Portfolio_web.git
cd Portfolio_web
npm install
```

### 3. Run (Ажиллуулах)

**Development mode (зохион байгуулалттай):**

```bash
npm run dev
```

→ http://localhost:3000

**Production mode (бүтээгдэхүүн болгох):**

```bash
npm run build
npm run start
```

> `npm run start`-ийн өмнө заавал `npm run build` ажиллуулна уу.

### 4. Scripts

| Script | Тайлбар |
| --- | --- |
| `npm run dev` | Dev server (hot reload) |
| `npm run build` | Production build |
| `npm run start` | Production server |
| `npm run lint` | ESLint шалгалт |

---

## 📁 Project Structure

```
app/
  layout.tsx        # Root layout + metadata
  page.tsx          # Main page (composition)
  globals.css       # Tailwind + glass/neon utilities
components/
  Navbar.tsx        # Sticky nav + MN/EN toggle + mobile menu
  Hero.tsx          # Typewriter, 3D tilt terminal card
  Achievements.tsx  # Scroll-linked CTF timeline
  Skills.tsx        # 3 skill categories + marquee
  Projects.tsx      # 4 project cards
  Experience.tsx    # Education / Work / Service timeline
  Interests.tsx     # Personal interests
  Contact.tsx       # Contact form (frontend validation only)
  Footer.tsx        # Social links + language toggle
  SectionHeading.tsx# Shared animated heading + Reveal helper
lib/
  content.ts        # ⬅ ALL text lives here (MN/EN dictionary)
  lang-context.tsx  # Language context (useLang hook)
next.config.js      # Security HTTP headers
```

---

## 🌐 Editing Text / Хэл солих

All strings are stored in **`lib/content.ts`** as `{ mn: string; en: string }` objects.

Example:

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

- UI дээр **MN / EN** товчоор солино (сонголт `localStorage`-д хадгалагдана).
- Нэмэлт мэдээлэл (achievements, skills, projects, timeline) мөн `content.ts`-д байна.
- Ирээдүйд i18n framework (next-intl, react-i18next) эсвэл backend руу хялбархан шилжүүлж болно.

---

## 🔒 Security Headers

`next.config.js`-д дараах header-ууд тохируулсан (бүх route-д):

- `Content-Security-Policy` (default-src 'self', frame-ancestors 'none', ...)
- `X-Frame-Options: DENY`
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Strict-Transport-Security`
- `Permissions-Policy: camera=(), microphone=(), geolocation=()`

Нэмэлт дүрэм:

- Бүх `target="_blank"` линкэд `rel="noopener noreferrer"`
- `dangerouslySetInnerHTML` ашиглаагүй
- Contact form нь **frontend validation only** — API холболтод бэлэн

---

## 🧩 Roadmap

- [ ] Connect contact form to an API / email service
- [ ] Add real project & social URLs
- [ ] Optional: migrate dictionary to an i18n library
- [ ] Dark/light theme toggle (одоо dark-mode first)
