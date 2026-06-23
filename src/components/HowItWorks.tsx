import React from 'react';
import { motion } from 'motion/react';
import { MessageSquare, Lightbulb, Rocket, TrendingUp } from 'lucide-react';
import { StepIllustration } from '../illustrations';

const steps = [
  {
    number: '01',
    title: 'Tell Us Your Goal',
    desc: 'Share what you want to achieve — more leads, a website, automation, or growth.',
    icon: MessageSquare,
  },
  {
    number: '02',
    title: 'We Create The Strategy',
    desc: 'Our team builds a custom plan tailored to your business needs and budget.',
    icon: Lightbulb,
  },
  {
    number: '03',
    title: 'We Execute',
    desc: 'We build, launch, and manage everything — so you can focus on running your business.',
    icon: Rocket,
  },
  {
    number: '04',
    title: 'You Grow',
    desc: 'More customers, more revenue, less stress. It\'s that simple.',
    icon: TrendingUp,
  },
];

export const HowItWorks: React.FC = () => {
  return (
    <section id="process" className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-3">
            How It Works
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-dark-soft tracking-tight">
            Simple Process.
          </h2>
          <p className="text-lg text-gray-text mt-4 max-w-xl mx-auto">
            Four steps to transform your business growth.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-12 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-accent via-stone-300 to-earth" />

          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="relative text-center group"
            >
              {/* Illustration */}
              <div className="w-24 h-24 mx-auto mb-6 relative">
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br transition-all duration-300 ${
                  i === 0 ? 'from-accent-50 to-accent-100/50' :
                  i === 1 ? 'from-sky/10 to-sky/5' :
                  i === 2 ? 'from-earth-50 to-earth-50/50' :
                  'from-accent-50 to-earth-50'
                }`} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <StepIllustration step={i + 1} className="w-20 h-20 transition-transform duration-300 group-hover:scale-110" />
                </div>
              </div>

              {/* Step number badge */}
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-dark-soft text-white text-sm font-bold mb-4 relative z-10">
                {step.number}
              </div>

              <h3 className="text-lg font-bold text-dark-soft mb-2">{step.title}</h3>
              <p className="text-sm text-gray-text max-w-xs mx-auto">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
