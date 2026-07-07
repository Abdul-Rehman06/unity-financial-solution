import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Home, Search } from 'lucide-react';
import Button from '../components/Button';
import MeshGradient from '../components/ui/mesh-gradient-shader';

const FadeUp = ({ children, delay = 0, className = '' }) => {
  const [ref, inView] = useInView({ triggerOnce: true, rootMargin: '-50px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const NotFound = () => {
  return (
    <div className="flex flex-col w-full bg-white">
      <section className="relative overflow-hidden bg-primary-navy py-40 text-center px-6 sm:px-8">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-primary-navy/70" />
        </div>

        <div className="absolute inset-0 z-0 opacity-40 mix-blend-multiply pointer-events-none">
          <MeshGradient speed={6} intensity={1.2} grain={0.3} />
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          <FadeUp>
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/15 rounded-full px-6 py-2 mb-10">
              <Search className="w-4 h-4 text-accent-gold" />
              <span className="text-accent-gold font-bold tracking-widest text-sm uppercase">Page Not Found</span>
            </div>

            <div className="text-7xl md:text-8xl lg:text-9xl font-heading font-bold text-white/90 tracking-tight mb-6">
              404
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-8 leading-tight">
              This Page Doesn’t Exist.
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto font-light mb-12">
              The link may be incorrect, or the page may have moved. Use the options below to get back on track.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button to="/" variant="primary" className="px-10 py-5 text-lg w-full sm:w-auto justify-center">
                <Home className="w-5 h-5 mr-2" />
                Back to Home
              </Button>
              <Button
                to="/apply"
                variant="gold"
                showArrow
                className="px-10 py-5 text-lg w-full sm:w-auto justify-center shadow-[0_20px_40px_rgba(200,157,60,0.3)]"
              >
                Start Step 1
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </FadeUp>
        </div>
      </section>
    </div>
  );
};

export default NotFound;
