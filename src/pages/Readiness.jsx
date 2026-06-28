import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Tilt from 'react-parallax-tilt';
import { CheckCircle2 } from 'lucide-react';
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

const Readiness = () => {
  return (
    <div className="flex flex-col w-full bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-primary-navy py-40 text-center px-6 sm:px-8">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Financial Background" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-primary-navy/80 mix-blend-multiply" />
        </div>
        
        {/* Animated Mesh Gradient Background */}
        <div className="absolute inset-0 z-0 opacity-40 mix-blend-multiply pointer-events-none">
          <MeshGradient speed={6} intensity={1.2} grain={0.3} />
        </div>
        
        <div className="max-w-5xl mx-auto relative z-10">
          <FadeUp>
            <span className="text-sm font-bold uppercase tracking-widest text-accent-gold mb-6 block">
              Business Funding Readiness
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-8 leading-tight">
              Make Sure Your Business Looks <br className="hidden md:block"/>
              <span className="bg-clip-text bg-gradient-to-r from-primary-green to-accent-gold">Fundable Before You Apply.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto font-light mb-12">
              Unity Financial Solution helps business owners review and strengthen the key areas lenders may look at before applying for business credit cards, SBA loans, or other funding options.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-5 mb-8">
              <Button to="/apply" variant="gold" showArrow className="text-lg px-10 py-5 shadow-[0_20px_40px_rgba(200,157,60,0.3)] hover:scale-105 transition-transform">
                Start My Business Funding Review
              </Button>
              <Button to="/funding-solutions" variant="secondary" className="text-lg px-10 py-5">
                View Funding Options
              </Button>
            </div>

            <p className="text-sm text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Funding is subject to lender approval, underwriting, eligibility, credit profile, business history, revenue, documentation, and other applicable criteria. Results are not guaranteed.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Section 2: What Is Business Funding Readiness? */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-bg-light rounded-full blur-[100px] opacity-50 -translate-y-1/2 translate-x-1/3"></div>
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeUp>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-navy mb-8">What Is Business Funding Readiness?</h2>
              <p className="text-xl text-text-soft leading-relaxed mb-6">
                Business Funding Readiness is the process of reviewing your business profile before applying for funding.
              </p>
              <p className="text-xl text-text-soft leading-relaxed mb-6">
                Many business owners apply before their business is properly set up, documented, or positioned. This can lead to unnecessary denials, lower limits, wasted inquiries, or missed opportunities.
              </p>
              <p className="text-xl text-text-soft leading-relaxed mb-10">
                At Unity Financial Solution, we help review the areas that may impact your funding options, including your business structure, banking, revenue, credit profile, documentation, online presence, and lender readiness.
              </p>
              <div className="inline-block border-l-4 border-primary-green pl-6 py-2">
                <p className="text-xl font-heading font-bold text-primary-navy">
                  The goal is to prepare your business before the application is submitted.
                </p>
              </div>
            </FadeUp>
            
            <FadeUp delay={0.2}>
              <Tilt tiltMaxAngleX={2} tiltMaxAngleY={2} perspective={1000} className="h-full">
                <div className="bg-bg-light p-12 rounded-[2.5rem] border border-border-gray shadow-xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-48 h-48 bg-primary-green/5 rounded-bl-full -mr-8 -mt-8 group-hover:bg-primary-green/10 transition-colors duration-500"></div>
                  <span className="text-sm font-bold uppercase tracking-widest text-primary-green mb-4 block relative z-10">Preparation First</span>
                  <h3 className="text-3xl font-heading font-bold text-primary-navy mb-6 relative z-10">Lenders Review More Than Just Your Credit Score.</h3>
                  <p className="text-lg text-text-soft leading-relaxed mb-6 relative z-10">
                    A strong credit score can help, but it is not the only thing lenders may review. Your business needs to look active, credible, and organized.
                  </p>
                  <p className="text-lg text-text-soft leading-relaxed mb-8 relative z-10">
                    If your business information is inconsistent, your documents are missing, your revenue is unclear, or your credit profile is not positioned properly, your funding options may be limited.
                  </p>
                  <div className="mb-4 text-sm font-bold uppercase tracking-widest text-primary-navy relative z-10">Key Areas That Matter</div>
                  <div className="grid grid-cols-2 gap-4 relative z-10">
                    {[
                      "Business entity", "EIN", "Business bank account", "Business address",
                      "Business phone number", "Business website", "Business email", "Revenue history",
                      "Bank statements", "Credit profile", "Industry type", "Use of funds", "Documentation"
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary-green flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-primary-navy font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Tilt>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Section 4: Who This Is For */}
      <section className="py-32 bg-primary-navy relative overflow-hidden text-white">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary-green opacity-10 blur-[150px] rounded-full pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeUp delay={0.2} className="order-2 lg:order-1">
              <div className="bg-white/5 backdrop-blur-md p-10 md:p-12 rounded-[2.5rem] border border-white/10 shadow-xl">
                <h3 className="text-2xl font-heading font-bold text-white mb-6">Best For</h3>
                <ul className="space-y-4">
                  {[
                    "New business owners", "Startup founders", "Businesses recently denied funding",
                    "Owners preparing for business credit cards", "Owners preparing for SBA loans",
                    "Businesses with incomplete documentation", "Companies with inconsistent business information",
                    "Entrepreneurs who want to build long-term fundability", "Business owners who do not know which funding path fits them"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 border border-white/20 mt-0.5">
                        <CheckCircle2 className="w-4 h-4 text-accent-gold" />
                      </div>
                      <span className="text-lg text-white font-medium leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeUp>

            <FadeUp className="order-1 lg:order-2">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-8">
                Who Business Funding Readiness May Be Good For
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                Business Funding Readiness may be a good first step for business owners who want funding but are not sure if their profile is ready yet.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Section 5: What We Review */}
      <section className="py-32 bg-bg-light border-y border-border-gray">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
          <FadeUp className="text-center mb-16 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-navy mb-6">What We Review Before You Apply</h2>
            <p className="text-xl text-text-soft leading-relaxed">
              Unity Financial Solution reviews the main areas that may affect your business funding opportunities. This helps us understand where your business stands and what may need attention before applying.
            </p>
          </FadeUp>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6 mb-16">
            {[
              "Business entity status", "EIN information", "Business ownership structure", "Business bank account",
              "Business address consistency", "Business phone number", "Business website", "Professional business email",
              "Time in business", "Monthly revenue", "Annual revenue", "Bank statement activity",
              "Personal credit profile", "Business credit profile", "Credit utilization", "Recent inquiries",
              "Existing debt obligations", "Industry type", "Use of funds", "Tax returns, when needed", "Profit and loss statement, when needed", "Supporting documents"
            ].map((item, index) => (
              <FadeUp key={index} delay={index * 0.05}>
                <div className="bg-white p-6 rounded-2xl border border-border-gray shadow-sm flex items-center gap-3 hover:border-primary-green/30 hover:shadow-md transition-all duration-300 h-full">
                  <div className="w-2 h-2 rounded-full bg-primary-green flex-shrink-0"></div>
                  <span className="text-sm md:text-base font-bold text-primary-navy">{item}</span>
                </div>
              </FadeUp>
            ))}
          </div>
          <FadeUp className="text-center">
            <p className="text-xl font-heading font-bold text-primary-navy">
              The more complete and consistent your business profile is, the stronger your funding file may look.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Section 6: Business Credibility */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-green opacity-5 blur-[150px] rounded-full pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeUp>
              <span className="text-sm font-bold uppercase tracking-widest text-primary-green mb-6 block">
                Business Profile
              </span>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-navy mb-8">
                Your Business Needs to Look Real, Active, and Consistent.
              </h2>
              <p className="text-xl text-text-soft leading-relaxed mb-6">
                Before lenders review funding options, they may look for signs that your business is legitimate and operating properly.
              </p>
              <p className="text-xl text-text-soft leading-relaxed mb-10">
                If your business information does not match across documents, bank accounts, applications, online listings, or public records, it may create issues during the review process.
              </p>
              <div className="inline-block border-l-4 border-accent-gold pl-6 py-2">
                <p className="text-xl font-heading font-bold text-primary-navy">
                  A clean business profile creates a stronger foundation for funding conversations.
                </p>
              </div>
            </FadeUp>
            
            <FadeUp delay={0.2}>
              <div className="bg-bg-light p-10 md:p-12 rounded-[2.5rem] border border-border-gray shadow-lg">
                <h3 className="text-2xl font-bold text-primary-navy mb-6">Business Credibility Checklist</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    "Business name matches correctly", "Business entity is active", "EIN is connected to the business",
                    "Business address is consistent", "Business phone number is active", "Business email is professional",
                    "Website is live and professional", "Business bank account is open", "Business category and industry are clear", "Ownership information is accurate"
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

      {/* Section 7: Credit Profile Readiness */}
      <section className="py-32 bg-bg-light relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-primary-green opacity-5 blur-[150px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeUp>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-navy mb-8">
                Your Personal Credit May Still Matter
              </h2>
              <p className="text-xl text-text-soft leading-relaxed mb-6">
                Even when applying for business funding, many lenders may still review the owner’s personal credit profile. This is especially common for newer businesses, smaller businesses, and business credit card applications.
              </p>
              <p className="text-xl text-text-soft leading-relaxed mb-10">
                That is why Business Funding Readiness also includes a review of the owner’s credit profile.
              </p>
              <div className="inline-block border-l-4 border-primary-green pl-6 py-2">
                <p className="text-xl font-heading font-bold text-primary-navy">
                  A stronger personal credit profile may help support stronger business funding opportunities.
                </p>
              </div>
            </FadeUp>
            
            <FadeUp delay={0.2}>
              <div className="bg-white p-10 md:p-12 rounded-[2.5rem] border border-border-gray shadow-lg">
                <h3 className="text-2xl font-bold text-primary-navy mb-6">Credit Factors We May Review</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "Credit score range", "Credit utilization", "Recent inquiries", "Payment history",
                    "Current credit limits", "Age of accounts", "Recent approvals or denials",
                    "Negative items, if any", "Debt obligations", "Overall approval readiness"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent-gold flex-shrink-0"></div>
                      <span className="text-base text-primary-navy font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Section 8: Documentation Readiness */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-bg-light rounded-full blur-[100px] opacity-50 -translate-y-1/2 translate-x-1/3"></div>
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeUp>
              <span className="text-sm font-bold uppercase tracking-widest text-primary-green mb-6 block">
                Documents Matter
              </span>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-navy mb-8">
                A Strong Funding File Needs the Right Documents.
              </h2>
              <p className="text-xl text-text-soft leading-relaxed mb-6">
                Some funding options require more documentation than others. Business credit cards may require basic business and owner information, while SBA loans and larger funding options may require a more complete file.
              </p>
              <p className="text-xl text-text-soft leading-relaxed mb-10">
                Unity Financial Solution helps you understand what documents may be needed based on your funding goals.
              </p>
              <div className="inline-block border-l-4 border-accent-gold pl-6 py-2">
                <p className="text-xl font-heading font-bold text-primary-navy">
                  If documents are missing, the first step may be getting organized before applying.
                </p>
              </div>
            </FadeUp>
            
            <FadeUp delay={0.2}>
              <div className="bg-bg-light p-10 md:p-12 rounded-[2.5rem] border border-border-gray shadow-lg">
                <h3 className="text-2xl font-bold text-primary-navy mb-6">Documents That May Be Needed</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "Government-issued ID", "Business formation documents", "EIN confirmation",
                    "Business bank statements", "Personal bank statements, when needed", "Business tax returns",
                    "Personal tax returns, when needed", "Profit and loss statement", "Balance sheet",
                    "Debt schedule", "Business lease, when applicable", "Use of funds statement",
                    "Business plan, when needed", "Revenue documentation", "Existing loan or credit account details"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center flex-shrink-0 shadow-sm border border-border-gray mt-0.5">
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

      {/* Section 9: Common Problems That Can Hurt Funding */}
      <section className="py-32 bg-primary-navy relative overflow-hidden text-white">
        <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-primary-green opacity-10 blur-[150px] rounded-full pointer-events-none -translate-x-1/3 -translate-y-1/3"></div>
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeUp delay={0.2} className="order-2 lg:order-1">
              <div className="bg-white/5 backdrop-blur-md p-10 md:p-12 rounded-[2.5rem] border border-white/10 shadow-xl">
                <h3 className="text-2xl font-heading font-bold text-white mb-6">Common Problems</h3>
                <ul className="space-y-4">
                  {[
                    "Business information does not match", "No business bank account", "Weak or missing website",
                    "No professional business email", "Revenue is not documented", "Bank statements are not organized",
                    "High personal credit utilization", "Too many recent inquiries", "Business is too new for certain programs",
                    "Industry is considered higher risk", "Tax returns are missing or incomplete", "Use of funds is unclear",
                    "Existing debt is too high", "Business profile looks underdeveloped"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 border border-white/20 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-accent-gold"></div>
                      </div>
                      <span className="text-base text-gray-200 font-medium leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeUp>

            <FadeUp className="order-1 lg:order-2">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-8">
                Common Issues That Can Hold a Business Back
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed mb-10">
                Many business owners do not realize their profile has problems until after they apply and get denied. Business Funding Readiness helps identify possible issues before that happens.
              </p>
              <div className="bg-white/5 border-l-4 border-primary-green p-6 rounded-r-xl backdrop-blur-md">
                <p className="text-lg font-bold text-white leading-relaxed">
                  The review helps identify what needs to be fixed before you move forward.
                </p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Section 10: The Unity Financial Solution Approach */}
      <section className="py-32 bg-bg-light relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <FadeUp className="text-center mb-20 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-navy mb-6">Our Approach to Business Funding Readiness</h2>
          </FadeUp>
          
          <div className="space-y-12 lg:space-y-0 lg:grid lg:grid-cols-5 gap-8 relative">
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
              { title: "Submit Your Business Funding Review", desc: "You complete the review form with your business, personal, credit, revenue, and funding information." },
              { title: "Profile Review", desc: "Our team reviews your business setup, documentation, credit profile, banking, revenue, and funding goals." },
              { title: "Readiness Assessment", desc: "We identify whether your business may be ready for funding or if certain areas need improvement first." },
              { title: "Funding Path Direction", desc: "We help determine which path may make sense: business credit card stacking, personal credit card stacking, SBA loan support, or another readiness step." },
              { title: "Next Steps Plan", desc: "You receive direction on what to prepare, improve, or submit next based on your current profile." }
            ].map((step, index) => (
              <FadeUp key={index} delay={index * 0.15} className="relative z-10 flex flex-col items-start lg:items-center lg:text-center group">
                <div className="w-20 h-20 rounded-full bg-white border-2 border-border-gray flex items-center justify-center text-2xl font-bold font-heading mb-8 shadow-sm group-hover:border-accent-gold group-hover:bg-primary-navy group-hover:text-white transition-all duration-500">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold mb-4 text-primary-navy">{step.title}</h3>
                <p className="text-text-soft text-base leading-relaxed">{step.desc}</p>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Section 11: Funding Paths After Readiness */}
      <section className="py-32 bg-white border-y border-border-gray">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
          <FadeUp className="text-center mb-16 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-navy mb-6">What Comes After the Readiness Review?</h2>
            <p className="text-xl text-text-soft leading-relaxed">
              Once your profile is reviewed, Unity Financial Solution helps identify which funding direction may fit your current situation.
            </p>
          </FadeUp>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                title: "Personal Credit Card Stacking",
                desc: "If your personal credit profile is strong and you need revolving capital."
              },
              {
                title: "Business Credit Card Stacking",
                desc: "If your business profile and personal credit may support business credit card options."
              },
              {
                title: "SBA Loan Support",
                desc: "If your business has revenue, documentation, and a stronger lending file."
              },
              {
                title: "Business Profile Improvement Plan",
                desc: "If your business is not ready yet and needs preparation before applying."
              }
            ].map((pathway, i) => (
              <FadeUp key={i} delay={i * 0.1} className="h-full">
                <div className="bg-bg-light p-8 rounded-2xl border border-border-gray shadow-sm hover:shadow-xl hover:border-primary-navy/20 transition-all duration-300 h-full flex flex-col items-center text-center">
                  <h3 className="text-xl font-heading font-bold text-primary-navy mb-4">{pathway.title}</h3>
                  <p className="text-text-soft leading-relaxed flex-grow">{pathway.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
          
          <FadeUp className="text-center">
            <p className="text-xl font-heading font-bold text-primary-navy max-w-3xl mx-auto">
              The right path depends on your profile, goals, documentation, credit, revenue, and lender readiness.
            </p>
          </FadeUp>
        </div>
      </section>
      <section className="py-32 bg-primary-navy relative overflow-hidden text-center">
        <div className="absolute inset-0 opacity-10">
          <MeshGradient speed={4} intensity={1.5} grain={0.2} />
        </div>
        <div className="max-w-[800px] mx-auto px-6 relative z-10">
          <FadeUp>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-8 leading-tight">
              Want to Know If Your Business Is Funding Ready?
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-10">
              Start with a business funding review. Unity Financial Solution will review your profile and help identify what funding options may fit your current position.
            </p>
            <div className="flex justify-center mb-6">
              <Button to="/apply" variant="gold" showArrow className="text-lg px-12 py-5 shadow-[0_20px_40px_rgba(200,157,60,0.3)] hover:scale-105 transition-transform">
                Start My Business Funding Review
              </Button>
            </div>
            <p className="text-sm text-gray-400">
              Submitting a funding review does not guarantee approval, funding amount, credit limit, interest rate, or loan terms.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Section 13: FAQ Section */}
      <section className="py-32 bg-bg-light">
        <div className="max-w-[1000px] mx-auto px-6 sm:px-8 lg:px-12">
          <FadeUp className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-navy mb-6">
              Business Funding Readiness Questions
            </h2>
          </FadeUp>
          
          <div className="space-y-6">
            {[
              { q: "What is business funding readiness?", a: "Business funding readiness is the process of reviewing your business, credit, banking, revenue, and documentation before applying for funding." },
              { q: "Do I need a business bank account?", a: "A business bank account is strongly recommended and may be required for many business funding options." },
              { q: "Can I apply if my business is new?", a: "Yes. New businesses may still have options, but available funding paths depend on credit profile, income, business setup, industry, and lender requirements." },
              { q: "What if my business is not ready?", a: "If your business is not ready, Unity Financial Solution may recommend a preparation plan before applying for funding." },
              { q: "Does personal credit matter for business funding?", a: "Yes. Many lenders may review personal credit, especially for new businesses, small businesses, and business credit card applications." },
              { q: "Do you guarantee funding after the review?", a: "No. Unity Financial Solution does not guarantee funding. The review helps identify possible options and readiness, but all decisions are made by lenders and financial institutions." }
            ].map((faq, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <div className="bg-white p-8 rounded-2xl border border-border-gray shadow-sm">
                  <h3 className="text-xl font-bold text-primary-navy mb-3">{faq.q}</h3>
                  <p className="text-text-soft leading-relaxed">{faq.a}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-32 bg-white text-center">
        <div className="max-w-[800px] mx-auto px-6">
          <FadeUp>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-navy mb-8">
              Build the Foundation Before You Apply.
            </h2>
            <p className="text-xl text-text-soft leading-relaxed mb-10">
              A strong funding strategy starts with a strong business profile. Let Unity Financial Solution help you review your readiness and identify the next step.
            </p>
            <div className="flex justify-center">
              <Button to="/apply" variant="primary" showArrow className="text-lg px-12 py-5">
                Start My Business Funding Review
              </Button>
            </div>
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

export default Readiness;
