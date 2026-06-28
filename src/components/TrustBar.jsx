import React from 'react';
import { Shield } from 'lucide-react';

const TrustBar = () => {
  return (
    <div className="bg-primary-navy py-6 border-y border-white/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
      <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-16 text-gray-300 font-medium text-sm md:text-base tracking-wider uppercase">
          <div className="flex items-center gap-3">
            <Shield className="w-4 h-4 text-accent-gold" />
            15+ Years Experience
          </div>
          <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-primary-green"></div>
          <div className="flex items-center gap-3">
            <Shield className="w-4 h-4 text-accent-gold" />
            $100M+ Funded
          </div>
          <div className="hidden lg:block w-1.5 h-1.5 rounded-full bg-primary-green"></div>
          <div className="flex items-center gap-3">
            <Shield className="w-4 h-4 text-accent-gold" />
            Personal & Business
          </div>
          <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-primary-green"></div>
          <div className="flex items-center gap-3">
            <Shield className="w-4 h-4 text-accent-gold" />
            Strategic Review
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustBar;
