import { personalInfo } from '@/lib/data';
export function Footer() {
  return <footer className="border-t border-border/60 py-8"><div className="container-width flex flex-col gap-3 text-sm text-muted sm:flex-row sm:items-center sm:justify-between"><p>© {new Date().getFullYear()} {personalInfo.name}. Built with Next.js and Tailwind CSS.</p></div></footer>;
}
