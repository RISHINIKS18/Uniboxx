import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, TrendingUp, Users, Globe } from 'lucide-react';
import { HeroCaveman } from '../illustrations';
import { CartoonStar } from './Decorations';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden stone-texture pt-20">
      {/* Subtle grid background */}
      <div className="absolute inset-0 grid-bg opacity-40" />

      {/* Decorative cartoon elements */}
      <motion.div
        className="absolute top-28 left-8 opacity-30 hidden lg:block"
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
      >
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <circle cx="20" cy="20" r="18" stroke="#FF6B35" strokeWidth="2" strokeDasharray="4 4" />
        </svg>
      </motion.div>

      <CartoonStar className="absolute top-36 right-16 w-8 h-8 opacity-40 hidden lg:block" delay="0s" />
      <CartoonStar className="absolute bottom-40 left-20 w-6 h-6 opacity-30 hidden lg:block" delay="1s" />

      <motion.div
        className="absolute bottom-32 right-28 opacity-20 hidden lg:block"
        animate={{ rotate: -360 }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      >
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
          <rect x="3" y="3" width="24" height="24" rx="4" stroke="#4A6741" strokeWidth="2" strokeDasharray="4 4" />
        </svg>
      </motion.div>

      <div className="container-custom relative z-10 pt-12 md:pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            {/* Small tagline badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-accent-50 border border-accent-100 rounded-full px-4 py-2 mb-6"
            >
              <span className="text-lg">🚀</span>
              <span className="text-sm font-semibold text-accent-dark">Scale Faster. Grow Smarter.</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-6xl font-black text-dark-soft leading-[1.1] tracking-tight mb-6"
            >
              We Help Businesses{' '}
              <span className="relative inline-block">
                <span className="text-accent">Get More</span>
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 280 12" fill="none" style={{ maxWidth: '300px' }}>
                  <path d="M2 8 Q70 2 140 6 Q210 10 278 4" stroke="#FF6B35" strokeWidth="4" strokeLinecap="round" opacity="0.3" />
                </svg>
              </span>{' '}
              Customers.
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.6 }}
              className="text-lg md:text-xl text-gray-text leading-relaxed mb-8 max-w-lg"
            >
              Marketing, Websites, Apps, Automation & AI Solutions that help businesses grow faster.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-wrap gap-4 mb-10"
            >
              <a href="#contact" className="btn-primary text-base">
                Contact Us
                <ArrowRight size={18} />
              </a>
              <a href="#services" className="btn-secondary text-base">
                Our Services
              </a>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75, duration: 0.6 }}
              className="flex flex-wrap gap-6"
            >
              {[
                { icon: TrendingUp, label: 'Business Growth' },
                { icon: Users, label: 'Lead Generation' },
                { icon: Globe, label: 'Digital Presence' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-accent-50 flex items-center justify-center">
                    <item.icon size={18} className="text-accent" />
                  </div>
                  <span className="text-sm font-medium text-dark-soft">{item.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right - Cartoon Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: 'easeOut' }}
            className="relative flex items-center justify-center"
          >
            {/* Background shapes */}
            <div className="absolute w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-accent-50 to-stone-100 opacity-60" />
            <div className="absolute w-64 h-64 md:w-80 md:h-80 rounded-full border-2 border-dashed border-stone-200 spin-slow" />

            {/* Caveman illustration */}
            <div className="relative float-gentle">
              <HeroCaveman className="w-72 h-72 md:w-96 md:h-96" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
