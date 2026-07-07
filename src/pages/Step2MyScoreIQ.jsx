import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { UploadCloud, AlertCircle, Info, CheckCircle2 } from 'lucide-react';
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

const Step2MyScoreIQ = () => {
  const [fileName, setFileName] = useState('');

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://api.ahriat.com/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    }
  };

  return (
    <div className="flex flex-col w-full bg-bg-light min-h-screen">
      
      {/* Hero Section */}
      <section className="bg-primary-navy pt-40 pb-32 px-6 sm:px-8 relative overflow-hidden flex items-center justify-center">
        <MeshGradient speed={6} intensity={1.2} className="opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary-navy/40 to-primary-navy/80 z-0"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <FadeUp>
            <div className="inline-block bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-2 mb-8">
              <span className="text-accent-gold font-bold tracking-widest text-sm uppercase">Step 2 of 3</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-8 leading-tight">
              Submit Your MyScoreIQ <br/>Profile Information
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto font-light">
              Great, your MyScoreIQ account should now be active. The next step is to submit the information our team needs to match your credit profile with your funding file and begin the review process.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Main Form Section */}
      <section className="px-6 sm:px-8 pb-24 relative z-20 -mt-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-[2rem] shadow-xl border border-border-gray overflow-hidden">
            
            <div className="p-8 md:p-12 lg:p-16">
              <FadeUp>
                <div className="bg-primary-green/5 border-l-4 border-primary-green p-6 rounded-r-xl mb-12">
                  <p className="text-primary-navy font-medium">
                    Please complete the form below carefully and make sure all information is accurate.
                  </p>
                </div>
              </FadeUp>
                {/* Profile Information */}
                <FadeUp delay={0.1}>
                  <div className="space-y-8">
                    <h2 className="text-2xl font-heading font-bold text-primary-navy border-b border-border-gray pb-4">
                      MyScoreIQ Profile Information
                    </h2>
                    <div className="w-full">
                      <iframe 
                        src="https://api.ahriat.com/widget/form/aVdYBIGo4oRzhVFDAmxm" 
                        style={{ width: '100%', height: '774px', border: 'none', borderRadius: '0px' }} 
                        id="inline-aVdYBIGo4oRzhVFDAmxm"  
                        data-layout="{'id':'INLINE'}" 
                        data-trigger-type="alwaysShow" 
                        data-trigger-value="" 
                        data-activation-type="alwaysActivated" 
                        data-activation-value="" 
                        data-deactivation-type="neverDeactivate" 
                        data-deactivation-value="" 
                        data-form-name="Step-2 Submit Your MyScoreIQ " 
                        data-height="774" 
                        data-layout-iframe-id="inline-aVdYBIGo4oRzhVFDAmxm" 
                        data-form-id="aVdYBIGo4oRzhVFDAmxm" 
                        title="Step-2 Submit Your MyScoreIQ " 
                      />
                    </div>
                  </div>
                </FadeUp>

        
                {/* File Upload Section */}
                <FadeUp delay={0.3}>
                  <div className="space-y-8 pt-8 border-t border-border-gray">
                    {/* Instructions */}
                    <div className="bg-primary-navy/5 p-6 rounded-xl border border-primary-navy/10">
                      <div className="flex items-center gap-2 mb-4">
                        <Info className="w-5 h-5 text-primary-navy" />
                        <h3 className="font-bold text-primary-navy">Instructions</h3>
                      </div>
                      <p className="text-sm text-text-soft mb-4">Please make sure:</p>
                      <ul className="space-y-2">
                        {['Your report is current.', 'All three bureaus are included when available.', 'The complete report is uploaded.', 'The file is readable and not password-protected.'].map((instruction, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-primary-green flex-shrink-0" />
                            <span className="text-sm text-text-charcoal">{instruction}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </FadeUp>
                {/* Important Notice */}
                <FadeUp delay={0.5}>
                  <div className="bg-bg-light p-6 rounded-xl border-l-4 border-accent-gold mt-8">
                    <div className="flex items-center gap-2 mb-3">
                      <AlertCircle className="w-6 h-6 text-accent-gold" />
                      <h3 className="font-bold text-primary-navy uppercase tracking-wider text-sm">Important</h3>
                    </div>
                    <p className="text-sm text-text-soft mb-3">
                      Please do not submit passwords or other unnecessary sensitive credentials through this form. Only submit the information and documents requested on this page.
                    </p>
                    <p className="text-sm text-text-soft">
                      Your information will be reviewed as part of the Unity Financial Solution funding process. Submission of information does not guarantee approval, funding, credit limits, interest rates, or loan terms.
                    </p>
                  </div>
                </FadeUp>
            </div>
            
            {/* After Submission Footer */}
            <div className="bg-primary-navy p-8 md:p-12 text-center text-white">
              <FadeUp delay={0.7}>
                <h3 className="text-accent-gold font-bold tracking-widest text-sm uppercase mb-4">
                  After Submission
                </h3>
                <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                  Your information has not yet completed the full onboarding process. After submitting this page, continue to:
                </p>
                <div className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-6 py-4 mb-4">
                  <h4 className="font-heading font-bold text-lg">
                    STEP 3: FUNDING APPLICATION & DOCUMENT SUBMISSION
                  </h4>
                </div>
                <p className="text-sm text-gray-400 max-w-xl mx-auto">
                  There, you will complete your personal and business funding information and submit the documents needed for your funding review.
                </p>
              </FadeUp>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default Step2MyScoreIQ;
