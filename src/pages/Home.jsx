import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import Tilt from 'react-parallax-tilt';
import { 
  CreditCard, Briefcase, Landmark, CheckSquare, Target, TrendingUp, 
  Shield, FileText, ArrowRight, AlertCircle, Users, Activity,
  ChevronRight, BarChart3, Building2, HelpCircle, Plus, Minus
} from 'lucide-react';
import Button from '../components/Button';
import MeshGradient from '../components/ui/mesh-gradient-shader';
import CTABanner from '../components/CTABanner';
import InkReveal from '../components/ui/ink-reveal';
import { cn } from '../components/Button'; // using the helper

// --- Helper Components for Animations ---

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

const AnimatedNumber = ({ end, prefix = '', suffix = '', decimals = 0 }) => {
  const [ref, inView] = useInView({ triggerOnce: true });
  return (
    <div ref={ref}>
      {inView ? (
        <CountUp end={end} prefix={prefix} suffix={suffix} decimals={decimals} duration={2.5} separator="," useEasing />
      ) : (
        <span>{prefix}0{suffix}</span>
      )}
    </div>
  );
};

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-border-gray py-6">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="flex w-full items-center justify-between text-left focus:outline-none group"
      >
        <h4 className="text-xl md:text-2xl font-heading font-medium text-primary-navy group-hover:text-primary-green transition-colors pr-8">
          {question}
        </h4>
        <div className="flex-shrink-0 w-10 h-10 rounded-full border border-border-gray flex items-center justify-center group-hover:border-primary-green transition-colors">
          {isOpen ? <Minus className="w-5 h-5 text-primary-navy" /> : <Plus className="w-5 h-5 text-primary-navy" />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="pt-6 text-lg text-text-soft leading-relaxed max-w-3xl">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// --- Main Page Component ---

const Home = () => {
  return (
    <div className="flex flex-col w-full bg-white overflow-hidden">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-[100vh] flex items-center pt-24 pb-32 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="absolute inset-0 w-full h-full object-cover opacity-40"
          >
            <source src="/assets/can_you_make_this_image_animat.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-white/70 backdrop-blur-md" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/40 to-white" />
          
          {/* Abstract Glow Shapes */}
          <div className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] rounded-full bg-primary-green opacity-30 blur-[120px] pointer-events-none"></div>
          <div className="absolute bottom-[-10%] left-[-5%] w-[800px] h-[800px] rounded-full bg-accent-gold opacity-30 blur-[120px] pointer-events-none"></div>
          
          <MeshGradient speed={5} intensity={1.2} grain={0.3} className="opacity-10 mix-blend-multiply" />
        </div>

        <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 pt-12 lg:pt-0">
              <FadeUp>
                <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white border border-border-gray shadow-sm mb-8">
                  <span className="flex h-2.5 w-2.5 rounded-full bg-primary-green relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-green opacity-75"></span>
                  </span>
                  <span className="text-sm font-semibold tracking-wide text-primary-navy uppercase">
                    15+ Years of Funding Experience
                  </span>
                </div>
              </FadeUp>
              
              <FadeUp delay={0.1}>
                <h1 className="text-[56px] leading-[1.05] md:text-[72px] lg:text-[84px] font-heading font-bold text-primary-navy tracking-tight mb-8">
                  Funding Built With <br className="hidden md:block"/>
                  <span className="bg-clip-text bg-gradient-to-r from-primary-green to-accent-gold">
                    Strategy, Not Guesswork.
                  </span>
                </h1>
              </FadeUp>
              
              <FadeUp delay={0.2}>
                <p className="text-xl md:text-2xl text-text-soft leading-relaxed max-w-2xl mb-12">
                  Unity Financial Solution helps individuals, entrepreneurs, and business owners access capital through personal credit card stacking, business credit card stacking, SBA loan options, and business funding readiness strategies.
                </p>
              </FadeUp>
              
              <FadeUp delay={0.3}>
                <div className="flex flex-col sm:flex-row gap-5 mb-10">
                  <Button to="/apply" variant="primary" showArrow className="text-lg px-10 py-5">
                    Start My Funding Review
                  </Button>
                  <Button to="/funding-solutions" variant="secondary" className="text-lg px-10 py-5">
                    View Funding Options
                  </Button>
                </div>
              </FadeUp>
              
              <FadeUp delay={0.4}>
                <p className="text-sm text-text-soft/70 max-w-xl leading-relaxed">
                  Funding is subject to lender approval, underwriting, eligibility, credit profile, income, business history, documentation, and other applicable criteria. Results are not guaranteed.
                </p>
              </FadeUp>
            </div>
            
            {/* Right Visuals - Premium Abstract Dashboard */}
            <div className="lg:col-span-5 relative hidden md:block">
              <FadeUp delay={0.3} className="relative z-10">
                <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} perspective={1000} scale={1.02} transitionSpeed={2000} className="relative">
                  {/* Glass Card */}
                  <div className="bg-white/80 backdrop-blur-2xl border border-white shadow-[0_30px_60px_rgba(13,27,61,0.12)] rounded-[2rem] p-10 overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary-green/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3"></div>
                    
                    <div className="flex justify-between items-start mb-12 relative z-10">
                      <div>
                        <div className="text-sm font-semibold text-text-soft uppercase tracking-wider mb-2">Capital Secured</div>
                        <div className="text-5xl font-heading font-bold text-primary-navy">
                          <AnimatedNumber prefix="$" end={150} suffix=",000" />
                        </div>
                      </div>
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-green to-[#0a382a] flex items-center justify-center shadow-lg">
                        <TrendingUp className="text-white w-8 h-8" />
                      </div>
                    </div>
                    
                    <div className="space-y-6 relative z-10">
                      <div>
                        <div className="flex justify-between text-sm font-medium mb-2">
                          <span className="text-primary-navy">Funding Readiness</span>
                          <span className="text-primary-green">Excellent</span>
                        </div>
                        <div className="h-3 w-full bg-bg-light rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: '92%' }}
                            transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
                            className="h-full bg-gradient-to-r from-primary-navy to-primary-green"
                          />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 pt-6 border-t border-border-gray/50">
                        <div className="bg-white rounded-xl p-4 shadow-sm border border-border-gray/30">
                          <div className="flex items-center gap-2 mb-2">
                            <Shield className="w-4 h-4 text-accent-gold" />
                            <span className="text-xs font-semibold text-text-soft uppercase">Profile</span>
                          </div>
                          <div className="text-lg font-bold text-primary-navy">Optimized</div>
                        </div>
                        <div className="bg-white rounded-xl p-4 shadow-sm border border-border-gray/30">
                          <div className="flex items-center gap-2 mb-2">
                            <Target className="w-4 h-4 text-accent-gold" />
                            <span className="text-xs font-semibold text-text-soft uppercase">Strategy</span>
                          </div>
                          <div className="text-lg font-bold text-primary-navy">Structured</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Tilt>
              </FadeUp>
              
              {/* Decorative floating elements */}
              <motion.div 
                animate={{ y: [-15, 15, -15] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-12 -left-12 z-20"
              >
                <div className="bg-primary-navy text-white px-8 py-5 rounded-2xl shadow-2xl border border-white/10 backdrop-blur-md flex items-center gap-4">
                  <div className="w-3 h-3 rounded-full bg-accent-gold animate-pulse"></div>
                  <span className="font-heading font-semibold text-lg tracking-wide">Over $100M+ Funded</span>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= STATISTICS / TRUST ================= */}
      <section className="py-24 bg-primary-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
        <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 divide-y md:divide-y-0 md:divide-x divide-white/10">
            <FadeUp delay={0.1} className="pt-8 md:pt-0 md:px-8 text-center md:text-left">
              <div className="text-5xl lg:text-6xl font-heading font-bold text-white mb-3">
                <AnimatedNumber end={15} suffix="+" />
              </div>
              <div className="text-lg text-gray-400 font-medium uppercase tracking-widest">Years Experience</div>
            </FadeUp>
            <FadeUp delay={0.2} className="pt-8 md:pt-0 md:px-8 text-center md:text-left">
              <div className="text-5xl lg:text-6xl font-heading font-bold text-accent-gold mb-3">
                <AnimatedNumber prefix="$" end={100} suffix="M+" />
              </div>
              <div className="text-lg text-gray-400 font-medium uppercase tracking-widest">Capital Funded</div>
            </FadeUp>
            <FadeUp delay={0.3} className="pt-8 md:pt-0 md:px-8 text-center md:text-left">
              <div className="text-4xl lg:text-5xl font-heading font-bold text-white mb-3 flex items-center justify-center md:justify-start h-[60px] lg:h-[72px]">
                Personal &<br/>Business
              </div>
              <div className="text-lg text-gray-400 font-medium uppercase tracking-widest">Funding Options</div>
            </FadeUp>
            <FadeUp delay={0.4} className="pt-8 md:pt-0 md:px-8 text-center md:text-left">
              <div className="text-4xl lg:text-5xl font-heading font-bold text-white mb-3 flex items-center justify-center md:justify-start h-[60px] lg:h-[72px]">
                Strategy First
              </div>
              <div className="text-lg text-gray-400 font-medium uppercase tracking-widest">Review Process</div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ================= THE PROBLEM & WHY UNITY ================= */}
      <section className="py-32 bg-bg-light relative overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
            <FadeUp>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-100 text-red-700 text-sm font-bold uppercase tracking-wider mb-8">
                <AlertCircle className="w-4 h-4" /> The Problem
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-navy leading-[1.1] mb-8">
                Most People Apply Blind. That Is Where the Damage Starts.
              </h2>
              <p className="text-xl text-text-soft leading-relaxed mb-6">
                Funding is not just about having a decent credit score or owning a business. Lenders look at multiple factors before making a decision.
              </p>
              <p className="text-xl text-text-soft leading-relaxed mb-8">
                They may review your credit profile, utilization, inquiries, income, revenue, business age, industry, banking activity, documentation, and overall risk.
              </p>
              <div className="border-l-4 border-red-500 pl-6 py-2">
                <p className="text-lg font-medium text-text-charcoal">
                  When you apply without knowing how your profile looks, you may create unnecessary hard inquiries, receive lower limits, or get denied for options you were not ready for.
                </p>
              </div>
              <p className="text-xl font-bold text-primary-navy mt-8">
                At Unity Financial Solution, we help you review the profile before the application, so the strategy comes before the submission.
              </p>
            </FadeUp>
            
            <FadeUp delay={0.2}>
              <div className="bg-white rounded-[2.5rem] p-10 md:p-14 shadow-2xl border border-border-gray relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-green/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"></div>
                
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-primary-green text-sm font-bold uppercase tracking-wider mb-8 relative z-10">
                  <Shield className="w-4 h-4" /> Why Unity
                </span>
                <h3 className="text-3xl md:text-4xl font-heading font-bold text-primary-navy leading-tight mb-8 relative z-10">
                  We Do More Than Submit Applications. We Build Funding Strategy.
                </h3>
                <p className="text-lg text-text-soft leading-relaxed mb-6 relative z-10">
                  Many people apply for funding without knowing what lenders are really reviewing. That leads to unnecessary denials, wasted inquiries, and missed opportunities.
                </p>
                <p className="text-lg text-text-soft leading-relaxed mb-10 relative z-10">
                  Unity Financial Solution helps clients slow down, review the full profile, and pursue funding with a clear strategy. Our goal is to help you understand where you stand, what options may be available, and what needs to be improved before moving forward.
                </p>
                
                <ul className="space-y-4 relative z-10">
                  {[
                    "Over 15 years of funding experience",
                    "Over $100 million funded",
                    "Personal and business funding options",
                    "Credit card stacking strategies",
                    "SBA loan readiness support",
                    "Business profile and criteria review",
                    "Clear process from application to funding plan",
                    "Strategy-first approach before submission"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <div className="mt-1 w-6 h-6 rounded-full bg-primary-navy flex items-center justify-center flex-shrink-0">
                        <CheckSquare className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-lg font-medium text-text-charcoal">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeUp>
          </div>

        </div>
      </section>

      {/* ================= FUNDING SOLUTIONS OVERVIEW ================= */}
      <section className="py-32 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
          <FadeUp className="text-center max-w-4xl mx-auto mb-24">
            <span className="text-sm font-bold uppercase tracking-widest text-accent-gold mb-4 block">Funding Solutions</span>
            <h2 className="text-5xl md:text-6xl font-heading font-bold text-primary-navy mb-8">
              Capital Solutions for Every Stage of Growth
            </h2>
            <p className="text-xl text-text-soft leading-relaxed">
              Whether you are starting a business, expanding an existing company, or looking for access to more working capital, Unity Financial Solution helps you understand which funding path may fit your profile.
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {[
              {
                icon: CreditCard,
                title: "Personal Credit Card Stacking",
                desc: "Access personal revolving credit through a structured application strategy based on your credit profile, income, utilization, inquiries, and approval readiness.",
                link: "/personal-credit-card-stacking"
              },
              {
                icon: Briefcase,
                title: "Business Credit Card Stacking",
                desc: "Pursue business credit card options designed for entrepreneurs and business owners who want access to revolving business capital.",
                link: "/business-credit-card-stacking"
              },
              {
                icon: Landmark,
                title: "SBA Loan Support",
                desc: "Explore SBA loan options for qualified businesses seeking working capital, business expansion, equipment financing, real estate, or long-term growth capital.",
                link: "/sba-loans"
              },
              {
                icon: Activity,
                title: "Business Funding Readiness",
                desc: "Prepare your business profile before applying by reviewing the key factors lenders look at, including business setup, banking, revenue, credit, and documentation.",
                link: "/business-funding-readiness"
              }
            ].map((service, index) => (
              <FadeUp key={index} delay={index * 0.1}>
                <Tilt tiltMaxAngleX={2} tiltMaxAngleY={2} perspective={1000} transitionSpeed={1000} className="h-full">
                  <div className="h-full bg-white rounded-[2rem] p-10 lg:p-14 border border-border-gray hover:border-primary-navy/20 shadow-lg hover:shadow-2xl transition-all duration-500 group flex flex-col relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-bg-light rounded-bl-[100%] -mr-10 -mt-10 group-hover:bg-primary-navy/5 transition-colors duration-500"></div>
                    
                    <div className="w-20 h-20 rounded-2xl bg-bg-light flex items-center justify-center mb-8 group-hover:bg-primary-navy transition-colors duration-500 relative z-10">
                      <service.icon className="w-10 h-10 text-primary-navy group-hover:text-white transition-colors duration-500" />
                    </div>
                    
                    <h3 className="text-3xl font-heading font-bold text-primary-navy mb-6 relative z-10">{service.title}</h3>
                    <p className="text-lg text-text-soft leading-relaxed mb-10 flex-grow relative z-10">
                      {service.desc}
                    </p>
                    
                    <div className="relative z-10">
                      <Button to={service.link} variant="secondary" showArrow className="w-full sm:w-auto">
                        Learn More
                      </Button>
                    </div>
                  </div>
                </Tilt>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ================= HOW IT WORKS (OUR PROCESS) ================= */}
      <section className="py-32 bg-primary-navy text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-primary-green opacity-20 blur-[120px] rounded-full"></div>
          <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-accent-gold opacity-10 blur-[120px] rounded-full"></div>
        </div>

        <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <FadeUp className="mb-24">
            <span className="text-sm font-bold uppercase tracking-widest text-accent-gold mb-4 block">Our Process</span>
            <h2 className="text-5xl md:text-6xl font-heading font-bold mb-8 max-w-4xl text-white">
              A Clear Path From Review to Funding Strategy
            </h2>
          </FadeUp>

          <div className="space-y-12 lg:space-y-0 lg:grid lg:grid-cols-5 gap-8 relative">
            {/* Desktop connecting line */}
            <div className="hidden lg:block absolute top-[40px] left-0 w-full h-[2px] bg-white/10 z-0">
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="h-full bg-gradient-to-r from-primary-green to-accent-gold"
              />
            </div>

            {[
              { title: "Submit Review", desc: "Complete the funding review form with your personal, business, and funding information." },
              { title: "Profile Review", desc: "Our team reviews your credit, income, business structure, revenue, banking, documentation." },
              { title: "Path Selection", desc: "We identify which funding options may fit your current profile." },
              { title: "App Strategy", desc: "We help guide the application approach based on lender requirements." },
              { title: "Funding Plan", desc: "You receive clear direction on options, documents, and next steps." }
            ].map((step, index) => (
              <FadeUp key={index} delay={index * 0.15} className="relative z-10 flex flex-col items-start lg:items-center lg:text-center group">
                <div className="w-20 h-20 rounded-full bg-primary-navy border-2 border-white/20 flex items-center justify-center text-2xl font-bold font-heading mb-8 shadow-2xl group-hover:border-accent-gold group-hover:bg-white group-hover:text-primary-navy transition-all duration-500">
                  {index + 1}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">{step.title}</h3>
                <p className="text-gray-400 text-lg leading-relaxed">{step.desc}</p>
              </FadeUp>
            ))}
          </div>

          <FadeUp delay={0.6} className="mt-24 flex justify-center w-full">
            <Button to="/apply" variant="gold" showArrow className="text-lg px-12 py-5 ">
              Start My Funding Review
            </Button>
          </FadeUp>
        </div>
      </section>

      {/* ================= READINESS & CHECKLIST ================= */}
      <section className="py-32 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="bg-bg-light rounded-[3rem] p-10 lg:p-20 border border-border-gray">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
              <FadeUp>
                <span className="text-sm font-bold uppercase tracking-widest text-primary-green mb-4 block">Funding Readiness</span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-navy leading-tight mb-8">
                  Before You Apply, Make Sure Your Profile Looks Fundable.
                </h2>
                <p className="text-xl text-text-soft leading-relaxed mb-10">
                  A strong funding profile is built before the application is submitted. Unity Financial Solution helps business owners understand what lenders may review and what areas need attention before pursuing capital.
                </p>
                <div className="bg-white p-8 rounded-2xl border border-border-gray shadow-sm">
                  <p className="text-xl font-medium text-primary-navy">
                    The stronger your profile looks before submission, the better positioned you may be when pursuing funding options.
                  </p>
                </div>
              </FadeUp>
              
              <FadeUp delay={0.2}>
                <div className="bg-white rounded-[2rem] p-10 border border-border-gray shadow-xl h-full">
                  <h3 className="text-2xl font-heading font-bold text-primary-navy mb-8 flex items-center gap-4">
                    <FileText className="w-8 h-8 text-primary-green" />
                    What We Review
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-4">
                    {[
                      "Personal credit profile", "Credit utilization", "Recent inquiries", "Income",
                      "Business entity", "EIN", "Business bank account", "Monthly revenue",
                      "Time in business", "Industry type", "Business website", "Address & Phone",
                      "Bank statements", "Tax returns", "Use of funds", "Existing debt"
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-green-50 flex items-center justify-center border border-green-100 flex-shrink-0">
                          <CheckSquare className="w-3 h-3 text-primary-green" />
                        </div>
                        <span className="text-base font-medium text-text-charcoal">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CREDIT CARD STACKING ================= */}
      <section className="py-32 bg-primary-navy relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary-green opacity-20 blur-[150px] rounded-full pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
        <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <FadeUp className="text-center max-w-4xl mx-auto mb-20">
            <span className="text-sm font-bold uppercase tracking-widest text-accent-gold mb-4 block">Credit Card Stacking</span>
            <h2 className="text-5xl md:text-6xl font-heading font-bold text-white mb-8">
              Personal and Business Credit Card Stacking With Structure
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              Credit card stacking is a funding strategy where qualified applicants pursue multiple credit cards in a structured sequence to potentially access higher total available credit.
            </p>
            <p className="text-xl text-gray-300 leading-relaxed">
              This strategy should not be done randomly. The order, timing, lender selection, profile strength, utilization, income, inquiries, and recent approvals can all impact the outcome.
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <FadeUp delay={0.1}>
              <div className="bg-white/10 backdrop-blur-md p-10 lg:p-14 rounded-[2rem] border border-white/20 hover:bg-white/15 transition-colors h-full flex flex-col">
                <h3 className="text-3xl font-heading font-bold text-white mb-6">Personal Credit Card Stacking</h3>
                <p className="text-lg text-gray-300 leading-relaxed mb-10">
                  Designed for qualified individuals who want to access revolving credit using a strategic application approach.
                </p>
                <div className="mb-4 text-sm font-bold uppercase tracking-widest text-accent-gold">Best for:</div>
                <ul className="space-y-4 mb-10 flex-grow">
                  {[
                    "Entrepreneurs", "Startup founders", "Individuals with strong credit",
                    "People looking for revolving capital", "Clients preparing for business growth"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <div className="mt-1 w-6 h-6 rounded-full bg-primary-green/20 flex items-center justify-center flex-shrink-0">
                        <CheckSquare className="w-3 h-3 text-primary-green" />
                      </div>
                      <span className="text-lg font-medium text-white">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeUp>

            <FadeUp delay={0.2}>
              <div className="bg-white/10 backdrop-blur-md p-10 lg:p-14 rounded-[2rem] border border-white/20 hover:bg-white/15 transition-colors h-full flex flex-col">
                <h3 className="text-3xl font-heading font-bold text-white mb-6">Business Credit Card Stacking</h3>
                <p className="text-lg text-gray-300 leading-relaxed mb-10">
                  Designed for business owners who want to access business revolving credit while keeping personal and business funding strategy organized.
                </p>
                <div className="mb-4 text-sm font-bold uppercase tracking-widest text-accent-gold">Best for:</div>
                <ul className="space-y-4 mb-10 flex-grow">
                  {[
                    "LLCs", "Corporations", "New businesses", "Growing businesses",
                    "Business owners with strong personal credit", "Companies needing working capital"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <div className="mt-1 w-6 h-6 rounded-full bg-accent-gold/20 flex items-center justify-center flex-shrink-0">
                        <CheckSquare className="w-3 h-3 text-accent-gold" />
                      </div>
                      <span className="text-lg font-medium text-white">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeUp>
          </div>
          
          <FadeUp delay={0.3} className="mt-16 text-center">
             <Button to="/apply" variant="gold" showArrow className="text-lg px-12 py-5">
               Explore Credit Card Stacking
             </Button>
          </FadeUp>
        </div>
      </section>

      {/* ================= SBA LOAN SUPPORT ================= */}
      <section className="py-32 bg-bg-light">
        <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <FadeUp>
              <span className="text-sm font-bold uppercase tracking-widest text-primary-green mb-4 block">SBA Loan Options</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-navy leading-tight mb-8">
                SBA Funding Support for Qualified Businesses
              </h2>
              <p className="text-xl text-text-soft leading-relaxed mb-6">
                SBA loan options can help qualified businesses access structured capital for working capital, expansion, equipment, real estate, inventory, and long-term growth.
              </p>
              <p className="text-xl text-text-soft leading-relaxed mb-10">
                Unity Financial Solution helps business owners understand SBA loan readiness, documentation requirements, and possible funding pathways before moving forward.
              </p>
              <Button to="/apply" variant="primary" showArrow className="text-lg px-10 py-5">
                Check SBA Readiness
              </Button>
            </FadeUp>
            
            <FadeUp delay={0.2}>
              <div className="bg-white rounded-[2.5rem] p-10 border border-border-gray shadow-xl relative overflow-hidden">
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary-green/5 rounded-tl-full translate-x-1/3 translate-y-1/3"></div>
                <h3 className="text-2xl font-heading font-bold text-primary-navy mb-8 relative z-10">What We May Review</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-4 relative z-10">
                  {[
                    "Time in business", "Monthly revenue", "Profitability", "Business tax returns",
                    "Bank statements", "Personal credit", "Business debt", "Use of funds",
                    "Industry type", "Collateral, when applicable", "Business plan, when needed"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-bg-light flex items-center justify-center flex-shrink-0">
                        <CheckSquare className="w-3 h-3 text-primary-navy" />
                      </div>
                      <span className="text-base font-medium text-text-charcoal">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ================= WHO WE HELP ================= */}
      <section className="py-32 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <FadeUp>
              <span className="text-sm font-bold uppercase tracking-widest text-primary-green mb-4 block">Experience Matters</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-navy leading-tight mb-8">
                Over 15 Years in Funding. Over $100 Million Funded.
              </h2>
              <p className="text-xl text-text-soft leading-relaxed mb-6">
                Unity Financial Solution is built on real funding experience. Over the past 15 years, our team has helped clients pursue capital through personal funding, business funding, credit card stacking, and structured lending options.
              </p>
              <p className="text-xl text-text-soft leading-relaxed mb-10">
                Now, through Unity Financial Solution, we are bringing that experience into a modern funding system built around strategy, clarity, and preparation.
              </p>
            </FadeUp>
            
            <FadeUp delay={0.2}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-primary-navy rounded-[2rem] p-8 text-center border border-primary-navy/20 shadow-xl flex flex-col justify-center h-48">
                  <div className="text-4xl font-heading font-bold text-white mb-2">15+ Years</div>
                  <div className="text-sm font-medium text-accent-gold uppercase tracking-widest">Funding Experience</div>
                </div>
                <div className="bg-primary-navy rounded-[2rem] p-8 text-center border border-primary-navy/20 shadow-xl flex flex-col justify-center h-48">
                  <div className="text-4xl font-heading font-bold text-white mb-2">$100M+</div>
                  <div className="text-sm font-medium text-accent-gold uppercase tracking-widest">Funded</div>
                </div>
                <div className="bg-primary-navy rounded-[2rem] p-8 text-center border border-primary-navy/20 shadow-xl flex flex-col justify-center h-48">
                  <div className="text-3xl font-heading font-bold text-white mb-2">Personal + Business</div>
                  <div className="text-sm font-medium text-accent-gold uppercase tracking-widest">Funding Options</div>
                </div>
                <div className="bg-primary-navy rounded-[2rem] p-8 text-center border border-primary-navy/20 shadow-xl flex flex-col justify-center h-48">
                  <div className="text-3xl font-heading font-bold text-white mb-2">Strategy-First</div>
                  <div className="text-sm font-medium text-accent-gold uppercase tracking-widest">Review Process</div>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ================= WHO WE HELP ================= */}
      <section className="py-32 bg-bg-light border-t border-border-gray">
        <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
          <FadeUp className="text-center max-w-4xl mx-auto mb-24">
            <span className="text-sm font-bold uppercase tracking-widest text-primary-green mb-4 block">Who We Help</span>
            <h2 className="text-5xl md:text-6xl font-heading font-bold text-primary-navy mb-8">
              Funding Support for Individuals, Entrepreneurs, and Business Owners
            </h2>
            <p className="text-xl text-text-soft leading-relaxed">
              Unity Financial Solution works with clients at different stages of the funding journey. Whether you are preparing for your first round of funding or looking to expand an established business, our process starts with understanding your profile.
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Startup Founders", desc: "Looking for capital to launch or grow a new business.", icon: Target },
              { title: "Business Owners", desc: "Looking for working capital, expansion funding, or credit options.", icon: Briefcase },
              { title: "Entrepreneurs", desc: "Looking to leverage personal or business credit strategically.", icon: TrendingUp },
              { title: "Established Companies", desc: "Looking to prepare for larger funding opportunities, including SBA loan options.", icon: Building2 },
              { title: "Previously Denied", desc: "Looking to understand why they may have been denied and what needs to be improved.", icon: AlertCircle }
            ].map((client, index) => (
              <FadeUp key={index} delay={index * 0.1}>
                <div className="bg-white p-10 rounded-[2rem] border border-border-gray hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                  <div className="w-16 h-16 bg-bg-light rounded-2xl flex items-center justify-center mb-8">
                    <client.icon className="w-8 h-8 text-primary-navy" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary-navy mb-4">{client.title}</h3>
                  <p className="text-lg text-text-soft leading-relaxed">{client.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="py-32 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <FadeUp>
                <span className="text-sm font-bold uppercase tracking-widest text-primary-green mb-4 block">Common Questions</span>
                <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-navy mb-8">
                  Questions Before You Apply?
                </h2>
                <Button to="/faq" variant="secondary" className="text-lg px-8 py-4">
                  View Full FAQ
                </Button>
              </FadeUp>
            </div>
            <div className="lg:col-span-7">
              <FadeUp delay={0.2}>
                <div className="border-t border-border-gray">
                  {[
                    {
                      q: "Do you guarantee funding?",
                      a: "No. Unity Financial Solution does not guarantee approvals, funding amounts, credit limits, interest rates, or loan terms. All funding decisions are made by third-party lenders, banks, credit card issuers, or financial institutions."
                    },
                    {
                      q: "What is credit card stacking?",
                      a: "Credit card stacking is a strategy where qualified applicants apply for multiple credit cards in a structured sequence to potentially access higher total available credit."
                    },
                    {
                      q: "Do you work with new businesses?",
                      a: "Yes. We may work with new businesses, but available options depend on credit profile, income, business structure, industry, banking, documentation, and lender requirements."
                    },
                    {
                      q: "Do SBA loans require documents?",
                      a: "Yes. SBA loan options typically require documentation such as bank statements, tax returns, business financials, business formation documents, and other supporting records."
                    }
                  ].map((faq, i) => (
                    <FAQItem key={i} question={faq.q} answer={faq.a} />
                  ))}
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>   
        <CTABanner />
    </div>
    
  );
};

export default Home;