import React from 'react';
import Button from './Button';
import InkReveal from './ui/ink-reveal';

const CTABanner = () => {
  return (
    <section className="relative py-32 overflow-hidden bg-primary-green">
      {/* Background Image that will be revealed */}
      <img 
        src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
        alt="Financial Strategy Background"
        className="absolute inset-0 w-full h-full object-cover opacity-60"
      />
      
      {/* Ink Reveal Component masking the image */}
      <InkReveal 
        maskColor={[14, 77, 58]} // #0e4d3a Primary Green
        brushSize={250}
        className="absolute inset-0 w-full h-full"
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pointer-events-none">
        <h2 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6 leading-tight">
          Ready to Build Your <br />Funding Strategy?
        </h2>
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
          Start with a funding review and let Unity Financial Solution help you identify your best path forward.
        </p>
        <div className="pointer-events-auto flex justify-center w-full">
          <Button to="/apply" variant="gold" showArrow className="text-xl px-12 py-5 shadow-[0_20px_40px_rgba(200,157,60,0.3)]">
            Start My Funding Review
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
