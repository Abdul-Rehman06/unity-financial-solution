import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Info } from 'lucide-react';
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

const Step3Application = () => {
  useEffect(() => {
    const src = 'https://api.ahriat.com/js/form_embed.js';
    const existing = document.querySelector(`script[src="${src}"]`);

    if (existing) return undefined;

    const script = document.createElement('script');
    script.src = src;
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="flex flex-col w-full bg-bg-light min-h-screen">
      <section className="bg-primary-navy pt-40 pb-32 px-6 sm:px-8 relative overflow-hidden flex items-center justify-center">
        <MeshGradient speed={6} intensity={1.2} className="opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary-navy/40 to-primary-navy/80 z-0"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <FadeUp>
            <div className="inline-block bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-2 mb-8">
              <span className="text-accent-gold font-bold tracking-widest text-sm uppercase">Step 3 of 3</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-8 leading-tight">
              Complete Your <br />
              Funding Application
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto font-light">
              You are almost finished. This final step allows Unity Financial Solution to review your personal information, business information, funding goals, and supporting documents.
            </p>
          </FadeUp>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 pb-24 relative z-20 -mt-16">
        <div className="max-w-5xl mx-auto">
          <FadeUp>
            <div className="bg-white rounded-[2rem] shadow-xl border border-border-gray overflow-hidden mb-8">
              <div className="p-6 md:p-10 border-b border-border-gray bg-primary-green/5">
                <div className="flex items-start gap-4">
                  <Info className="w-6 h-6 text-primary-green flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-primary-navy text-lg mb-2">Instructions</h3>
                    <p className="text-sm text-text-soft">
                      Please complete every section carefully and upload all requested documents that apply to your situation. The more complete your file is, the faster our team can review your profile and determine the next step.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 md:p-10 lg:p-14">
                <div className="w-full">
                  <iframe
                    src="https://api.ahriat.com/widget/form/NzZHnPa1hY2pO59M1WDp"
                    style={{ width: '100%', height: '3974px', border: 'none', borderRadius: '8px' }}
                    id="inline-NzZHnPa1hY2pO59M1WDp"
                    data-layout="{'id':'INLINE'}"
                    data-trigger-type="alwaysShow"
                    data-trigger-value=""
                    data-activation-type="alwaysActivated"
                    data-activation-value=""
                    data-deactivation-type="neverDeactivate"
                    data-deactivation-value=""
                    data-form-name="Step-3 Funding Application"
                    data-height="3974"
                    data-layout-iframe-id="inline-NzZHnPa1hY2pO59M1WDp"
                    data-form-id="NzZHnPa1hY2pO59M1WDp"
                    title="Step-3 Funding Application"
                  />
                </div>

                <div className="pt-12 text-center max-w-2xl mx-auto">
                  <h2 className="text-3xl font-heading font-bold text-primary-navy mb-6">Ready to Submit Your File?</h2>
                  <p className="text-text-soft mb-8">
                    Please review your information carefully before submitting. Make sure your information is accurate, contact info is correct, documents are uploaded, and funding goals are clearly explained.
                  </p>

                  <p className="text-sm text-text-soft italic">
                    After submission, you will be redirected to a confirmation page. Our team will review your file and contact you regarding the next step.
                  </p>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>
    </div>
  );
};

export default Step3Application;
