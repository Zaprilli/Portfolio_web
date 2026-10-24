export type Lang = 'mn' | 'en';

export interface Achievement {
  event: string;
  detail: { mn: string; en: string };
  year: string;
  icon: string;
  href?: string;
}

export interface SkillCategory {
  icon: string;
  category: { mn: string; en: string };
  items: string[];
}

export interface Project {
  name: string;
  description: { mn: string; en: string };
  tags: string[];
  icon: string;
  href?: string;
}

export interface TimelineItem {
  role: { mn: string; en: string };
  org: string;
  period: string;
  description: { mn: string; en: string };
  type: 'education' | 'work' | 'service' | 'training';
}

export interface ContactField {
  label: { mn: string; en: string };
  placeholder: { mn: string; en: string };
}

export interface Content {
  meta: {
    title: { mn: string; en: string };
    description: { mn: string; en: string };
  };
  nav: {
    home: { mn: string; en: string };
    about: { mn: string; en: string };
    skills: { mn: string; en: string };
    projects: { mn: string; en: string };
    achievements: { mn: string; en: string };
    experience: { mn: string; en: string };
    contact: { mn: string; en: string };
  };
  hero: {
    greeting: { mn: string; en: string };
    name: { mn: string; en: string };
    title: { mn: string; en: string };
    bio: { mn: string; en: string };
    ctaContact: { mn: string; en: string };
    ctaProjects: { mn: string; en: string };
    ctaCv: { mn: string; en: string };
    status: { mn: string; en: string };
    ctfGoal: { mn: string; en: string };
  };
  achievementsSection: {
    heading: { mn: string; en: string };
    subheading: { mn: string; en: string };
    trackLabel: { mn: string; en: string };
  };
  skillsSection: {
    heading: { mn: string; en: string };
    subheading: { mn: string; en: string };
  };
  projectsSection: {
    heading: { mn: string; en: string };
    subheading: { mn: string; en: string };
    viewCode: { mn: string; en: string };
  };
  experienceSection: {
    heading: { mn: string; en: string };
    subheading: { mn: string; en: string };
    labels: {
      education: { mn: string; en: string };
      work: { mn: string; en: string };
      service: { mn: string; en: string };
      training: { mn: string; en: string };
    };
  };
  interestsSection: {
    heading: { mn: string; en: string };
    subheading: { mn: string; en: string };
    items: { mn: string; en: string; href?: string }[];
  };
  contactSection: {
    heading: { mn: string; en: string };
    subheading: { mn: string; en: string };
    fields: {
      name: ContactField;
      email: ContactField;
      message: ContactField;
    };
    submit: { mn: string; en: string };
    sending: { mn: string; en: string };
    success: { mn: string; en: string };
    errorRequired: { mn: string; en: string };
    errorEmail: { mn: string; en: string };
    copySuccess: { mn: string; en: string };
    ctfInvite: { mn: string; en: string };
    disclaimer: { mn: string; en: string };
    sideNote: { mn: string; en: string };
  };
  footer: {
    rights: { mn: string; en: string };
  };
  langToggle: { label: string };
}

