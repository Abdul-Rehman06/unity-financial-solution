import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Tilt from 'react-parallax-tilt';
import { ClipboardList, Search, Target, FileCheck, FileText, Send, Map, CheckCircle2 } from 'lucide-react';
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

const HowItWorks = () => {
  const stepsData = [
    {
      step: "Step 1",
      title: "Submit Your Funding Review",
      icon: <ClipboardList className="w-8 h-8" />,
      body: "The first step is completing the funding review form. This gives our team the information needed to understand your current profile, goals, and funding needs.",
      listTitle: "What You May Provide",
      simpleList: [
        "Full name", "Email", "Phone number", "State", "Estimated credit score", 
        "Income range", "Funding amount requested", "Funding type interested in", 
        "Business name, if applicable", "Time in business, if applicable", 
        "Monthly revenue, if applicable", "Use of funds"
      ],
      button: { text: "Start My Funding Review", to: "/apply" }
    },
    {
      step: "Step 2",
      title: "Profile Review",
      icon: <Search className="w-8 h-8" />,
      body: "After your information is submitted, our team reviews the details to understand where you currently stand.\n\nThis review may include your personal credit profile, business setup, income, revenue, documentation, banking activity, industry, and funding goals.",
      listTitle: "What We Review",
      simpleList: [
        "Personal credit profile", "Credit utilization", "Recent inquiries", "Income", 
        "Existing credit limits", "Business entity", "EIN", "Business bank account", 
        "Business website", "Monthly revenue", "Time in business", "Bank statements", 
        "Tax returns, when needed", "Use of funds", "Overall funding readiness"
      ],
      closingLine: "This step helps us identify whether you may be ready for funding or if preparation is needed first."
    },
    {
      step: "Step 3",
      title: "Funding Path Selection",
      icon: <Target className="w-8 h-8" />,
      body: "Once your profile is reviewed, Unity Financial Solution helps identify which funding path may fit your current situation.\n\nNot every client needs the same solution. Some may be better positioned for personal credit card stacking. Others may need business credit card stacking, SBA loan support, or business funding readiness before applying.",
      listTitle: "Possible Funding Paths",
      complexList: [
        { title: "Personal Credit Card Stacking", desc: "For qualified individuals looking to pursue personal revolving credit through a structured application strategy." },
        { title: "Business Credit Card Stacking", desc: "For business owners looking to access business revolving credit and working capital options." },
        { title: "SBA Loan Support", desc: "For qualified businesses that may be ready for structured loan options." },
        { title: "Business Funding Readiness", desc: "For business owners who need to strengthen their profile before applying." }
      ],
      highlight: "The right funding path depends on your profile, not a one-size-fits-all approach."
    },
    {
      step: "Step 4",
      title: "Application Strategy",
      icon: <FileCheck className="w-8 h-8" />,
      body: "If your profile is ready, the next step is building the application strategy. This may include identifying which funding options fit, what documents are needed, and how to move forward in a structured way.\n\nThe goal is to avoid random applications and pursue funding with better timing, preparation, and lender awareness.",
      listTitle: "Strategy May Include",
      simpleList: [
        "Funding option review", "Lender fit discussion", "Application timing", 
        "Document preparation", "Credit profile considerations", "Business profile considerations", 
        "Use of funds review", "Next-step recommendations"
      ],
      closingLine: "A good strategy helps you understand what to apply for, when to apply, and what should be prepared first."
    },
    {
      step: "Step 5",
      title: "Document Collection",
      icon: <FileText className="w-8 h-8" />,
      body: "Depending on the funding path, certain documents may be needed before applications or lender conversations move forward.\n\nBusiness credit cards may require basic business and owner information, while SBA loans and larger funding options may require a more complete file.",
      listTitle: "Documents That May Be Requested",
      simpleList: [
        "Government-issued ID", "Business formation documents", "EIN confirmation", 
        "Business bank statements", "Business tax returns", "Personal tax returns, when needed", 
        "Profit and loss statement", "Balance sheet", "Debt schedule", "Business lease, if applicable", 
        "Use of funds statement", "Business plan, when needed"
      ],
      smallNote: "Required documents depend on the funding type, lender requirements, and your specific profile."
    },
    {
      step: "Step 6",
      title: "Submission and Follow-Up",
      icon: <Send className="w-8 h-8" />,
      body: "When appropriate, applications or funding submissions may move forward based on the selected strategy and required documentation.\n\nAfter submission, the lender, bank, credit card issuer, or financial institution reviews the file based on its own underwriting guidelines.",
      listTitle: "What May Happen Next",
      simpleList: [
        "Application review", "Additional document requests", "Verification questions", 
        "Approval decision", "Denial decision", "Counteroffer", "Funding terms review", 
        "Next-step planning"
      ],
      smallDisclaimer: "Unity Financial Solution does not control lender decisions, approval amounts, credit limits, rates, terms, or timelines."
    },
    {
      step: "Step 7",
      title: "Funding Roadmap or Rebuild Plan",
      icon: <Map className="w-8 h-8" />,
      body: "After the review process, you receive direction based on the outcome.\n\nIf funding options are available, we help you understand the next steps. If your profile is not ready, we help identify what may need improvement before applying again.",
      listTitle: "Possible Outcomes",
      complexList: [
        { title: "Funding Path Available", desc: "You may move forward with the recommended funding strategy." },
        { title: "More Documents Needed", desc: "You may need to provide additional information before moving forward." },
        { title: "Profile Needs Improvement", desc: "You may need to improve credit, revenue, documentation, or business profile readiness." },
        { title: "Alternative Funding Path Recommended", desc: "Another option may fit better than the one originally requested." }
      ],
      highlight: "Even if the answer is not “right now,” the goal is to give you a clear next step."
    }
  ];

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
              How It Works
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-8 leading-tight">
              A Clear Funding Process <br className="hidden md:block"/>
              <span className="bg-clip-text bg-gradient-to-r from-primary-green to-accent-gold">Built Around Strategy.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto font-light mb-12">
              Unity Financial Solution helps individuals and business owners move through a structured funding review process so the right strategy can be identified before applications are submitted.
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
              Submitting a funding review does not guarantee approval, funding amount, credit limit, interest rate, or loan terms. All funding decisions are made by third-party lenders, banks, credit card issuers, or financial institutions.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Section 2: Intro Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-bg-light rounded-full blur-[100px] opacity-50 -translate-y-1/2 translate-x-1/3"></div>
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <FadeUp className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-navy mb-8">
              We Review First. Then We Build the Funding Direction.
            </h2>
            <p className="text-xl text-text-soft leading-relaxed mb-6">
              Most people apply for funding without knowing if their profile is ready. That can lead to denials, low limits, wasted inquiries, and missed opportunities.
            </p>
            <p className="text-xl text-text-soft leading-relaxed mb-10">
              At Unity Financial Solution, our process starts with review and strategy. We look at your personal credit, business profile, income, revenue, documentation, and funding goals before identifying which funding path may make the most sense.
            </p>
            <div className="inline-block border-l-4 border-primary-green pl-6 py-2 bg-bg-light pr-8 rounded-r-xl">
              <p className="text-xl font-heading font-bold text-primary-navy">
                The goal is to build the strategy before the submission.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Process Steps (Sections 3 - 9) */}
      <section className="py-32 bg-bg-light relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="space-y-24 relative before:absolute before:inset-0 before:ml-8 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-[2px] before:bg-gradient-to-b before:from-primary-green/20 before:via-accent-gold/20 before:to-primary-green/20 before:z-0">
            {stepsData.map((step, index) => (
              <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                <div className="flex items-center justify-center w-16 h-16 rounded-full border-4 border-bg-light bg-primary-navy shadow-xl shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-transform duration-500 group-hover:scale-110">
                  <span className="text-xl font-heading font-bold text-accent-gold">{index + 1}</span>
                </div>
                
                <div className="w-[calc(100%-5rem)] md:w-[calc(50%-4rem)]">
                  <FadeUp delay={0.1}>
                    <Tilt tiltMaxAngleX={2} tiltMaxAngleY={2} perspective={1000} transitionSpeed={1000}>
                      <div className="bg-white p-8 md:p-12 rounded-[2rem] border border-border-gray shadow-lg hover:shadow-2xl transition-all duration-500 relative overflow-hidden group-hover:border-primary-green/30 text-left">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-bg-light rounded-bl-full -mr-4 -mt-4 transition-colors duration-500 group-hover:bg-primary-green/5"></div>
                        
                        <span className="text-sm font-bold uppercase tracking-widest text-primary-green mb-4 block relative z-10">{step.step}</span>
                        <div className="flex items-center gap-6 mb-6 relative z-10">
                          <div className="w-16 h-16 rounded-2xl bg-bg-light flex items-center justify-center group-hover:bg-primary-navy transition-colors duration-500 flex-shrink-0">
                            {React.cloneElement(step.icon, { className: "w-8 h-8 text-primary-navy group-hover:text-white transition-colors duration-500" })}
                          </div>
                          <h3 className="font-heading font-bold text-2xl md:text-3xl text-primary-navy leading-tight">{step.title}</h3>
                        </div>
                        
                        <div className="space-y-4 mb-8 relative z-10">
                          {step.body.split('\n\n').map((para, i) => (
                            <p key={i} className="text-lg text-text-soft leading-relaxed">{para}</p>
                          ))}
                        </div>

                        {step.listTitle && (
                          <div className="mb-4 text-sm font-bold uppercase tracking-widest text-primary-navy relative z-10">{step.listTitle}</div>
                        )}

                        {step.simpleList && (
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 relative z-10">
                            {step.simpleList.map((item, i) => (
                              <div key={i} className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-primary-green flex-shrink-0 mt-0.5" />
                                <span className="text-sm text-primary-navy font-medium">{item}</span>
                              </div>
                            ))}
                          </div>
                        )}

                        {step.complexList && (
                          <div className="space-y-4 mb-8 relative z-10">
                            {step.complexList.map((item, i) => (
                              <div key={i} className="bg-bg-light p-5 rounded-xl border border-border-gray">
                                <h4 className="font-bold text-primary-navy mb-2">{item.title}</h4>
                                <p className="text-sm text-text-soft leading-relaxed">{item.desc}</p>
                              </div>
                            ))}
                          </div>
                        )}

                        {step.button && (
                          <div className="mt-8 relative z-10">
                            <Button to={step.button.to} variant="primary" showArrow className="w-full sm:w-auto justify-center">
                              {step.button.text}
                            </Button>
                          </div>
                        )}

                        {step.closingLine && (
                          <p className="text-sm font-medium text-primary-navy italic relative z-10 mt-6 pt-6 border-t border-border-gray">
                            {step.closingLine}
                          </p>
                        )}

                        {step.highlight && (
                          <div className="mt-6 inline-block border-l-4 border-accent-gold pl-4 py-1 relative z-10">
                            <p className="text-sm font-heading font-bold text-primary-navy">
                              {step.highlight}
                            </p>
                          </div>
                        )}

                        {step.smallNote && (
                          <p className="text-xs text-text-soft mt-6 relative z-10 italic">
                            Note: {step.smallNote}
                          </p>
                        )}

                        {step.smallDisclaimer && (
                          <p className="text-xs text-text-soft mt-6 relative z-10 italic">
                            Disclaimer: {step.smallDisclaimer}
                          </p>
                        )}

                      </div>
                    </Tilt>
                  </FadeUp>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 10: Why Our Process Is Different */}
      <section className="py-32 bg-primary-navy relative overflow-hidden text-white">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary-green opacity-10 blur-[150px] rounded-full pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeUp delay={0.2} className="order-2 lg:order-1">
              <div className="bg-white/5 backdrop-blur-md p-10 md:p-12 rounded-[2.5rem] border border-white/10 shadow-xl">
                <h3 className="text-2xl font-heading font-bold text-white mb-6">Why Our Process Works</h3>
                <ul className="space-y-4">
                  {[
                    "Review-first approach", "Strategy before submission", "Personal and business profile analysis",
                    "Clear funding path direction", "Documentation review", "Lender-conscious planning",
                    "Responsible funding guidance", "No guaranteed approval claims"
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
              <span className="text-sm font-bold uppercase tracking-widest text-accent-gold mb-6 block">
                Why Our Process Works
              </span>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-8">
                We Focus on Readiness Before Applications.
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed mb-6">
                Funding should not start with guessing. It should start with understanding the profile.
              </p>
              <p className="text-xl text-gray-300 leading-relaxed mb-10">
                Unity Financial Solution was built to help clients see the full picture before applying. That means reviewing the profile, identifying the right path, preparing the file, and moving forward with a strategy.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Section 11: Who This Process Helps */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeUp>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-navy mb-8">
                This Process Is Built for People Who Want Direction Before They Apply.
              </h2>
              <p className="text-xl text-text-soft leading-relaxed">
                Our process is designed for individuals, entrepreneurs, and business owners who want to pursue funding with more clarity.
              </p>
            </FadeUp>
            
            <FadeUp delay={0.2}>
              <div className="bg-bg-light p-10 md:p-12 rounded-[2.5rem] border border-border-gray shadow-lg">
                <h3 className="text-2xl font-bold text-primary-navy mb-6">Best For</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "Individuals seeking personal credit card stacking", 
                    "Business owners seeking business credit cards", 
                    "Companies exploring SBA loan options", 
                    "Startups preparing for funding", 
                    "Businesses previously denied", 
                    "Entrepreneurs unsure which option fits", 
                    "Owners who want to understand lender readiness"
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

      {/* Section 12: CTA Section */}
      <section className="py-32 bg-primary-navy relative overflow-hidden text-center">
        <div className="absolute inset-0 opacity-10">
          <MeshGradient speed={4} intensity={1.5} grain={0.2} />
        </div>
        <div className="max-w-[800px] mx-auto px-6 relative z-10">
          <FadeUp>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-8 leading-tight">
              Ready to Start the Funding Review Process?
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-10">
              Start with a funding review so Unity Financial Solution can help identify which funding path may fit your current profile.
            </p>
            <div className="flex justify-center mb-6">
              <Button to="/apply" variant="gold" showArrow className="text-lg px-12 py-5 shadow-[0_20px_40px_rgba(200,157,60,0.3)] hover:scale-105 transition-transform">
                Start My Funding Review
              </Button>
            </div>
            <p className="text-sm text-gray-400">
              The review is the first step. It does not guarantee approval, funding amount, credit limit, interest rate, or loan terms.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Section 13: FAQ Section */}
      <section className="py-32 bg-bg-light">
        <div className="max-w-[1000px] mx-auto px-6 sm:px-8 lg:px-12">
          <FadeUp className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-navy mb-6">
              How It Works Questions
            </h2>
          </FadeUp>
          
          <div className="space-y-6">
            {[
              { q: "How does the process start?", a: "The process starts when you complete the funding review form with your personal, business, and funding information." },
              { q: "What happens after I submit the form?", a: "Our team reviews your information to understand your credit profile, business profile, income, revenue, documentation, and funding goals." },
              { q: "Will you tell me which funding option fits me?", a: "Yes. Based on the review, Unity Financial Solution helps identify which funding direction may make sense for your current profile." },
              { q: "Do I need documents right away?", a: "Not always. Some funding paths may require documents early, while others may only require documents after the first review." },
              { q: "How long does funding take?", a: "Timing depends on the funding type, lender, documentation, underwriting, and how ready your profile is." },
              { q: "Do you guarantee approval?", a: "No. Unity Financial Solution does not guarantee approvals, funding amounts, limits, rates, or terms." }
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
              Do Not Apply Blind. Start With the Review.
            </h2>
            <p className="text-xl text-text-soft leading-relaxed mb-10">
              The right funding strategy starts with understanding your profile. Let Unity Financial Solution help you review your options and build a clear direction.
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
          Unity Financial Solution does not guarantee approvals, funding amounts, credit limits, interest rates, repayment terms, or lender offers. All funding decisions are made by third-party lenders, banks, credit card issuers, or financial institutions based on their own underwriting guidelines. Past results do not guarantee future outcomes.
        </p>
      </div>
    </div>
  );
};

export default HowItWorks;
