import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Tilt from 'react-parallax-tilt';
import { Mail, Phone, Clock, MapPin, Send, Target, CreditCard, ShieldCheck, Briefcase, FileText, AlertTriangle } from 'lucide-react';
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

const Contact = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://api.ahriat.com/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="flex flex-col w-full bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-primary-navy py-40 text-center px-6 sm:px-8">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Financial Background" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-primary-navy/80 mix-blend-multiply" />
        </div>
        
        <div className="absolute inset-0 z-0 opacity-40 mix-blend-multiply pointer-events-none">
          <MeshGradient speed={6} intensity={1.2} grain={0.3} />
        </div>
        
        <div className="max-w-5xl mx-auto relative z-10">
          <FadeUp>
            <span className="text-sm font-bold uppercase tracking-widest text-accent-gold mb-6 block">
              Contact Unity Financial Solution
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-8 leading-tight">
              Have Questions About <br className="hidden md:block"/>
              <span className="bg-clip-text bg-gradient-to-r from-primary-green to-accent-gold">Your Funding Options?</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto font-light mb-12">
              Contact Unity Financial Solution to learn more about personal credit card stacking, business credit card stacking, SBA loan support, and business funding readiness.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-5 mb-8">
              <Button to="/apply" variant="gold" showArrow className="text-lg px-10 py-5 shadow-[0_20px_40px_rgba(200,157,60,0.3)] hover:scale-105 transition-transform">
                Start My Funding Review
              </Button>
              <button 
                onClick={() => document.getElementById('contact-form').scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center justify-center px-10 py-5 bg-white/10 text-white font-bold rounded-full transition-all duration-300 hover:bg-white/20 text-lg border border-white/20"
              >
                Send Us a Message
              </button>
            </div>

            <p className="text-sm text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Unity Financial Solution does not guarantee approvals, funding amounts, credit limits, interest rates, repayment terms, or lender offers.
            </p>
          </FadeUp>
        </div>
      </section>
      {/* Section 3 & 4: Contact Information & Form */}
      <section id="contact-form" className="py-32 bg-bg-light relative overflow-hidden border-y border-border-gray">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            
            {/* Contact Information (Left Column - takes 2/5 width) */}
            <FadeUp delay={0.1} className="lg:col-span-2">
              <Tilt tiltMaxAngleX={2} tiltMaxAngleY={2} perspective={1000} className="h-full">
                <div className="h-full bg-white p-10 lg:p-12 rounded-[2.5rem] border border-border-gray shadow-lg relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-primary-green/5 rounded-bl-full -mr-8 -mt-8"></div>
                  
                  <h2 className="text-3xl font-heading font-bold text-primary-navy mb-12 relative z-10">Get In Touch</h2>
                  
                  <div className="space-y-10 relative z-10">
                    <div className="flex items-start gap-6 group">
                      <div className="w-14 h-14 rounded-2xl bg-bg-light flex items-center justify-center flex-shrink-0 group-hover:bg-primary-navy transition-colors duration-300">
                        <Phone className="w-7 h-7 text-primary-navy group-hover:text-white transition-colors duration-300" />
                      </div>
                      <div>
                        <h3 className="font-heading font-bold text-primary-navy text-lg mb-1">Phone</h3>
                        <p className="text-text-soft">(858) 239-0594</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-6 group">
                      <div className="w-14 h-14 rounded-2xl bg-bg-light flex items-center justify-center flex-shrink-0 group-hover:bg-primary-navy transition-colors duration-300">
                        <Mail className="w-7 h-7 text-primary-navy group-hover:text-white transition-colors duration-300" />
                      </div>
                      <div>
                        <h3 className="font-heading font-bold text-primary-navy text-lg mb-1">Email</h3>
                        <p className="text-text-soft">info@unityfinancialsolution.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-6 group">
                      <div className="w-14 h-14 rounded-2xl bg-bg-light flex items-center justify-center flex-shrink-0 group-hover:bg-primary-navy transition-colors duration-300">
                        <Clock className="w-7 h-7 text-primary-navy group-hover:text-white transition-colors duration-300" />
                      </div>
                      <div>
                        <h3 className="font-heading font-bold text-primary-navy text-lg mb-1">Business Hours</h3>
                        <p className="text-text-soft">Monday – Friday<br/>9:00 AM – 6:00 PM EST</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-6 group">
                      <div className="w-14 h-14 rounded-2xl bg-bg-light flex items-center justify-center flex-shrink-0 group-hover:bg-primary-navy transition-colors duration-300">
                        <MapPin className="w-7 h-7 text-primary-navy group-hover:text-white transition-colors duration-300" />
                      </div>
                      <div>
                        <h3 className="font-heading font-bold text-primary-navy text-lg mb-1">Service Area</h3>
                        <p className="text-text-soft">Serving clients nationwide</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Tilt>
            </FadeUp>

            {/* Contact Form (Right Column - takes 3/5 width) */}
            <FadeUp delay={0.2} className="lg:col-span-3">
              <div className="bg-white p-10 lg:p-16 rounded-[2.5rem] border border-border-gray shadow-xl relative overflow-hidden h-full">
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent-gold/5 rounded-tl-full -mr-8 -mb-8"></div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-navy mb-4 relative z-10">Send Us a Message</h2>
                <p className="text-text-soft text-lg mb-10 relative z-10">Fill out the form below and a member of our team will contact you regarding your inquiry.</p>
                
                <div className="relative z-10 w-full">
                  <iframe 
                    src="https://api.ahriat.com/widget/form/tpQWlu4EnPYNmizxDywt" 
                    style={{ width: '100%', height: '648px', border: 'none', borderRadius: '0px' }} 
                    id="inline-tpQWlu4EnPYNmizxDywt"  
                    data-layout="{'id':'INLINE'}" 
                    data-trigger-type="alwaysShow" 
                    data-trigger-value="" 
                    data-activation-type="alwaysActivated" 
                    data-activation-value="" 
                    data-deactivation-type="neverDeactivate" 
                    data-deactivation-value="" 
                    data-form-name="Form 14" 
                    data-height="648" 
                    data-layout-iframe-id="inline-tpQWlu4EnPYNmizxDywt" 
                    data-form-id="tpQWlu4EnPYNmizxDywt" 
                    title="Form 14" 
                  />
                </div>
              </div>
            </FadeUp>

          </div>
        </div>
      </section>

      {/* Section 5: Funding Review Reminder */}
      <section className="py-32 bg-primary-navy relative overflow-hidden text-center">
        <div className="absolute inset-0 opacity-10">
          <MeshGradient speed={4} intensity={1.5} grain={0.2} />
        </div>
        <div className="max-w-[800px] mx-auto px-6 relative z-10">
          <FadeUp>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-8 leading-tight">
              Looking for Funding? Start With the Review.
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              If you are looking for personal funding, business funding, credit card stacking, or SBA loan support, the best first step is to complete the funding review form.
            </p>
            <p className="text-xl text-gray-300 leading-relaxed mb-10">
              This allows Unity Financial Solution to review your profile, understand your goals, and help identify which funding path may make sense.
            </p>
            <div className="flex justify-center">
              <Button to="/apply" variant="gold" showArrow className="text-lg px-12 py-5 shadow-[0_20px_40px_rgba(200,157,60,0.3)] hover:scale-105 transition-transform">
                Start My Funding Review
              </Button>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Section 6: What We Can Help With */}
      <section className="py-32 bg-white relative overflow-hidden border-y border-border-gray">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
          <FadeUp className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-navy">Questions We Can Help Answer</h2>
          </FadeUp>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Target className="w-8 h-8" />,
                title: "Funding Options",
                desc: "Learn which funding paths may fit your current profile."
              },
              {
                icon: <CreditCard className="w-8 h-8" />,
                title: "Credit Card Stacking",
                desc: "Ask about personal and business credit card stacking strategies."
              },
              {
                icon: <Briefcase className="w-8 h-8" />,
                title: "SBA Loan Readiness",
                desc: "Understand what may be needed before pursuing SBA-style funding."
              },
              {
                icon: <ShieldCheck className="w-8 h-8" />,
                title: "Business Funding Readiness",
                desc: "Review what your business may need before applying."
              },
              {
                icon: <FileText className="w-8 h-8" />,
                title: "Application Next Steps",
                desc: "Get direction on how to move forward with the funding review process."
              }
            ].map((item, i) => (
              <FadeUp key={i} delay={i * 0.1} className="h-full">
                <div className="bg-bg-light p-8 rounded-2xl border border-border-gray shadow-sm hover:shadow-xl hover:border-primary-navy/20 transition-all duration-300 h-full flex flex-col items-start">
                  <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm border border-border-gray">
                    {React.cloneElement(item.icon, { className: "w-6 h-6 text-primary-navy" })}
                  </div>
                  <h3 className="text-xl font-heading font-bold text-primary-navy mb-4">{item.title}</h3>
                  <p className="text-text-soft leading-relaxed flex-grow">{item.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: Important Notice */}
      <section className="py-24 bg-red-50 relative overflow-hidden">
        <div className="max-w-[1000px] mx-auto px-6 sm:px-8 relative z-10 text-center">
          <FadeUp>
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <AlertTriangle className="w-8 h-8 text-red-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-navy mb-6">
              Please Do Not Send Sensitive Documents Through This Page
            </h2>
            <p className="text-lg text-text-soft leading-relaxed mb-6 max-w-3xl mx-auto">
              For your privacy and security, please do not submit Social Security numbers, full account numbers, tax documents, bank statements, or other sensitive documents through the general contact form.
            </p>
            <p className="text-lg font-medium text-primary-navy leading-relaxed max-w-3xl mx-auto">
              If documents are needed, our team will provide instructions on how to submit them through the proper process.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-32 bg-white text-center">
        <div className="max-w-[800px] mx-auto px-6">
          <FadeUp>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-navy mb-8">
              Ready to Take the First Step?
            </h2>
            <p className="text-xl text-text-soft leading-relaxed mb-10">
              Start with a funding review and let Unity Financial Solution help you understand which funding path may fit your profile.
            </p>
            <div className="flex justify-center">
              <Button to="/apply" variant="primary" showArrow className="text-lg px-12 py-5">
                Start My Funding Review
              </Button>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Footer Disclaimer */}
      <div className="bg-gray-900 py-6 text-center px-6">
        <p className="text-xs text-gray-500 max-w-5xl mx-auto leading-relaxed">
          Unity Financial Solution does not guarantee approvals, funding amounts, credit limits, interest rates, repayment terms, SBA eligibility, or lender offers. All funding decisions are made by third-party lenders, banks, credit card issuers, or financial institutions based on their own underwriting guidelines. Past results do not guarantee future outcomes.
        </p>
      </div>
    </div>
  );
};

export default Contact;
