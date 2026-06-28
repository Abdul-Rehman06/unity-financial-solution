import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Tilt from 'react-parallax-tilt';
import { CreditCard, Briefcase, Landmark, CheckSquare } from 'lucide-react';
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

const FundingSolutions = () => {
  const solutions = [
    {
      title: "Personal Credit Card Stacking",
      description: "For qualified individuals looking to access revolving credit through a strategic application process.",
      icon: CreditCard,
      link: "/personal-credit-card-stacking"
    },
    {
      title: "Business Credit Card Stacking",
      description: "For business owners looking to pursue business credit cards and revolving business capital.",
      icon: Briefcase,
      link: "/business-credit-card-stacking"
    },
    {
      title: "SBA Loan Support",
      description: "For qualified businesses seeking structured loan options for growth, expansion, equipment, working capital, or real estate.",
      icon: Landmark,
      link: "/sba-loans"
    },
    {
      title: "Business Funding Readiness",
      description: "For entrepreneurs and business owners who need to prepare their profile before applying.",
      icon: CheckSquare,
      link: "/business-funding-readiness"
    }
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
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
            <span className="text-sm font-bold uppercase tracking-widest text-accent-gold mb-6 block">Funding Solutions</span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-8 leading-tight">
              Funding Solutions Designed Around Your Profile
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto font-light mb-12">
              Unity Financial Solution helps individuals, entrepreneurs, and business owners explore strategic funding options through personal credit card stacking, business credit card stacking, SBA loan support, and business funding readiness.
            </p>
            <Button to="/apply" variant="gold" showArrow className="text-lg px-10 py-5 shadow-[0_20px_40px_rgba(200,157,60,0.3)] hover:scale-105 transition-transform mb-8">
              Start My Funding Review
            </Button>
            <p className="text-sm text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Funding is subject to lender approval, underwriting, eligibility, credit profile, income, business history, documentation, and other applicable criteria. Results are not guaranteed.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <FadeUp>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-navy mb-8">
              Not Every Funding Path Is the Same
            </h2>
            <p className="text-xl text-text-soft leading-relaxed max-w-4xl mx-auto mb-6">
              Every client comes with a different profile, goal, and funding need. Some clients may be better positioned for personal credit card stacking. Others may need business credit card options, SBA loan support, or a readiness plan before applying.
            </p>
            <p className="text-xl text-text-soft leading-relaxed max-w-4xl mx-auto mb-10">
              At Unity Financial Solution, we do not believe in random applications. We review your profile, business structure, credit, income, revenue, and documentation so we can help identify which funding direction may make the most sense.
            </p>
            <div className="inline-block border-l-4 border-primary-green pl-6 py-2 text-left">
              <p className="text-2xl font-heading font-bold text-primary-navy">
                The goal is simple: build the strategy before the submission.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Section 3: Personal Credit Card Stacking */}
      <section className="py-32 bg-bg-light relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-green opacity-5 blur-[120px] rounded-full pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
        <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <FadeUp>
              <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm border border-border-gray">
                <CreditCard className="w-10 h-10 text-primary-green" />
              </div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-navy mb-6">
                Personal Credit Card Stacking
              </h2>
              <p className="text-xl text-text-soft leading-relaxed mb-6">
                Personal credit card stacking is a strategy designed for qualified individuals who want to pursue multiple credit card approvals in a structured and organized way.
              </p>
              <p className="text-xl text-text-soft leading-relaxed mb-10">
                This may be a strong option for entrepreneurs, startup founders, and individuals looking for access to revolving credit based on personal credit strength, income, utilization, inquiries, and lender readiness.
              </p>
              <Button to="/personal-credit-card-stacking" variant="primary" showArrow className="text-lg px-10 py-5">
                Learn More About Personal Stacking
              </Button>
            </FadeUp>
            
            <FadeUp delay={0.2}>
              <div className="bg-white rounded-[2.5rem] p-10 shadow-xl border border-border-gray">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div>
                    <h3 className="text-xl font-bold text-primary-navy mb-6 uppercase tracking-wider text-sm">What We Review</h3>
                    <ul className="space-y-4">
                      {[
                        "Personal credit score", "Credit utilization", "Recent inquiries", "Income",
                        "Existing credit limits", "Payment history", "Age of accounts", "Recent approvals or denials", "Overall approval readiness"
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckSquare className="w-5 h-5 text-primary-green flex-shrink-0 mt-0.5" />
                          <span className="text-text-charcoal font-medium">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary-navy mb-6 uppercase tracking-wider text-sm">Best For</h3>
                    <ul className="space-y-4">
                      {[
                        "Entrepreneurs", "Startup founders", "Individuals with strong credit",
                        "People seeking revolving credit access", "Clients preparing for business growth"
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-accent-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <div className="w-2 h-2 bg-accent-gold rounded-full"></div>
                          </div>
                          <span className="text-text-charcoal font-medium">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Section 4: Business Credit Card Stacking */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent-gold opacity-5 blur-[120px] rounded-full pointer-events-none -translate-x-1/3 translate-y-1/3"></div>
        <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <FadeUp delay={0.2} className="order-2 lg:order-1">
              <div className="bg-bg-light rounded-[2.5rem] p-10 shadow-xl border border-border-gray">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div>
                    <h3 className="text-xl font-bold text-primary-navy mb-6 uppercase tracking-wider text-sm">What We Review</h3>
                    <ul className="space-y-4">
                      {[
                        "Business entity", "EIN", "Business bank account", "Business address",
                        "Business phone number", "Business website", "Monthly revenue", "Industry type", "Personal credit strength", "Existing business credit profile"
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckSquare className="w-5 h-5 text-primary-green flex-shrink-0 mt-0.5" />
                          <span className="text-text-charcoal font-medium">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary-navy mb-6 uppercase tracking-wider text-sm">Best For</h3>
                    <ul className="space-y-4">
                      {[
                        "LLCs", "Corporations", "New businesses", "Growing businesses",
                        "Business owners needing working capital", "Companies looking for revolving business credit"
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-accent-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <div className="w-2 h-2 bg-accent-gold rounded-full"></div>
                          </div>
                          <span className="text-text-charcoal font-medium">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </FadeUp>

            <FadeUp className="order-1 lg:order-2">
              <div className="w-20 h-20 bg-bg-light rounded-2xl flex items-center justify-center mb-8 shadow-sm border border-border-gray">
                <Briefcase className="w-10 h-10 text-accent-gold" />
              </div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-navy mb-6">
                Business Credit Card Stacking
              </h2>
              <p className="text-xl text-text-soft leading-relaxed mb-6">
                Business credit card stacking helps qualified business owners pursue business credit card options and revolving business capital in a structured way.
              </p>
              <p className="text-xl text-text-soft leading-relaxed mb-10">
                This strategy may help business owners separate business expenses, access working capital, and build stronger funding relationships when the business and personal profile are properly prepared.
              </p>
              <Button to="/business-credit-card-stacking" variant="primary" showArrow className="text-lg px-10 py-5">
                Learn More About Business Stacking
              </Button>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Section 5: SBA Loan Support */}
      <section className="py-32 bg-primary-navy relative overflow-hidden text-white">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary-green opacity-10 blur-[150px] rounded-full pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
        <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <FadeUp>
              <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center mb-8 border border-white/20 backdrop-blur-md">
                <Landmark className="w-10 h-10 text-primary-green" />
              </div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
                SBA Loan Support
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed mb-6">
                SBA loan options can be a powerful funding path for qualified businesses seeking structured capital for working capital, expansion, equipment, inventory, real estate, or long-term growth.
              </p>
              <p className="text-xl text-gray-300 leading-relaxed mb-10">
                Unity Financial Solution helps business owners understand SBA loan readiness, documentation needs, and possible funding pathways before moving forward.
              </p>
              <Button to="/sba-loans" variant="gold" showArrow className="text-lg px-10 py-5">
                Check SBA Readiness
              </Button>
            </FadeUp>
            
            <FadeUp delay={0.2}>
              <div className="bg-white/5 backdrop-blur-md rounded-[2.5rem] p-10 border border-white/10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-wider text-sm opacity-80">What We Review</h3>
                    <ul className="space-y-4">
                      {[
                        "Time in business", "Monthly revenue", "Business bank statements", "Business tax returns",
                        "Profitability", "Personal credit", "Existing business debt", "Use of funds", "Industry type", "Collateral, when applicable", "Business plan, when needed"
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckSquare className="w-5 h-5 text-primary-green flex-shrink-0 mt-0.5" />
                          <span className="text-gray-200 font-medium">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-wider text-sm opacity-80">Best For</h3>
                    <ul className="space-y-4">
                      {[
                        "Established businesses", "Businesses with revenue history", "Companies seeking larger funding",
                        "Businesses preparing for expansion", "Owners with documentation ready"
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-accent-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <div className="w-2 h-2 bg-accent-gold rounded-full"></div>
                          </div>
                          <span className="text-gray-200 font-medium">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Section 6: Business Funding Readiness */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <FadeUp delay={0.2} className="order-2 lg:order-1">
              <div className="bg-bg-light rounded-[2.5rem] p-10 shadow-xl border border-border-gray relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-accent-gold/5 rounded-bl-full pointer-events-none"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 relative z-10">
                  <div>
                    <h3 className="text-xl font-bold text-primary-navy mb-6 uppercase tracking-wider text-sm">What We Review</h3>
                    <ul className="space-y-4">
                      {[
                        "Business entity setup", "EIN", "Business bank account", "Business address consistency",
                        "Business phone number", "Business website", "Revenue documentation", "Bank statements", "Credit profile", "Utilization", "Inquiries", "Industry risk", "Funding goals"
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckSquare className="w-5 h-5 text-primary-green flex-shrink-0 mt-0.5" />
                          <span className="text-text-charcoal font-medium">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary-navy mb-6 uppercase tracking-wider text-sm">Best For</h3>
                    <ul className="space-y-4">
                      {[
                        "New businesses", "Previously denied applicants", "Businesses preparing for funding",
                        "Owners who need documentation review", "Entrepreneurs building long-term fundability"
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-accent-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <div className="w-2 h-2 bg-accent-gold rounded-full"></div>
                          </div>
                          <span className="text-text-charcoal font-medium">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </FadeUp>

            <FadeUp className="order-1 lg:order-2">
              <div className="w-20 h-20 bg-bg-light rounded-2xl flex items-center justify-center mb-8 shadow-sm border border-border-gray">
                <CheckSquare className="w-10 h-10 text-primary-navy" />
              </div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-navy mb-6">
                Business Funding Readiness
              </h2>
              <p className="text-xl text-text-soft leading-relaxed mb-6">
                Before applying for funding, your business needs to look credible, consistent, and fundable. Lenders may review more than just your credit score. They may look at your business structure, banking activity, revenue, documentation, online presence, industry, and overall risk profile.
              </p>
              <p className="text-xl text-text-soft leading-relaxed mb-10">
                Business Funding Readiness is designed to help you understand what may need to be fixed, strengthened, or prepared before pursuing funding.
              </p>
              <Button to="/business-funding-readiness" variant="secondary" showArrow className="text-lg px-10 py-5">
                Review My Business Profile
              </Button>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Section 7: Comparison Section */}
      <section className="py-32 bg-bg-light">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <FadeUp>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-navy mb-16">
              Which Funding Option May Fit You?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mb-16">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-border-gray">
                <p className="text-lg text-text-soft mb-2">Need startup or personal revolving credit?</p>
                <p className="text-xl font-bold text-primary-navy">Personal Credit Card Stacking may be a fit.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-border-gray">
                <p className="text-lg text-text-soft mb-2">Own a business and need working capital?</p>
                <p className="text-xl font-bold text-primary-navy">Business Credit Card Stacking may be a fit.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-border-gray">
                <p className="text-lg text-text-soft mb-2">Have an established business with revenue and documents?</p>
                <p className="text-xl font-bold text-primary-navy">SBA Loan Support may be a fit.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-border-gray">
                <p className="text-lg text-text-soft mb-2">Not ready to apply yet?</p>
                <p className="text-xl font-bold text-primary-navy">Business Funding Readiness may be the best first step.</p>
              </div>
            </div>

            <p className="text-xl text-text-soft leading-relaxed max-w-3xl mx-auto mb-10">
              If you are not sure which option is right for you, start with the funding review. That is where we look at your profile and help identify the right direction.
            </p>
            <div className="flex justify-center">
              <Button to="/apply" variant="primary" showArrow className="text-lg px-10 py-5">
                Start My Funding Review
              </Button>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Section 8: Why Strategy Matters */}
      <section className="py-32 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <FadeUp>
            <span className="text-sm font-bold uppercase tracking-widest text-primary-green mb-4 block">Strategy First</span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-navy mb-8">
              Applying Without a Plan Can Cost You Opportunities
            </h2>
            <p className="text-xl text-text-soft leading-relaxed max-w-4xl mx-auto mb-6">
              Many people apply for funding without understanding what lenders are reviewing. That can lead to unnecessary denials, wasted inquiries, lower limits, or missed opportunities.
            </p>
            <p className="text-xl text-text-soft leading-relaxed max-w-4xl mx-auto mb-12">
              Unity Financial Solution helps clients slow down and review the full picture before moving forward. The stronger the preparation, the better positioned you may be when pursuing funding options.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-left max-w-5xl mx-auto">
              {[
                "Review before applying", "Understand profile strengths and weaknesses", "Identify the right funding path",
                "Avoid random applications", "Prepare documentation early", "Build a stronger funding strategy"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3 bg-bg-light p-4 rounded-xl border border-border-gray">
                  <CheckSquare className="w-5 h-5 text-primary-green flex-shrink-0" />
                  <span className="text-text-charcoal font-medium">{item}</span>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Section 9: Final CTA */}
      <section className="py-32 bg-primary-navy relative overflow-hidden text-center">
        <div className="absolute inset-0 opacity-10">
          <MeshGradient speed={4} intensity={1.5} grain={0.2} />
        </div>
        <div className="max-w-[800px] mx-auto px-6 relative z-10">
          <FadeUp>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-8 leading-tight">
              Ready to Find the Right Funding Path?
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-10">
              Start with a funding review. Unity Financial Solution will review your information, understand your goals, and help identify which funding options may fit your current profile.
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
          Unity Financial Solution does not guarantee approvals, funding amounts, credit limits, interest rates, repayment terms, or loan offers. All funding decisions are made by third-party lenders, banks, credit card issuers, or financial institutions based on their own underwriting guidelines. Past results do not guarantee future outcomes.
        </p>
      </div>
    </div>
  );
};

export default FundingSolutions;
