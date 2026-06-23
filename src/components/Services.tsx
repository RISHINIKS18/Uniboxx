import React from 'react';
import { motion } from 'motion/react';

import {
  MarketingIllustration,
  WebsiteIllustration,
  ContentIllustration,
  TechnologyIllustration,
  AIIllustration,
} from '../illustrations';

interface ServiceCardProps {
  title: string;
  illustration: React.FC<{ className?: string }>;
  items: string[];
  index: number;
  accentColor: string;
  bgColor: string;
  borderColor: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  illustration: Illustration,
  items,
  index,
  accentColor,
  bgColor,
  borderColor,
}) => {
  const [expanded, setExpanded] = React.useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -6, transition: { duration: 0.3 } }}
      className={`card-hover group bg-white rounded-2xl border-2 overflow-hidden cursor-pointer ${borderColor}`}
      onClick={() => setExpanded(!expanded)}
    >
      {/* Illustration area */}
      <div className={`${bgColor} p-6 flex items-center justify-center relative overflow-hidden`}>
        <Illustration className="w-24 h-24 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3" />
        {/* Decorative circle */}
        <div className={`absolute -right-4 -top-4 w-20 h-20 rounded-full opacity-10 ${accentColor}`} />
        <div className={`absolute -left-6 -bottom-6 w-24 h-24 rounded-full opacity-5 ${accentColor}`} />
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-bold text-dark-soft mb-3">{title}</h3>

        <div className={`space-y-2 ${expanded ? '' : 'max-h-24 overflow-hidden'} transition-all duration-300`}>
          {(expanded ? items : items.slice(0, 3)).map((item) => (
            <div
              key={item}
              className="flex items-center gap-2.5 text-sm text-gray-text"
            >
              <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${accentColor}`} />
              {item}
            </div>
          ))}
        </div>

        {/* Toggle hint */}
        {items.length > 3 && (
          <button className="text-sm font-semibold text-accent mt-3 flex items-center gap-1 group/btn">
            {expanded ? 'Show less' : `+${items.length - 3} more`}
            <span className="transition-transform duration-200 group-hover/btn:translate-x-1">→</span>
          </button>
        )}
      </div>
    </motion.div>
  );
};

const services = [
  {
    title: 'Marketing',
    illustration: MarketingIllustration,
    items: [
      'Social Media Marketing',
      'Performance Marketing',
      'Meta Ads',
      'Google Ads',
      'Lead Generation',
      'SEO',
      'SEM',
      'Email Marketing',
      'WhatsApp Marketing',
      'Influencer Marketing',
      'Google Business Profile',
    ],
    accentColor: 'bg-accent',
    bgColor: 'bg-accent-50',
    borderColor: 'border-accent-100',
  },
  {
    title: 'Websites',
    illustration: WebsiteIllustration,
    items: [
      'Landing Pages',
      'Business Websites',
      'Corporate Websites',
      'Ecommerce Websites',
    ],
    accentColor: 'bg-sky',
    bgColor: 'bg-sky/10',
    borderColor: 'border-sky/20',
  },
  {
    title: 'Content & Branding',
    illustration: ContentIllustration,
    items: [
      'Graphic Design',
      'Branding',
      'Content Creation',
      'Copywriting',
      'Video Editing',
      'Product Photography',
      'Corporate Photoshoots',
    ],
    accentColor: 'bg-earth',
    bgColor: 'bg-earth-50',
    borderColor: 'border-earth/20',
  },
  {
    title: 'Technology',
    illustration: TechnologyIllustration,
    items: [
      'Web Applications',
      'Mobile Applications',
      'Custom Software',
      'Automation Systems',
    ],
    accentColor: 'bg-sky',
    bgColor: 'bg-sky/10',
    borderColor: 'border-sky/20',
  },
  {
    title: 'AI Solutions',
    illustration: AIIllustration,
    items: [
      'AI Chatbots',
      'RAG Applications',
      'Internal Knowledge Assistants',
      'AI Automations',
      'Business AI Workflows',
    ],
    accentColor: 'bg-earth',
    bgColor: 'bg-earth-50',
    borderColor: 'border-earth/20',
  },
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-3">
            What We Do
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-dark-soft tracking-tight">
            Everything You Need To Grow Online.
          </h2>
        </motion.div>

        {/* Service Cards - Top Row (3) */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.slice(0, 3).map((service, idx) => (
            <ServiceCard key={service.title} {...service} index={idx} />
          ))}
        </div>

        {/* Service Cards - Bottom Row (2, centered) */}
        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto mt-6">
          {services.slice(3).map((service, idx) => (
            <ServiceCard key={service.title} {...service} index={idx + 3} />
          ))}
        </div>
      </div>
    </section>
  );
};
