'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Mail, Phone, Building2, DollarSign, User, MessageSquare, ArrowRight } from 'lucide-react';
import { toast } from 'sonner';

interface FormData {
  name: string;
  mobile: string;
  email: string;
  company: string;
  budget: string;
  requirements: string;
}

const budgetRanges = [
  'Less than $5,000',
  '$5,000 – $10,000',
  '$10,000 – $25,000',
  '$25,000 – $50,000',
  'More than $50,000',
];

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'niresh@yeahscene.com', href: 'mailto:niresh@yeahscene.com' },
  { icon: Phone, label: 'Phone', value: '+91 94881 86900', href: 'tel:+919488186900' },
];

export default function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    mobile: '',
    email: '',
    company: '',
    budget: '',
    requirements: '',
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors: Partial<FormData> = {};
    if (!formData.name.trim()) newErrors.name = 'Required';
    if (!formData.mobile.trim()) newErrors.mobile = 'Required';
    if (!formData.email.trim()) newErrors.email = 'Required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email';
    if (!formData.company.trim()) newErrors.company = 'Required';
    if (!formData.budget) newErrors.budget = 'Select a range';
    if (!formData.requirements.trim()) newErrors.requirements = 'Required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      toast.error('Please complete all required fields');
      return;
    }
    setIsSubmitting(true);
    const toastId = toast.loading('Sending your message...');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!response.ok) throw new Error('Failed');
      toast.success("Message sent. We'll be in touch within 24 hours.", { id: toastId });
      setFormData({ name: '', mobile: '', email: '', company: '', budget: '', requirements: '' });
    } catch {
      toast.error('Something went wrong. Please try again.', { id: toastId });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-32 overflow-hidden"
      style={{ background: 'var(--bg-void)' }}
    >
      {/* Ambient glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: '700px',
          height: '700px',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle, rgba(200,169,110,0.04) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">

          {/* Left column — context */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-2"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8" style={{ background: 'var(--accent-gold-dim)' }} />
              <span className="label-tag" style={{ color: 'var(--accent-gold)' }}>Get in Touch</span>
            </div>

            <h2
              className="display-lg text-white mb-6"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                lineHeight: 1.1,
              }}
            >
              Let's Build Your
              <br />
              <span className="text-gradient-gold">AI Layer.</span>
            </h2>

            <p className="text-sm mb-10" style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
              Tell us about your business and where the bottlenecks are. We'll come back with
              a concrete plan for what can be automated—and what it unlocks for your team.
            </p>

            <div className="space-y-4">
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  className="flex items-center gap-4 group"
                >
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-colors duration-300 group-hover:border-opacity-50"
                    style={{
                      background: 'var(--bg-elevated)',
                      border: '1px solid var(--border-subtle)',
                    }}
                  >
                    <Icon className="w-4 h-4" style={{ color: 'var(--accent-gold)' }} />
                  </div>
                  <div>
                    <div className="label-tag mb-0.5" style={{ color: 'var(--text-muted)', fontSize: '0.6rem' }}>
                      {label}
                    </div>
                    <div
                      className="text-sm transition-colors duration-200 group-hover:text-white"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      {value}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Social proof */}
            <div
              className="mt-12 p-5 rounded-xl"
              style={{
                background: 'var(--bg-surface)',
                border: '1px solid var(--border-subtle)',
              }}
            >
              <div className="flex items-start gap-3">
                <MessageSquare className="w-4 h-4 mt-0.5 shrink-0" style={{ color: 'var(--accent-gold)' }} />
                <div>
                  <p className="text-xs italic mb-2" style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                    "The AI agent YeahScene built for our inbound pipeline reduced our response time
                    from 4 hours to under 90 seconds. It paid for itself in the first month."
                  </p>
                  <div className="label-tag" style={{ color: 'var(--text-muted)', fontSize: '0.6rem' }}>
                    — Ops Director, SaaS Company
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right column — form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="glass rounded-2xl p-8"
              style={{ border: '1px solid var(--border-subtle)' }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                {/* Name */}
                <div>
                  <label className="label-tag block mb-2" style={{ color: 'var(--text-muted)', fontSize: '0.65rem' }}>
                    <span className="flex items-center gap-1.5">
                      <User className="w-3 h-3" /> Full Name
                    </span>
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="input-dark w-full px-4 py-3 rounded-lg text-sm"
                    placeholder="Alex Johnson"
                    style={errors.name ? { borderColor: '#EF4444' } : {}}
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs" style={{ color: '#EF4444' }}>{errors.name}</p>
                  )}
                </div>

                {/* Mobile */}
                <div>
                  <label className="label-tag block mb-2" style={{ color: 'var(--text-muted)', fontSize: '0.65rem' }}>
                    <span className="flex items-center gap-1.5">
                      <Phone className="w-3 h-3" /> Mobile
                    </span>
                  </label>
                  <input
                    type="tel"
                    value={formData.mobile}
                    onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                    className="input-dark w-full px-4 py-3 rounded-lg text-sm"
                    placeholder="+1 (555) 000-0000"
                    style={errors.mobile ? { borderColor: '#EF4444' } : {}}
                  />
                  {errors.mobile && (
                    <p className="mt-1 text-xs" style={{ color: '#EF4444' }}>{errors.mobile}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="label-tag block mb-2" style={{ color: 'var(--text-muted)', fontSize: '0.65rem' }}>
                    <span className="flex items-center gap-1.5">
                      <Mail className="w-3 h-3" /> Email Address
                    </span>
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="input-dark w-full px-4 py-3 rounded-lg text-sm"
                    placeholder="alex@company.com"
                    style={errors.email ? { borderColor: '#EF4444' } : {}}
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs" style={{ color: '#EF4444' }}>{errors.email}</p>
                  )}
                </div>

                {/* Company */}
                <div>
                  <label className="label-tag block mb-2" style={{ color: 'var(--text-muted)', fontSize: '0.65rem' }}>
                    <span className="flex items-center gap-1.5">
                      <Building2 className="w-3 h-3" /> Company
                    </span>
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="input-dark w-full px-4 py-3 rounded-lg text-sm"
                    placeholder="Your Company"
                    style={errors.company ? { borderColor: '#EF4444' } : {}}
                  />
                  {errors.company && (
                    <p className="mt-1 text-xs" style={{ color: '#EF4444' }}>{errors.company}</p>
                  )}
                </div>

                {/* Budget */}
                <div className="sm:col-span-2">
                  <label className="label-tag block mb-2" style={{ color: 'var(--text-muted)', fontSize: '0.65rem' }}>
                    <span className="flex items-center gap-1.5">
                      <DollarSign className="w-3 h-3" /> Budget Range
                    </span>
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="input-dark w-full px-4 py-3 rounded-lg text-sm"
                    style={{
                      ...(errors.budget ? { borderColor: '#EF4444' } : {}),
                      appearance: 'none',
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%238B8BA0' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E")`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right 16px center',
                    }}
                  >
                    <option value="" style={{ background: '#0D0D1F' }}>Select investment range</option>
                    {budgetRanges.map((range) => (
                      <option key={range} value={range} style={{ background: '#0D0D1F' }}>{range}</option>
                    ))}
                  </select>
                  {errors.budget && (
                    <p className="mt-1 text-xs" style={{ color: '#EF4444' }}>{errors.budget}</p>
                  )}
                </div>

                {/* Requirements */}
                <div className="sm:col-span-2">
                  <label className="label-tag block mb-2" style={{ color: 'var(--text-muted)', fontSize: '0.65rem' }}>
                    <span className="flex items-center gap-1.5">
                      <MessageSquare className="w-3 h-3" /> Tell Us About Your Business
                    </span>
                  </label>
                  <textarea
                    value={formData.requirements}
                    onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                    className="input-dark w-full px-4 py-3 rounded-lg text-sm resize-none"
                    rows={4}
                    placeholder="Describe your current operations, biggest bottlenecks, and what you'd like to automate or improve..."
                    style={errors.requirements ? { borderColor: '#EF4444' } : {}}
                  />
                  {errors.requirements && (
                    <p className="mt-1 text-xs" style={{ color: '#EF4444' }}>{errors.requirements}</p>
                  )}
                </div>
              </div>

              {/* Submit */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={!isSubmitting ? { scale: 1.01 } : {}}
                whileTap={!isSubmitting ? { scale: 0.99 } : {}}
                className="btn-primary mt-6 w-full py-4 rounded-xl text-sm flex items-center justify-center gap-2"
                style={isSubmitting ? { opacity: 0.6, cursor: 'not-allowed' } : {}}
              >
                {isSubmitting ? (
                  <>
                    <div
                      className="w-4 h-4 rounded-full border-2 animate-spin"
                      style={{ borderColor: 'rgba(5,5,13,0.3)', borderTopColor: 'rgba(5,5,13,0.8)' }}
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </motion.button>

              <p className="mt-4 text-center text-xs" style={{ color: 'var(--text-muted)' }}>
                We respond within 24 hours. No spam, ever.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
