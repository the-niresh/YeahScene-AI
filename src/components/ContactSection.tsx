'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Mail, Phone, Building2, DollarSign, Send, User } from 'lucide-react';
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
  '$5,000 - $10,000',
  '$10,000 - $25,000',
  '$25,000 - $50,000',
  'More than $50,000',
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
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.mobile.trim()) newErrors.mobile = 'Mobile number is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.company.trim()) newErrors.company = 'Company name is required';
    if (!formData.budget) newErrors.budget = 'Please select a budget range';
    if (!formData.requirements.trim()) newErrors.requirements = 'Requirements are required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast.error('Please fill in all required fields correctly');
      return;
    }
    
    setIsSubmitting(true);
    const toastId = toast.loading('Sending your message...');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Failed to submit form');
      
      toast.success('Message sent successfully! We\'ll get back to you soon.', {
        id: toastId,
      });

      setFormData({
        name: '',
        mobile: '',
        email: '',
        company: '',
        budget: '',
        requirements: '',
      });
    } catch (error) {
      toast.error('Failed to send message. Please try again later.', {
        id: toastId,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses = "w-full px-4 py-3 rounded-lg border bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200";
  const labelClasses = "block text-gray-700 text-sm font-medium mb-2";
  const errorClasses = "text-red-500 text-sm mt-1";

  return (
    <section id="contact" className="bg-gray-50 py-20">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4"
      >
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-4xl font-bold text-gray-900 mb-4"
            >
              Get in Touch
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-xl text-gray-600"
            >
              Let's discuss how we can help transform your business
            </motion.p>
          </div>

          <motion.form 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl shadow-lg p-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name Input */}
              <div>
                <label htmlFor="name" className={labelClasses}>
                  <span className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    Full Name
                  </span>
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={`${inputClasses} ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="John Doe"
                />
                {errors.name && <p className={errorClasses}>{errors.name}</p>}
              </div>

              {/* Mobile Input */}
              <div>
                <label htmlFor="mobile" className={labelClasses}>
                  <span className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    Mobile Number
                  </span>
                </label>
                <input
                  type="tel"
                  id="mobile"
                  value={formData.mobile}
                  onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                  className={`${inputClasses} ${errors.mobile ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="+1 (555) 000-0000"
                />
                {errors.mobile && <p className={errorClasses}>{errors.mobile}</p>}
              </div>

              {/* Email Input */}
              <div>
                <label htmlFor="email" className={labelClasses}>
                  <span className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    Email Address
                  </span>
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={`${inputClasses} ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="john@example.com"
                />
                {errors.email && <p className={errorClasses}>{errors.email}</p>}
              </div>

              {/* Company Input */}
              <div>
                <label htmlFor="company" className={labelClasses}>
                  <span className="flex items-center gap-2">
                    <Building2 className="w-4 h-4" />
                    Company Name
                  </span>
                </label>
                <input
                  type="text"
                  id="company"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className={`${inputClasses} ${errors.company ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="Your Company"
                />
                {errors.company && <p className={errorClasses}>{errors.company}</p>}
              </div>

              {/* Budget Input */}
              <div className="md:col-span-2">
                <label htmlFor="budget" className={labelClasses}>
                  <span className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4" />
                    Budget Range
                  </span>
                </label>
                <select
                  id="budget"
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  className={`${inputClasses} ${errors.budget ? 'border-red-500' : 'border-gray-300'}`}
                >
                  <option value="">Select a budget range</option>
                  {budgetRanges.map((range) => (
                    <option key={range} value={range}>{range}</option>
                  ))}
                </select>
                {errors.budget && <p className={errorClasses}>{errors.budget}</p>}
              </div>

              {/* Requirements Input */}
              <div className="md:col-span-2">
                <label htmlFor="requirements" className={labelClasses}>
                  Project Requirements
                </label>
                <textarea
                  id="requirements"
                  value={formData.requirements}
                  onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                  className={`${inputClasses} min-h-[120px] resize-y ${errors.requirements ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="Please describe your project requirements..."
                />
                {errors.requirements && <p className={errorClasses}>{errors.requirements}</p>}
              </div>
            </div>

            {/* Submit Button */}
            <motion.div 
              className="mt-8"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                <Send className="w-5 h-5" />
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </motion.div>
          </motion.form>
        </div>
      </motion.div>
    </section>
  );
}
