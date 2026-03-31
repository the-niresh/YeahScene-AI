'use client';

import { motion } from 'framer-motion';
import { Bot, Workflow, BarChart3, Puzzle, ArrowUpRight, Zap } from 'lucide-react';

interface Service {
  id: string;
  icon: React.ElementType;
  tag: string;
  title: string;
  description: string;
  capabilities: string[];
  accent: string;
  accentGlow: string;
}

const services: Service[] = [
  {
    id: '01',
    icon: Bot,
    tag: 'Autonomous Agents',
    title: 'AI Agents That Work For You',
    description:
      'We deploy purpose-built autonomous agents that handle complex, multi-step tasks across your tools—email, CRM, scheduling, support—without human intervention.',
    capabilities: [
      'Multi-step decision execution',
      'Cross-platform tool orchestration',
      'Real-time event response',
      'Self-correcting error handling',
    ],
    accent: 'var(--accent-gold)',
    accentGlow: 'var(--accent-gold-glow)',
  },
  {
    id: '02',
    icon: Workflow,
    tag: 'Process Automation',
    title: 'Automate Every Bottleneck',
    description:
      'We map your highest-friction workflows and replace them with intelligent automation pipelines—cutting ops costs and freeing your team to do work that actually matters.',
    capabilities: [
      'End-to-end workflow design',
      'Legacy system integration',
      'Conditional logic & branching',
      'Human-in-the-loop fallbacks',
    ],
    accent: 'var(--accent-cyan)',
    accentGlow: 'var(--accent-cyan-glow)',
  },
  {
    id: '03',
    icon: BarChart3,
    tag: 'AI-Powered CRM & ERP',
    title: 'Systems That Think Ahead',
    description:
      'We build AI-augmented CRM and employee management platforms that surface insights, automate outreach, and manage your team operations with surgical precision.',
    capabilities: [
      'Predictive lead scoring',
      'AI-driven follow-up sequences',
      'Smart employee performance tracking',
      'Automated reporting dashboards',
    ],
    accent: 'var(--accent-gold)',
    accentGlow: 'var(--accent-gold-glow)',
  },
  {
    id: '04',
    icon: Puzzle,
    tag: 'Custom AI Integration',
    title: 'AI Wired Into Your Stack',
    description:
      'We layer AI capabilities directly into your existing software—no rip-and-replace. Your current tools become smarter, faster, and more capable overnight.',
    capabilities: [
      'API-first AI layer design',
      'LLM fine-tuning & deployment',
      'Vector knowledge bases',
      'Real-time data enrichment',
    ],
    accent: 'var(--accent-cyan)',
    accentGlow: 'var(--accent-cyan-glow)',
  },
];

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="card-glow rounded-2xl p-8 group relative overflow-hidden flex flex-col"
      style={{ background: 'var(--bg-surface)' }}
    >
      {/* Hover glow bg */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
        style={{ background: `radial-gradient(circle at 30% 30%, ${service.accentGlow}, transparent 60%)` }}
      />

      {/* Card number */}
      <div
        className="absolute top-6 right-6 label-tag opacity-20 group-hover:opacity-40 transition-opacity"
        style={{ color: service.accent, fontSize: '0.65rem' }}
      >
        {service.id}
      </div>

      {/* Icon */}
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 relative"
        style={{
          background: `${service.accentGlow}`,
          border: `1px solid ${service.accent}30`,
        }}
      >
        <Icon
          className="w-5 h-5"
          style={{ color: service.accent }}
        />
      </div>

      {/* Tag */}
      <div
        className="label-tag mb-3"
        style={{ color: service.accent, fontSize: '0.65rem' }}
      >
        {service.tag}
      </div>

      {/* Title */}
      <h3
        className="display-md text-white mb-4 group-hover:text-opacity-100 transition-colors"
        style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem' }}
      >
        {service.title}
      </h3>

      {/* Description */}
      <p
        className="text-sm mb-6 flex-grow"
        style={{ color: 'var(--text-secondary)', lineHeight: 1.75 }}
      >
        {service.description}
      </p>

      {/* Capabilities list */}
      <ul className="space-y-2 mb-8">
        {service.capabilities.map((cap, i) => (
          <li key={i} className="flex items-start gap-2 text-xs" style={{ color: 'var(--text-secondary)' }}>
            <span
              className="mt-0.5 shrink-0 w-1 h-1 rounded-full translate-y-1"
              style={{ background: service.accent, display: 'inline-block', minWidth: '4px', minHeight: '4px' }}
            />
            {cap}
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a
        href="#contact"
        className="flex items-center gap-2 text-sm font-medium group/link w-fit"
        style={{ color: service.accent, fontFamily: 'var(--font-display)' }}
      >
        Start a Project
        <ArrowUpRight
          className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
        />
      </a>
    </motion.div>
  );
}

export default function ProductShowcase() {
  return (
    <section
      id="services"
      className="relative py-32 overflow-hidden"
      style={{ background: 'var(--bg-deep)' }}
    >
      {/* Background accent */}
      <div
        className="absolute top-0 inset-x-0 h-px"
        style={{
          background: 'linear-gradient(90deg, transparent, var(--border-default), transparent)',
        }}
      />

      <div className="section-container">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8" style={{ background: 'var(--accent-gold-dim)' }} />
            <span className="label-tag" style={{ color: 'var(--accent-gold)' }}>
              What We Build
            </span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2
              className="display-lg text-white"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
                maxWidth: '600px',
              }}
            >
              Every Business Has
              <br />
              <span className="text-gradient-gold">Untapped Leverage.</span>
              <br />
              We Find It.
            </h2>

            <p
              className="text-sm max-w-sm"
              style={{ color: 'var(--text-secondary)', lineHeight: 1.75 }}
            >
              From autonomous agents to deep system integrations—we design, build, and deploy
              the AI infrastructure your competitors wish they had.
            </p>
          </div>
        </motion.div>

        {/* Service cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        {/* Bottom CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 p-8 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6"
          style={{
            background: 'linear-gradient(135deg, rgba(200,169,110,0.08) 0%, rgba(34,211,238,0.04) 100%)',
            border: '1px solid rgba(200,169,110,0.15)',
          }}
        >
          <div className="flex items-center gap-4">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
              style={{ background: 'var(--accent-gold-glow)', border: '1px solid var(--accent-gold-dim)' }}
            >
              <Zap className="w-4 h-4" style={{ color: 'var(--accent-gold)' }} />
            </div>
            <div>
              <div
                className="font-semibold text-white text-sm mb-0.5"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Not sure where to start?
              </div>
              <div className="text-xs" style={{ color: 'var(--text-secondary)' }}>
                We map your highest-ROI automation opportunities in a free 30-min discovery call.
              </div>
            </div>
          </div>
          <a
            href="#contact"
            className="btn-primary px-6 py-3 rounded-full text-sm shrink-0"
          >
            Book Discovery Call
          </a>
        </motion.div>
      </div>

      <div
        className="absolute bottom-0 inset-x-0 h-px"
        style={{
          background: 'linear-gradient(90deg, transparent, var(--border-default), transparent)',
        }}
      />
    </section>
  );
}