export const content: Content = {
  meta: {
    title: {
      mn: 'Маргад-Эрдэнэ Бямбабаасан | IT Сурагч, Кибер Аюулгүй Байдлын Мэргэжилтэн болохыг хүсэж буй',
      en: 'Margad-Erdene Byambabasan | IT Student who wanna be a Cybersecurity Specialist',
    },
    description: {
      mn: 'Олон төрлийн үйлдлийн системтэй (Arch Linux, Windows, Linux-ийн хувилбарууд) ажилладаг. C ба Python-аар програмчилдаг. Ихэнх цагаа кибер аюулгүй байдалд зориулдаг — CTF, системийн аюулгүй байдал, пентестингийн сургалтууд.',
      en: 'I work with various operating systems (Arch Linux, Windows, other Linux distros) and write code in C and Python. Most of my time goes to cybersecurity — CTFs, system security and hands-on pentesting practice.',
    },
  },
  nav: {
    home: { mn: 'Нүүр', en: 'Home' },
    about: { mn: 'Тухай', en: 'About' },
    skills: { mn: 'Ур чадвар', en: 'Skills' },
    projects: { mn: 'Төслүүд', en: 'Projects' },
    achievements: { mn: 'Амжилт', en: 'Achievements' },
    experience: { mn: 'Туршлага', en: 'Experience' },
    contact: { mn: 'Холбоо барих', en: 'Contact' },
  },
  hero: {
    greeting: { mn: '// Сайн байна уу, би', en: '// Hello world, I am' },
    name: { mn: 'Маргад-Эрдэнэ Бямбабаасан', en: 'Margad-Erdene Byambabasan' },
    title: { mn: 'IT Сурагч — Кибер Аюулгүй Байдлын Мэргэжилтэн болохыг хүсэж буй', en: 'IT Student who wanna be a Cybersecurity Specialist' },
    bio: {
      mn: 'Олон төрлийн үйлдлийн системтэй (Arch Linux, Windows, Linux-ийн хувилбарууд) ажилладаг. C ба Python-аар програмчилдаг. Ихэнх цагаа cybersecurity-д зориулдаг — CTF, системийн аюулгүй байдал, пентестингийн сургалтууд.',
      en: 'I work with various operating systems (Arch Linux, Windows, other Linux distros) and write code in C and Python. Most of my time goes to cybersecurity — CTFs, system security and hands-on pentesting practice.',
    },
    ctaContact: { mn: 'Холбоо барих', en: 'Get in touch' },
    ctaProjects: { mn: 'Төслүүд үзэх', en: 'View projects' },
    ctaCv: { mn: 'CV татаж авах', en: 'Download CV' },
    status: { mn: 'Нээлттэй: Фриланс дэмжлэг', en: 'Open to: Freelance support' },
    ctfGoal: {
      mn: 'Зорилго: Олон улсын CTF тэмцээнүүдэд оролцох (picoCTF, Hack The Box, Cyber Apocalypse)',
      en: 'Goal: Compete in international CTFs (picoCTF, Hack The Box, Cyber Apocalypse)',
    },
  },
  achievementsSection: {
    heading: { mn: 'Амжилт ба шагнал', en: 'Achievements & Awards' },
    subheading: {
      mn: 'Кибер аюулгүй байдлын тэмцээнүүд болон баталгаажуулалтууд.',
      en: 'Cybersecurity competitions and certifications.',
    },
    trackLabel: { mn: 'CTF дүн шинжилгээ', en: 'CTF track record' },
  },
  skillsSection: {
    heading: { mn: 'Ур чадвар', en: 'Skills' },
    subheading: {
      mn: 'Орчин, хэл болон аюулгүй байдлын чиглэлээрх мэдлэгүүд.',
      en: 'Knowledge across environments, languages and security.',
    },
  },
  projectsSection: {
    heading: { mn: 'Төслүүд', en: 'Projects' },
    subheading: {
      mn: 'Сургалтын болон хувийн төслүүд.',
      en: 'Academic and personal builds.',
    },
    viewCode: { mn: 'Дэлгэрэнгүй', en: 'Details' },
  },
  experienceSection: {
    heading: { mn: 'Туршлага & Боловсрол', en: 'Experience & Education' },
    subheading: {
      mn: 'Боловсрол, алба хаасан болон мэргэжлийн туршлага.',
      en: 'Education, service and professional experience.',
    },
    labels: {
      education: { mn: 'Боловсрол', en: 'Education' },
      work: { mn: 'Ажил', en: 'Work' },
      service: { mn: 'Алба', en: 'Service' },
      training: { mn: 'Сургалт', en: 'Training' },
    },
  },
  interestsSection: {
    heading: { mn: 'Хувийн Сонирхол', en: 'Personal Interests' },
    subheading: {
      mn: 'Клавишээс гадуурх цаг хугацаа.',
      en: 'Time spent away from the keyboard.',
    },
    items: [
      { mn: 'Техник угсаралт ба дотфайл', en: 'Hardware Assembly & Dotfiles' },
      { mn: 'Оюун ухааны puzzle тоглоом (TETR.IO, Sudoku)', en: 'Puzzle & IQ Games (TETR.IO, Sudoku)', href: 'https://ch.tetr.io/u/mrgd06' },
      { mn: 'Гейм хөгжүүлэлт (itch.io)', en: 'Game Dev (itch.io)', href: 'https://mrgd06.itch.io/' },
      { mn: 'Спорт — ууланд алхалт, сагс, волейбол, фитнес', en: 'Sport — Mountain Hiking, Basketball, Volleyball & Fitness' },
    ],
  },
  contactSection: {
    heading: { mn: 'Холбоо Барих', en: 'Contact' },
    subheading: {
      mn: 'Төсөл, дэмжлэг эсвэл зөвхөн мэндчилгээ — бичээрэй.',
      en: 'Project, support request or just a hello — drop a line.',
    },
    fields: {
      name: {
        label: { mn: 'Нэр', en: 'Name' },
        placeholder: { mn: 'Таны нэр', en: 'Your name' },
      },
      email: {
        label: { mn: 'Имэйл', en: 'Email' },
        placeholder: { mn: 'you@example.com', en: 'you@example.com' },
      },
      message: {
        label: { mn: 'Мессеж', en: 'Message' },
        placeholder: { mn: 'Мессежээ энд бичнэ үү...', en: 'Write your message here...' },
      },
    },
    submit: { mn: 'Илгээх', en: 'Send message' },
    sending: { mn: 'Илгээж байна...', en: 'Sending...' },
    success: {
      mn: 'Мессеж амжилттай илгээгдлээ. Баярлалаа!',
      en: 'Message sent successfully. Thank you!',
    },
    errorRequired: { mn: 'Бүх талбарыг бөглөнө үү.', en: 'Please fill in all fields.' },
    errorEmail: { mn: 'Зөв имэйл хаяг оруулна уу.', en: 'Please enter a valid email address.' },
    copySuccess: { mn: 'Хуулагдлаа ✓', en: 'Copied ✓' },
    ctfInvite: {
      mn: 'Монголын CTF баг эсвэл тэмцээн — тоглогч хэрэгтэй бол бичээрэй.',
      en: 'Mongolian CTF team or event — reach out if you need a player.',
    },
    disclaimer: {
      mn: 'Энэ бол зөвхөн фронтенд цонх — API холболтод бэлэн.',
      en: 'This is a frontend-only form, ready for future API integration.',
    },
    sideNote: {
      mn: 'Хариу авахын тулд имэйлээ үлдээнэ үү. Бүх холбоосууд аюулгүй байдлаар нээгдэнэ.',
      en: 'Leave your email for a reply. All links open securely.',
    },
  },
  footer: {
    rights: { mn: 'Бүх эрх хуулиар хамгаалагдсан.', en: 'All rights reserved.' },
  },
  langToggle: { label: 'MN / EN' },
};

