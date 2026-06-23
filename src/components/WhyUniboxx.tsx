import React from 'react';
import { motion } from 'motion/react';
import {
  Users,
  Zap,
  MessageCircle,
  Target,
  FileText,
  BarChart3,
  Shield,
} from 'lucide-react';

const reasons = [
  { icon: Users, title: 'One Team For Everything', desc: 'Marketing, tech, and AI — under one roof. No juggling vendors.' },
  { icon: Zap, title: 'Fast Execution', desc: 'We move quickly. From strategy to launch in days, not months.' },
  { icon: MessageCircle, title: 'Clear Communication', desc: 'Regular updates. No jargon. Always know what\'s happening.' },
  { icon: Target, title: 'Results Focused', desc: 'Every decision is driven by impact on your business growth.' },
  { icon: FileText, title: 'No Long-Term Contracts', desc: 'Stay because you want to, not because you\'re locked in.' },
  { icon: BarChart3, title: 'Transparent Reporting', desc: 'See exactly where your money goes and what it delivers.' },
  { icon: Shield, title: 'Marketing + Technology + AI', desc: 'A complete growth stack — strategy, build, and scale.' },
];

export const WhyUniboxx: React.FC = () => {
  return (
    <section className="section-padding bg-dark-soft relative overflow-hidden">
      {/* Subtle texture */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-3">
            Why Us
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
            Why Businesses Choose UNiBOXX.
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 hover:bg-white/10 hover:border-accent/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <reason.icon size={22} className="text-accent" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{reason.title}</h3>
              <p className="text-sm text-white/50 leading-relaxed">{reason.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
