# Margad-Erdene Byambabasan — Portfolio

Монгол / Англи хэлтэй, Next.js 14 App Router дээр бүтээгдсэн хувийн portfolio сайт. IT-ийн оюутан, кибер аюулгүй байдлын чиглэлээр суралцаж буй Margad-Erdene Byambabasan-ы танилцуулга, туршлага, ур чадвар болон төслүүдийг харуулна.

**Live:** https://zaprilli.github.io/Portfolio_web/

## Сайтын боломжууд

- Монгол, Англи хэлний сонголт; сонголтыг browser-ийн `localStorage`-д хадгална.
- Ногоон болон нил ягаан өнгийн theme; theme-ийг дахин нээхэд санана.
- Responsive navigation, гар утасны цэс, нэг хуудсан доторх хэсгүүд рүү шилжих холбоосууд.
- Танилцуулга, profile зураг, CV татах холбоос.
- Амжилт, CTF тэмцээн, ур чадварын ангилал болон хөдөлгөөнт skill marquee.
- Боловсрол, ажил, үйлчилгээний туршлагын timeline; сонирхол болон төслүүд.
- Холбоо барих хэсэгт и-мэйл болон нийгмийн сүлжээний холбоосууд, CV.
- Framer Motion animation, scroll-to-top товч, хөдөлгөөнийг багасгах системийн тохиргоог дагах.
- GitHub Pages-д зориулсан статик экспорт болон push хийхэд автоматаар deploy хийх GitHub Actions workflow.

## Ашигласан технологи

Next.js 14, React 18, TypeScript, Tailwind CSS, Framer Motion, lucide-react.

## Компьютер дээр ажиллуулах

Шаардлага: Node.js 18.17 ба түүнээс дээш (Node.js 20 LTS санал болгож байна), npm 9 ба түүнээс дээш.

```bash
git clone https://github.com/Zaprilli/Portfolio_web.git
cd Portfolio_web
npm ci
npm run dev
```

Дараа нь [http://localhost:3000](http://localhost:3000) хаягийг browser дээр нээнэ. Хөгжүүлэлтийн сервер код өөрчлөгдөх бүрд хуудсыг автоматаар шинэчилнэ.

Production хувилбарыг локал компьютер дээр шалгахдаа:

```bash
npm run build
npm run start
```

`npm run start` ажиллуулахын өмнө `npm run build` заавал ажиллуулна.

## GitHub Pages дээр нийтлэх

`.github/workflows/deploy-pages.yml` нь `main` салбар руу push хийх бүрд төслийг build хийгээд GitHub Pages руу нийтэлнэ. Гар ажиллагаагаар эхлүүлэхэд GitHub repository-ийн **Actions** табаас **Deploy portfolio to GitHub Pages** workflow-г сонгон **Run workflow** дарна.

Repository дээр эхний удаа Pages-ийг асаах:

1. GitHub repository-ийн **Settings → Pages** хэсгийг нээнэ.
2. **Build and deployment → Source** тохиргоонд **GitHub Actions** сонгоно.
3. `main` салбар руу өөрчлөлт push хийх эсвэл workflow-г гараар эхлүүлнэ.
4. Actions job амжилттай дууссаны дараа сайт https://zaprilli.github.io/Portfolio_web/ дээр шинэчлэгдэнэ.

Workflow build үед `GITHUB_PAGES=true` тохируулж, Next.js статик `out/` хувилбар болон `/Portfolio_web` суурь замыг гаргана. Ингэснээр зураг, CV, сертификат, JavaScript болон Next.js asset-ууд project URL-ийн зөв замаас ачаална. Локал development болон `next start` үндсэн домэйн зам дээр хэвийн ажиллана.

## Төслийн бүтэц

```text
app/
  layout.tsx        Үндсэн layout, metadata, provider-ууд, theme bootstrap
  page.tsx          Нүүр хуудасны хэсгүүдийн дараалал
  globals.css       Tailwind үндсэн тохиргоо, theme хувьсагч, дизайн
components/
  Navbar.tsx        Navigation, хэл/theme сонголт, гар утасны цэс
  Hero.tsx          Танилцуулга, зураг, CV болон terminal карт
  Achievements.tsx  Амжилт, CTF холбоос, timeline
  Skills.tsx        Ур чадварын бүлгүүд ба хөдөлгөөнт жагсаалт
  Projects.tsx      Төслийн картууд
  Experience.tsx    Боловсрол, ажил, үйлчилгээний timeline
  Interests.tsx     Сонирхлууд
  Contact.tsx       Холбоо барих хэсэг, CV холбоос
  Footer.tsx        Доод хэсэг, нийгмийн холбоосууд
  Socials.tsx       Нийгмийн сүлжээний холбоосын өгөгдөл
  ScrollToTop.tsx   Хуудасны эхэнд буцах үйлдэл
lib/
  content.ts        Хоёр хэлний бүх текст болон сайтын агуулгын өгөгдөл
  public-path.ts    GitHub Pages-ийн project суурь замтай public файлын холбоос
  lang-context.tsx  Хэлний төлөв ба useLang hook
  theme-context.tsx Theme-ийн төлөв ба useTheme hook
  motion.ts         Хөдөлгөөний animation тохиргоо
public/
  images/           Profile зураг
  cv/               Монгол болон Англи CV
  certificates/     Сертификатын PDF
  theme-init.js     Хуудас ачаалахаас өмнө хэл/theme сэргээх скрипт
.github/workflows/
  deploy-pages.yml  GitHub Pages build болон deploy
next.config.js      Next.js болон GitHub Pages тохиргоо
```

## Агуулга шинэчлэх

Хэрэглэгчид харагдах ихэнх текст, амжилт, ур чадвар, timeline, сонирхол болон төслийн өгөгдөл `lib/content.ts` файлд байрлана. Хоёр хэлээр харуулах утгыг `mn`, `en` талбарт шинэчилнэ. Нийгмийн сүлжээний URL-уудыг `components/Socials.tsx`-оос өөрчилнө. CV, зураг болон сертификатын файлыг `public/` дотор байрлуулж, `lib/content.ts` дахь холбоосыг шинэчилнэ.

Шинэчлэлтээ `main` салбар руу push хийхэд GitHub Actions Pages хувилбарыг автоматаар build хийнэ.

## Холбоо барих хэсгийн тухай

Одоогийн Contact хэсэг нь CV болон нийгмийн холбоосуудыг харуулдаг. Холбоо барих форм API эсвэл и-мэйл үйлчилгээтэй холбогдоогүй байгаа тул мэдээлэл сервер рүү илгээдэггүй.
