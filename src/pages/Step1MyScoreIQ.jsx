import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckCircle2, AlertCircle, ExternalLink, ArrowRight } from 'lucide-react';
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

const Step1MyScoreIQ = () => {
  const reviewFactors = [
    "Credit scores",
    "Credit utilization",
    "Current account balances",
    "Credit limits",
    "Recent inquiries",
    "Account history",
    "Payment history",
    "Overall profile strength"
  ];

  return (
    <div className="flex flex-col w-full bg-bg-light min-h-screen">
      
      {/* Hero Section */}
      <section className="bg-primary-navy pt-40 pb-24 px-6 sm:px-8 relative overflow-hidden flex items-center justify-center min-h-[50vh]">
        <MeshGradient speed={6} intensity={1.2} className="opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary-navy/40 to-primary-navy/80 z-0"></div>
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <FadeUp>
            <div className="inline-block bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-2 mb-8">
              <span className="text-accent-gold font-bold tracking-widest text-sm uppercase">Step 1 of 3</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold text-white mb-8 leading-tight">
              Get Your MyScoreIQ <br/>Account Ready
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto font-light">
              Before we can begin reviewing your funding profile, we need access to the information required to understand your current credit profile and help determine possible funding options.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Choice Section (New vs Existing) */}
      <section className="py-24 px-6 sm:px-8 relative overflow-hidden -mt-12 z-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* New Account Card */}
            <FadeUp delay={0.1}>
              <div className="bg-white p-10 md:p-14 rounded-[2rem] shadow-xl border border-border-gray h-full flex flex-col relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary-green/5 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
                <h2 className="text-3xl font-heading font-bold text-primary-navy mb-6">
                  NEW TO MYSCOREIQ?
                </h2>
                <p className="text-lg text-text-soft mb-6 leading-relaxed flex-grow">
                  If you do not have an active MyScoreIQ account, use the button below to create one. Set up your MyScoreIQ account before continuing to the next step.
                </p>
                
                <div className="bg-bg-light p-6 rounded-2xl border border-border-gray mb-8">
                  <p className="text-primary-navy font-semibold text-center italic">
                    After your account is active, return to this page and continue to Step 2.
                  </p>
                </div>

                <a 
                  href="https://api.ahriat.com/l/VfYS_d-dy" // [INSERT MYSCOREIQ AFFILIATE LINK]
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-3 bg-accent-gold text-white font-bold py-5 px-8 rounded-full shadow-[0_10px_20px_rgba(200,157,60,0.3)] hover:scale-[1.02] hover:shadow-[0_15px_30px_rgba(200,157,60,0.4)] transition-all duration-300 text-lg uppercase tracking-wide"
                >
                  Create My MyScoreIQ Account
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
            </FadeUp>

            {/* Existing Account Card */}
            <FadeUp delay={0.2}>
              <div className="bg-primary-navy p-10 md:p-14 rounded-[2rem] shadow-xl border border-primary-navy/20 h-full flex flex-col relative overflow-hidden group text-white">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
                <h2 className="text-3xl font-heading font-bold text-white mb-6">
                  ALREADY HAVE MYSCOREIQ?
                </h2>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed flex-grow">
                  If you already have an active MyScoreIQ account, you can move directly to Step 2. If your MyScoreIQ account is already active and your report is available, continue to the next step.
                </p>
                
                <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 mb-8">
                  <p className="text-white font-semibold text-center">
                    Make sure your login credentials are valid and ready for the next step.
                  </p>
                </div>

                <Button 
                  to="/step-2" // Adjust path as needed
                  variant="primary" 
                  showArrow 
                  className="w-full text-lg py-5 bg-white text-primary-navy hover:bg-bg-light hover:text-primary-navy"
                >
                  Continue to Step 2
                </Button>
              </div>
            </FadeUp>

          </div>
        </div>
      </section>

      {/* Why Do We Need This Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 relative z-10">
          <FadeUp>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-navy mb-6">
                Why Do We Need This?
              </h2>
              <p className="text-xl text-text-soft leading-relaxed">
                Your credit profile is an important part of the funding review process. Depending on the type of funding you are pursuing, our team may need to review factors such as:
              </p>
            </div>
          </FadeUp>

          <FadeUp delay={0.2}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {reviewFactors.map((factor, index) => (
                <div key={index} className="bg-bg-light rounded-2xl p-6 border border-border-gray shadow-sm flex items-center gap-4 hover:-translate-y-1 transition-transform duration-300">
                  <div className="bg-primary-green/10 p-3 rounded-full flex-shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-primary-green" />
                  </div>
                  <span className="font-semibold text-primary-navy">{factor}</span>
                </div>
              ))}
            </div>
          </FadeUp>

          <FadeUp delay={0.3}>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-xl text-text-soft leading-relaxed">
                This information helps our team understand where your profile currently stands and which funding direction may make the most sense.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Important Notice & Final CTA */}
      <section className="py-24 bg-bg-light relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] bg-primary-green opacity-5 blur-[120px] rounded-full"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-6 sm:px-8 relative z-10 text-center">
          <FadeUp>
            <div className="bg-white border-l-4 border-accent-gold p-8 md:p-10 rounded-2xl shadow-xl mb-16 text-left">
              <div className="flex items-center gap-4 mb-4">
                <AlertCircle className="w-8 h-8 text-accent-gold flex-shrink-0" />
                <h3 className="text-2xl font-heading font-bold text-primary-navy">IMPORTANT</h3>
              </div>
              <p className="text-lg text-text-soft mb-4 leading-relaxed">
                Please make sure your MyScoreIQ account is active and your information is current before continuing.
              </p>
              <p className="text-lg text-text-soft leading-relaxed font-semibold">
                Having an account does not guarantee funding approval, a specific credit limit, interest rate, or funding amount.
              </p>
            </div>
          </FadeUp>

          <FadeUp delay={0.2}>
            <Button 
              to="/step-2" // Adjust path as needed
              variant="gold" 
              showArrow 
              className="text-xl px-12 py-6 shadow-[0_20px_40px_rgba(200,157,60,0.3)] hover:scale-105 transition-transform"
            >
              I'M READY — CONTINUE TO STEP 2
            </Button>
          </FadeUp>
        </div>
      </section>

    </div>
  );
};

export default Step1MyScoreIQ;
