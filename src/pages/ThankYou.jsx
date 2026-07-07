import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckCircle2, ClipboardList, Search, Target, Send, Mail, Phone, ArrowRight } from 'lucide-react';
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

const ThankYou = () => {
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
        
        <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">
          <FadeUp>
            <div className="w-20 h-20 bg-primary-green rounded-full flex items-center justify-center mb-8 mx-auto shadow-[0_0_40px_rgba(14,77,58,0.5)]">
              <CheckCircle2 className="w-10 h-10 text-white" />
            </div>
            
            <span className="text-sm font-bold uppercase tracking-widest text-accent-gold mb-6 block">
              SUBMISSION COMPLETE
            </span>
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-white mb-8 leading-tight">
              Thank You. Your Information <br className="hidden md:block"/>
              <span className="bg-clip-text bg-gradient-to-r from-primary-green to-accent-gold">Has Been Submitted.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto font-light mb-8">
              We’ve received your information and documents. Our team will now review your profile and contact you with the next steps.
            </p>
            
            <div className="inline-block border-l-4 border-primary-green pl-6 py-3 bg-white/5 backdrop-blur-sm pr-8 rounded-r-xl">
              <p className="text-lg font-medium text-white">
                Your part is complete for now. Our team takes it from here.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* What Happens Next Section */}
      <section className="py-32 bg-bg-light border-y border-border-gray relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white rounded-full blur-[100px] opacity-50 -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <FadeUp className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-navy">Here’s What Happens Next</h2>
          </FadeUp>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            <div className="hidden lg:block absolute top-[40px] left-0 w-full h-[2px] bg-primary-navy/10 z-0">
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="h-full bg-gradient-to-r from-primary-green to-accent-gold"
              />
            </div>

            {[
              { step: "Step 1", title: "We Review Your File", desc: "Our team reviews the information, credit profile details, funding goals, and documents you submitted.", icon: <ClipboardList className="w-8 h-8" /> },
              { step: "Step 2", title: "We Check for Anything Missing", desc: "If additional information or documents are needed, a member of our team will contact you.", icon: <Search className="w-8 h-8" /> },
              { step: "Step 3", title: "We Review Your Funding Direction", desc: "Based on the information provided, our team will review your profile and determine the appropriate next step.", icon: <Target className="w-8 h-8" /> },
              { step: "Step 4", title: "Our Team Contacts You", desc: "Once the review is complete, someone from Unity Financial Solution will reach out to you regarding the next steps.", icon: <Send className="w-8 h-8" /> }
            ].map((item, index) => (
              <FadeUp key={index} delay={index * 0.1} className="relative z-10 flex flex-col items-start lg:items-center lg:text-center group bg-white p-8 rounded-2xl border border-border-gray shadow-sm hover:shadow-md transition-all">
                <div className="w-20 h-20 rounded-full bg-bg-light flex items-center justify-center text-primary-navy mb-6 shadow-sm group-hover:bg-primary-navy group-hover:text-white transition-all duration-500">
                  {item.icon}
                </div>
                <span className="text-sm font-bold uppercase tracking-widest text-primary-green mb-3">{item.step}</span>
                <h3 className="text-xl font-bold mb-4 text-primary-navy">{item.title}</h3>
                <p className="text-text-soft text-base leading-relaxed">{item.desc}</p>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Important Reminder Section */}
      <section className="py-24 bg-white border-b border-border-gray text-center px-6">
        <div className="max-w-4xl mx-auto">
          <FadeUp>
            <div className="w-16 h-16 bg-accent-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-8">
              <Mail className="w-8 h-8 text-accent-gold" />
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-navy mb-6">
              Please Keep an Eye on Your Phone and Email
            </h2>
            <p className="text-lg text-text-soft leading-relaxed mb-6 max-w-2xl mx-auto">
              Our team may contact you if we need additional information, documents, or clarification before completing the review.
            </p>
            <p className="text-lg font-medium text-primary-navy leading-relaxed max-w-2xl mx-auto">
              Please respond as soon as possible so your file can continue moving forward without unnecessary delays.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Need Help Section */}
      <section className="py-32 bg-primary-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <MeshGradient speed={4} intensity={1.5} grain={0.2} />
        </div>
        <div className="max-w-[1000px] mx-auto px-6 sm:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <FadeUp>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
                Have a Question While You Wait?
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                Our team is here to help. If you have questions about your submission or need to provide additional information, contact Unity Financial Solution.
              </p>
              <div className="space-y-4 mb-10">
                <div className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/10">
                  <Mail className="w-6 h-6 text-accent-gold" />
                  <span className="text-white font-medium">info@unityfinancialsolution.com</span>
                </div>
                <div className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/10">
                  <Phone className="w-6 h-6 text-accent-gold" />
                  <span className="text-white font-medium">(858) 239-0594</span>
                </div>
              </div>
            </FadeUp>
            <FadeUp delay={0.2} className="flex justify-center md:justify-end">
              <Button 
                to="/contact" 
                variant="gold" 
                className="px-10 py-6 text-lg w-full md:w-auto shadow-[0_20px_40px_rgba(200,157,60,0.3)] hover:scale-105"
              >
                Contact Our Team
              </Button>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Final Message Section */}
      <section className="py-24 bg-white text-center px-6">
        <div className="max-w-3xl mx-auto">
          <FadeUp>
            <h2 className="text-3xl font-heading font-bold text-primary-navy mb-6">
              Thank You for Choosing Unity Financial Solution
            </h2>
            <p className="text-lg text-text-soft leading-relaxed mb-10">
              We appreciate the opportunity to review your profile. Our team will be in touch after the review is complete.
            </p>
            <div className="inline-block border border-border-gray bg-bg-light px-8 py-4 rounded-xl">
              <p className="text-sm font-bold text-primary-green uppercase tracking-widest">
                Your submission has been received. Please wait for our team to contact you with the next steps.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

    </div>
  );
};

export default ThankYou;