export const achievements: Achievement[] = [
  {
    event: 'NUMCTF 2025',
    detail: { mn: 'Кибер аюулгүй байдал — 2-р байр (WinterXRain баг)', en: 'Cybersecurity — 2nd Place (Team WinterXRain)' },
    year: '2025',
    icon: 'trophy',
  },
  {
    event: 'Haruulzangi CTF 2026',
    detail: { mn: 'Үндэсний кибер аюулгүй байдал — Топ 50 (enVoia! баг)', en: 'National Cybersecurity — Top 50 (Team enVoia!)' },
    year: '2026',
    icon: 'flag',
  },
  {
    event: 'OpenwaveWanderlab Science CTF',
    detail: { mn: 'STEM — 3-р байр', en: 'STEM — 3rd Place' },
    year: '2025',
    icon: 'flask',
  },
  {
    event: 'English B2',
    detail: { mn: 'Гадаад хэлний B2 түвшний гэрчилгээ', en: 'English B2 level certification' },
    year: '2025',
    icon: 'languages',
    href: '/certificates/english-b2.pdf',
  },
];

export interface CtfLink {
  label: string;
  href: string;
  note: { mn: string; en: string };
}

export const ctfLinks: CtfLink[] = [
  {
    label: 'CTFtime — Team enVoila!',
    href: 'https://ctftime.org/team/447293/',
    note: { mn: 'Хувийн профайлаас гадна багийн дүн шинжилгээ', en: 'Team results and CTF ratings' },
  },
  {
    label: 'Haruulzangi CTF 2026 Qualifier',
    href: 'https://ctftime.org/event/3379/',
    note: { mn: '161 багаас Топ 50 — CTFtime scoreboard', en: 'Top 50 of 161 teams — CTFtime scoreboard' },
  },
  {
    label: 'Hack The Box — @xinn',
    href: 'https://profile.hackthebox.com/profile/019d6023-1bdb-7117-88c6-fcaafe00de4a',
    note: { mn: 'Starting Point, машинууд ба flag-ууд', en: 'Starting Point, machines and flags' },
  },
  {
    label: 'CTF.mn — xinn06',
    href: 'https://ctf.mn/user/xinn06',
    note: { mn: 'Хувийн профайл: оролцсон тэмцээнүүд, оноо', en: 'Personal profile: events and scores' },
  },
];

