'use client';

import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (y) => {
    setScrolled(y > 50);
  });

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 inset-x-0 z-50 flex justify-center"
      style={{ paddingTop: '14px' }}
    >
      <div
        className="mx-4 flex items-center justify-between px-5 py-3 rounded-2xl transition-all duration-500"
        style={{
          maxWidth: '920px',
          width: '100%',
          background: scrolled
            ? 'rgba(5, 5, 13, 0.92)'
            : 'rgba(5, 5, 13, 0.55)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: scrolled
            ? '1px solid rgba(200, 169, 110, 0.12)'
            : '1px solid rgba(255, 255, 255, 0.06)',
          boxShadow: scrolled
            ? '0 8px 40px rgba(0,0,0,0.5), 0 1px 0 rgba(200,169,110,0.06) inset'
            : '0 4px 24px rgba(0,0,0,0.2)',
        }}
      >
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2.5 group">
          <div
            className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105"
            style={{
              background: 'linear-gradient(135deg, var(--accent-gold) 0%, #9A7040 100%)',
              boxShadow: '0 2px 8px rgba(200,169,110,0.3)',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
                fontSize: '0.6rem',
                color: '#05050D',
                letterSpacing: '0.02em',
              }}
            >
              YS
            </span>
          </div>
          <span
            className="text-white font-semibold"
            style={{ fontFamily: 'var(--font-display)', fontSize: '0.9rem', letterSpacing: '-0.01em' }}
          >
            YeahScene
            <span style={{ color: 'var(--accent-gold)' }}> AI</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-0.5">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-4 py-2 rounded-lg text-sm transition-all duration-200 hover:text-white"
              style={{
                color: 'var(--text-secondary)',
                fontFamily: 'var(--font-body)',
                fontWeight: 400,
              }}
              onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.05)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center">
          <a
            href="#contact"
            className="btn-primary px-5 py-2 rounded-full"
            style={{ fontSize: '0.78rem' }}
          >
            Get Started
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 rounded-lg transition-all duration-200"
          style={{ color: 'var(--text-secondary)' }}
          aria-label="Toggle menu"
          onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.05)')}
          onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -8, scale: 0.98 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="absolute mx-4 inset-x-0 rounded-2xl p-4"
          style={{
            top: 'calc(100% + 6px)',
            background: 'rgba(5,5,13,0.97)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            border: '1px solid rgba(200,169,110,0.12)',
            boxShadow: '0 16px 60px rgba(0,0,0,0.6)',
          }}
        >
          <nav className="flex flex-col mb-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="px-4 py-3 rounded-xl text-sm transition-colors duration-200 hover:text-white"
                style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-body)' }}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div
            className="h-px mb-3"
            style={{ background: 'var(--border-subtle)' }}
          />
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="btn-primary block text-center py-3 rounded-xl text-sm"
          >
            Get Started
          </a>
        </motion.div>
      )}
    </motion.header>
  );
}
