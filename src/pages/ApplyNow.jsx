import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  ClipboardList, Search, Target, Send, 
  CheckCircle2, UserCheck, FileText, AlertCircle,
  ArrowRight
} from 'lucide-react';
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

const ApplyNow = () => {
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
              START YOUR FUNDING PROCESS
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-8 leading-tight">
              Complete Your Funding Profile <br className="hidden md:block"/>
              <span className="bg-clip-text bg-gradient-to-r from-primary-green to-accent-gold">in 4 Simple Steps</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto font-light mb-8">
              We made the process simple. Follow each step in order so our team has the information needed to review your funding profile.
            </p>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto font-light mb-12">
              Once everything is submitted, our team will review your file and contact you with the next steps.
            </p>
            
            <div className="flex justify-center">
              <Button 
                to="/step-1-myscoreiq"
                variant="gold"
                showArrow
                className="text-xl px-12 py-6 shadow-[0_20px_40px_rgba(200,157,60,0.3)] hover:scale-105 transition-transform"
              >
                Start Step 1
              </Button>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Section 2: How the Process Works */}
      <section className="py-32 bg-white border-y border-border-gray relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-bg-light rounded-full blur-[100px] opacity-50 -translate-y-1/2 translate-x-1/3"></div>
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8 relative z-10 text-center">
          <FadeUp>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-navy mb-8">
              How the Process Works
            </h2>
            <p className="text-xl text-text-soft leading-relaxed max-w-4xl mx-auto mb-6">
              Your funding review starts with your credit profile and ends with a complete file for our team to review.
            </p>
            <p className="text-xl text-text-soft leading-relaxed max-w-4xl mx-auto mb-10">
              Each step gives us an important part of your overall profile. Complete the steps in order and make sure the information you provide is accurate.
            </p>
            <div className="inline-block border-l-4 border-primary-green pl-6 py-4 bg-bg-light pr-8 rounded-r-xl shadow-sm text-left">
              <p className="text-xl font-heading font-bold text-primary-navy">
                Complete all 3 submission steps before your profile can move into team review.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Main Process Section (4 Steps) */}
      <section className="py-32 bg-bg-light relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8 relative z-10">
          <div className="space-y-12">
            
            {/* Step 1 Card */}
            <FadeUp delay={0.1}>
              <div className="bg-white p-10 md:p-14 rounded-[2.5rem] shadow-xl border border-border-gray relative overflow-hidden">
                <div className="absolute top-0 right-0 text-9xl font-heading font-bold text-bg-light -mt-4 -mr-4 pointer-events-none">01</div>
                <div className="relative z-10">
                  <span className="text-sm font-bold uppercase tracking-widest text-accent-gold mb-4 block">Step 1</span>
                  <h3 className="text-3xl md:text-4xl font-heading font-bold text-primary-navy mb-6">Get Your MyScoreIQ Account</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                      <p className="text-lg text-text-soft mb-6 leading-relaxed">
                        The first step is to make sure you have an active MyScoreIQ account.
                      </p>
                      <p className="text-lg text-text-soft mb-6 leading-relaxed">
                        Our team uses the information from your credit profile as part of the funding review process.
                      </p>
                      <p className="text-lg text-text-soft mb-6 leading-relaxed">
                        If you do not already have a MyScoreIQ account, use our link below to create one.
                      </p>
                      <p className="text-lg text-text-soft leading-relaxed font-medium text-primary-navy">
                        If you already have an active account, you can move directly to Step 2.
                      </p>
                    </div>
                    
                    <div className="flex flex-col justify-center space-y-6">
                      <Button to="/step-1-myscoreiq" variant="primary" showArrow className="w-full justify-center py-5">
                        Get MyScoreIQ
                      </Button>
                      <p className="text-sm text-center text-text-soft italic">
                        Already have an account? Continue to Step 2.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeUp>

            {/* Step 2 Card */}
            <FadeUp delay={0.2}>
              <div className="bg-white p-10 md:p-14 rounded-[2.5rem] shadow-xl border border-border-gray relative overflow-hidden">
                <div className="absolute top-0 right-0 text-9xl font-heading font-bold text-bg-light -mt-4 -mr-4 pointer-events-none">02</div>
                <div className="relative z-10">
                  <span className="text-sm font-bold uppercase tracking-widest text-accent-gold mb-4 block">Step 2</span>
                  <h3 className="text-3xl md:text-4xl font-heading font-bold text-primary-navy mb-6">Submit Your MyScoreIQ Information</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                      <p className="text-lg text-text-soft mb-6 leading-relaxed">
                        Once your MyScoreIQ account is active, complete the Step 2 form.
                      </p>
                      <p className="text-lg text-text-soft mb-6 leading-relaxed">
                        This allows our team to connect your credit profile information with your Unity Financial Solution funding file.
                      </p>
                      <p className="text-lg text-text-soft leading-relaxed font-medium text-primary-navy">
                        Make sure the information you submit is accurate and matches the information connected to your MyScoreIQ account.
                      </p>
                    </div>
                    
                    <div className="flex flex-col justify-center">
                      <Button to="/step-2" variant="primary" showArrow className="w-full justify-center py-5">
                        Complete Step 2
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </FadeUp>

            {/* Step 3 Card */}
            <FadeUp delay={0.3}>
              <div className="bg-white p-10 md:p-14 rounded-[2.5rem] shadow-xl border border-border-gray relative overflow-hidden">
                <div className="absolute top-0 right-0 text-9xl font-heading font-bold text-bg-light -mt-4 -mr-4 pointer-events-none">03</div>
                <div className="relative z-10">
                  <span className="text-sm font-bold uppercase tracking-widest text-accent-gold mb-4 block">Step 3</span>
                  <h3 className="text-3xl md:text-4xl font-heading font-bold text-primary-navy mb-6">Submit Your Funding Information & Documents</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                      <p className="text-lg text-text-soft mb-6 leading-relaxed">
                        The next step is completing your funding information and submitting the documents requested for your profile.
                      </p>
                      <p className="text-lg text-text-soft mb-6 leading-relaxed">
                        Depending on your situation, this may include personal information, business information, income details, funding goals, and supporting documents.
                      </p>
                      <p className="text-lg text-text-soft leading-relaxed font-medium text-primary-navy">
                        Please make sure everything submitted is clear, accurate, and complete.
                      </p>
                    </div>
                    
                    <div className="flex flex-col justify-center">
                      <Button to="/step-3" variant="primary" showArrow className="w-full justify-center py-5">
                        Submit My Information & Documents
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </FadeUp>

            {/* Step 4 Card */}
            <FadeUp delay={0.4}>
              <div className="bg-white p-10 md:p-14 rounded-[2.5rem] shadow-xl border border-border-gray relative overflow-hidden">
                <div className="absolute top-0 right-0 text-9xl font-heading font-bold text-bg-light -mt-4 -mr-4 pointer-events-none">04</div>
                <div className="relative z-10">
                  <span className="text-sm font-bold uppercase tracking-widest text-accent-gold mb-4 block">Step 4</span>
                  <h3 className="text-3xl md:text-4xl font-heading font-bold text-primary-navy mb-6">Our Team Reviews Your Profile</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                      <p className="text-lg text-text-soft mb-6 leading-relaxed">
                        Once Steps 1 through 3 are complete, our team will begin reviewing your profile.
                      </p>
                      <p className="text-lg text-text-soft mb-6 leading-relaxed">
                        We will review the information submitted, your credit profile, your funding goals, and the documents provided.
                      </p>
                      <p className="text-lg text-text-soft leading-relaxed">
                        After the review is complete, a member of the Unity Financial Solution team will contact you regarding the next steps.
                      </p>
                    </div>
                    
                    <div className="flex flex-col justify-center">
                      <div className="bg-accent-gold/10 border-l-4 border-accent-gold p-6 rounded-r-xl">
                        <h4 className="font-bold text-primary-navy mb-2 flex items-center gap-2"><AlertCircle className="w-5 h-5 text-accent-gold"/> Highlight Message</h4>
                        <p className="text-sm text-text-soft leading-relaxed">
                          You do not need to complete another form during this step. Once your file is complete, our team takes it from here.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeUp>

          </div>
        </div>
      </section>

      {/* What Happens Next Section */}
      <section className="py-32 bg-white border-t border-border-gray">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
          <FadeUp className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-navy">What Happens After You Submit Everything?</h2>
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
              { title: "Your File Is Organized", desc: "We confirm that the required information and documents have been submitted.", icon: <ClipboardList className="w-8 h-8" /> },
              { title: "Your Profile Is Reviewed", desc: "Our team reviews your credit profile, funding information, business details, and documents.", icon: <Search className="w-8 h-8" /> },
              { title: "Your Next Direction Is Identified", desc: "We determine the next step based on the full profile and information submitted.", icon: <Target className="w-8 h-8" /> },
              { title: "Our Team Contacts You", desc: "A member of our team will reach out with the next steps.", icon: <Send className="w-8 h-8" /> }
            ].map((item, index) => (
              <FadeUp key={index} delay={index * 0.1} className="relative z-10 flex flex-col items-start lg:items-center lg:text-center group bg-white p-8 rounded-2xl border border-border-gray shadow-sm hover:shadow-md transition-all">
                <div className="w-20 h-20 rounded-full bg-bg-light flex items-center justify-center text-primary-navy mb-6 shadow-sm group-hover:bg-primary-navy group-hover:text-white transition-all duration-500">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-primary-navy">{item.title}</h3>
                <p className="text-text-soft text-base leading-relaxed">{item.desc}</p>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Important Reminder Section */}
      <section className="py-24 bg-bg-light border-y border-border-gray text-center px-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-primary-green/5 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <FadeUp>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-navy mb-6">
              Complete Every Step Before Waiting for Review
            </h2>
            <p className="text-lg text-text-soft leading-relaxed mb-10">
              Creating a MyScoreIQ account alone does not complete your onboarding.
            </p>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-border-gray max-w-2xl mx-auto mb-10 text-left">
              <h4 className="font-bold text-primary-navy text-lg mb-6 border-b border-border-gray pb-4">Make sure you complete:</h4>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary-green" />
                  <span className="text-text-charcoal font-medium">Step 1: MyScoreIQ</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary-green" />
                  <span className="text-text-charcoal font-medium">Step 2: MyScoreIQ Information Submission</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary-green" />
                  <span className="text-text-charcoal font-medium">Step 3: Funding Information & Documents</span>
                </li>
              </ul>
            </div>
            
            <p className="text-lg font-medium text-primary-navy">
              After those steps are complete, your file moves into Step 4: Team Review.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-32 bg-primary-navy text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <MeshGradient speed={4} intensity={1.5} grain={0.2} />
        </div>
        <div className="max-w-[800px] mx-auto px-6 relative z-10">
          <FadeUp>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-8">
              Ready to Start?
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-10">
              Begin with Step 1 and follow the process in order. Once your file is complete, our team will review everything and get back to you.
            </p>
            <div className="flex justify-center mb-8">
              <Button 
                to="/step-1-myscoreiq"
                variant="gold"
                showArrow
                className="text-xl px-12 py-6 shadow-[0_20px_40px_rgba(200,157,60,0.3)] hover:scale-105 transition-transform"
              >
                Start Step 1
              </Button>
            </div>
            <p className="text-sm text-gray-400 max-w-2xl mx-auto leading-relaxed italic">
              Please provide accurate information and complete all required steps to avoid delays in the review process.
            </p>
          </FadeUp>
        </div>
      </section>

    </div>
  );
};

export default ApplyNow;