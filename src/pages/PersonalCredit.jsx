import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Tilt from 'react-parallax-tilt';
import { CreditCard, CheckCircle2 } from 'lucide-react';
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

const PersonalCredit = () => {
  const reviews = [
    "Credit score", "Utilization", "Inquiries", "Income", "Payment history",
    "Current limits", "Age of accounts", "Recent approvals or denials", "Bank relationships"
  ];

  const bestFor = [
    "Entrepreneurs", "Startup founders", "Individuals with strong credit",
    "People looking for revolving capital", "Clients preparing for business growth"
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
              Personal Credit Card Stacking
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-8 leading-tight">
              Access Personal Credit With a <br className="hidden md:block"/>
              <span className="bg-clip-text bg-gradient-to-r from-primary-green to-accent-gold">Strategy, Not Random Applications.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto font-light mb-12">
              Unity Financial Solution helps qualified individuals pursue personal credit card funding through a structured review process built around credit profile, income, utilization, inquiries, and lender readiness.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-5 mb-8">
              <Button to="/apply" variant="gold" showArrow className="text-lg px-10 py-5 shadow-[0_20px_40px_rgba(200,157,60,0.3)] hover:scale-105 transition-transform">
                Start My Funding Review
              </Button>
              <Button to="/funding-solutions" variant="secondary" className="text-lg px-10 py-5">
                View Funding Options
              </Button>
            </div>

            <p className="text-sm text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Credit card approvals, limits, rates, and terms are determined by the issuing banks and lenders. Results are not guaranteed.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Section 2: What Is Personal Credit Card Stacking? */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-bg-light rounded-full blur-[100px] opacity-50 -translate-y-1/2 translate-x-1/3"></div>
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeUp>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-navy mb-8">What Is Personal Credit Card Stacking?</h2>
              <p className="text-xl text-text-soft leading-relaxed mb-6">
                Personal credit card stacking is a funding strategy where qualified applicants apply for multiple personal credit cards in a structured sequence to potentially access higher total available credit.
              </p>
              <p className="text-xl text-text-soft leading-relaxed mb-6">
                This is not about applying everywhere and hoping something works. The strategy depends on understanding your credit profile, income, utilization, recent inquiries, existing limits, payment history, and lender behavior before moving forward.
              </p>
              <p className="text-xl text-text-soft leading-relaxed mb-10">
                At Unity Financial Solution, we help review your profile first so the application strategy is built with direction.
              </p>
              <div className="inline-block border-l-4 border-primary-green pl-6 py-2">
                <p className="text-xl font-heading font-bold text-primary-navy">
                  The goal is to pursue funding with structure, timing, and lender awareness.
                </p>
              </div>
            </FadeUp>
            
            <FadeUp delay={0.2}>
              <Tilt tiltMaxAngleX={2} tiltMaxAngleY={2} perspective={1000} className="h-full">
                <div className="bg-bg-light p-12 rounded-[2.5rem] border border-border-gray shadow-xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-48 h-48 bg-primary-green/5 rounded-bl-full -mr-8 -mt-8 group-hover:bg-primary-green/10 transition-colors duration-500"></div>
                  <h3 className="text-3xl font-heading font-bold text-primary-navy mb-6 relative z-10">Who Personal Credit Card Stacking May Be Good For</h3>
                  <p className="text-lg text-text-soft leading-relaxed mb-8 relative z-10">
                    Personal credit card stacking may be a good option for individuals who have strong personal credit and want access to revolving capital for business, startup, or personal funding needs.
                  </p>
                  <div className="mb-4 text-sm font-bold uppercase tracking-widest text-primary-green relative z-10">Best For</div>
                  <ul className="space-y-4 relative z-10">
                    {[
                      "Entrepreneurs starting a business",
                      "Startup founders needing access to capital",
                      "Individuals with strong personal credit",
                      "Business owners using personal credit strength",
                      "Clients looking for revolving credit access",
                      "People preparing for future business funding",
                      "Applicants who want a structured funding approach"
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
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-navy mb-6">Before You Apply, We Review the Full Credit Profile</h2>
            <p className="text-xl text-text-soft leading-relaxed mb-6">
              Lenders do not only look at your score. A strong score can still lead to lower limits or denials if the rest of the profile is not positioned correctly.
            </p>
            <p className="text-xl text-text-soft leading-relaxed">
              Unity Financial Solution reviews the key factors that may impact personal credit card approvals and credit limits.
            </p>
          </FadeUp>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6 mb-16">
            {[
              "Estimated credit score", "Credit utilization", "Recent inquiries", "Payment history",
              "Age of credit history", "Existing credit limits", "Number of open accounts", "Recent approvals or denials",
              "Income", "Debt obligations", "Banking relationships", "Negative items, if any", "Overall approval readiness"
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
              The stronger the profile looks before submission, the better positioned you may be when pursuing credit card funding options.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Section 5: Why Strategy Matters */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-primary-green opacity-5 blur-[150px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeUp>
              <span className="text-sm font-bold uppercase tracking-widest text-primary-green mb-6 block">
                Strategy First
              </span>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-navy mb-8">
                Random Applications Can Hurt the Opportunity
              </h2>
              <p className="text-xl text-text-soft leading-relaxed mb-6">
                Many people apply for credit cards without knowing which lenders fit their profile. That can lead to unnecessary hard inquiries, lower limits, duplicate denials, or missed opportunities with better lenders.
              </p>
              <p className="text-xl text-text-soft leading-relaxed mb-10">
                A structured approach helps you understand which funding direction may make sense before applications are submitted.
              </p>
            </FadeUp>
            
            <FadeUp delay={0.2}>
              <div className="bg-bg-light p-10 md:p-12 rounded-[2.5rem] border border-border-gray shadow-lg">
                <ul className="space-y-6">
                  {[
                    "Avoid applying blindly",
                    "Review your profile before submission",
                    "Understand what lenders may look for",
                    "Consider timing and inquiry impact",
                    "Build a lender-conscious strategy",
                    "Pursue funding with a clearer plan"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center flex-shrink-0 shadow-sm border border-border-gray">
                        <CheckCircle2 className="w-5 h-5 text-primary-green" />
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

      {/* Section 6: Our Approach */}
      <section className="py-32 bg-primary-navy relative overflow-hidden text-white">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary-green opacity-10 blur-[150px] rounded-full pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <FadeUp className="text-center mb-20 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">Our Approach to Personal Credit Card Stacking</h2>
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
              { title: "Funding Review", desc: "You submit your personal and financial information so our team can understand your current profile." },
              { title: "Credit Profile Review", desc: "We review key factors such as credit score, utilization, inquiries, income, limits, and approval readiness." },
              { title: "Strategy Selection", desc: "We identify whether personal credit card stacking may be the right funding path based on your profile." },
              { title: "Application Direction", desc: "When appropriate, we help guide the application sequence and lender strategy." },
              { title: "Next Steps", desc: "You receive direction on possible funding options, improvement areas, and what to do next." }
            ].map((step, index) => (
              <FadeUp key={index} delay={index * 0.15} className="relative z-10 flex flex-col items-start lg:items-center lg:text-center group">
                <div className="w-20 h-20 rounded-full bg-primary-navy border-2 border-white/20 flex items-center justify-center text-2xl font-bold font-heading mb-8 shadow-2xl group-hover:border-accent-gold group-hover:bg-white group-hover:text-primary-navy transition-all duration-500">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">{step.title}</h3>
                <p className="text-gray-400 text-base leading-relaxed">{step.desc}</p>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: Common Uses */}
      <section className="py-32 bg-bg-light relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeUp delay={0.2} className="order-2 lg:order-1">
              <div className="bg-white rounded-[2.5rem] p-10 border border-border-gray shadow-xl relative overflow-hidden">
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary-green/5 rounded-tl-full translate-x-1/3 translate-y-1/3"></div>
                <h3 className="text-2xl font-heading font-bold text-primary-navy mb-8 relative z-10">Use Cases</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-4 relative z-10">
                  {[
                    "Startup capital", "Business launch expenses", "Marketing and advertising", "Equipment or software",
                    "Inventory", "Emergency working capital", "Cash flow support", "Business development",
                    "Professional services", "Travel or operational expenses"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-bg-light flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-4 h-4 text-primary-navy" />
                      </div>
                      <span className="text-base font-medium text-text-charcoal">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>

            <FadeUp className="order-1 lg:order-2">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-navy mb-8">
                How Clients May Use Personal Credit Card Funding
              </h2>
              <p className="text-xl text-text-soft leading-relaxed mb-10">
                Personal credit card funding may be used by qualified clients for different financial and business needs. The right use depends on your goals, repayment plan, and overall funding strategy.
              </p>
              <div className="bg-white border-l-4 border-accent-gold p-6 rounded-r-xl shadow-sm">
                <p className="text-sm text-text-soft leading-relaxed">
                  <span className="font-bold text-primary-navy block mb-1">Disclaimer</span>
                  Clients are responsible for using credit responsibly and understanding repayment terms, interest rates, fees, and account obligations.
                </p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Section 8: What Makes Someone More Ready? */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <FadeUp>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-navy mb-6">
              What Can Make a Profile More Funding Ready?
            </h2>
            <p className="text-xl text-text-soft leading-relaxed max-w-4xl mx-auto mb-16">
              Every lender has its own criteria, but certain factors may help strengthen a personal credit card stacking strategy.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
              {[
                "Strong personal credit", "Low credit utilization", "Limited recent inquiries", "Positive payment history",
                "Established credit history", "Strong existing credit limits", "Verifiable income", "Clean recent approval history", "Responsible account management"
              ].map((item, index) => (
                <FadeUp key={index} delay={index * 0.05}>
                  <div className="bg-bg-light p-8 rounded-2xl border border-border-gray shadow-sm flex flex-col items-center gap-4 hover:border-accent-gold/50 transition-colors h-full justify-center">
                    <CheckCircle2 className="w-8 h-8 text-accent-gold" />
                    <span className="text-lg font-bold text-primary-navy">{item}</span>
                  </div>
                </FadeUp>
              ))}
            </div>

            <p className="text-xl font-heading font-bold text-primary-navy max-w-3xl mx-auto">
              If your profile is not ready yet, that does not mean the process is over. It may simply mean the first step is improving the profile before applying.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Section 9: CTA Section */}
      <section className="py-32 bg-primary-navy relative overflow-hidden text-center">
        <div className="absolute inset-0 opacity-10">
          <MeshGradient speed={4} intensity={1.5} grain={0.2} />
        </div>
        <div className="max-w-[800px] mx-auto px-6 relative z-10">
          <FadeUp>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-8 leading-tight">
              Want to See If Personal Credit Card Stacking May Fit Your Profile?
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-10">
              Start with a funding review. Unity Financial Solution will review your information and help identify whether personal credit card stacking may be the right direction for you.
            </p>
            <div className="flex justify-center mb-6">
              <Button to="/apply" variant="gold" showArrow className="text-lg px-12 py-5 shadow-[0_20px_40px_rgba(200,157,60,0.3)] hover:scale-105 transition-transform">
                Start My Funding Review
              </Button>
            </div>
            <p className="text-sm text-gray-400">
              Submitting a funding review does not guarantee approval, credit limits, interest rates, or funding amounts.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Section 10: FAQ Section */}
      <section className="py-32 bg-bg-light">
        <div className="max-w-[1000px] mx-auto px-6 sm:px-8 lg:px-12">
          <FadeUp className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-navy mb-6">
              Personal Credit Card Stacking Questions
            </h2>
          </FadeUp>
          
          <div className="space-y-6">
            {[
              { q: "Do you guarantee credit card approvals?", a: "No. Unity Financial Solution does not guarantee approvals, credit limits, rates, or terms. All decisions are made by banks and credit card issuers." },
              { q: "Will applying affect my credit?", a: "Some credit card applications may result in hard inquiries. The impact depends on the lender, application type, and your credit profile." },
              { q: "Do I need good credit?", a: "Personal credit card stacking is usually stronger for applicants with good credit, low utilization, solid income, and limited recent inquiries." },
              { q: "Can I use personal credit cards for business?", a: "Some entrepreneurs use personal credit cards to support startup or business expenses, but you are responsible for understanding the terms, repayment requirements, and risks." },
              { q: "What if my profile is not ready?", a: "If your profile is not ready, Unity Financial Solution may recommend improving certain areas before applying." }
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
              Stop Applying Blind. Start With a Strategy.
            </h2>
            <p className="text-xl text-text-soft leading-relaxed mb-10">
              Your funding path should begin with a full review, not random applications. Let Unity Financial Solution help you understand your profile and possible next steps.
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
          Unity Financial Solution does not guarantee credit card approvals, credit limits, interest rates, funding amounts, repayment terms, or lender offers. All decisions are made by third-party banks, credit card issuers, lenders, or financial institutions based on their own underwriting guidelines. Past results do not guarantee future outcomes.
        </p>
      </div>
    </div>
  );
};

export default PersonalCredit;
