'use client';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { ThemeToggle } from './theme-toggle';
const navItems = [{ href:'#about', label:'About' }, { href:'#skills', label:'Skills' }, { href:'#projects', label:'Projects' }, { href:'#experience', label:'Experience' }, { href:'#contact', label:'Contact' }];
export function Navbar() {
  const [open, setOpen] = useState(false);
  return <header className="sticky top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-xl"><div className="container-width flex h-20 items-center justify-between"><a href="#top" className="text-lg font-semibold tracking-tight">Bala<span className="text-accent">.portfolio</span></a><nav className="hidden items-center gap-7 md:flex">{navItems.map(item => <a key={item.href} href={item.href} className="text-sm text-muted transition hover:text-foreground">{item.label}</a>)}<ThemeToggle /></nav><div className="flex items-center gap-3 md:hidden"><ThemeToggle /><button type="button" onClick={() => setOpen(value => !value)} className="glass rounded-full p-3" aria-label="Toggle menu">{open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}</button></div></div>{open ? <div className="container-width pb-5 md:hidden"><div className="glass rounded-3xl p-4"><div className="flex flex-col gap-3">{navItems.map(item => <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="rounded-2xl px-4 py-3 text-sm text-muted transition hover:bg-background/60 hover:text-foreground">{item.label}</a>)}</div></div></div> : null}</header>;
}
