import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Tilt from 'react-parallax-tilt';
import { Target, Eye, Shield, TrendingUp, CheckCircle2, AlertCircle, Users, Briefcase, Building2, HelpCircle } from 'lucide-react';
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

const AboutUs = () => {
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
              About Unity Financial Solution
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-8 leading-tight">
              Built From Experience. <br className="hidden md:block"/>
              <span className="bg-clip-text bg-gradient-to-r from-primary-green to-accent-gold">Rebranded for the Future of Funding.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto font-light mb-12">
              Unity Financial Solution was created to bring structure, strategy, and clarity to the funding process for individuals, entrepreneurs, and business owners.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-5 mb-8">
              <Button to="/apply" variant="gold" showArrow className="text-lg px-10 py-5 shadow-[0_20px_40px_rgba(200,157,60,0.3)] hover:scale-105 transition-transform">
                Start My Funding Review
              </Button>
              <Button to="/funding-solutions" variant="secondary" className="text-lg px-10 py-5">
                View Funding Options
              </Button>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Section 2: Our Story */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-bg-light rounded-full blur-[100px] opacity-50 -translate-y-1/2 translate-x-1/3"></div>
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeUp>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-navy mb-8">
                A Funding Brand Built on Real Experience
              </h2>
              <p className="text-xl text-text-soft leading-relaxed mb-6">
                Unity Financial Solution was built from more than 15 years of experience in the funding space.
              </p>
              <p className="text-xl text-text-soft leading-relaxed mb-6">
                Over the years, our team has helped clients pursue funding through personal credit, business credit, credit card stacking, SBA loan pathways, and structured business funding options.
              </p>
              <p className="text-xl text-text-soft leading-relaxed mb-6">
                After helping fund over $100 million, we recognized that most people do not need more random applications. They need a better system, a better review process, and a clearer strategy before they apply.
              </p>
              <p className="text-xl text-text-soft leading-relaxed mb-10">
                That is why Unity Financial Solution was created. We are rebranding and building this company as a modern funding platform designed to help people understand their profile, prepare their documentation, and pursue capital with structure.
              </p>
              <div className="inline-block border-l-4 border-primary-green pl-6 py-2">
                <p className="text-xl font-heading font-bold text-primary-navy">
                  Unity Financial Solution is not built around guessing. It is built around strategy.
                </p>
              </div>
            </FadeUp>
            
            <FadeUp delay={0.2}>
              <Tilt tiltMaxAngleX={2} tiltMaxAngleY={2} perspective={1000} className="h-full">
                <div className="bg-bg-light p-10 md:p-12 rounded-[2.5rem] border border-border-gray shadow-xl relative overflow-hidden h-full flex flex-col justify-center min-h-[400px]">
                   <div className="absolute top-0 right-0 w-48 h-48 bg-primary-green/5 rounded-bl-full -mr-8 -mt-8"></div>
                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 relative z-10">
                      <div>
                        <div className="text-5xl font-heading font-bold text-primary-navy mb-2">15+</div>
                        <div className="text-sm font-bold uppercase tracking-widest text-text-soft">Years Experience</div>
                      </div>
                      <div>
                        <div className="text-5xl font-heading font-bold text-primary-navy mb-2">$100M+</div>
                        <div className="text-sm font-bold uppercase tracking-widest text-text-soft">Funded</div>
                      </div>
                   </div>
                </div>
              </Tilt>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Section 3: What We Do */}
      <section className="py-32 bg-bg-light border-y border-border-gray">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeUp className="order-2 lg:order-1">
              <div className="bg-white p-10 md:p-12 rounded-[2.5rem] border border-border-gray shadow-lg">
                <h3 className="text-2xl font-bold text-primary-navy mb-6">What We Help With</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "Personal credit card stacking", "Business credit card stacking", "SBA loan readiness",
                    "Business funding preparation", "Business profile review", "Documentation readiness",
                    "Funding strategy direction", "Lender-conscious application planning"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-bg-light flex items-center justify-center flex-shrink-0 shadow-sm border border-border-gray mt-0.5">
                        <CheckCircle2 className="w-3 h-3 text-primary-green" />
                      </div>
                      <span className="text-sm text-primary-navy font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>

            <FadeUp className="order-1 lg:order-2">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-navy mb-8">
                We Help Clients Understand Their Funding Path
              </h2>
              <p className="text-xl text-text-soft leading-relaxed mb-6">
                Funding is not one-size-fits-all. Every person and every business has a different profile.
              </p>
              <p className="text-xl text-text-soft leading-relaxed mb-6">
                Some clients may be positioned for personal credit card stacking. Others may be better suited for business credit card stacking, SBA loan support, or business funding readiness before applying.
              </p>
              <p className="text-xl text-text-soft leading-relaxed">
                Unity Financial Solution helps review the full picture before moving forward.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Sections 4 & 5: Mission and Vision */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            <FadeUp delay={0.1}>
              <Tilt tiltMaxAngleX={2} tiltMaxAngleY={2} perspective={1000} className="h-full">
                <div className="h-full bg-bg-light p-12 lg:p-16 rounded-[2.5rem] border border-border-gray shadow-lg hover:shadow-2xl transition-all duration-500 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-primary-green/5 rounded-bl-full -mr-8 -mt-8 transition-colors duration-500 group-hover:bg-primary-green/10"></div>
                  
                  <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mb-8 relative z-10 group-hover:bg-primary-navy transition-colors duration-500 shadow-sm">
                    <Target className="w-10 h-10 text-primary-navy group-hover:text-white transition-colors duration-500" />
                  </div>
                  <span className="text-sm font-bold uppercase tracking-widest text-primary-green mb-4 block relative z-10">Our Mission</span>
                  <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary-navy mb-6 relative z-10 leading-tight">
                    To Help People Access Capital With Clarity, Preparation, and Strategy.
                  </h2>
                  <p className="text-lg text-text-soft leading-relaxed relative z-10 mb-6">
                    Our mission is to help individuals, entrepreneurs, and business owners stop applying blindly and start approaching funding with a clear plan.
                  </p>
                  <p className="text-lg text-text-soft leading-relaxed relative z-10 mb-8">
                    We believe people should understand where they stand before they apply. That means reviewing credit, income, business structure, revenue, banking, documentation, and lender readiness before choosing a funding path.
                  </p>
                  <div className="bg-white p-6 rounded-xl border border-border-gray relative z-10">
                    <p className="text-base font-bold text-primary-navy italic">
                      "Unity Financial Solution exists to help clients move from confusion to clarity, from random applications to structured strategy, and from underprepared to fundable."
                    </p>
                  </div>
                </div>
              </Tilt>
            </FadeUp>
            
            <FadeUp delay={0.2}>
              <Tilt tiltMaxAngleX={2} tiltMaxAngleY={2} perspective={1000} className="h-full">
                <div className="h-full bg-bg-light p-12 lg:p-16 rounded-[2.5rem] border border-border-gray shadow-lg hover:shadow-2xl transition-all duration-500 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-accent-gold/5 rounded-bl-full -mr-8 -mt-8 transition-colors duration-500 group-hover:bg-accent-gold/10"></div>
                  
                  <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mb-8 relative z-10 group-hover:bg-primary-navy transition-colors duration-500 shadow-sm">
                    <Eye className="w-10 h-10 text-primary-navy group-hover:text-white transition-colors duration-500" />
                  </div>
                  <span className="text-sm font-bold uppercase tracking-widest text-accent-gold mb-4 block relative z-10">Our Vision</span>
                  <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary-navy mb-6 relative z-10 leading-tight">
                    Building a Funding System for the Next Generation of Entrepreneurs.
                  </h2>
                  <p className="text-lg text-text-soft leading-relaxed relative z-10 mb-6">
                    Unity Financial Solution is being built for the future.
                  </p>
                  <p className="text-lg text-text-soft leading-relaxed relative z-10 mb-6">
                    Our vision is to become a trusted funding company that helps business owners and individuals access capital through a professional, organized, and strategy-first process.
                  </p>
                  <p className="text-lg text-text-soft leading-relaxed relative z-10 mb-8">
                    We want to help clients understand not only what funding options may be available, but also what needs to be prepared, improved, or built for long-term funding success.
                  </p>
                  <div className="bg-white p-6 rounded-xl border border-border-gray relative z-10">
                    <p className="text-base font-bold text-primary-navy italic">
                      "To become a leading funding platform known for strategy, transparency, preparation, and real business growth."
                    </p>
                  </div>
                </div>
              </Tilt>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Section 6: Why We Exist */}
      <section className="py-32 bg-primary-navy relative overflow-hidden text-white">
        <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-primary-green opacity-10 blur-[150px] rounded-full pointer-events-none -translate-x-1/3 -translate-y-1/3"></div>
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeUp delay={0.2} className="order-2 lg:order-1">
              <div className="bg-white/5 backdrop-blur-md p-10 md:p-12 rounded-[2.5rem] border border-white/10 shadow-xl">
                <ul className="space-y-4">
                  {[
                    "A person may have too many inquiries.",
                    "A business may not have proper documentation.",
                    "Revenue may not be clearly shown.",
                    "The business profile may not look credible.",
                    "The credit profile may not be positioned correctly.",
                    "The funding option may not match the client’s current situation."
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 border border-white/20 mt-0.5">
                        <AlertCircle className="w-3 h-3 text-accent-gold" />
                      </div>
                      <span className="text-lg text-gray-200 font-medium leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 pt-8 border-t border-white/10">
                   <p className="text-xl font-bold text-white">Unity Financial Solution exists to help solve that problem.</p>
                </div>
              </div>
            </FadeUp>

            <FadeUp className="order-1 lg:order-2">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-8">
                Most People Apply Without Knowing What Lenders Are Looking For
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed mb-10">
                Many people apply for funding because they need money quickly. But without understanding the profile, the application can create more damage than opportunity.
              </p>
              <div className="bg-white/5 border-l-4 border-primary-green p-6 rounded-r-xl backdrop-blur-md">
                <p className="text-lg font-bold text-white leading-relaxed">
                  We believe the review should come before the application.
                </p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Section 7: Our Core Values */}
      <section className="py-32 bg-white border-y border-border-gray">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
          <FadeUp className="text-center mb-16 max-w-4xl mx-auto">
            <span className="text-sm font-bold uppercase tracking-widest text-primary-green mb-4 block">Our Values</span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-navy mb-6">The Principles Behind Unity Financial Solution</h2>
          </FadeUp>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              { title: "Strategy First", desc: "We do not believe in random applications. Every funding path should begin with review, preparation, and direction." },
              { title: "Transparency", desc: "We do not guarantee approvals, limits, or funding amounts. We believe clients deserve honest expectations before moving forward." },
              { title: "Preparation", desc: "A stronger file starts before submission. We help clients understand what needs to be prepared, improved, or documented." },
              { title: "Responsibility", desc: "Funding should be pursued with a plan. Clients should understand repayment obligations, terms, risks, and responsible use of capital." },
              { title: "Execution", desc: "A strategy only matters if it can be executed. We help clients move through the process with clear next steps." },
              { title: "Long-Term Growth", desc: "The goal is not just one approval. The goal is to build a stronger funding profile for future opportunities." }
            ].map((value, index) => (
              <FadeUp key={index} delay={index * 0.1}>
                <div className="p-8 lg:p-10 bg-bg-light rounded-[2rem] border border-border-gray hover:border-primary-navy/20 hover:bg-white hover:shadow-xl transition-all duration-300 group h-full flex flex-col">
                  <Shield className="w-10 h-10 text-primary-green mb-6 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="font-heading font-bold text-xl lg:text-2xl text-primary-navy mb-4">{value.title}</h3>
                  <p className="text-text-soft leading-relaxed flex-grow">{value.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Section 8: Our Experience */}
      <section className="py-32 bg-bg-light relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeUp>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-navy mb-8">
                15+ Years of Funding Experience. Over $100 Million Funded.
              </h2>
              <p className="text-xl text-text-soft leading-relaxed mb-6">
                Unity Financial Solution brings years of hands-on funding experience into a modern funding system.
              </p>
              <p className="text-xl text-text-soft leading-relaxed mb-6">
                Our experience includes personal funding, business funding, credit card stacking strategies, business funding preparation, and SBA loan readiness support.
              </p>
              <p className="text-xl text-text-soft leading-relaxed">
                We understand that funding is not just about submitting an application. It is about knowing what lenders may review, what documents may be needed, what profile issues may cause problems, and what path makes the most sense for the client.
              </p>
            </FadeUp>
            
            <FadeUp delay={0.2}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="bg-white p-8 rounded-2xl border border-border-gray shadow-sm text-center flex flex-col justify-center items-center h-48 hover:border-primary-green/30 transition-colors">
                  <div className="text-4xl font-heading font-bold text-primary-navy mb-2">15+ Years</div>
                  <div className="text-sm font-medium text-text-soft">Funding Experience</div>
                </div>
                <div className="bg-white p-8 rounded-2xl border border-border-gray shadow-sm text-center flex flex-col justify-center items-center h-48 hover:border-accent-gold/30 transition-colors">
                  <div className="text-4xl font-heading font-bold text-primary-navy mb-2">$100M+</div>
                  <div className="text-sm font-medium text-text-soft">Funded</div>
                </div>
                <div className="bg-white p-8 rounded-2xl border border-border-gray shadow-sm text-center flex flex-col justify-center items-center h-48 hover:border-primary-navy/30 transition-colors">
                  <div className="text-2xl font-heading font-bold text-primary-navy mb-2 leading-tight">Personal + Business</div>
                  <div className="text-sm font-medium text-text-soft">Funding Options</div>
                </div>
                <div className="bg-primary-navy p-8 rounded-2xl border border-primary-navy shadow-sm text-center flex flex-col justify-center items-center h-48 hover:bg-primary-navy/90 transition-colors">
                  <div className="text-2xl font-heading font-bold text-white mb-2 leading-tight">Strategy-First</div>
                  <div className="text-sm font-medium text-gray-300">Review Process</div>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Section 9: Who We Serve */}
      <section className="py-32 bg-white border-y border-border-gray">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
          <FadeUp className="text-center mb-16 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-navy mb-6">Built for Individuals, Entrepreneurs, and Business Owners</h2>
            <p className="text-xl text-text-soft leading-relaxed">
              Unity Financial Solution works with clients at different stages of the funding journey.
            </p>
          </FadeUp>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: <Users className="w-8 h-8" />,
                title: "Individuals",
                desc: "People looking to access personal credit card funding through a structured review process."
              },
              {
                icon: <Target className="w-8 h-8" />,
                title: "Startup Founders",
                desc: "Entrepreneurs preparing to launch, grow, or fund a new business."
              },
              {
                icon: <Briefcase className="w-8 h-8" />,
                title: "Business Owners",
                desc: "Established owners seeking working capital, business credit cards, SBA options, or expansion funding."
              },
              {
                icon: <Building2 className="w-8 h-8" />,
                title: "Growing Companies",
                desc: "Businesses looking for larger funding opportunities and stronger documentation."
              },
              {
                icon: <HelpCircle className="w-8 h-8" />,
                title: "Previously Denied Applicants",
                desc: "Clients who need to understand what may have caused a denial and what should be improved before applying again."
              }
            ].map((pathway, i) => (
              <FadeUp key={i} delay={i * 0.1} className="h-full">
                <div className="bg-bg-light p-8 rounded-2xl border border-border-gray shadow-sm hover:shadow-xl hover:border-primary-navy/20 transition-all duration-300 h-full flex flex-col">
                  <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm border border-border-gray">
                    {React.cloneElement(pathway.icon, { className: "w-6 h-6 text-primary-navy" })}
                  </div>
                  <h3 className="text-xl font-heading font-bold text-primary-navy mb-4">{pathway.title}</h3>
                  <p className="text-text-soft leading-relaxed flex-grow">{pathway.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Section 10: Our Approach */}
      <section className="py-32 bg-bg-light relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <FadeUp className="text-center mb-20 max-w-4xl mx-auto">
             <span className="text-sm font-bold uppercase tracking-widest text-primary-green mb-4 block">Our Approach</span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-navy mb-6">Review. Strategy. Direction. Execution.</h2>
          </FadeUp>
          
          <div className="space-y-12 lg:space-y-0 lg:grid lg:grid-cols-4 gap-8 relative">
            {/* Desktop connecting line */}
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
              { step: "Step 1", title: "Review the Profile", desc: "We start by reviewing the client’s credit, business, revenue, documentation, and funding goals." },
              { step: "Step 2", title: "Identify the Funding Path", desc: "We help determine which option may fit the profile: personal stacking, business stacking, SBA loan support, or readiness." },
              { step: "Step 3", title: "Prepare the File", desc: "We identify what information, documents, or improvements may be needed before moving forward." },
              { step: "Step 4", title: "Move With Strategy", desc: "When the profile is ready, we help guide the next steps with structure and lender awareness." }
            ].map((item, index) => (
              <FadeUp key={index} delay={index * 0.15} className="relative z-10 flex flex-col items-start lg:items-center lg:text-center group">
                <div className="w-20 h-20 rounded-full bg-white border-2 border-border-gray flex items-center justify-center text-xl font-bold font-heading mb-8 shadow-sm group-hover:border-accent-gold group-hover:bg-primary-navy group-hover:text-white transition-all duration-500">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-4 text-primary-navy">{item.title}</h3>
                <p className="text-text-soft text-base leading-relaxed">{item.desc}</p>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Section 11: What Makes Unity Different */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-green opacity-5 blur-[150px] rounded-full pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeUp>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-navy mb-8">
                We Are Not Just a Funding Application Company
              </h2>
              <p className="text-xl text-text-soft leading-relaxed mb-6">
                Unity Financial Solution is built around the full funding picture.
              </p>
              <p className="text-xl text-text-soft leading-relaxed mb-10">
                We look beyond the surface. We review profile strength, lender readiness, documentation, business credibility, and funding goals before identifying the next step.
              </p>
            </FadeUp>
            
            <FadeUp delay={0.2}>
              <div className="bg-bg-light p-10 md:p-12 rounded-[2.5rem] border border-border-gray shadow-lg">
                <h3 className="text-2xl font-bold text-primary-navy mb-6">What Makes Us Different</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    "We review before applying", "We focus on strategy, not guessing", "We help identify readiness issues",
                    "We understand personal and business funding", "We support SBA loan preparation", "We help clients avoid random applications",
                    "We give clear next-step direction", "We keep expectations realistic"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center flex-shrink-0 shadow-sm border border-border-gray mt-0.5">
                        <CheckCircle2 className="w-3 h-3 text-primary-green" />
                      </div>
                      <span className="text-sm text-primary-navy font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Section 12: CTA Section */}
      <section className="py-32 bg-primary-navy relative overflow-hidden text-center">
        <div className="absolute inset-0 opacity-10">
          <MeshGradient speed={4} intensity={1.5} grain={0.2} />
        </div>
        <div className="max-w-[800px] mx-auto px-6 relative z-10">
          <FadeUp>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-8 leading-tight">
              Ready to See Which Funding Path May Fit You?
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-10">
              Start with a funding review. Unity Financial Solution will review your information and help identify which funding direction may make sense based on your current profile.
            </p>
            <div className="flex justify-center mb-6">
              <Button to="/apply" variant="gold" showArrow className="text-lg px-12 py-5 shadow-[0_20px_40px_rgba(200,157,60,0.3)] hover:scale-105 transition-transform">
                Start My Funding Review
              </Button>
            </div>
            <p className="text-sm text-gray-400">
              Submitting a funding review does not guarantee approval, funding amount, credit limit, interest rate, or loan terms.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Footer Disclaimer */}
      <div className="bg-gray-900 py-6 text-center px-6">
        <p className="text-xs text-gray-500 max-w-5xl mx-auto leading-relaxed">
          Unity Financial Solution does not guarantee approvals, funding amounts, credit limits, interest rates, repayment terms, or lender offers. All funding decisions are made by third-party lenders, banks, credit card issuers, or financial institutions based on their own underwriting guidelines. Past results do not guarantee future outcomes.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
