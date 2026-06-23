import React from 'react';
import { motion } from 'motion/react';
import { Bot, ArrowRight, Sparkles, Zap, Brain } from 'lucide-react';
import { StoneTabletAI } from '../illustrations';

export const AISolutions: React.FC = () => {
  const features = [
    {
      icon: Bot,
      title: 'AI Chatbots',
      desc: 'Smart conversational agents that handle customer queries 24/7.',
    },
    {
      icon: Brain,
      title: 'RAG Applications',
      desc: 'AI systems that answer from your business knowledge base.',
    },
    {
      icon: Sparkles,
      title: 'AI Automations',
      desc: 'Automate repetitive tasks and workflows with intelligent AI.',
    },
  ];

  return (
    <section id="ai" className="section-padding relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-stone-50 via-earth-50/30 to-stone-50" />
      
      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-earth uppercase tracking-wider mb-3">
            <Zap size={16} />
            AI & Automation
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-dark-soft tracking-tight mb-4">
            Work Smarter With AI.
          </h2>
          <p className="text-lg text-gray-text max-w-2xl mx-auto">
            We build practical AI systems that save time, automate repetitive work, and improve business efficiency.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Illustration */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute w-full h-full bg-gradient-to-br from-earth-50 to-accent-50 rounded-3xl -rotate-2" />
            <StoneTabletAI className="relative w-full max-w-md mx-auto" />
          </motion.div>

          {/* Right - Features */}
          <div className="space-y-6">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                whileHover={{ x: 6 }}
                className="group bg-white rounded-2xl p-6 border border-stone-200 card-hover flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-earth-50 flex items-center justify-center flex-shrink-0 group-hover:bg-earth-50 transition-colors">
                  <feature.icon size={22} className="text-earth" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-dark-soft mb-1">{feature.title}</h3>
                  <p className="text-sm text-gray-text">{feature.desc}</p>
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <a href="#contact" className="btn-primary mt-4">
                Discuss Your AI Needs
                <ArrowRight size={18} />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
