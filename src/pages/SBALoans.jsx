import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Tilt from 'react-parallax-tilt';
import { Landmark, CheckCircle2 } from 'lucide-react';
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

const SBALoans = () => {
  const reviews = [
    "Time in business", "Monthly revenue", "Profitability", "Tax returns",
    "Bank statements", "Credit profile", "Debt obligations", "Use of funds",
    "Business plan", "Collateral, when applicable"
  ];

  const bestFor = [
    "Established businesses", "Businesses with revenue", "Companies seeking larger funding",
    "Businesses preparing for expansion", "Owners with documentation ready"
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
        <div className="absolute inset-0 z-0 opacity-40 mix-blend-multiply pointer-events-none">
          <MeshGradient speed={6} intensity={1.2} grain={0.3} />
        </div>
        
        <div className="max-w-5xl mx-auto relative z-10">
          <FadeUp>
            <span className="text-sm font-bold uppercase tracking-widest text-accent-gold mb-6 block">
              SBA Loan Support
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-8 leading-tight">
              SBA Loan Options for <br className="hidden md:block"/>
              <span className="bg-clip-text bg-gradient-to-r from-primary-green to-accent-gold">Qualified Businesses Ready to Grow.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto font-light mb-12">
              Unity Financial Solution helps business owners understand SBA loan readiness, documentation requirements, and possible lending pathways for working capital, expansion, equipment, real estate, and long-term business growth.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-5 mb-8">
              <Button to="/apply" variant="gold" showArrow className="text-lg px-10 py-5 shadow-[0_20px_40px_rgba(200,157,60,0.3)] hover:scale-105 transition-transform">
                Check SBA Readiness
              </Button>
              <Button to="/funding-solutions" variant="secondary" className="text-lg px-10 py-5">
                View Funding Options
              </Button>
            </div>

            <p className="text-sm text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Unity Financial Solution is not the SBA and does not guarantee SBA loan approval. SBA-backed loans are made through participating lenders and are subject to lender and SBA eligibility requirements. The SBA lists 7(a), 504, and Microloan programs as its main business loan programs, each with its own lending practices and eligibility requirements.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Section 2: What Are SBA Loans? */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-bg-light rounded-full blur-[100px] opacity-50 -translate-y-1/2 translate-x-1/3"></div>
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeUp>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-navy mb-8">What Are SBA Loans?</h2>
              <p className="text-xl text-text-soft leading-relaxed mb-6">
                SBA loans are business loan options backed by the U.S. Small Business Administration and issued through participating lenders. These programs are designed to help eligible small businesses access capital for approved business needs.
              </p>
              <p className="text-xl text-text-soft leading-relaxed mb-6">
                For many business owners, SBA lending may offer a more structured path for larger funding needs, but it also requires preparation, documentation, and underwriting.
              </p>
              <p className="text-xl text-text-soft leading-relaxed mb-10">
                At Unity Financial Solution, we help business owners understand whether they may be ready for an SBA loan before moving forward.
              </p>
              <div className="inline-block border-l-4 border-primary-green pl-6 py-2">
                <p className="text-xl font-heading font-bold text-primary-navy">
                  The goal is to prepare your business before the lender reviews the file.
                </p>
              </div>
            </FadeUp>
            
            <FadeUp delay={0.2}>
              <Tilt tiltMaxAngleX={2} tiltMaxAngleY={2} perspective={1000} className="h-full">
                <div className="bg-bg-light p-12 rounded-[2.5rem] border border-border-gray shadow-xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-48 h-48 bg-primary-green/5 rounded-bl-full -mr-8 -mt-8 group-hover:bg-primary-green/10 transition-colors duration-500"></div>
                  <h3 className="text-3xl font-heading font-bold text-primary-navy mb-6 relative z-10">Who SBA Loan Support May Be Good For</h3>
                  <p className="text-lg text-text-soft leading-relaxed mb-8 relative z-10">
                    SBA loan support may be a good fit for business owners who have an operating business, revenue history, documentation, and a clear use of funds.
                  </p>
                  <div className="mb-4 text-sm font-bold uppercase tracking-widest text-primary-green relative z-10">Best For</div>
                  <ul className="space-y-4 relative z-10">
                    {[
                      "Established businesses",
                      "Business owners with revenue history",
                      "Companies seeking working capital",
                      "Businesses preparing for expansion",
                      "Owners needing equipment financing",
                      "Businesses exploring commercial real estate options",
                      "Companies with organized bank statements and tax records",
                      "Owners looking for a structured lending path"
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

      {/* Section 4: Common SBA Funding Uses */}
      <section className="py-32 bg-primary-navy relative overflow-hidden text-white">
        <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-primary-green opacity-10 blur-[150px] rounded-full pointer-events-none -translate-x-1/3 -translate-y-1/3"></div>
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeUp delay={0.2} className="order-2 lg:order-1">
              <div className="bg-white/5 backdrop-blur-md rounded-[2.5rem] p-10 border border-white/10 relative overflow-hidden">
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent-gold/10 rounded-tl-full translate-x-1/3 translate-y-1/3"></div>
                <h3 className="text-2xl font-heading font-bold text-white mb-8 relative z-10">Common Uses</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-4 relative z-10">
                  {[
                    "Working capital", "Equipment", "Inventory", "Business expansion",
                    "Commercial real estate", "Business acquisition, when eligible",
                    "Debt refinance, when eligible", "Furniture, fixtures, and business improvements", "Long-term business growth"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-4 h-4 text-primary-green" />
                      </div>
                      <span className="text-base font-medium text-gray-200">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>

            <FadeUp className="order-1 lg:order-2">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-8">
                What SBA Loan Funding May Be Used For
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed mb-10">
                SBA loan options may be used for different business purposes depending on the program, lender, borrower eligibility, and use of funds.
              </p>
              <div className="bg-white/5 border-l-4 border-accent-gold p-6 rounded-r-xl backdrop-blur-md">
                <p className="text-sm text-gray-300 leading-relaxed">
                  <span className="font-bold text-white block mb-1">Disclaimer</span>
                  Permitted uses depend on the SBA program, lender guidelines, underwriting, eligibility, and supporting documentation.
                </p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Section 5: What We Review */}
      <section className="py-32 bg-bg-light border-y border-border-gray">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
          <FadeUp className="text-center mb-16 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-navy mb-6">Before You Apply, We Review the Business File</h2>
            <p className="text-xl text-text-soft leading-relaxed mb-6">
              SBA lending can require a more complete business profile than basic funding options. Lenders may review your business history, revenue, taxes, bank statements, debt, credit, profitability, industry, and use of funds.
            </p>
            <p className="text-xl text-text-soft leading-relaxed">
              Unity Financial Solution helps business owners review the key areas that may impact SBA readiness.
            </p>
          </FadeUp>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6 mb-16">
            {[
              "Business entity", "EIN", "Time in business", "Business ownership structure",
              "Monthly revenue", "Annual revenue", "Business bank statements", "Business tax returns",
              "Personal tax returns, when needed", "Profit and loss statement", "Balance sheet", "Existing business debt",
              "Personal credit profile", "Business credit profile", "Use of funds", "Industry type", "Collateral, when applicable", "Business plan, when needed", "Cash flow and repayment ability"
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
              A stronger, more organized file may help create a smoother funding review process.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Section 6: SBA Readiness Matters */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-green opacity-5 blur-[150px] rounded-full pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeUp>
              <span className="text-sm font-bold uppercase tracking-widest text-primary-green mb-6 block">
                Preparation First
              </span>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-navy mb-8">
                SBA Funding Is Not Just About Applying. It Is About Being Ready.
              </h2>
              <p className="text-xl text-text-soft leading-relaxed mb-6">
                Many business owners want SBA funding, but they are not always prepared for the documentation and underwriting process.
              </p>
              <p className="text-xl text-text-soft leading-relaxed mb-10">
                If your documents are incomplete, your revenue is unclear, your taxes are not organized, or your use of funds is not defined, the process may become harder than it needs to be.
              </p>
              <p className="text-xl text-text-soft leading-relaxed mb-10">
                Unity Financial Solution helps you understand what may need to be prepared before the application moves forward.
              </p>
              <div className="inline-block border-l-4 border-accent-gold pl-6 py-2">
                <p className="text-xl font-heading font-bold text-primary-navy">
                  The stronger the file, the stronger the conversation with lenders may become.
                </p>
              </div>
            </FadeUp>
            
            <FadeUp delay={0.2}>
              <div className="bg-bg-light p-10 md:p-12 rounded-[2.5rem] border border-border-gray shadow-lg">
                <h3 className="text-2xl font-bold text-primary-navy mb-6">Key Readiness Areas</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    "Clear business purpose", "Organized bank statements", "Clean revenue documentation",
                    "Accurate tax filings", "Current financial statements", "Strong personal credit profile",
                    "Manageable debt obligations", "Clear ownership information", "Defined use of funds", "Ability to support repayment"
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

      {/* Section 7: SBA Loan Pathways */}
      <section className="py-32 bg-bg-light relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <FadeUp className="text-center mb-16 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-navy mb-6">SBA Loan Pathways We Help You Understand</h2>
            <p className="text-xl text-text-soft leading-relaxed">
              Different SBA loan programs may serve different business needs. Unity Financial Solution helps business owners understand which direction may fit their goals and readiness level.
            </p>
          </FadeUp>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "SBA 7(a) Loan Pathway",
                desc: "The SBA describes 7(a) loans as its primary program for providing long-term financing for a variety of business purposes, and 7(a) loans are delivered by SBA 7(a) lenders."
              },
              {
                title: "SBA 504 Loan Pathway",
                desc: "SBA 504 loans are generally designed for long-term, fixed-rate financing through SBA Certified Development Companies and are often associated with business growth and fixed assets."
              },
              {
                title: "SBA Microloan Pathway",
                desc: "SBA microloans are smaller loans provided by intermediary lenders and may be used by eligible businesses for smaller funding needs. The SBA describes microloans as loans of $50,000 or less."
              }
            ].map((pathway, i) => (
              <FadeUp key={i} delay={i * 0.1} className="h-full">
                <div className="bg-white p-10 rounded-[2rem] border border-border-gray shadow-sm hover:shadow-xl hover:border-primary-navy/20 transition-all duration-300 h-full flex flex-col">
                  <div className="w-12 h-12 bg-primary-navy text-white rounded-xl flex items-center justify-center font-heading font-bold text-xl mb-6">
                    {i + 1}
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-primary-navy mb-4">{pathway.title}</h3>
                  <p className="text-text-soft leading-relaxed flex-grow">{pathway.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
          
          <FadeUp className="text-center">
            <p className="text-sm text-text-soft/70 max-w-3xl mx-auto">
              Program availability, eligibility, loan amount, terms, and requirements depend on SBA rules, lender guidelines, borrower qualifications, and underwriting.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Section 8: Our Approach */}
      <section className="py-32 bg-primary-navy relative overflow-hidden text-white">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary-green opacity-10 blur-[150px] rounded-full pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <FadeUp className="text-center mb-20 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">Our Approach to SBA Loan Support</h2>
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
              { title: "SBA Readiness Review", desc: "You submit your business and funding information so our team can understand your current profile." },
              { title: "Documentation Review", desc: "We review key documents such as bank statements, tax returns, business financials, ownership information, and use of funds." },
              { title: "Funding Path Review", desc: "We help identify whether an SBA loan path may make sense based on your business profile and goals." },
              { title: "Preparation Guidance", desc: "If the file needs improvement, we help identify what should be organized, strengthened, or prepared before moving forward." },
              { title: "Next Steps", desc: "When appropriate, we help guide the next steps toward lender conversations, document submission, or alternative funding options." }
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

      {/* Section 9: Documents You May Need */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-bg-light rounded-full blur-[100px] opacity-50 -translate-y-1/2 translate-x-1/3"></div>
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeUp>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-navy mb-8">Documents Commonly Needed for SBA Loan Review</h2>
              <p className="text-xl text-text-soft leading-relaxed mb-6">
                The documents required may vary based on the lender, SBA program, business type, loan request, and use of funds. However, many SBA loan reviews may require a more complete business file.
              </p>
              <div className="bg-bg-light border-l-4 border-primary-green p-6 rounded-r-xl shadow-sm mt-8">
                <p className="text-lg font-bold text-primary-navy leading-relaxed">
                  If you do not have everything ready yet, that is okay. The readiness review helps identify what may be missing.
                </p>
              </div>
            </FadeUp>
            
            <FadeUp delay={0.2}>
              <div className="bg-white p-10 md:p-12 rounded-[2.5rem] border border-border-gray shadow-xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-48 h-48 bg-primary-green/5 rounded-bl-full -mr-8 -mt-8 group-hover:bg-primary-green/10 transition-colors duration-500"></div>
                <h3 className="text-2xl font-bold text-primary-navy mb-6 relative z-10">Document List</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10">
                  {[
                    "Government-issued ID", "Business formation documents", "EIN confirmation",
                    "Ownership information", "Business bank statements", "Personal bank statements, when needed",
                    "Business tax returns", "Personal tax returns", "Profit and loss statement", "Balance sheet",
                    "Debt schedule", "Lease agreement, if applicable", "Business plan, when needed",
                    "Use of funds statement", "Purchase agreement, if applicable", "Equipment quote, if applicable", "Real estate documents, if applicable"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary-green flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-primary-navy font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SBALoans;