export const skillCategories: SkillCategory[] = [
  {
    icon: 'monitor',
    category: { mn: 'Үйлдлийн Систем & Орчин', en: 'OS & Environment' },
    items: ['Arch Linux', 'Hyprland', 'Wayland', 'Kitty', 'Zsh', 'Windows', 'macOS'],
  },
  {
    icon: 'code',
    category: { mn: 'Хэл & Веб', en: 'Languages & Web' },
    items: ['C', 'Python', 'JavaScript', 'TypeScript', 'Next.js', 'React', 'TailwindCSS', 'Supabase', 'SQL'],
  },
  {
    icon: 'shield-check',
    category: { mn: 'Кибер Аюулгүй Байдал', en: 'Cybersecurity' },
    items: [
      'CTF Problem Solving',
      'Network Analysis (Wireshark)',
      'OSINT Tools',
      'System Hardening',
      'Hardware Diagnostics',
      'Hack The Box',
      'PicoCTF',
      'OverTheWire',
    ],
  },
];

export const projects: Project[] = [
  {
    name: 'UniSuite',
    description: {
      mn: 'Оюутны өдөр тутмын амьдралыг автоматжуулсан веб хөгжүүлэлтийн платформ: болзоо, баяр, товлолт, RSVP системүүдийн багц.',
      en: 'Automated student lifestyle web platform: dating invites, events, scheduling and RSVP apps.',
    },
    tags: ['Next.js', 'TypeScript', 'TailwindCSS', 'Supabase'],
    icon: 'graduation-cap',
  },
  {
    name: 'Naran',
    description: {
      mn: 'Гадаад үзэмжтэй, хэд хэдэн тематик (тэмдэг/өнгө) солигддог, GitHub Pages дээр CI/CD деплой хийгдсэн Next.js сайт.',
      en: 'Next.js site with switchable themes and automated GitHub Pages CI/CD deployment.',
    },
    tags: ['Next.js', 'TypeScript', 'GitHub Actions', 'CI/CD'],
    icon: 'bot',
    href: 'https://github.com/Archive019230/Naran',
  },
  {
    name: 'OpenWeather Dashboard',
    description: {
      mn: 'OpenWeather API ашигласан цаг агаарын мэдээлэл харуулдог веб аппликейшн (HTML/CSS/JS + fetch API).',
      en: 'Weather web app consuming the OpenWeather API (HTML/CSS/JS + fetch).',
    },
    tags: ['JavaScript', 'REST API', 'HTML/CSS'],
    icon: 'flask',
    href: 'https://github.com/Zaprilli/openweather-api-use',
  },
  {
    name: 'Hand Gesture Recognition',
    description: {
      mn: 'Google MediaPipe & Teachable Machine ашигласан компьютерийн харааны гарын хөдөлгөөн таних систем.',
      en: 'Computer vision system using Google MediaPipe & Teachable Machine.',
    },
    tags: ['Python', 'MediaPipe', 'Computer Vision'],
    icon: 'hand',
  },
  {
    name: 'OSINT Source-Code Audit',
    description: {
      mn: 'miniiweb.com-ийн source code нийтэд байгаа эсэхийг тогтоосон OSINT шинжилгээний бичвэр: DNS/RDAP, GitHub/GitLab code search, Wayback, urlscan ашигласан.',
      en: 'OSINT writeup auditing whether miniiweb.com source code is public: DNS/RDAP, GitHub/GitLab search, Wayback, urlscan.',
    },
    tags: ['OSINT', 'GitHub dorking', 'Wayback', 'Wireshark'],
    icon: 'shield-check',
  },
  {
    name: 'System Utilities & Dotfiles',
    description: {
      mn: 'Arch Linux-д зориулсан захиалгат shell скрипт, Hyprland/Zsh конфигураци, PC угсралт/тохиргооны хэрэгслүүд (freelance).',
      en: 'Custom Arch Linux shell scripts, Hyprland/Zsh configs and PC build/setup tooling (freelance).',
    },
    tags: ['Bash', 'Arch Linux', 'Zsh', 'Hyprland'],
    icon: 'square-terminal',
  },
  {
    name: 'Portfolio_web',
    description: {
      mn: 'Энэ вэбсайт: хоёр хэлтэй (MN/EN), хоёр өнгөтэй (green/purple), хатуу аюулгүй байдлын толгой үсгүүдтэй хувийн портфолио.',
      en: 'This website: bilingual (MN/EN), switchable green/purple themes and strict security headers.',
    },
    tags: ['Next.js', 'TypeScript', 'TailwindCSS', 'Framer Motion'],
    icon: 'code',
    href: 'https://github.com/Zaprilli/Portfolio_web',
  },
];

