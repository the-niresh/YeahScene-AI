'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Calendar, Award, Users, Globe, Mail, Phone, MapPin } from 'lucide-react';

interface Experience {
  year: string;
  title: string;
  description: string;
}

const experiences: Experience[] = [
  {
    year: '2025',
    title: 'Launched AI Automation Services',
    description: 'Introduced cutting-edge AI automation solutions to transform business operations.',
  },
  // {
  //   year: '2025',
  //   title: 'Expanded Global Reach',
  //   description: 'Successfully delivered solutions to clients across multiple continents.',
  // },
  {
    year: '2024',
    title: 'Founded YeahScene AI',
    description: 'Started with a vision to make AI automation accessible to businesses of all sizes.',
  },
];

const achievements = [
  {
    icon: Users,
    stat: '100+',
    label: 'Happy Clients',
  },
  {
    icon: Globe,
    stat: '20+',
    label: 'Countries Served',
  },
  {
    icon: Award,
    stat: '15+',
    label: 'Industry Awards',
  },
];

export default function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            About YeahScene AI
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Pioneering the future of business automation with innovative AI solutions
          </p>
        </motion.div>

        {/* Company Profile */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-[400px] rounded-2xl overflow-hidden"
          >
            <Image
              src="/about-image.svg"
              alt="YeahScene AI Office"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Company Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.div variants={itemVariants} className="prose max-w-none">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Story
              </h3>
              <p className="text-gray-600">
                YeahScene AI was founded with a clear mission: to make advanced AI automation 
                accessible to businesses of all sizes. Our team of experts combines deep 
                technical knowledge with practical business experience to deliver solutions 
                that drive real results.
              </p>
            </motion.div>

            {/* <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {achievements.map((item, index) => (
                <div
                  key={index}
                  className="p-4 bg-gray-50 rounded-lg text-center"
                >
                  <item.icon className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                  <div className="text-2xl font-bold text-gray-900">{item.stat}</div>
                  <div className="text-sm text-gray-600">{item.label}</div>
                </div>
              ))}
            </motion.div> */}

            <motion.div variants={itemVariants} className="space-y-4">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-blue-600" />
                <span className="text-gray-600">Salem, TN, India</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-600" />
                <span className="text-gray-600">niresh@yeahscene.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-600" />
                <span className="text-gray-600">+91 9488186900</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">
            Our Journey
          </h3>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-px bg-gray-200" />

            {/* Timeline Items */}
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`relative flex md:justify-between items-start mb-12 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Point */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white" />

                {/* Content */}
                <div className={`ml-8 md:ml-0 md:w-5/12 ${
                  index % 2 === 0 ? 'md:text-right md:pl-0' : 'md:pr-0'
                }`}>
                  <div className="flex items-center gap-2 mb-1 text-blue-600">
                    <Calendar className="w-4 h-4" />
                    <span className="font-semibold">{experience.year}</span>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">
                    {experience.title}
                  </h4>
                  <p className="text-gray-600">
                    {experience.description}
                  </p>
                </div>

                {/* Spacer for opposite side */}
                <div className="hidden md:block md:w-5/12" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
