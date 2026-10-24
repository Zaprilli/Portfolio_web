export type Lang = 'mn' | 'en';

export interface Achievement {
  event: string;
  detail: { mn: string; en: string };
  year: string;
  icon: string;
}

export interface SkillCategory {
  category: { mn: string; en: string };
  items: string[];
}

export interface Project {
  name: string;
  description: { mn: string; en: string };
  tags: string[];
  icon: string;
}

export interface TimelineItem {
  role: { mn: string; en: string };
  org: string;
  period: string;
  description: { mn: string; en: string };
  type: 'education' | 'work' | 'service';
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
    status: { mn: string; en: string };
  };
  achievementsSection: {
    heading: { mn: string; en: string };
    subheading: { mn: string; en: string };
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
    };
  };
  interestsSection: {
    heading: { mn: string; en: string };
    subheading: { mn: string; en: string };
    items: { mn: string; en: string }[];
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
    disclaimer: { mn: string; en: string };
    sideNote: { mn: string; en: string };
  };
  footer: {
    rights: { mn: string; en: string };
    builtWith: { mn: string; en: string };
  };
  langToggle: { label: string };
}

export const content: Content = {
  meta: {
    title: {
      mn: 'Маргад-Эрдэнэ Бямбабаасан | IT Сурагч & Кибер Аюулгүй Байдлын Мэргэжилтэн',
      en: 'Margad-Erdene Byambabasan | IT Student & Cybersecurity Specialist',
    },
    description: {
      mn: 'МУИС-ийн МТЭС-ийн Мэдээллийн технологийн 3-р суралцагч. Системийн аюулгүй байдал, Arch Linux орчин, C ба Python програмчлал, веб хөгжүүлэлтийн чиглэлээр суралцаж байна.',
      en: 'Third-year IT student at the National University of Mongolia (NUM-MTES) specializing in system security, Arch Linux environments, C programming, Python, and full-stack development.',
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
    title: { mn: 'IT Сурагч & Кибер Аюулгүй Байдлын Мэргэжилтэн', en: 'IT Student & Cybersecurity Specialist' },
    bio: {
      mn: 'МУИС-ийн МТЭС-ийн Мэдээллийн технологийн 3-р суралцагч. Системийн аюулгүй байдал, Arch Linux орчин, C ба Python програмчлал, веб хөгжүүлэлтийн чиглэлээр суралцаж байна.',
      en: 'Third-year IT student at the National University of Mongolia (NUM-MTES) specializing in system security, Arch Linux environments, C programming, Python, and full-stack development.',
    },
    ctaContact: { mn: 'Холбоо барих', en: 'Get in touch' },
    ctaProjects: { mn: 'Төслүүд үзэх', en: 'View projects' },
    status: { mn: 'Нээлттэй: Фриланс дэмжлэг', en: 'Open to: Freelance support' },
  },
  achievementsSection: {
    heading: { mn: 'Амжилт & Бага', en: 'Achievements & Awards' },
    subheading: {
      mn: 'Кибер аюулгүй байдлын тэмцээнүүд болон баталгаажуулалтууд.',
      en: 'Cybersecurity competitions and certifications.',
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
    heading: { mn: 'Туршлага & Боловсрол', en: 'Experience & Education' },
    subheading: {
      mn: 'Боловсрол, алба хаасан болон мэргэжлийн туршлага.',
      en: 'Education, service and professional experience.',
    },
    labels: {
      education: { mn: 'Боловсрол', en: 'Education' },
      work: { mn: 'Ажил', en: 'Work' },
      service: { mn: 'Алба', en: 'Service' },
    },
  },
  interestsSection: {
    heading: { mn: 'Хувийн Сонирхол', en: 'Personal Interests' },
    subheading: {
      mn: 'Загвар өмсөгч биш — жинхэнэ сонирхлууд.',
      en: 'Not a template — real hobbies.',
    },
    items: [
      { mn: 'Техник угсаралт', en: 'Hardware Assembly' },
      { mn: 'Off-Road шинэчлэлт (Nissan X-Trail)', en: 'Off-Road Mods (Nissan X-Trail)' },
      { mn: 'TETR.IO (S+ Ранг)', en: 'TETR.IO (S+ Rank)' },
      { mn: 'Урт зайн гүйлт (5K Strava Challenge)', en: 'Long-distance Running (5K Strava Challenge)' },
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
    disclaimer: {
      mn: 'Энэ нь хэвэнчлэл (frontend) хэлбэр бөгөөд API холболтод бэлэн байна.',
      en: 'This is a frontend-only form, ready for future API integration.',
    },
    sideNote: {
      mn: 'Хариу авахын тулд имэйлээ үлдээнэ үү. Бүх холбоосууд аюулгүй байдлаар нээгдэнэ.',
      en: 'Leave your email for a reply. All links open securely.',
    },
  },
  footer: {
    rights: { mn: 'Бүх эрх хуулиар хамгаалагдсан.', en: 'All rights reserved.' },
    builtWith: { mn: 'Next.js, TypeScript, Tailwind, Framer Motion ашиглан бүтээв', en: 'Built with Next.js, TypeScript, Tailwind, Framer Motion' },
  },
  langToggle: { label: 'MN / EN' },
};

export const achievements: Achievement[] = [
  {
    event: 'NUMCTF 2025',
    detail: { mn: 'Кибер аюулгүй байдал — 2-р байр', en: 'Cybersecurity — 2nd Place' },
    year: '2025',
    icon: '🏆',
  },
  {
    event: 'Haruulzangi CTF 2026',
    detail: { mn: 'Үндэсний кибер аюулгүй байдал — Топ 50', en: 'National Cybersecurity — Top 50' },
    year: '2026',
    icon: '🚩',
  },
  {
    event: 'OpenwaveWanderlab Science CTF',
    detail: { mn: 'STEM — 3-р байр', en: 'STEM — 3rd Place' },
    year: '2025',
    icon: '🔬',
  },
  {
    event: 'HackerRank',
    detail: { mn: 'Basic SQL Сертификат', en: 'Basic SQL Certification' },
    year: '2024',
    icon: '📜',
  },
];

export const skillCategories: SkillCategory[] = [
  {
    category: { mn: 'Үйлдлийн Систем & Орчин', en: 'OS & Environment' },
    items: ['Arch Linux', 'Hyprland', 'Wayland', 'Kitty', 'Zsh', 'Windows', 'macOS'],
  },
  {
    category: { mn: 'Хэл & Веб', en: 'Languages & Web' },
    items: ['C', 'Python', 'JavaScript', 'TypeScript', 'Next.js', 'React', 'TailwindCSS', 'Supabase', 'SQL'],
  },
  {
    category: { mn: 'Кибер Аюулгүй Байдал', en: 'Cybersecurity' },
    items: [
      'CTF Problem Solving',
      'Network Analysis (Wireshark)',
      'OSINT Tools',
      'System Hardening',
      'Hardware Diagnostics',
    ],
  },
];

export const projects: Project[] = [
  {
    name: 'UniSuite',
    description: {
      mn: 'Оюутны өдөр тутмын амьдралыг автоматжуулсан веб хөгжүүлэлтийн платформ.',
      en: 'Automated student lifestyle web application platform.',
    },
    tags: ['Next.js', 'TypeScript', 'Supabase', 'TailwindCSS'],
    icon: '🎓',
  },
  {
    name: 'Magic-ai',
    description: {
      mn: 'Академик даалгавруудад зориулсан Next.js дээр суурилсан аппликейшн.',
      en: 'Next.js application for academic coursework.',
    },
    tags: ['Next.js', 'AI', 'TypeScript'],
    icon: '🤖',
  },
  {
    name: 'Hand Gesture Recognition',
    description: {
      mn: 'Google MediaPipe & Teachable Machine ашигласан компьютерийн харааны гарын хөдөлгөөн таних систем.',
      en: 'Computer vision system using Google MediaPipe & Teachable Machine.',
    },
    tags: ['Python', 'MediaPipe', 'Computer Vision'],
    icon: '👋',
  },
  {
    name: 'System Utilities & Dotfiles',
    description: {
      mn: 'Arch Linux-д зориулсан захиалгат shell скрипт болон тохиргоонууд.',
      en: 'Custom Arch Linux shell scripts and configurations.',
    },
    tags: ['Bash', 'Arch Linux', 'Zsh', 'Hyprland'],
    icon: '⚙️',
  },
];

export const timeline: TimelineItem[] = [
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
    role: { mn: 'IT Дэмжлэгийн Мэргэжилтэн (Фриланс)', en: 'IT Support Specialist (Freelance)' },
    org: 'Freelance',
    period: '2023 — одоо / Present',
    description: {
      mn: 'Захиалгат PC угсралт, Windows/Linux систем тохиргоо, аюулгүй байдлын хатуужилт, AnyDesk ашиглан зайны дэмжлэг.',
      en: 'Custom PC assembly, Windows/Linux system setup, security hardening, remote support via AnyDesk.',
    },
    type: 'work',
  },
];

export function t(value: { mn: string; en: string }, lang: Lang): string {
  return value[lang];
}
