import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Tilt from 'react-parallax-tilt';
import { Briefcase, CheckCircle2 } from 'lucide-react';
import Button from '../components/Button';
import DisclaimerBar from '../components/DisclaimerBar';
import CTABanner from '../components/CTABanner';
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

const BusinessCredit = () => {
  const reviews = [
    "Business entity", "EIN", "Business bank account", "Business address",
    "Business phone number", "Website", "Revenue", "Industry",
    "Personal credit", "Business credit profile"
  ];

  const bestFor = [
    "LLCs", "Corporations", "Startups", "Growing businesses",
    "Service businesses", "Business owners with strong personal credit"
  ];

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
        <div className="absolute inset-0 z-0 opacity-40 mix-blend-multiply">
          <MeshGradient speed={6} intensity={1.2} grain={0.3} />
        </div>
        
        <div className="max-w-5xl mx-auto relative z-10">
          <FadeUp>
            <span className="text-sm font-bold uppercase tracking-widest text-accent-gold mb-6 block">
              Business Credit Card Stacking
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-8 leading-tight">
              Access Business Credit With a <br className="hidden md:block"/>
              <span className="bg-clip-text bg-gradient-to-r from-primary-green to-accent-gold">Structured Funding Strategy.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto font-light mb-12">
              Unity Financial Solution helps qualified business owners pursue business credit card options through a strategic review process built around business structure, personal credit, revenue, banking, and lender readiness.
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
              Business credit card approvals, limits, rates, and terms are determined by the issuing banks, lenders, and financial institutions. Results are not guaranteed.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Section 2: What Is Business Credit Card Stacking? */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-bg-light rounded-full blur-[100px] opacity-50 -translate-y-1/2 translate-x-1/3"></div>
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeUp>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-navy mb-8">What Is Business Credit Card Stacking?</h2>
              <p className="text-xl text-text-soft leading-relaxed mb-6">
                Business credit card stacking is a funding strategy where qualified business owners apply for multiple business credit cards in a structured sequence to potentially access revolving business capital.
              </p>
              <p className="text-xl text-text-soft leading-relaxed mb-6">
                This strategy may help business owners separate personal and business expenses, increase available credit, manage cash flow, and support growth when used responsibly.
              </p>
              <p className="text-xl text-text-soft leading-relaxed mb-10">
                At Unity Financial Solution, we do not believe in random applications. We review your business profile, personal credit, revenue, banking, documentation, and lender readiness before building a strategy.
              </p>
              <div className="inline-block border-l-4 border-primary-green pl-6 py-2">
                <p className="text-xl font-heading font-bold text-primary-navy">
                  The goal is to pursue business funding with structure, timing, and lender awareness.
                </p>
              </div>
            </FadeUp>
            
            <FadeUp delay={0.2}>
              <Tilt tiltMaxAngleX={2} tiltMaxAngleY={2} perspective={1000} className="h-full">
                <div className="bg-bg-light p-12 rounded-[2.5rem] border border-border-gray shadow-xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-48 h-48 bg-primary-green/5 rounded-bl-full -mr-8 -mt-8 group-hover:bg-primary-green/10 transition-colors duration-500"></div>
                  <h3 className="text-3xl font-heading font-bold text-primary-navy mb-6 relative z-10">Who Business Credit Card Stacking May Be Good For</h3>
                  <p className="text-lg text-text-soft leading-relaxed mb-8 relative z-10">
                    Business credit card stacking may be a good option for business owners who want access to revolving business credit and have a profile that may support lender approval.
                  </p>
                  <div className="mb-4 text-sm font-bold uppercase tracking-widest text-primary-green relative z-10">Best For</div>
                  <ul className="space-y-4 relative z-10">
                    {[
                      "LLC owners",
                      "Corporation owners",
                      "Startup founders",
                      "Entrepreneurs",
                      "Growing businesses",
                      "Service-based businesses",
                      "Businesses needing working capital",
                      "Owners who want to separate business and personal expenses",
                      "Companies preparing for larger future funding opportunities"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-4 group/item">
                        <CheckCircle2 className="w-6 h-6 text-primary-green flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />
                        <span className="text-lg text-primary-navy font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Tilt>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Section 4: What We Review */}
      <section className="py-32 bg-bg-light border-y border-border-gray">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
          <FadeUp className="text-center mb-16 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-navy mb-6">Before You Apply, We Review the Full Business Profile</h2>
            <p className="text-xl text-text-soft leading-relaxed mb-6">
              Lenders may review more than your business name and credit score. A business credit card strategy can depend on your entity, industry, revenue, banking, personal credit, business credibility, and documentation.
            </p>
            <p className="text-xl text-text-soft leading-relaxed">
              Unity Financial Solution reviews the key factors that may impact business credit card approvals and limits.
            </p>
          </FadeUp>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6 mb-16">
            {[
              "Business entity", "EIN", "Business bank account", "Business address",
              "Business phone number", "Business website", "Industry type", "Time in business",
              "Monthly revenue", "Personal credit profile", "Credit utilization", "Recent inquiries",
              "Existing credit limits", "Existing business credit profile", "Bank relationships", "Recent approvals or denials", "Overall approval readiness"
            ].map((item, index) => (
              <FadeUp key={index} delay={index * 0.05}>
                <div className="bg-white p-6 rounded-2xl border border-border-gray shadow-sm flex items-center gap-3 hover:border-primary-green/30 hover:shadow-md transition-all duration-300 h-full">
                  <div className="w-2 h-2 rounded-full bg-primary-green flex-shrink-0"></div>
                  <span className="text-base font-bold text-primary-navy">{item}</span>
                </div>
              </FadeUp>
            ))}
          </div>
          <FadeUp className="text-center">
            <p className="text-xl font-heading font-bold text-primary-navy">
              The stronger your business and personal profile look before submission, the better positioned you may be when pursuing business credit card funding options.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Section 5: Why Business Structure Matters */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-primary-green opacity-5 blur-[150px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeUp>
              <span className="text-sm font-bold uppercase tracking-widest text-primary-green mb-6 block">
                Business Readiness
              </span>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-navy mb-8">
                Your Business Needs to Look Real, Active, and Fundable.
              </h2>
              <p className="text-xl text-text-soft leading-relaxed mb-6">
                A business credit card application is not just about having an LLC. Lenders may look for signs that your business is active, consistent, and credible.
              </p>
              <p className="text-xl text-text-soft leading-relaxed mb-10">
                If your business information is incomplete, inconsistent, or underdeveloped, it may hurt your chances of approval or lead to lower limits.
              </p>
              <div className="inline-block border-l-4 border-accent-gold pl-6 py-2">
                <p className="text-xl font-heading font-bold text-primary-navy">
                  A strong business funding profile is built before the application is submitted.
                </p>
              </div>
            </FadeUp>
            
            <FadeUp delay={0.2}>
              <div className="bg-bg-light p-10 md:p-12 rounded-[2.5rem] border border-border-gray shadow-lg">
                <h3 className="text-2xl font-bold text-primary-navy mb-6">Key Areas That Matter</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    "Business name consistency", "Active business entity", "Correct EIN information",
                    "Business address consistency", "Business phone number", "Professional website",
                    "Business email", "Business bank account", "Revenue activity", "Industry risk", "Owner credit strength"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center flex-shrink-0 shadow-sm border border-border-gray">
                        <CheckCircle2 className="w-4 h-4 text-primary-green" />
                      </div>
                      <span className="text-base text-primary-navy font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Section 6: Why Strategy Matters */}
      <section className="py-32 bg-primary-navy relative overflow-hidden text-white">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent-gold opacity-10 blur-[150px] rounded-full pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeUp delay={0.2} className="order-2 lg:order-1">
              <div className="bg-white/5 backdrop-blur-md p-10 md:p-12 rounded-[2.5rem] border border-white/10 shadow-xl">
                <ul className="space-y-6">
                  {[
                    "Avoid random applications",
                    "Review the business profile first",
                    "Understand lender readiness",
                    "Consider timing and inquiry impact",
                    "Prepare business information correctly",
                    "Build a lender-conscious strategy",
                    "Pursue funding with a clear plan"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 border border-white/20">
                        <CheckCircle2 className="w-5 h-5 text-accent-gold" />
                      </div>
                      <span className="text-lg text-white font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeUp>

            <FadeUp className="order-1 lg:order-2">
              <span className="text-sm font-bold uppercase tracking-widest text-accent-gold mb-6 block">
                Strategy First
              </span>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-8">
                Applying Without a Plan Can Cost Your Business Opportunities.
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed mb-6">
                Many business owners apply for business credit cards without knowing which lenders fit their profile. That can lead to unnecessary hard inquiries, denials, low limits, and missed opportunities.
              </p>
              <p className="text-xl text-gray-300 leading-relaxed">
                A structured approach helps identify which direction may make sense based on your current business and credit profile.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Section 7: Our Approach */}
      <section className="py-32 bg-bg-light relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <FadeUp className="text-center mb-20 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-navy mb-6">Our Approach to Business Credit Card Stacking</h2>
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
              { title: "Business Funding Review", desc: "You submit your personal, business, and funding information so our team can understand your current profile." },
              { title: "Business Profile Review", desc: "We review your business entity, EIN, banking, revenue, website, business information, personal credit, and funding goals." },
              { title: "Funding Path Selection", desc: "We identify whether business credit card stacking may be the right direction based on your current profile." },
              { title: "Application Direction", desc: "When appropriate, we help guide the application sequence and lender strategy." },
              { title: "Next Steps", desc: "You receive direction on possible funding options, required improvements, and what needs to happen next." }
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

      {/* Section 8: Common Uses */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeUp>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-navy mb-8">
                How Business Owners May Use Business Credit Card Funding
              </h2>
              <p className="text-xl text-text-soft leading-relaxed mb-10">
                Business credit card funding may help qualified business owners access revolving capital for different business needs. The right use depends on your business goals, repayment plan, and overall funding strategy.
              </p>
              <div className="bg-bg-light border-l-4 border-accent-gold p-6 rounded-r-xl shadow-sm">
                <p className="text-sm text-text-soft leading-relaxed">
                  <span className="font-bold text-primary-navy block mb-1">Disclaimer</span>
                  Business owners are responsible for using credit responsibly and understanding repayment terms, interest rates, annual fees, and account obligations.
                </p>
              </div>
            </FadeUp>

            <FadeUp delay={0.2}>
              <div className="bg-primary-navy rounded-[2.5rem] p-10 border border-primary-navy/20 shadow-xl relative overflow-hidden">
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary-green/10 rounded-tl-full translate-x-1/3 translate-y-1/3"></div>
                <h3 className="text-2xl font-heading font-bold text-white mb-8 relative z-10">Use Cases</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-4 relative z-10">
                  {[
                    "Working capital", "Marketing and advertising", "Inventory", "Equipment",
                    "Software", "Payroll support", "Business travel", "Vendor payments",
                    "Professional services", "Expansion expenses", "Cash flow support", "Startup costs"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-4 h-4 text-accent-gold" />
                      </div>
                      <span className="text-base font-medium text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Section 9: What Makes a Business More Funding Ready? */}
      <section className="py-32 bg-bg-light relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <FadeUp>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-navy mb-6">
              What Can Make a Business More Funding Ready?
            </h2>
            <p className="text-xl text-text-soft leading-relaxed max-w-4xl mx-auto mb-16">
              Every lender has its own underwriting criteria, but certain factors may help strengthen a business credit card stacking strategy.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
              {[
                "Proper business entity", "Active EIN", "Business bank account", "Consistent business information",
                "Professional website", "Business email", "Documented revenue", "Strong personal credit", "Low utilization",
                "Limited recent inquiries", "Positive payment history", "Clear use of funds", "Responsible account management"
              ].map((item, index) => (
                <FadeUp key={index} delay={index * 0.05}>
                  <div className="bg-white p-8 rounded-2xl border border-border-gray shadow-sm flex flex-col items-center gap-4 hover:border-primary-green/30 transition-colors h-full justify-center">
                    <CheckCircle2 className="w-8 h-8 text-primary-green" />
                    <span className="text-lg font-bold text-primary-navy">{item}</span>
                  </div>
                </FadeUp>
              ))}
            </div>

            <p className="text-xl font-heading font-bold text-primary-navy max-w-3xl mx-auto">
              If your business is not ready yet, the first step may be strengthening the profile before applying.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Section 10: Personal Credit Still Matters */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-green opacity-5 blur-[150px] rounded-full pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeUp>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-navy mb-8">
                For Many Business Credit Cards, Personal Credit Still Plays a Major Role.
              </h2>
              <p className="text-xl text-text-soft leading-relaxed mb-6">
                Many business credit card issuers may review the owner’s personal credit profile during the application process. Even when the card is for the business, the owner’s credit score, utilization, inquiries, income, and payment history may still impact the decision.
              </p>
              <p className="text-xl text-text-soft leading-relaxed mb-10">
                That is why Unity Financial Solution reviews both the business profile and the owner profile before building a business credit card stacking strategy.
              </p>
            </FadeUp>
            
            <FadeUp delay={0.2}>
              <div className="bg-bg-light p-10 md:p-12 rounded-[2.5rem] border border-border-gray shadow-lg">
                <h3 className="text-2xl font-bold text-primary-navy mb-6">Important Factors</h3>
                <ul className="space-y-4">
                  {[
                    "Personal credit score", "Credit utilization", "Recent inquiries",
                    "Existing credit limits", "Payment history", "Income", "Recent approvals or denials"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-4">
                      <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center flex-shrink-0 shadow-sm border border-border-gray">
                        <CheckCircle2 className="w-4 h-4 text-primary-green" />
                      </div>
                      <span className="text-lg text-primary-navy font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Section 11: CTA Section */}
      <section className="py-32 bg-primary-navy relative overflow-hidden text-center">
        <div className="absolute inset-0 opacity-10">
          <MeshGradient speed={4} intensity={1.5} grain={0.2} />
        </div>
        <div className="max-w-[800px] mx-auto px-6 relative z-10">
          <FadeUp>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-8 leading-tight">
              Want to See If Business Credit Card Stacking May Fit Your Company?
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-10">
              Start with a business funding review. Unity Financial Solution will review your business and personal profile to help identify whether business credit card stacking may be the right direction.
            </p>
            <div className="flex justify-center mb-6">
              <Button to="/apply" variant="gold" showArrow className="text-lg px-12 py-5 shadow-[0_20px_40px_rgba(200,157,60,0.3)] hover:scale-105 transition-transform">
                Start My Business Funding Review
              </Button>
            </div>
            <p className="text-sm text-gray-400">
              Submitting a funding review does not guarantee approval, credit limits, interest rates, or funding amounts.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Section 12: FAQ Section */}
      <section className="py-32 bg-bg-light">
        <div className="max-w-[1000px] mx-auto px-6 sm:px-8 lg:px-12">
          <FadeUp className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-navy mb-6">
              Business Credit Card Stacking Questions
            </h2>
          </FadeUp>
          
          <div className="space-y-6">
            {[
              { q: "Do you guarantee business credit card approvals?", a: "No. Unity Financial Solution does not guarantee approvals, credit limits, rates, terms, or funding amounts. All decisions are made by banks, lenders, and credit card issuers." },
              { q: "Do I need an LLC to apply for business credit cards?", a: "Having a properly formed business entity may help support a business funding profile. Requirements vary by lender and product." },
              { q: "Can a new business get business credit cards?", a: "Possibly. New businesses may have options, but approvals depend on personal credit, income, business setup, industry, and lender criteria." },
              { q: "Will lenders check my personal credit?", a: "Many business credit card issuers may review personal credit, especially for small business owners and newer businesses." },
              { q: "Can business credit cards help separate expenses?", a: "Yes. Business credit cards may help separate business and personal expenses when used properly." },
              { q: "What if my business is not ready?", a: "If your business is not ready, Unity Financial Solution may recommend improving your business profile before applying." }
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
              Build Business Credit With a Strategy Behind It.
            </h2>
            <p className="text-xl text-text-soft leading-relaxed mb-10">
              Business funding should start with preparation, not random applications. Let Unity Financial Solution help you review your profile and identify possible next steps.
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
          Unity Financial Solution does not guarantee business credit card approvals, credit limits, interest rates, funding amounts, repayment terms, or lender offers. All decisions are made by third-party banks, credit card issuers, lenders, or financial institutions based on their own underwriting guidelines. Past results do not guarantee future outcomes.
        </p>
      </div>
    </div>
  );
};

export default BusinessCredit;
