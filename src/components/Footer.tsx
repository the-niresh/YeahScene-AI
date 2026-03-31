'use client';

import { motion } from 'framer-motion';

const links = [
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
  { label: 'Privacy Policy', href: '/privacy-policy-autonerds-ai' },
  { label: 'Terms of Service', href: '/terms-of-service-autonerds-ai' },
];

export default function Footer() {
  return (
    <footer
      className="py-12 relative"
      style={{ background: 'var(--bg-void)' }}
    >
      <div
        className="absolute top-0 inset-x-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, var(--border-default), transparent)' }}
      />

      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-8"
        >
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div
              className="w-7 h-7 rounded-lg flex items-center justify-center"
              style={{
                background: 'linear-gradient(135deg, var(--accent-gold) 0%, #9A7040 100%)',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 800,
                  fontSize: '0.65rem',
                  color: '#05050D',
                }}
              >
                YS
              </span>
            </div>
            <span
              className="text-white font-semibold text-sm"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              YeahScene<span style={{ color: 'var(--accent-gold)' }}> AI</span>
            </span>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs transition-colors duration-200 hover:text-white"
                style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-body)' }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Copyright */}
          <p className="text-xs text-center" style={{ color: 'var(--text-muted)' }}>
            © {new Date().getFullYear()} YeahScene AI.
            <br className="md:hidden" />
            {' '}All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
