'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';

const WORDS = ['Operations', 'Workflows', 'Sales Funnels', 'Support Systems', 'Data Pipelines'];

function RotatingWord() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % WORDS.length);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className="relative inline-block overflow-hidden" style={{ minWidth: '320px' }}>
      <motion.span
        key={index}
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -60, opacity: 0 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="inline-block text-gradient-gold"
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
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: 'var(--bg-void)' }}
    >
      {/* Ambient orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute rounded-full"
          style={{
            width: '600px',
            height: '600px',
            top: '-200px',
            right: '-100px',
            background: 'radial-gradient(circle, rgba(200,169,110,0.08) 0%, transparent 70%)',
            animation: 'float-slow 18s ease-in-out infinite',
            filter: 'blur(40px)',
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            width: '500px',
            height: '500px',
            bottom: '-150px',
            left: '-50px',
            background: 'radial-gradient(circle, rgba(34,211,238,0.06) 0%, transparent 70%)',
            animation: 'float-medium 22s ease-in-out infinite',
            filter: 'blur(60px)',
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            width: '300px',
            height: '300px',
            top: '40%',
            left: '55%',
            background: 'radial-gradient(circle, rgba(200,169,110,0.05) 0%, transparent 70%)',
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
            linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
          maskImage: 'radial-gradient(ellipse 80% 60% at 50% 50%, black 0%, transparent 100%)',
        }}
      />

      {/* Content */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 section-container w-full text-center"
      >
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex items-center justify-center gap-3 mb-10"
        >
          <div className="h-px w-12" style={{ background: 'var(--accent-gold-dim)' }} />
          <span className="label-tag" style={{ color: 'var(--accent-gold)' }}>
            AI Automation Agency
          </span>
          <div className="h-px w-12" style={{ background: 'var(--accent-gold-dim)' }} />
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="display-xl text-white mb-4 mx-auto"
          style={{
            fontSize: 'clamp(3rem, 8vw, 7rem)',
            maxWidth: '1000px',
            fontFamily: 'var(--font-display)',
          }}
        >
          We Automate Your
        </motion.h1>

        {/* Rotating word */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="display-xl mb-8"
          style={{
            fontSize: 'clamp(3rem, 8vw, 7rem)',
            fontFamily: 'var(--font-display)',
          }}
        >
          <RotatingWord />
        </motion.div>

        {/* Sub-copy */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="text-lg md:text-xl mx-auto mb-12"
          style={{
            color: 'var(--text-secondary)',
            maxWidth: '640px',
            fontFamily: 'var(--font-body)',
            fontWeight: 400,
            lineHeight: 1.7,
          }}
        >
          We wire custom AI layers and autonomous agents directly into your business—
          replacing manual bottlenecks with systems that run, decide, and scale on their own.
        </motion.p>

        {/* CTA Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="btn-primary px-8 py-4 rounded-full text-sm flex items-center gap-2 group"
          >
            Architect Your AI Layer
            <ArrowRight
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
          <a
            href="#services"
            className="btn-ghost px-8 py-4 rounded-full text-sm flex items-center gap-2"
          >
            See What We Build
          </a>
        </motion.div>

        {/* Metrics row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.85 }}
          className="mt-20 grid grid-cols-3 gap-4 md:gap-8 mx-auto"
          style={{ maxWidth: '560px' }}
        >
          {METRICS.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 + i * 0.1 }}
              className="text-center"
            >
              <div
                className="display-md mb-1"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                  color: 'var(--accent-gold)',
                }}
              >
                {m.value}
              </div>
              <div className="label-tag" style={{ color: 'var(--text-muted)', fontSize: '0.65rem' }}>
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
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ color: 'var(--text-muted)' }}
      >
        <span className="label-tag" style={{ fontSize: '0.6rem' }}>Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
