import React from 'react';
import { ArrowUp, Mail, Phone, MessageCircle } from 'lucide-react';
import myLogo from '/Logo2.png';  

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark-soft text-white">
      <div className="container mx-auto px-6 py-15 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-10">
          
          {/* Brand */}
          <div className="md:col-span-4 lg:col-span-5">
            <div className="mb-5">
              
              {/* Added a container specifically to handle the zoom hack */}
              <div className="flex items-center">
                
                {/* 1. Fixed width/height box to contain the image */}
                <div className="w-10 h-10 md:w-10 md:h-10 flex-shrink-0 flex items-center justify-center">
                  <img 
                    src={myLogo} 
                    alt="Uniboxx Logo" 
                    // 2. scale-[1.75] zooms the image up by 175% to bypass the transparent empty space
                    className="w-full h-full object-contain scale-[1.75] origin-center" 
                  />
                </div>
                
                {/* 3. Added pl-3 (padding-left) to keep the zoomed image from overlapping the text */}
                <div className="flex flex-col justify-center pl-3">
                  <span className="text-xl md:text-2xl font-black tracking-tight leading-none text-white">
                    UNIBO<span className="text-accent">XX</span>
                  </span>
                  <span className="text-[8px] md:text-[10px] font-bold uppercase tracking-[0.2em] mt-0.5 text-white/60">
                    Scale Faster. Grow Smarter.
                  </span>
                </div>

              </div>

            </div>
            
            <p className="text-sm text-white/40 leading-relaxed mb-4 max-w-sm">
              Marketing, Websites, Apps, Automation & AI Solutions that help businesses grow faster.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2">
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Quick Links</h4>
            <div className="space-y-2.5">
              <a href="#" className="block text-sm text-white/40 hover:text-white transition-colors">Home</a>
              <a href="#services" className="block text-sm text-white/40 hover:text-white transition-colors">Services</a>
              <a href="#ai" className="block text-sm text-white/40 hover:text-white transition-colors">AI Solutions</a>
              <a href="#contact" className="block text-sm text-white/40 hover:text-white transition-colors">Contact</a>
            </div>
          </div>

          {/* Services */}
          <div className="md:col-span-3 lg:col-span-2">
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Services</h4>
            <div className="space-y-2.5">
              <span className="block text-sm text-white/40">Marketing</span>
              <span className="block text-sm text-white/40">Websites</span>
              <span className="block text-sm text-white/40">Content & Branding</span>
              <span className="block text-sm text-white/40">Technology</span>
              <span className="block text-sm text-white/40">AI Solutions</span>
            </div>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Contact</h4>
            <div className="space-y-3">
              <a href="mailto:rushikesh@uniboxx.in" className="flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors">
                <Mail size={14} className="flex-shrink-0" />
                rushikesh@uniboxx.in
              </a>
              <a href="tel:+918655452847" className="flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors">
                <Phone size={14} className="flex-shrink-0" />
                +91 86554 52847
              </a>
              <a
                href="https://wa.me/918655452847?text=Hi%20Uniboxx%2C%0A%0AI%20would%20like%20to%20discuss%20my%20business%20growth%20requirements."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-white/40 hover:text-green-400 transition-colors"
              >
                <MessageCircle size={14} className="flex-shrink-0" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-white/10 gap-4">
          <p className="text-xs text-white/30 text-center sm:text-left">
            © {new Date().getFullYear()} UNiBOXX. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all group"
            aria-label="Scroll to top"
          >
            <ArrowUp size={16} className="text-white/40 group-hover:text-white transition-colors" />
          </button>
        </div>
      </div>
    </footer>
  );
};