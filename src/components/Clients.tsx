import React from 'react';
import { motion } from 'motion/react';

// Cartoon-style placeholder client logos
const clientLogos = [
  { name: 'TechVentures', letter: 'T', color: '#FF6B35' },
  { name: 'GrowthCo', letter: 'G', color: '#4A6741' },
  { name: 'DigitalPro', letter: 'D', color: '#5B8FB9' },
  { name: 'StartupX', letter: 'S', color: '#FF6B35' },
  { name: 'BrandMax', letter: 'B', color: '#4A6741' },
  { name: 'CloudNine', letter: 'C', color: '#5B8FB9' },
  { name: 'InnovateLab', letter: 'I', color: '#8c7a5e' },
  { name: 'ScaleUp', letter: 'U', color: '#FF6B35' },
  { name: 'MediaFlow', letter: 'M', color: '#4A6741' },
  { name: 'NextGen', letter: 'N', color: '#5B8FB9' },
  { name: 'SmartBiz', letter: 'S', color: '#8c7a5e' },
  { name: 'FutureTech', letter: 'F', color: '#FF6B35' },
];

export const Clients: React.FC = () => {
  return (
    <section className="section-padding bg-stone-50">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-3">
            Trusted By
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-dark-soft tracking-tight">
            Businesses That Trust UNiBOXX.
          </h2>
        </motion.div>

        {/* Logo Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 md:gap-6">
          {clientLogos.map((client, i) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.3 }}
              className="group bg-white rounded-xl border border-stone-200 p-4 md:p-5 flex items-center justify-center cursor-pointer transition-all duration-300 hover:border-accent/30 hover:shadow-md"
            >
              <div className="text-center">
                {/* Cartoon-style logo */}
                <div
                  className="w-12 h-12 md:w-14 md:h-14 rounded-xl mx-auto mb-2 flex items-center justify-center text-white font-black text-lg transition-all duration-300 grayscale group-hover:grayscale-0 group-hover:scale-110"
                  style={{ backgroundColor: client.color }}
                >
                  {client.letter}
                </div>
                <span className="text-xs font-medium text-gray-text group-hover:text-dark-soft transition-colors hidden sm:block">
                  {client.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
