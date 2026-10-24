import { publicPath } from './public-path';

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
  org: { mn: string; en: string };
  period: { mn: string; en: string };
  description?: { mn: string; en: string };
  type: 'education' | 'freelance' | 'service' | 'training';
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
    shortName: { mn: string; en: string };
  };
  achievementsSection: {
    heading: { mn: string; en: string };
    subheading: { mn: string; en: string };
    trackLabel: { mn: string; en: string };
    linkLabels: {
      pdf: string;
      profile: { mn: string; en: string };
      news: { mn: string; en: string };
      link: { mn: string; en: string };
    };
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
      freelance: { mn: string; en: string };
      service: { mn: string; en: string };
      training: { mn: string; en: string };
    };
  };
  interestsSection: {
    heading: { mn: string; en: string };
    subheading: { mn: string; en: string };
    items: {
      mn: string;
      en: string;
      href?: string;
      subs?: { mn: string; en: string; href?: string }[];
    }[];
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
    channelsLabel: { mn: string; en: string };
    services: {
      heading: { mn: string; en: string };
      items: { mn: string; en: string }[];
    };
  };
  footer: {
    rights: { mn: string; en: string };
  };
  langToggle: { label: string };
  sectionEyebrow: { mn: string; en: string };
  cv: { mn: string; en: string };
}