export const timeline: TimelineItem[] = [
  {
    role: { mn: 'IT Дэмжлэгийн Мэргэжилтэн (Фриланс)', en: 'IT Support Specialist (Freelance)' },
    org: 'Freelance',
    period: '2023 — одоо / Present',
    description: {
      mn: 'Захиалгат PC угсралт, Windows/Linux системийн тохиргоо, аюулгүй байдлын хатуужилт, AnyDesk ашиглан алсын зайны дэмжлэг.',
      en: 'Custom PC assembly, Windows/Linux system setup, security hardening, remote support via AnyDesk.',
    },
    type: 'work',
  },
  {
    role: { mn: 'Бакалаврын зэрэг (Мэдээллийн Технологи)', en: "Bachelor's Degree in IT" },
    org: 'National University of Mongolia (NUM-MTES)',
    period: '2024 — одоо / Present',
    description: {
      mn: 'Мэдээллийн технологийн чиглэлээр суралцаж байна. Системийн аюулгүй байдал, програмчлал, веб хөгжүүлэлтэнд төвлөрч байна.',
      en: 'Studying information technology with a focus on system security, programming and full-stack development.',
    },
    type: 'education',
  },
  {
    role: { mn: 'Цэргийн алба (013-р Сигналын Батальон)', en: 'Military Service (013th Signal Battalion)' },
    org: 'Mongolian Armed Forces',
    period: '2025',
    description: {
      mn: 'Морс код болон мэдээллийн нууцлалын үндэс, шугам сүлжээний үйл ажиллагааны туршлага хуримтлуулсан.',
      en: 'Gained fundamentals of Morse code and information privacy, plus signal unit operations experience.',
    },
    type: 'service',
  },
  {
    role: { mn: 'HackerRank — SQL & бодлогын шийдэл', en: 'HackerRank — SQL & Problem Solving' },
    org: 'HackerRank',
    period: '2024 — одоо',
    description: {
      mn: 'SQL, problem solving зэрэг гэрчилгээнүүд.',
      en: 'SQL, problem solving and other certifications.',
    },
    type: 'training',
  },
  {
    role: { mn: 'CyLab Academy — Кибер аюулгүй байдал', en: 'CyLab Academy — Cybersecurity' },
    org: 'CyLab Academy',
    period: '2025 — одоо',
    description: {
      mn: 'Кибер аюулгүй байдлын онлайн сургалт ба CTF сорилтууд.',
      en: 'Cybersecurity training and CTF challenges.',
    },
    type: 'training',
  },
  {
    role: { mn: 'Hack The Box — Self-paced labs', en: 'Hack The Box — Self-paced labs' },
    org: 'Hack The Box',
    period: '2025 — одоо',
    description: {
      mn: 'Machines, сорилтууд ба кибер лабораториуд.',
      en: 'Machines, challenges and cyber labs.',
    },
    type: 'training',
  },
];

export function t(value: { mn: string; en: string }, lang: Lang): string {
  return value[lang];
}
