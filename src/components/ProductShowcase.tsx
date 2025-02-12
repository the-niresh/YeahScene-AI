'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight, Check } from 'lucide-react';

interface Product {
  id: string;
  title: string;
  description: string;
  image: string;
  features: string[];
}

const products: Product[] = [
  {
    id: '1',
    title: 'WiseAdvices AI',
    description: 'AI Advices you with the best possible way and best practices on respective topics',
    image: '/wiseadvices-landing-page.svg',
    features: [
      'Parenting Advices',
      'Career Advices',
      'Business Strategy Advices',
      'Personal Development Advices',
    ],
  },
  {
    id: '2',
    title: 'AI Powered CRM',
    description: 'AI powered Customer management system with cloud database and seamless integration',
    image: '/product-automation.svg',
    features: [
      'AI CRM Platform',
      'AI CRM Database',
      'AI CRM Integration',
      'AI CRM Security',
    ],
  },
  {
    id: '3',
    title: 'AI Powered Employee Management',
    description: 'AI powered Employee management system with cloud database and seamless integration',
    image: '/product-automation.svg',
    features: [
      'AI Employee Management Platform',
      'AI Employee Management Suggestions',
      'AI Employee Management Integration',
      'AI Powered Recruiting',
    ],
  },
];

export default function ProductShowcase() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover how our AI-powered solutions can revolutionize your business operations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {product.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {product.description}
                </p>
                
                <ul className="space-y-3 mb-6">
                  {product.features.map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center text-gray-700"
                    >
                      <Check className="h-5 w-5 text-green-500 mr-2" />
                      {feature}
                    </motion.li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-5 w-5" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
