'use client';
import { motion } from 'framer-motion';
export function MotionSection({ id, eyebrow, title, subtitle, children }: { id: string; eyebrow?: string; title: string; subtitle?: string; children: React.ReactNode; }) {
  return <motion.section id={id} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.55 }} className="container-width py-20">{eyebrow ? <p className="pill">{eyebrow}</p> : null}<h2 className="section-title mt-5">{title}</h2>{subtitle ? <p className="section-subtitle">{subtitle}</p> : null}<div className="mt-10">{children}</div></motion.section>;
}
