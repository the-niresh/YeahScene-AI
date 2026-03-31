'use client';

import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, ArrowUpRight } from 'lucide-react';

const timeline = [
  {
    year: '2025',
    title: 'Launched Full-Service AI Automation',
    description:
      'Expanded from AI consulting into end-to-end build services—deploying autonomous agents, custom AI CRMs, and intelligent workflow systems for clients across multiple industries.',
  },
  {
    year: '2024',
    title: 'Founded YeahScene AI',
    description:
      'Born from a conviction that most businesses are operating at 30% capacity due to manual, repetitive operations. We set out to change that—one automation at a time.',
  },
];

const stats = [
  { value: '15+', label: 'Automations Deployed' },
  { value: '3×', label: 'Avg. Efficiency Gain' },
  { value: '100%', label: 'Client Retention' },
];

const contact = [
  { icon: MapPin, text: 'Salem, TN, India' },
  { icon: Mail, text: 'niresh@yeahscene.com', href: 'mailto:niresh@yeahscene.com' },
  { icon: Phone, text: '+91 94881 86900', href: 'tel:+919488186900' },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative py-32 overflow-hidden"
      style={{ background: 'var(--bg-deep)' }}
    >
      <div
        className="absolute top-0 inset-x-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, var(--border-default), transparent)' }}
      />

      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8" style={{ background: 'var(--accent-gold-dim)' }} />
            <span className="label-tag" style={{ color: 'var(--accent-gold)' }}>About Us</span>
          </div>
          <h2
            className="display-lg text-white"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
              maxWidth: '600px',
            }}
          >
            Built By Operators,
            <br />
            <span className="text-gradient-gold">For Operators.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

          {/* Left — story + stats + contact */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-base mb-8" style={{ color: 'var(--text-secondary)', lineHeight: 1.85 }}>
              YeahScene AI was founded with a simple but ambitious premise: every business—regardless
              of size—deserves access to the kind of intelligent automation that used to require a
              dedicated engineering team and a seven-figure budget.
            </p>
            <p className="text-base mb-12" style={{ color: 'var(--text-secondary)', lineHeight: 1.85 }}>
              We're not a software vendor. We're an integration partner. We get deep inside your
              operations, identify where time and money are leaking, and build AI systems that
              plug those gaps permanently.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-12">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="p-4 rounded-xl text-center"
                  style={{
                    background: 'var(--bg-surface)',
                    border: '1px solid var(--border-subtle)',
                  }}
                >
                  <div
                    className="text-2xl font-bold mb-1"
                    style={{ fontFamily: 'var(--font-display)', color: 'var(--accent-gold)' }}
                  >
                    {stat.value}
                  </div>
                  <div className="label-tag" style={{ color: 'var(--text-muted)', fontSize: '0.6rem' }}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Contact info */}
            <div className="space-y-3">
              {contact.map(({ icon: Icon, text, href }) => {
                const El = href ? 'a' : 'div';
                return (
                  <El
                    key={text}
                    {...(href ? { href } : {})}
                    className="flex items-center gap-3 group"
                  >
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                      style={{
                        background: 'var(--bg-elevated)',
                        border: '1px solid var(--border-subtle)',
                      }}
                    >
                      <Icon className="w-3.5 h-3.5" style={{ color: 'var(--accent-gold)' }} />
                    </div>
                    <span
                      className="text-sm transition-colors duration-200 group-hover:text-white"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      {text}
                    </span>
                    {href && (
                      <ArrowUpRight
                        className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity"
                        style={{ color: 'var(--accent-gold)' }}
                      />
                    )}
                  </El>
                );
              })}
            </div>
          </motion.div>

          {/* Right — timeline */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <div
              className="label-tag mb-8"
              style={{ color: 'var(--text-muted)', fontSize: '0.65rem' }}
            >
              Our Journey
            </div>

            <div className="relative">
              {/* Vertical line */}
              <div
                className="absolute left-4 top-2 bottom-2 w-px"
                style={{ background: 'linear-gradient(180deg, var(--accent-gold-dim), transparent)' }}
              />

              <div className="space-y-10">
                {timeline.map((item, i) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.2 }}
                    className="relative pl-12"
                  >
                    {/* Dot */}
                    <div
                      className="absolute left-0 top-1.5 w-8 h-8 rounded-full flex items-center justify-center"
                      style={{
                        background: 'var(--bg-surface)',
                        border: '1px solid var(--accent-gold-dim)',
                        boxShadow: '0 0 12px var(--accent-gold-glow)',
                      }}
                    >
                      <div
                        className="w-2 h-2 rounded-full"
                        style={{ background: 'var(--accent-gold)' }}
                      />
                    </div>

                    <div
                      className="p-5 rounded-xl"
                      style={{
                        background: 'var(--bg-surface)',
                        border: '1px solid var(--border-subtle)',
                      }}
                    >
                      <span
                        className="label-tag"
                        style={{ color: 'var(--accent-gold)', fontSize: '0.65rem', display: 'block', marginBottom: '8px' }}
                      >
                        {item.year}
                      </span>
                      <h4
                        className="font-semibold text-white mb-2 text-sm"
                        style={{ fontFamily: 'var(--font-display)' }}
                      >
                        {item.title}
                      </h4>
                      <p className="text-xs" style={{ color: 'var(--text-secondary)', lineHeight: 1.75 }}>
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}

                {/* Future item */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="relative pl-12"
                >
                  <div
                    className="absolute left-0 top-1.5 w-8 h-8 rounded-full flex items-center justify-center"
                    style={{
                      background: 'var(--bg-surface)',
                      border: '1px dashed var(--border-default)',
                    }}
                  >
                    <div
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ background: 'var(--text-muted)' }}
                    />
                  </div>

                  <div
                    className="p-5 rounded-xl"
                    style={{
                      background: 'rgba(200,169,110,0.03)',
                      border: '1px dashed var(--border-subtle)',
                    }}
                  >
                    <span
                      className="label-tag"
                      style={{ color: 'var(--text-muted)', fontSize: '0.65rem', display: 'block', marginBottom: '8px' }}
                    >
                      Next
                    </span>
                    <h4
                      className="font-semibold text-sm mb-2"
                      style={{ fontFamily: 'var(--font-display)', color: 'var(--text-secondary)' }}
                    >
                      Your Business Goes Here
                    </h4>
                    <p className="text-xs" style={{ color: 'var(--text-muted)', lineHeight: 1.75 }}>
                      The next chapter is the businesses we transform. Could be yours.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div
        className="absolute bottom-0 inset-x-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, var(--border-default), transparent)' }}
      />
    </section>
  );
}