export const content: Content = {
  meta: {
    title: {
      mn: 'Маргад-Эрдэнэ Бямбабасан | Мэдээллийн технологийн оюутан -> Кибер аюулгүй байдлын мэргэжилтэн болох хүсэлтэй',
      en: 'Margad-Erdene Byambabasan | Information Technology Student -> who wanna be a Cybersecurity Specialist',
    },
    description: {
      mn: 'Мэдээллийн технологийн 3-р курсийн оюутан. Кибер аюулгүй байдлын чиглэлээр гүнзгий сонирхдог бөгөөд CTF тэмцээнүүд, пентестинд чиглэн ажилладаг. Системийн аюулгүй байдалд сонирхолтой, Linux, Windows зэрэг олон үйлдлийн систем дээр ажиллах чадвартай.',
      en: 'Third-year Information Technology student. Passionate about cybersecurity — CTFs and pentesting. Interested in system security and skilled at working with various operating systems (Linux, Windows).',
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
    greeting: { mn: '// Сайн байна уу, миний нэр бол', en: '// Hello World!, my name is' },
    name: { mn: 'Маргад-Эрдэнэ Бямбабасан', en: 'Margad-Erdene Byambabasan' },
    title: { mn: 'Кибер аюулгүй байдлын мэргэжилтэн болох хүсэлтэй мэдээллийн технологийн оюутан', en: 'IT Student & who wanna be a Cybersecurity Specialist' },
    bio: {
      mn: 'Мэдээллийн технологийн 3-р курсийн оюутан. Кибер аюулгүй байдлын чиглэлээр гүнзгий сонирхдог бөгөөд CTF тэмцээнүүд, пентестинд чиглэн ажилладаг. Системийн аюулгүй байдалд сонирхолтой, Linux, Windows зэрэг олон үйлдлийн систем дээр ажиллах чадвартай.',
      en: 'Third-year Information Technology student. Passionate about cybersecurity — CTFs and pentesting. Interested in system security and skilled at working with various operating systems (Linux, Windows, macOS).',
    },
    ctaContact: { mn: 'Холбоо барих', en: 'Get in touch' },
    ctaProjects: { mn: 'Төслүүд үзэх', en: 'View projects' },
    ctaCv: { mn: 'CV татаж авах', en: 'Download CV' },
    status: { mn: 'Фриланс үйлчилгээ үзүүлэх боломжтой', en: 'Freelance services available' },
    ctfGoal: {
      mn: 'Зорилго: Олон улсын CTF тэмцээнүүдэд оролцох',
      en: 'Goal: Compete in international CTFs',
    },
    shortName: { mn: 'Маргад-Эрдэнэ', en: 'Margad-Erdene' },
  },
  achievementsSection: {
    heading: { mn: 'Амжилт ба шагнал', en: 'Achievements & Awards' },
    subheading: {
      mn: 'Кибер аюулгүй байдлын тэмцээнүүд болон гэрчилгээнүүд.',
      en: 'Cybersecurity competitions and certifications.',
    },
    trackLabel: { mn: 'CTF дүн шинжилгээ', en: 'CTF track record' },
    linkLabels: {
      pdf: 'PDF',
      profile: { mn: 'профайл', en: 'profile' },
      news: { mn: 'мэдээ', en: 'news' },
      link: { mn: 'линк', en: 'link' },
    },
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
    heading: { mn: 'Туршлага ба боловсрол', en: 'Experience & Education' },
    subheading: {
      mn: 'Боловсрол, алба хаасан болон мэргэжлийн туршлага.',
      en: 'Education, service and professional experience.',
    },
    labels: {
      education: { mn: 'Боловсрол', en: 'Education' },
      freelance: { mn: 'Фриланс', en: 'Freelance' },
      service: { mn: 'Цэргийн алба', en: 'Military Service' },
      training: { mn: 'Цахим сургалт', en: 'Online Learning' },
    },
  },
  interestsSection: {
    heading: { mn: 'Хувийн сонирхол', en: 'Personal Interests' },
    subheading: {
      mn: 'Клавишээс гадуурх цаг хугацаа.',
      en: 'Time spent away from the keyboard.',
    },
    items: [
      {
        mn: 'Техник угсаралт',
        en: 'Hardware Assembly',
        subs: [
          { mn: 'Машин модификаци, notebook задлалт, PC угсралт', en: 'Car modification, laptop teardown & PC builds' },
          { mn: 'Микроскоптой шинжилгээ, наалдуулалтын туршлага', en: 'Microscope inspection & soldering experience' },
        ],
      },
      {
        mn: 'Оюун ухааны puzzle тоглоом',
        en: 'Puzzle & IQ Games',
        subs: [
          { mn: 'Rubik Cube', en: 'Rubik Cube' },
          { mn: 'Tetris', en: 'Tetris', href: 'https://ch.tetr.io/u/mrgd06' },
          { mn: 'Sudoku', en: 'Sudoku' },
        ],
      },
      {
        mn: 'Спорт ба фитнес',
        en: 'Sports & Fitness',
        subs: [
          { mn: 'Ууланд алхалт', en: 'Mountain Hiking' },
          { mn: 'Сагсан бөмбөг', en: 'Basketball' },
          { mn: 'Волейбол', en: 'Volleyball' },
          { mn: 'Фитнес', en: 'Fitness' },
          { mn: 'Гүйлт', en: 'Running' },
        ],
      },
    ],
  },
  contactSection: {
    heading: { mn: 'Холбоо барих', en: 'Contact' },
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
    channelsLabel: { mn: 'Холбооны сувагууд', en: 'Channels' },
    services: {
      heading: { mn: 'Фриланс үйлчилгээ', en: 'Freelance services' },
      items: [
        { mn: 'Захиалгат компьютер угсрах, үйлдлийн систем тохируулах', en: 'Custom PC assembly & operating system setup' },
        { mn: 'Системийн аюулгүй байдлын хатуужилт', en: 'System security hardening' },
        { mn: 'Веб сайт хөгжүүлэлт', en: 'Website development' },
        { mn: 'Алсын зайны техникийн тусламж', en: 'Remote technical support' },
      ],
    },
  },
  footer: {
    rights: { mn: 'Бүх эрх хуулиар хамгаалагдсан.', en: 'All rights reserved.' },
  },
  langToggle: { label: 'MN / EN' },
  sectionEyebrow: { mn: 'ангилал', en: 'section' },
  cv: { mn: publicPath('/cv/CV_Mongolia.pdf'), en: publicPath('/cv/CV_English.pdf') },
};

export const achievements: Achievement[] = [
  {
    event: 'NUMCTF 2025',
    detail: { mn: 'Кибер аюулгүй байдал — 2-р байр (WinterXRain баг)', en: 'Cybersecurity — 2nd Place (Team WinterXRain)' },
    year: '2025',
    icon: 'trophy',
    href: 'https://site.num.edu.mn/news/138/',
  },
  {
    event: 'Haruulzangi CTF 2026',
    detail: { mn: 'Монголын хамгийн том CTF — Jeopardy (соруул) төрлийн Semi-Final, Global #50 (enVoia! баг)', en: "Mongolia's biggest CTF — Jeopardy-style Semi-Final, Global #50 (Team enVoia!)" },
    year: '2026',
    icon: 'flag',
    href: 'https://ctftime.org/team/447293',
  },
  {
    event: 'OpenwaveWanderlab Science CTF',
    detail: { mn: 'STEM — 3-р байр', en: 'STEM — 3rd Place' },
    year: '2025',
    icon: 'flask',
    href: 'https://www.facebook.com/share/p/1GWYG9N7NX/',
  },
  {
    event: 'English B2',
    detail: { mn: 'Гадаад хэлний B2 түвшний гэрчилгээ', en: 'English B2 level certification' },
    year: '2022',
    icon: 'languages',
    href: publicPath('/certificates/english-b2.pdf'),
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
    category: { mn: 'Үйлдлийн системүүд ба орчин', en: 'Operating Systems & Environments' },
    items: ['Arch Linux', 'Kali Linux', 'Ubuntu', 'Linux Mint', 'Hyprland', 'Wayland', 'Kitty', 'Zsh', 'Windows', 'macOS'],
  },
  {
    icon: 'code',
    category: { mn: 'Хэл ба веб', en: 'Languages & Web' },
    items: ['C', 'Python', 'JavaScript', 'TypeScript', 'Next.js', 'React', 'TailwindCSS', 'Supabase', 'SQL', 'PowerShell', 'Bash'],
  },
  {
    icon: 'shield-check',
    category: { mn: 'Кибер аюулгүй байдал', en: 'Cybersecurity' },
    items: [
      'CTF Problem Solving',
      'Network Analysis (Wireshark)',
      'OSINT Tools',
      'System Hardening',
      'Hardware Diagnostics',
      'Hack The Box',
      'PicoCTF',
      'OverTheWire: Bandit',
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
    role: { mn: 'IT дэмжлэгийн мэргэжилтэн', en: 'IT Support Specialist' },
    org: { mn: 'Фриланс', en: 'Freelance' },
    period: { mn: '2023 — одоо', en: '2023 — Present' },
    description: {
      mn: 'Захиалгат PC угсралт, Windows/Linux системийн тохиргоо, аюулгүй байдлын хатуужилт, AnyDesk ашиглан алсын зайны дэмжлэг.',
      en: 'Custom PC assembly, Windows/Linux system setup, security hardening, remote support via AnyDesk.',
    },
    type: 'freelance',
  },
  {
    role: { mn: 'Бакалаврын зэрэг | Монгол Улсын Их Сургууль', en: "Bachelor's Degree | National University of Mongolia" },
    org: { mn: 'Мэдээллийн технологи, электроникийн сургууль (МТЭС)', en: 'School of Information Technology and Electronics (MTES)' },
    period: { mn: '2024 — одоо', en: '2024 — Present' },
    type: 'education',
  },
  {
    role: { mn: 'Холбооны хороо 013', en: '013th Communications Unit' },
    org: { mn: 'Зэвсэгт хүчин', en: 'Mongolian Armed Forces' },
    period: { mn: '2025', en: '2025' },
    description: {
      mn: 'Морс код болон мэдээллийн нууцлалын үндэс, шугам сүлжээний үйл ажиллагааны туршлага хуримтлуулсан.',
      en: 'Gained fundamentals of Morse code and information privacy, plus signal unit operations experience.',
    },
    type: 'service',
  },
  {
    role: { mn: 'HackerRank — Кибер аюулгүй байдал', en: 'HackerRank — Cybersecurity' },
    org: { mn: 'HackerRank', en: 'HackerRank' },
    period: { mn: '2024 — одоо', en: '2024 — Present' },
    description: {
      mn: 'SQL, problem solving зэрэг гэрчилгээнүүд.',
      en: 'SQL, problem solving and other certifications.',
    },
    type: 'training',
  },
  {
    role: { mn: 'CyLab Academy — Кибер аюулгүй байдал', en: 'CyLab Academy — Cybersecurity' },
    org: { mn: 'CyLab Academy', en: 'CyLab Academy' },
    period: { mn: '2025 — одоо', en: '2025 — Present' },
    description: {
      mn: 'Кибер аюулгүй байдлын онлайн сургалт ба CTF сорилтууд.',
      en: 'Cybersecurity training and CTF challenges.',
    },
    type: 'training',
  },
  {
    role: { mn: 'Hack The Box — Self-paced labs', en: 'Hack The Box — Self-paced labs' },
    org: { mn: 'Hack The Box', en: 'Hack The Box' },
    period: { mn: '2025 — одоо', en: '2025 — Present' },
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
