"use client";

import { motion } from 'framer-motion';
import { ArrowRight, Download, ExternalLink, Github, Mail, MapPin, Phone } from 'lucide-react';
import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';
import { MotionSection } from '@/components/section';
import { ThemeProvider } from '@/components/theme-provider';
import { architectureCards, certifications, experience, featureCards, highlights, personalInfo, projects, recruiterFocus, skillGroups, socialLinks, stats } from '@/lib/data';

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: (index: number) => ({ opacity: 1, y: 0, transition: { delay: index * 0.08, duration: 0.5 } })
};

export default function HomePage() {
  return (
    <ThemeProvider>
      <main id="top" className="min-h-screen bg-background text-foreground">
        <Navbar />
        <section className="container-width relative overflow-hidden py-16 sm:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <h1 className="mt-6 max-w-4xl text-4xl font-black tracking-tight sm:text-6xl lg:text-7xl">{personalInfo.name}</h1>
                <p className="mt-4 text-xl font-semibold text-accent sm:text-2xl">{personalInfo.role}</p>
                <p className="mt-6 max-w-3xl text-lg leading-8 text-muted">{personalInfo.tagline}</p>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08, duration: 0.5 }} className="mt-8 flex flex-wrap gap-4">
                <a href="#projects" className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition hover:translate-y-[-2px]">View Projects <ArrowRight className="h-4 w-4" /></a>
                <a href={personalInfo.resumePath} download className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold">Download Resume <Download className="h-4 w-4" /></a>
                <a href="#contact" className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold">Contact Me <Mail className="h-4 w-4" /></a>
              </motion.div>
              <div className="mt-10 flex flex-wrap gap-6 text-sm text-muted">
                <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4" /> {personalInfo.location}</span>
                <span className="inline-flex items-center gap-2"><Mail className="h-4 w-4" /> {personalInfo.email}</span>
                <span className="inline-flex items-center gap-2"><Phone className="h-4 w-4" /> {personalInfo.phone}</span>
              </div>
            </div>
            <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.12, duration: 0.55 }} className="glass rounded-[2rem] p-6">
              <div className="rounded-[1.5rem] border border-border/70 bg-background/80 p-6">
                <p className="text-sm font-medium uppercase tracking-[0.3em] text-muted">Value Snapshot</p>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {stats.map((item) => <div key={item.label} className="rounded-3xl border border-border/70 bg-surface/70 p-5"><p className="text-2xl font-black sm:text-3xl">{item.value}</p><p className="mt-2 text-sm text-muted">{item.label}</p></div>)}
                </div>
                <div className="mt-6 rounded-3xl border border-border/70 bg-surface/70 p-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted">Engineering Impact</p>
                  <ul className="mt-4 space-y-3 text-sm leading-7 text-muted">{highlights.map(item => <li key={item} className="flex gap-3"><span className="mt-2 h-2 w-2 rounded-full bg-accent" /><span>{item}</span></li>)}</ul>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
        <MotionSection id="about" eyebrow="About"title="Professional Summary">
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="glass rounded-[2rem] p-7"><p className="text-lg leading-8 text-muted">{personalInfo.description}</p><div className="mt-8 grid gap-4 sm:grid-cols-3">{featureCards.map(card => { const Icon = card.icon; return <div key={card.title} className="rounded-3xl border border-border/70 bg-background/60 p-5"><Icon className="h-6 w-6 text-accent" /><h3 className="mt-4 font-semibold">{card.title}</h3><p className="mt-2 text-sm leading-7 text-muted">{card.description}</p></div>; })}</div></div>
            <div className="glass rounded-[2rem] p-7"><p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted">Recruiter lens</p><div className="mt-5 space-y-4">{recruiterFocus.map(group => <div key={group.title} className="rounded-3xl border border-border/70 bg-background/60 p-5"><h3 className="font-semibold">{group.title}</h3><div className="mt-3 flex flex-wrap gap-2">{group.items.map(item => <span key={item} className="pill">{item}</span>)}</div></div>)}</div></div>
          </div>
        </MotionSection>
        <MotionSection id="skills" eyebrow="Skills"title="Technical Skills">
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">{skillGroups.map((group, index) => { const Icon = group.icon; return <motion.div key={group.title} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} custom={index} className="glass rounded-[1.75rem] p-6"><div className="flex items-center gap-3"><div className="rounded-2xl bg-accent/10 p-3 text-accent"><Icon className="h-6 w-6" /></div><h3 className="text-lg font-semibold">{group.title}</h3></div><div className="mt-5 flex flex-wrap gap-2">{group.items.map(item => <span key={item} className="rounded-full border border-border/70 px-3 py-2 text-sm text-muted">{item}</span>)}</div></motion.div>; })}</div>
        </MotionSection>
        <MotionSection id="projects" eyebrow="Projects" title="Engineering Projects">
          <div className="grid gap-6 xl:grid-cols-2">{projects.map((project, index) => <motion.article key={project.title} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }} custom={index} className="glass overflow-hidden rounded-[2rem]"><div className={`h-2 w-full bg-gradient-to-r ${project.accent}`} /><div className="p-7"><div className="flex flex-wrap items-center justify-between gap-3"><span className="pill">{project.category}</span><span className="text-sm text-muted">Portfolio-ready case study</span></div><h3 className="mt-5 text-2xl font-bold">{project.title}</h3><p className="mt-4 text-sm leading-7 text-muted">{project.description}</p><div className="mt-6 rounded-3xl border border-border/70 bg-background/60 p-5"><p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted">Impact highlights</p><ul className="mt-3 space-y-3 text-sm leading-7 text-muted">{project.impact.map(point => <li key={point} className="flex gap-3"><span className="mt-2 h-2 w-2 rounded-full bg-accent" /><span>{point}</span></li>)}</ul></div><div className="mt-6 flex flex-wrap gap-2">{project.stack.map(tech => <span key={tech} className="rounded-full border border-border/70 px-3 py-2 text-sm text-muted">{tech}</span>)}</div></div></motion.article>)}</div>
        </MotionSection>
        <MotionSection id="architecture" eyebrow="System Design" title="Engineering Approach">
          <div className="grid gap-5 lg:grid-cols-2 xl:grid-cols-4">{architectureCards.map((card, index) => { const Icon = card.icon; return <motion.div key={card.title} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} custom={index} className="glass rounded-[1.75rem] p-6"><div className="inline-flex rounded-2xl bg-accent/10 p-3 text-accent"><Icon className="h-6 w-6" /></div><h3 className="mt-5 text-lg font-semibold">{card.title}</h3><p className="mt-3 text-sm leading-7 text-muted">{card.text}</p></motion.div>; })}</div>
        </MotionSection>
        <MotionSection id="experience" eyebrow="Experience" title="Professional Experience">
          <div className="relative space-y-6 before:absolute before:left-4 before:top-4 before:h-[calc(100%-2rem)] before:w-px before:bg-border sm:before:left-6">{experience.map((item, index) => <motion.article key={`${item.company}-${item.role}`} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} custom={index} className="relative pl-12 sm:pl-16"><span className="absolute left-0 top-5 h-8 w-8 rounded-full border border-accent/40 bg-accent/10 sm:left-2" /><div className="glass rounded-[2rem] p-7"><div className="flex flex-wrap items-start justify-between gap-3"><div><h3 className="text-2xl font-bold">{item.role}</h3><p className="mt-1 text-base font-medium text-accent">{item.company}</p></div><span className="pill">{item.period}</span></div><p className="mt-4 text-sm leading-7 text-muted">{item.summary}</p><ul className="mt-5 grid gap-3 text-sm leading-7 text-muted sm:grid-cols-2">{item.points.map(point => <li key={point} className="rounded-2xl border border-border/70 bg-background/60 px-4 py-3">{point}</li>)}</ul></div></motion.article>)}</div>
        </MotionSection>
        <MotionSection id="certifications" eyebrow="Certifications" title="Certifications & Learning">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">{certifications.map((item, index) => <motion.div key={item} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} custom={index} className="glass rounded-[1.5rem] p-5 text-sm font-medium">{item}</motion.div>)}</div>
        </MotionSection>
        <MotionSection id="contact" eyebrow="Contact" title="Contact">
        <div className="grid gap-6"><div className="glass rounded-[2rem] p-7"><h3 className="text-2xl font-bold">Let’s connect</h3><p className="mt-4 text-sm leading-7 text-muted">Open to new opportunities.</p><div className="mt-6 space-y-4 text-sm text-muted"><p className="flex items-center gap-3"><Mail className="h-4 w-4 text-accent" /> {personalInfo.email}</p><p className="flex items-center gap-3"><Phone className="h-4 w-4 text-accent" /> {personalInfo.phone}</p><p className="flex items-center gap-3"><MapPin className="h-4 w-4 text-accent" /> {personalInfo.location}</p></div><div className="mt-7 flex flex-wrap gap-3">{socialLinks.map(item => { const Icon = item.icon; return (<a key={item.label} href={item.href} target="_blank" rel="noreferrer" className="glass inline-flex items-center gap-2 rounded-full px-4 py-3 text-sm font-semibold"><Icon className="h-4 w-4" /> {item.label}</a>); })}</div></div></div>
        </MotionSection>
        <Footer />
      </main>
    </ThemeProvider>
  );
}
