import {
  Activity,
  Award,
  BookOpen,
  Bot,
  Briefcase,
  Code2,
  Cpu,
  Dumbbell,
  Flag,
  FlaskConical,
  Footprints,
  GraduationCap,
  Hand,
  Languages,
  Medal,
  Monitor,
  Mountain,
  Puzzle,
  ShieldCheck,
  SquareTerminal,
  Terminal,
  Trophy,
  type LucideIcon,
} from 'lucide-react';

export const iconMap: Record<string, LucideIcon> = {
  trophy: Trophy,
  flag: Flag,
  flask: FlaskConical,
  medal: Medal,
  award: Award,
  languages: Languages,
  monitor: Monitor,
  code: Code2,
  'shield-check': ShieldCheck,
  'book-open': BookOpen,
  'graduation-cap': GraduationCap,
  bot: Bot,
  hand: Hand,
  terminal: Terminal,
  'square-terminal': SquareTerminal,
  briefcase: Briefcase,
  puzzle: Puzzle,
  cpu: Cpu,
  footprints: Footprints,
  activity: Activity,
  mountain: Mountain,
  dumbbell: Dumbbell,
};

export function Icon({
  name,
  className = 'h-5 w-5',
}: {
  name: string;
  className?: string;
}) {
  const Component = iconMap[name] ?? Award;
  return <Component className={className} strokeWidth={1.7} aria-hidden />;
}
