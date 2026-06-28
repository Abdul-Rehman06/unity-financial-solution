import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Helper for tailwind class merging
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const Button = ({ children, variant = 'primary', to, href, onClick, className = '', showArrow = false }) => {
  const baseStyles = "relative inline-flex items-center justify-center px-8 py-4 font-heading font-semibold rounded-full overflow-hidden transition-all duration-300 transform outline-none group";
  
  const variants = {
    primary: "bg-primary-navy text-white hover:bg-primary-navy/90 hover:shadow-[0_8px_30px_rgb(13,27,61,0.2)] hover:-translate-y-0.5 border border-primary-navy/10",
    secondary: "bg-white text-primary-navy border border-border-gray hover:border-primary-navy/30 hover:shadow-[0_8px_30px_rgb(0,0,0,0.05)] hover:-translate-y-0.5",
    gold: "bg-gradient-to-r from-accent-gold to-[#B38A36] text-white hover:shadow-[0_8px_30px_rgb(200,157,60,0.3)] hover:-translate-y-0.5 border border-accent-gold/20"
  };

  const classes = cn(baseStyles, variants[variant], className);

  const innerContent = (
    <>
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {showArrow && (
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        )}
      </span>
      {/* Premium Hover Glow Effect */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none" />
    </>
  );

  const MotionLink = motion(Link);
  const MotionA = motion.a;
  const MotionButton = motion.button;

  if (to) {
    return <MotionLink whileTap={{ scale: 0.98 }} to={to} className={classes}>{innerContent}</MotionLink>;
  }

  if (href) {
    return <MotionA whileTap={{ scale: 0.98 }} href={href} className={classes}>{innerContent}</MotionA>;
  }

  return (
    <MotionButton whileTap={{ scale: 0.98 }} onClick={onClick} className={classes}>
      {innerContent}
    </MotionButton>
  );
};

export default Button;
