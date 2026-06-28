import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Tilt from 'react-parallax-tilt';
import { Target, CheckCircle2, AlertCircle, TrendingUp, XCircle, LineChart, FileText, Search } from 'lucide-react';
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

const Results = () => {
  const caseStudies = [
    {
      title: "Startup Founder Seeking Initial Business Capital",
      clientType: "Startup Founder",
      goal: "The client needed access to capital to support business launch expenses, marketing, software, and early operating costs.",
      path: "Personal Credit Card Stacking",
      strategy: "Unity Financial Solution reviewed the client’s personal credit profile, utilization, recent inquiries, income, current limits, and approval readiness before identifying a possible personal credit card stacking direction.",
      result: "The client was able to pursue revolving credit options based on their personal credit profile and lender criteria.",
      lesson: "For newer businesses, personal credit strength may play an important role in early funding options.",
      disclaimer: "Results vary based on credit profile, income, utilization, inquiries, lender criteria, underwriting, and other factors."
    },
    {
      title: "Business Owner Looking for Working Capital",
      clientType: "Existing Business Owner",
      goal: "The client wanted access to working capital to support business operations, marketing, inventory, and cash flow.",
      path: "Business Credit Card Stacking",
      strategy: "Unity Financial Solution reviewed the business entity, EIN, business bank account, business website, revenue activity, industry type, and owner credit profile.",
      result: "The client was able to pursue business credit card options based on business and personal profile strength.",
      lesson: "A properly structured business profile may help support stronger business funding opportunities.",
      disclaimer: "Business credit card approvals, limits, rates, and terms are determined by the issuing banks and financial institutions."
    },
    {
      title: "Established Business Preparing for Larger Funding",
      clientType: "Established Business",
      goal: "The client wanted to explore larger funding options for business growth, expansion, and operational support.",
      path: "SBA Loan Readiness / Business Funding Review",
      strategy: "Unity Financial Solution reviewed business revenue, bank statements, tax documents, time in business, ownership structure, existing debt, personal credit, and use of funds.",
      result: "The client was able to better understand what documents and profile factors were needed before pursuing SBA-style funding options.",
      lesson: "Larger funding opportunities often require stronger documentation and a more complete business file.",
      disclaimer: "SBA loan approvals are made by participating lenders and are subject to lender and SBA eligibility requirements."
    },
    {
      title: "Previously Denied Applicant Needing a Better Plan",
      clientType: "Previously Denied Applicant",
      goal: "The client had applied for funding before and wanted to understand why they were not getting approved.",
      path: "Business Funding Readiness",
      strategy: "Unity Financial Solution reviewed the client’s credit utilization, recent inquiries, business structure, documentation, revenue visibility, and lender readiness.",
      result: "The client received a clearer understanding of what needed to be improved before applying again.",
      lesson: "A denial does not always mean funding is impossible. Sometimes it means the profile was not ready yet.",
      disclaimer: "A funding readiness review does not guarantee future approval."
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
              Results & Case Studies
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-8 leading-tight">
              Real Funding Experience. <br className="hidden md:block"/>
              <span className="bg-clip-text bg-gradient-to-r from-primary-green to-accent-gold">Real Strategy. Real Preparation.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto font-light mb-12">
              Unity Financial Solution has helped clients pursue funding through personal credit, business credit, credit card stacking, SBA loan pathways, and structured funding strategies.
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
              Past results do not guarantee future outcomes. Funding approvals, limits, amounts, rates, and terms are determined by third-party lenders, banks, credit card issuers, or financial institutions.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Section 2: Experience Overview */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-bg-light rounded-full blur-[100px] opacity-50 -translate-y-1/2 translate-x-1/3"></div>
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeUp>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-navy mb-8">
                Over 15 Years of Funding Experience. Over $100 Million Funded.
              </h2>
              <p className="text-xl text-text-soft leading-relaxed mb-6">
                Unity Financial Solution is built on real funding experience. Over the past 15+ years, our team has helped individuals, entrepreneurs, and business owners pursue capital through different funding pathways.
              </p>
              <p className="text-xl text-text-soft leading-relaxed mb-6">
                Our experience includes personal credit card stacking, business credit card stacking, SBA loan readiness, business funding preparation, and structured funding strategies.
              </p>
              <p className="text-xl text-text-soft leading-relaxed mb-10">
                The goal has always been the same: help clients understand their profile, prepare the right way, and pursue funding with a strategy instead of guessing.
              </p>
            </FadeUp>
            
            <FadeUp delay={0.2}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="bg-bg-light p-8 rounded-2xl border border-border-gray shadow-sm text-center flex flex-col justify-center items-center h-48 hover:border-primary-green/30 transition-colors">
                  <div className="text-4xl font-heading font-bold text-primary-navy mb-2">15+ Years</div>
                  <div className="text-sm font-medium text-text-soft">Funding Experience</div>
                </div>
                <div className="bg-bg-light p-8 rounded-2xl border border-border-gray shadow-sm text-center flex flex-col justify-center items-center h-48 hover:border-accent-gold/30 transition-colors">
                  <div className="text-4xl font-heading font-bold text-primary-navy mb-2">$100M+</div>
                  <div className="text-sm font-medium text-text-soft">Funded</div>
                </div>
                <div className="bg-bg-light p-8 rounded-2xl border border-border-gray shadow-sm text-center flex flex-col justify-center items-center h-48 hover:border-primary-navy/30 transition-colors">
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

      {/* Section 3: Our Results Philosophy */}
      <section className="py-32 bg-bg-light border-y border-border-gray">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <FadeUp className="max-w-4xl mx-auto">
            <span className="text-sm font-bold uppercase tracking-widest text-primary-green mb-6 block">Our Approach to Results</span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-navy mb-8">
              Results Start Before the Application Is Submitted.
            </h2>
            <p className="text-xl text-text-soft leading-relaxed mb-6">
              Most funding outcomes are shaped before the application ever reaches a lender.
            </p>
            <p className="text-xl text-text-soft leading-relaxed mb-10">
              Your credit profile, utilization, inquiries, income, business structure, revenue, documentation, industry, banking activity, and use of funds can all play a role in the final decision. That is why Unity Financial Solution focuses on review, readiness, and strategy first.
            </p>
            <div className="inline-block border-l-4 border-accent-gold pl-6 py-2 bg-white pr-8 rounded-r-xl shadow-sm">
              <p className="text-xl font-heading font-bold text-primary-navy">
                The stronger the profile and preparation, the stronger the funding conversation may become.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Sections 4-7: Case Studies */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <FadeUp key={index} delay={0.1}>
                <div className="bg-white rounded-[2.5rem] border border-border-gray shadow-lg overflow-hidden group hover:border-primary-green/30 transition-all duration-500">
                  <div className="bg-bg-light px-10 py-8 border-b border-border-gray relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary-green/5 rounded-bl-full -mr-8 -mt-8 transition-colors duration-500 group-hover:bg-primary-green/10"></div>
                    <span className="text-sm font-bold uppercase tracking-widest text-primary-green mb-3 block relative z-10">Case Study Example</span>
                    <h3 className="text-3xl font-heading font-bold text-primary-navy relative z-10">{study.title}</h3>
                  </div>
                  
                  <div className="p-10 lg:p-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
                      
                      {/* Left Column */}
                      <div className="space-y-8">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <Target className="w-5 h-5 text-accent-gold" />
                            <h4 className="text-sm font-bold uppercase tracking-widest text-text-soft">Client Type & Goal</h4>
                          </div>
                          <p className="text-lg text-primary-navy font-bold mb-2">{study.clientType}</p>
                          <p className="text-base text-text-soft leading-relaxed">{study.goal}</p>
                        </div>
                        
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <LineChart className="w-5 h-5 text-primary-green" />
                            <h4 className="text-sm font-bold uppercase tracking-widest text-text-soft">Funding Path & Strategy</h4>
                          </div>
                          <p className="text-lg text-primary-navy font-bold mb-2">{study.path}</p>
                          <p className="text-base text-text-soft leading-relaxed">{study.strategy}</p>
                        </div>
                      </div>

                      {/* Right Column */}
                      <div className="space-y-8">
                        <div className="bg-primary-navy/5 p-8 rounded-2xl border border-primary-navy/10">
                          <div className="flex items-center gap-2 mb-4">
                            <CheckCircle2 className="w-6 h-6 text-primary-navy" />
                            <h4 className="text-lg font-heading font-bold text-primary-navy">Result</h4>
                          </div>
                          <p className="text-lg text-primary-navy leading-relaxed font-medium">{study.result}</p>
                        </div>

                        <div>
                          <h4 className="text-sm font-bold uppercase tracking-widest text-text-soft mb-2">Key Lesson</h4>
                          <p className="text-base text-primary-navy font-medium italic border-l-2 border-accent-gold pl-4 py-1">{study.lesson}</p>
                        </div>
                      </div>

                    </div>
                  </div>

                  <div className="bg-gray-50 px-10 py-4 border-t border-border-gray">
                    <p className="text-xs text-text-soft italic text-center">Disclaimer: {study.disclaimer}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Section 8: What Can Impact Results */}
      <section className="py-32 bg-primary-navy relative overflow-hidden text-white">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary-green opacity-10 blur-[150px] rounded-full pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeUp delay={0.2} className="order-2 lg:order-1">
              <div className="bg-white/5 backdrop-blur-md p-10 md:p-12 rounded-[2.5rem] border border-white/10 shadow-xl">
                <h3 className="text-2xl font-heading font-bold text-white mb-6">Factors That May Impact Results</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "Personal credit score", "Credit utilization", "Recent inquiries", "Payment history",
                    "Income", "Existing credit limits", "Business entity", "Time in business",
                    "Monthly revenue", "Business bank activity", "Industry type", "Documentation quality",
                    "Existing debt", "Use of funds", "Lender requirements", "Underwriting guidelines"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 border border-white/20 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-accent-gold"></div>
                      </div>
                      <span className="text-sm text-gray-200 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>

            <FadeUp className="order-1 lg:order-2">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-8">
                Why Results Can Vary From Client to Client
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed mb-10">
                Every funding profile is different. Two clients may apply for the same type of funding and receive different results because lenders review multiple factors.
              </p>
              <div className="bg-white/5 border-l-4 border-primary-green p-6 rounded-r-xl backdrop-blur-md">
                <p className="text-lg font-bold text-white leading-relaxed">
                  That is why every client should start with a review before applying.
                </p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Section 9: What Makes a Stronger Funding Profile */}
      <section className="py-32 bg-bg-light border-y border-border-gray">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeUp>
              <span className="text-sm font-bold uppercase tracking-widest text-primary-green mb-6 block">
                Funding Readiness
              </span>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-navy mb-8">
                Stronger Profiles Usually Have Stronger Preparation.
              </h2>
              <p className="text-xl text-text-soft leading-relaxed mb-10">
                While no funding result can be guaranteed, a stronger funding profile may help create better opportunities.
              </p>
              <div className="inline-block border-l-4 border-accent-gold pl-6 py-2">
                <p className="text-xl font-heading font-bold text-primary-navy">
                  Unity Financial Solution helps clients understand where they stand and what may need attention before moving forward.
                </p>
              </div>
            </FadeUp>

            <FadeUp delay={0.2}>
              <div className="bg-white p-10 md:p-12 rounded-[2.5rem] border border-border-gray shadow-lg">
                <h3 className="text-2xl font-bold text-primary-navy mb-6">Stronger Profile Factors</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "Lower credit utilization", "Positive payment history", "Limited recent inquiries",
                    "Strong existing credit limits", "Verifiable income", "Active business entity",
                    "Consistent business information", "Business bank account", "Documented revenue",
                    "Organized bank statements", "Clear use of funds", "Professional business presence",
                    "Prepared documentation", "Responsible debt management"
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
          </div>
        </div>
      </section>

      {/* Section 10: Results Without False Promises */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
          <FadeUp className="text-center mb-16 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-navy mb-6">We Keep Results Realistic.</h2>
            <p className="text-xl text-text-soft leading-relaxed">
              Unity Financial Solution does not believe in fake promises, guaranteed approvals, or unrealistic funding claims. Funding decisions are made by lenders, banks, credit card issuers, and financial institutions. Our role is to help clients review their profile, prepare their file, understand possible options, and pursue funding with a strategy.
            </p>
          </FadeUp>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
            <FadeUp delay={0.1}>
              <div className="bg-red-50 p-10 md:p-12 rounded-[2.5rem] border border-red-100 shadow-sm h-full">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <XCircle className="w-6 h-6 text-red-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary-navy">What We Do Not Promise</h3>
                </div>
                <ul className="space-y-4">
                  {[
                    "Guaranteed approval", "Guaranteed credit limits", "Guaranteed funding amounts",
                    "Guaranteed interest rates", "Guaranteed SBA eligibility", "Guaranteed lender offers", "Guaranteed timelines"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                      <span className="text-base text-primary-navy font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeUp>

            <FadeUp delay={0.2}>
              <div className="bg-green-50 p-10 md:p-12 rounded-[2.5rem] border border-green-100 shadow-sm h-full">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-primary-green" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary-navy">What We Do Provide</h3>
                </div>
                <ul className="space-y-4">
                  {[
                    "Profile review", "Funding path direction", "Readiness assessment",
                    "Documentation guidance", "Strategy-first planning", "Clear next steps", "Realistic expectations"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary-green flex-shrink-0 mt-0.5" />
                      <span className="text-base text-primary-navy font-medium">{item}</span>
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
              Want to See What Funding Path May Fit Your Profile?
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-10">
              Start with a funding review. Unity Financial Solution will review your information and help identify possible funding options based on your current profile, business, credit, revenue, and documentation.
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

      {/* Section 12: FAQ Section */}
      <section className="py-32 bg-bg-light">
        <div className="max-w-[1000px] mx-auto px-6 sm:px-8 lg:px-12">
          <FadeUp className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-navy mb-6">
              Results Questions
            </h2>
          </FadeUp>
          
          <div className="space-y-6">
            {[
              { q: "Do you guarantee results?", a: "No. Unity Financial Solution does not guarantee funding approvals, credit limits, loan amounts, interest rates, repayment terms, or lender offers." },
              { q: "How much funding can I get?", a: "Funding amounts depend on your credit profile, income, business revenue, documentation, lender criteria, underwriting, and the funding product." },
              { q: "Does past funding experience mean I will get approved?", a: "No. Past results do not guarantee future outcomes. Every client profile is reviewed individually." },
              { q: "Can I still apply if I was denied before?", a: "Yes. A previous denial does not automatically mean you have no options. The first step is reviewing why the denial may have happened and what can be improved." },
              { q: "What makes someone more likely to qualify?", a: "Strong credit, low utilization, documented income, consistent business information, organized banking, revenue, and proper documentation may help support stronger funding opportunities." }
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
              Your Result Starts With the Review.
            </h2>
            <p className="text-xl text-text-soft leading-relaxed mb-10">
              Before you apply, understand your profile, your funding path, and your next step.
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

export default Results;
