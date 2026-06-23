import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { AISolutions } from './components/AISolutions';
import { HowItWorks } from './components/HowItWorks';
import { Clients } from './components/Clients';
import { WhyUniboxx } from './components/WhyUniboxx';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { WhatsAppButton, CallButton } from './components/FloatingButtons';
import { CartoonWavyDivider, StoneDivider } from './components/Decorations';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />

      {/* Cartoon divider */}
      <CartoonWavyDivider />

      <Services />

      {/* Cartoon divider */}
      <CartoonWavyDivider />

      <AISolutions />

      {/* Cartoon divider */}
      <CartoonWavyDivider />

      <HowItWorks />

      {/* Stone divider */}
      <StoneDivider />

      <Clients />

      <WhyUniboxx />

      <Contact />
      <Footer />
      <WhatsAppButton />
      <CallButton />
    </div>
  );
};

export default App;
