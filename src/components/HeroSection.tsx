'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';

const WORDS = ['Operations', 'Workflows', 'Sales Funnels', 'Support Systems', 'Data Pipelines'];

function RotatingWord() {
  const [index, setIndex] = useState(0);
  const [height, setHeight] = useState<number | undefined>(undefined);
  const measureRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (measureRef.current) {
      setHeight(measureRef.current.offsetHeight);
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % WORDS.length);
    }, 2400);
    return () => clearInterval(interval);
  }, []);

  return (
    <span
      className="relative inline-block overflow-hidden align-bottom"
      style={{ height: height ? `${height}px` : 'auto', verticalAlign: 'bottom' }}
    >
      {/* Hidden measure span to lock height */}
      <span
        ref={measureRef}
        aria-hidden
        className="invisible absolute pointer-events-none text-gradient-gold"
        style={{ whiteSpace: 'nowrap' }}
      >
        Support Systems
      </span>
      <motion.span
        key={index}
        initial={{ y: '100%', opacity: 0 }}
        animate={{ y: '0%', opacity: 1 }}
        exit={{ y: '-100%', opacity: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="inline-block text-gradient-gold"
        style={{ whiteSpace: 'nowrap' }}
      >
        {WORDS[index]}
      </motion.span>
    </span>
  );
}

const METRICS = [
  { value: '10×', label: 'Faster Operations' },
  { value: '80%', label: 'Cost Reduction' },
  { value: '24/7', label: 'Autonomous Uptime' },
];

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-screen flex flex-col overflow-hidden"
      style={{ background: 'var(--bg-void)' }}
    >
      {/* Ambient orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute rounded-full"
          style={{
            width: '500px',
            height: '500px',
            top: '-100px',
            right: '-80px',
            background: 'radial-gradient(circle, rgba(200,169,110,0.07) 0%, transparent 70%)',
            animation: 'float-slow 18s ease-in-out infinite',
            filter: 'blur(50px)',
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            width: '400px',
            height: '400px',
            bottom: '-80px',
            left: '-60px',
            background: 'radial-gradient(circle, rgba(34,211,238,0.05) 0%, transparent 70%)',
            animation: 'float-medium 22s ease-in-out infinite',
            filter: 'blur(60px)',
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            width: '280px',
            height: '280px',
            top: '50%',
            left: '60%',
            background: 'radial-gradient(circle, rgba(200,169,110,0.04) 0%, transparent 70%)',
            animation: 'float-slow 14s ease-in-out infinite reverse',
            filter: 'blur(30px)',
          }}
        />
      </div>

      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.012) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.012) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
          maskImage: 'radial-gradient(ellipse 70% 60% at 50% 45%, black 0%, transparent 100%)',
        }}
      />

      {/* Content — vertically centered with navbar offset */}
      <motion.div
        className="relative z-10 section-container w-full flex flex-col items-center justify-center text-center"
        style={{
          y,
          opacity,
          flex: 1,
          paddingTop: 'clamp(100px, 16vh, 140px)',
          paddingBottom: 'clamp(60px, 8vh, 100px)',
        }}
      >
        {/* Label pill */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="flex items-center gap-2.5 mb-8"
        >
          <div
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-full"
            style={{
              background: 'rgba(200,169,110,0.08)',
              border: '1px solid rgba(200,169,110,0.2)',
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: 'var(--accent-gold)', animation: 'pulse-glow 2s ease-in-out infinite' }}
            />
            <span className="label-tag" style={{ color: 'var(--accent-gold)', fontSize: '0.65rem' }}>
              AI Automation Agency
            </span>
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="text-white mx-auto"
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 800,
            fontSize: 'clamp(2.2rem, 5vw, 4.2rem)',
            letterSpacing: '-0.03em',
            lineHeight: 1.05,
            marginBottom: '0.2em',
          }}
        >
          We Automate Your
        </motion.h1>

        {/* Rotating accent word — same visual weight as h1 */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
          className="mb-7"
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 800,
            fontSize: 'clamp(2.2rem, 5vw, 4.2rem)',
            letterSpacing: '-0.03em',
            lineHeight: 1.05,
          }}
        >
          <RotatingWord />
        </motion.div>

        {/* Sub-copy */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.38 }}
          className="mx-auto mb-9"
          style={{
            color: 'var(--text-secondary)',
            maxWidth: '540px',
            fontFamily: 'var(--font-body)',
            fontWeight: 400,
            fontSize: 'clamp(0.95rem, 1.8vw, 1.1rem)',
            lineHeight: 1.75,
          }}
        >
          We wire custom AI layers and autonomous agents directly into your business—
          replacing manual bottlenecks with systems that run, decide, and scale on their own.
        </motion.p>

        {/* CTA Row */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-14"
        >
          <a
            href="#contact"
            className="btn-primary px-7 py-3.5 rounded-full text-sm flex items-center gap-2 group"
          >
            Architect Your AI Layer
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </a>
          <a
            href="#services"
            className="btn-ghost px-7 py-3.5 rounded-full text-sm"
          >
            See What We Build
          </a>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="w-px h-8 mb-8 mx-auto"
          style={{ background: 'linear-gradient(180deg, var(--border-default), transparent)' }}
        />

        {/* Metrics row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.75 }}
          className="grid grid-cols-3 gap-6 md:gap-12 mx-auto"
          style={{ maxWidth: '480px' }}
        >
          {METRICS.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.82 + i * 0.09 }}
              className="text-center"
            >
              <div
                className="font-bold mb-1"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.3rem, 2.5vw, 1.7rem)',
                  color: 'var(--accent-gold)',
                  letterSpacing: '-0.02em',
                }}
              >
                {m.value}
              </div>
              <div className="label-tag" style={{ color: 'var(--text-muted)', fontSize: '0.6rem' }}>
                {m.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 z-10"
        style={{ color: 'var(--text-muted)' }}
      >
        <span className="label-tag" style={{ fontSize: '0.58rem' }}>Scroll</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-3.5 h-3.5" />
        </motion.div>
      </motion.div>
    </section>
  );
}
