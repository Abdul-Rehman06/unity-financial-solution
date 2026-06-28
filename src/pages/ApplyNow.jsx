import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckCircle2, ShieldCheck, ClipboardList, Target, Send, ArrowRight } from 'lucide-react';
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
  const [formData, setFormData] = useState({
    // Section 1
    fullName: '', email: '', phone: '', state: '', dob: '', contactTime: '',
    // Section 2
    creditScore: '', utilization: '', recentInquiries: '', recentDenials: '', income: '',
    // Section 3
    hasBusiness: '', businessName: '', entityType: '', ein: '', website: '', timeInBusiness: '', monthlyRevenue: '', businessBank: '',
    // Section 4
    fundingType: '', fundingAmount: '', useOfFunds: '', timeframe: '',
    // Section 5
    additionalDetails: '',
    // Consent
    consent: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert('Thank you for submitting your funding review. Our team will contact you shortly.');
  };

  const inputClass = "w-full px-5 py-4 bg-bg-light border border-border-gray rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-navy/20 focus:border-primary-navy focus:bg-white transition-all duration-300 text-text-charcoal";
  const labelClass = "block text-sm font-semibold tracking-wide text-primary-navy mb-2 ml-1";
  const sectionNumberClass = "w-10 h-10 rounded-full bg-primary-navy text-white flex items-center justify-center font-bold text-lg flex-shrink-0 shadow-md";

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
              Start Your Funding Review
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-8 leading-tight">
              Find the Funding Path <br className="hidden md:block"/>
              <span className="bg-clip-text bg-gradient-to-r from-primary-green to-accent-gold">That May Fit Your Profile.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto font-light mb-12">
              Complete the funding review form so Unity Financial Solution can review your personal, business, credit, revenue, and funding information to help identify possible next steps.
            </p>
            
            <div className="flex justify-center mb-8">
              <button 
                onClick={() => document.getElementById('application-form').scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-accent-gold to-yellow-600 text-white font-bold rounded-full transition-all duration-300 hover:shadow-[0_0_40px_rgba(200,157,60,0.4)] hover:scale-105 text-lg"
              >
                Start My Funding Review <ArrowRight className="ml-2 w-6 h-6" />
              </button>
            </div>

            <p className="text-sm text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Submitting this form does not guarantee approval, funding amount, credit limit, interest rate, repayment terms, or lender offer.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Section 2 & 3: Before You Apply & What We Review */}
      <section className="py-32 bg-white border-y border-border-gray relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-bg-light rounded-full blur-[100px] opacity-50 -translate-y-1/2 translate-x-1/3"></div>
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <FadeUp>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-navy mb-8">
                This Is Not a Blind Application. This Is a Funding Review.
              </h2>
              <p className="text-xl text-text-soft leading-relaxed mb-6">
                The purpose of this review is to help us understand where you currently stand and which funding path may make the most sense.
              </p>
              <p className="text-xl text-text-soft leading-relaxed mb-10">
                Based on your profile, Unity Financial Solution may review options such as personal credit card stacking, business credit card stacking, SBA loan support, or business funding readiness.
              </p>
              <div className="inline-block border-l-4 border-primary-green pl-6 py-2 bg-bg-light pr-8 rounded-r-xl shadow-sm">
                <p className="text-xl font-heading font-bold text-primary-navy">
                  The review helps us understand your profile before any funding direction is recommended.
                </p>
              </div>
            </FadeUp>
            
            <FadeUp delay={0.2}>
              <div className="bg-bg-light p-10 md:p-12 rounded-[2.5rem] border border-border-gray shadow-lg">
                <h3 className="text-2xl font-bold text-primary-navy mb-6">What Our Team May Review</h3>
                <p className="text-text-soft leading-relaxed mb-8">
                  Every client profile is different. Some funding options may depend more on personal credit and income. Others may depend on business revenue, documentation, banking, and time in business.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "Personal credit profile", "Estimated credit score", "Credit utilization", "Recent inquiries",
                    "Income", "Existing credit limits", "Business entity", "EIN", "Business bank account",
                    "Monthly revenue", "Time in business", "Industry type", "Funding amount requested",
                    "Use of funds", "Available documentation", "Overall funding readiness"
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

      {/* Application Form Section */}
      <section id="application-form" className="py-32 bg-bg-light relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary-green/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
        <div className="max-w-[1000px] mx-auto px-6 sm:px-8 relative z-10">
          
          <FadeUp className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-navy mb-6">
              Complete the Funding Review Form Below
            </h2>
            <p className="text-xl text-text-soft leading-relaxed">
              Please provide accurate information so our team can properly review your profile. The more complete your information is, the better we can understand which funding direction may fit your situation.
            </p>
          </FadeUp>

          <FadeUp delay={0.2}>
            <div className="bg-white rounded-[2.5rem] shadow-xl border border-border-gray p-8 md:p-16">
              <form onSubmit={handleSubmit} className="space-y-16">
                
                {/* Form Section 1: Personal Information */}
                <div>
                  <h3 className="text-2xl font-heading font-bold text-primary-navy border-b border-border-gray pb-4 mb-8 flex items-center gap-4">
                    <span className={sectionNumberClass}>1</span> Personal Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label className={labelClass}>Full Name</label>
                      <input type="text" name="fullName" placeholder="Enter your full name" required onChange={handleChange} className={inputClass} />
                    </div>
                    <div>
                      <label className={labelClass}>Email Address</label>
                      <input type="email" name="email" placeholder="Enter your email address" required onChange={handleChange} className={inputClass} />
                    </div>
                    <div>
                      <label className={labelClass}>Phone Number</label>
                      <input type="tel" name="phone" placeholder="Enter your phone number" required onChange={handleChange} className={inputClass} />
                    </div>
                    <div>
                      <label className={labelClass}>State</label>
                      <select name="state" onChange={handleChange} className={inputClass}>
                        <option value="">Select your state</option>
                        <option value="AL">Alabama</option><option value="AK">Alaska</option><option value="AZ">Arizona</option>
                        <option value="AR">Arkansas</option><option value="CA">California</option><option value="CO">Colorado</option>
                        <option value="CT">Connecticut</option><option value="DE">Delaware</option><option value="FL">Florida</option>
                        <option value="GA">Georgia</option><option value="HI">Hawaii</option><option value="ID">Idaho</option>
                        <option value="IL">Illinois</option><option value="IN">Indiana</option><option value="IA">Iowa</option>
                        <option value="KS">Kansas</option><option value="KY">Kentucky</option><option value="LA">Louisiana</option>
                        <option value="ME">Maine</option><option value="MD">Maryland</option><option value="MA">Massachusetts</option>
                        <option value="MI">Michigan</option><option value="MN">Minnesota</option><option value="MS">Mississippi</option>
                        <option value="MO">Missouri</option><option value="MT">Montana</option><option value="NE">Nebraska</option>
                        <option value="NV">Nevada</option><option value="NH">New Hampshire</option><option value="NJ">New Jersey</option>
                        <option value="NM">New Mexico</option><option value="NY">New York</option><option value="NC">North Carolina</option>
                        <option value="ND">North Dakota</option><option value="OH">Ohio</option><option value="OK">Oklahoma</option>
                        <option value="OR">Oregon</option><option value="PA">Pennsylvania</option><option value="RI">Rhode Island</option>
                        <option value="SC">South Carolina</option><option value="SD">South Dakota</option><option value="TN">Tennessee</option>
                        <option value="TX">Texas</option><option value="UT">Utah</option><option value="VT">Vermont</option>
                        <option value="VA">Virginia</option><option value="WA">Washington</option><option value="WV">West Virginia</option>
                        <option value="WI">Wisconsin</option><option value="WY">Wyoming</option>
                      </select>
                    </div>
                    <div>
                      <label className={labelClass}>Date of Birth</label>
                      <input type="text" name="dob" placeholder="MM/DD/YYYY" onChange={handleChange} className={inputClass} />
                    </div>
                    <div>
                      <label className={labelClass}>Best Time to Contact You</label>
                      <select name="contactTime" onChange={handleChange} className={inputClass}>
                        <option value="">Select time</option>
                        <option value="Morning">Morning</option>
                        <option value="Afternoon">Afternoon</option>
                        <option value="Evening">Evening</option>
                        <option value="Anytime">Anytime</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Form Section 2: Credit Profile */}
                <div>
                  <h3 className="text-2xl font-heading font-bold text-primary-navy border-b border-border-gray pb-4 mb-8 flex items-center gap-4">
                    <span className={sectionNumberClass}>2</span> Credit Profile
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label className={labelClass}>Estimated Credit Score</label>
                      <select name="creditScore" onChange={handleChange} className={inputClass}>
                        <option value="">Select score range</option>
                        <option value="Below 600">Below 600</option>
                        <option value="600-649">600–649</option>
                        <option value="650-699">650–699</option>
                        <option value="700-749">700–749</option>
                        <option value="750+">750+</option>
                        <option value="Not sure">Not sure</option>
                      </select>
                    </div>
                    <div>
                      <label className={labelClass}>Current Credit Utilization</label>
                      <select name="utilization" onChange={handleChange} className={inputClass}>
                        <option value="">Select utilization</option>
                        <option value="Under 10%">Under 10%</option>
                        <option value="10%-29%">10%–29%</option>
                        <option value="30%-49%">30%–49%</option>
                        <option value="50%-74%">50%–74%</option>
                        <option value="75%+">75%+</option>
                        <option value="Not sure">Not sure</option>
                      </select>
                    </div>
                    <div>
                      <label className={labelClass}>How Many Recent Inquiries Do You Have?</label>
                      <select name="recentInquiries" onChange={handleChange} className={inputClass}>
                        <option value="">Select inquiries</option>
                        <option value="0-2">0–2</option>
                        <option value="3-5">3–5</option>
                        <option value="6-10">6–10</option>
                        <option value="10+">10+</option>
                        <option value="Not sure">Not sure</option>
                      </select>
                    </div>
                    <div>
                      <label className={labelClass}>Do You Have Any Recent Denials?</label>
                      <select name="recentDenials" onChange={handleChange} className={inputClass}>
                        <option value="">Select option</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                        <option value="Not sure">Not sure</option>
                      </select>
                    </div>
                    <div className="md:col-span-2">
                      <label className={labelClass}>Annual Income Range</label>
                      <select name="income" onChange={handleChange} className={inputClass}>
                        <option value="">Select income range</option>
                        <option value="Under $50,000">Under $50,000</option>
                        <option value="$50,000–$74,999">$50,000–$74,999</option>
                        <option value="$75,000–$99,999">$75,000–$99,999</option>
                        <option value="$100,000–$149,999">$100,000–$149,999</option>
                        <option value="$150,000+">$150,000+</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Form Section 3: Business Information */}
                <div>
                  <h3 className="text-2xl font-heading font-bold text-primary-navy border-b border-border-gray pb-4 mb-8 flex items-center gap-4">
                    <span className={sectionNumberClass}>3</span> Business Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label className={labelClass}>Do You Have a Business?</label>
                      <select name="hasBusiness" onChange={handleChange} className={inputClass}>
                        <option value="">Select option</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                      </select>
                    </div>
                    <div>
                      <label className={labelClass}>Business Name</label>
                      <input type="text" name="businessName" placeholder="Enter business name" onChange={handleChange} className={inputClass} />
                    </div>
                    <div>
                      <label className={labelClass}>Business Entity Type</label>
                      <select name="entityType" onChange={handleChange} className={inputClass}>
                        <option value="">Select entity</option>
                        <option value="LLC">LLC</option>
                        <option value="Corporation">Corporation</option>
                        <option value="Sole Proprietor">Sole Proprietor</option>
                        <option value="Partnership">Partnership</option>
                        <option value="Not formed yet">Not formed yet</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className={labelClass}>Do You Have an EIN?</label>
                      <select name="ein" onChange={handleChange} className={inputClass}>
                        <option value="">Select option</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                        <option value="Not sure">Not sure</option>
                      </select>
                    </div>
                    <div className="md:col-span-2">
                      <label className={labelClass}>Business Website</label>
                      <input type="url" name="website" placeholder="Enter website URL" onChange={handleChange} className={inputClass} />
                    </div>
                    <div>
                      <label className={labelClass}>Time in Business</label>
                      <select name="timeInBusiness" onChange={handleChange} className={inputClass}>
                        <option value="">Select time</option>
                        <option value="Not started yet">Not started yet</option>
                        <option value="0–6 months">0–6 months</option>
                        <option value="6–12 months">6–12 months</option>
                        <option value="1–2 years">1–2 years</option>
                        <option value="2–5 years">2–5 years</option>
                        <option value="5+ years">5+ years</option>
                      </select>
                    </div>
                    <div>
                      <label className={labelClass}>Monthly Business Revenue</label>
                      <select name="monthlyRevenue" onChange={handleChange} className={inputClass}>
                        <option value="">Select revenue</option>
                        <option value="No revenue yet">No revenue yet</option>
                        <option value="Under $5,000">Under $5,000</option>
                        <option value="$5,000–$9,999">$5,000–$9,999</option>
                        <option value="$10,000–$24,999">$10,000–$24,999</option>
                        <option value="$25,000–$49,999">$25,000–$49,999</option>
                        <option value="$50,000+">$50,000+</option>
                      </select>
                    </div>
                    <div className="md:col-span-2">
                      <label className={labelClass}>Do You Have a Business Bank Account?</label>
                      <select name="businessBank" onChange={handleChange} className={inputClass}>
                        <option value="">Select option</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Form Section 4: Funding Request */}
                <div>
                  <h3 className="text-2xl font-heading font-bold text-primary-navy border-b border-border-gray pb-4 mb-8 flex items-center gap-4">
                    <span className={sectionNumberClass}>4</span> Funding Request
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="md:col-span-2">
                      <label className={labelClass}>What Type of Funding Are You Interested In?</label>
                      <select name="fundingType" onChange={handleChange} className={inputClass}>
                        <option value="">Select funding type</option>
                        <option value="Personal Credit Card Stacking">Personal Credit Card Stacking</option>
                        <option value="Business Credit Card Stacking">Business Credit Card Stacking</option>
                        <option value="SBA Loan Support">SBA Loan Support</option>
                        <option value="Business Funding Readiness">Business Funding Readiness</option>
                        <option value="Not sure yet">Not sure yet</option>
                      </select>
                    </div>
                    <div>
                      <label className={labelClass}>How Much Funding Are You Looking For?</label>
                      <select name="fundingAmount" onChange={handleChange} className={inputClass}>
                        <option value="">Select amount</option>
                        <option value="Under $25,000">Under $25,000</option>
                        <option value="$25,000–$50,000">$25,000–$50,000</option>
                        <option value="$50,000–$100,000">$50,000–$100,000</option>
                        <option value="$100,000–$250,000">$100,000–$250,000</option>
                        <option value="$250,000+">$250,000+</option>
                      </select>
                    </div>
                    <div>
                      <label className={labelClass}>How Soon Are You Looking to Move Forward?</label>
                      <select name="timeframe" onChange={handleChange} className={inputClass}>
                        <option value="">Select timeframe</option>
                        <option value="Immediately">Immediately</option>
                        <option value="Within 30 days">Within 30 days</option>
                        <option value="1–3 months">1–3 months</option>
                        <option value="3+ months">3+ months</option>
                        <option value="Just exploring options">Just exploring options</option>
                      </select>
                    </div>
                    <div className="md:col-span-2">
                      <label className={labelClass}>What Do You Need Funding For?</label>
                      <select name="useOfFunds" onChange={handleChange} className={inputClass}>
                        <option value="">Select purpose</option>
                        <option value="Startup capital">Startup capital</option>
                        <option value="Working capital">Working capital</option>
                        <option value="Marketing">Marketing</option>
                        <option value="Inventory">Inventory</option>
                        <option value="Equipment">Equipment</option>
                        <option value="Expansion">Expansion</option>
                        <option value="Real estate">Real estate</option>
                        <option value="Debt refinance">Debt refinance</option>
                        <option value="Payroll">Payroll</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Form Section 5: Additional Details */}
                <div>
                  <h3 className="text-2xl font-heading font-bold text-primary-navy border-b border-border-gray pb-4 mb-8 flex items-center gap-4">
                    <span className={sectionNumberClass}>5</span> Tell Us More
                  </h3>
                  <div>
                    <label className={labelClass}>Anything else we should know about your funding goals?</label>
                    <textarea 
                      name="additionalDetails" 
                      rows="4" 
                      placeholder="Share any details that may help us understand your situation." 
                      onChange={handleChange} 
                      className={inputClass + " resize-none"}
                    ></textarea>
                  </div>
                </div>

                {/* Consent & Submit */}
                <div className="pt-8 border-t border-border-gray">
                  <label className="flex items-start gap-4 p-6 bg-bg-light rounded-xl border border-border-gray cursor-pointer group mb-4 transition-colors hover:border-primary-navy/30">
                    <input type="checkbox" name="consent" required onChange={handleChange} className="w-5 h-5 mt-1 text-primary-navy border-border-gray rounded focus:ring-primary-navy/20 focus:ring-2 transition-all cursor-pointer" />
                    <span className="text-sm text-text-soft leading-relaxed font-medium">
                      By submitting this form, I agree to be contacted by Unity Financial Solution by phone, email, and text message regarding my funding inquiry. I understand that submitting this form does not guarantee approval, funding amount, credit limit, interest rate, repayment terms, or lender offer.
                    </span>
                  </label>
                  <p className="text-xs text-text-soft italic mb-10 px-2">
                    Message and data rates may apply. Consent is not a condition of purchase. You may opt out of text messages at any time by replying STOP.
                  </p>

                  <button type="submit" className="w-full inline-flex items-center justify-center px-8 py-6 bg-primary-navy text-white font-bold rounded-xl transition-all duration-300 hover:bg-primary-navy/90 hover:shadow-xl text-xl">
                    Submit My Funding Review <Send className="ml-3 w-6 h-6" />
                  </button>
                </div>
              </form>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Section 5: What Happens After You Submit? */}
      <section className="py-32 bg-white border-y border-border-gray">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
          <FadeUp className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-navy">What Happens Next?</h2>
          </FadeUp>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
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
              { step: "Step 1", title: "We Receive Your Information", desc: "Your funding review request is submitted to Unity Financial Solution.", icon: <ClipboardList className="w-8 h-8" /> },
              { step: "Step 2", title: "We Review Your Profile", desc: "Our team reviews your personal, credit, business, revenue, and funding information.", icon: <ShieldCheck className="w-8 h-8" /> },
              { step: "Step 3", title: "We Identify Possible Next Steps", desc: "Based on your profile, we may recommend personal credit card stacking, business credit card stacking, SBA loan support, or business funding readiness.", icon: <Target className="w-8 h-8" /> },
              { step: "Step 4", title: "We Contact You", desc: "A team member may reach out to discuss your profile, documents, and possible funding direction.", icon: <Send className="w-8 h-8" /> }
            ].map((item, index) => (
              <FadeUp key={index} delay={index * 0.1} className="relative z-10 flex flex-col items-start lg:items-center lg:text-center group bg-white p-8 rounded-2xl border border-border-gray shadow-sm hover:shadow-md transition-all">
                <div className="w-20 h-20 rounded-full bg-bg-light flex items-center justify-center text-primary-navy mb-6 shadow-sm group-hover:bg-primary-navy group-hover:text-white transition-all duration-500">
                  {item.icon}
                </div>
                <span className="text-sm font-bold uppercase tracking-widest text-primary-green mb-3">{item.step}</span>
                <h3 className="text-xl font-bold mb-4 text-primary-navy">{item.title}</h3>
                <p className="text-text-soft text-base leading-relaxed">{item.desc}</p>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Important Reminder */}
      <section className="py-32 bg-bg-light relative overflow-hidden">
        <div className="max-w-[1000px] mx-auto px-6 sm:px-8 relative z-10 text-center">
          <FadeUp>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-navy mb-8">
              Funding Is Based on the Full Profile
            </h2>
            <p className="text-xl text-text-soft leading-relaxed mb-6">
              Funding decisions are not based on one factor alone. Lenders may review credit, income, revenue, business history, documentation, industry, banking activity, use of funds, and underwriting guidelines.
            </p>
            <p className="text-xl font-medium text-primary-navy leading-relaxed border-l-4 border-accent-gold pl-6 py-2 inline-block text-left bg-white pr-8 rounded-r-xl shadow-sm">
              Unity Financial Solution helps you review the profile first so the funding direction is based on strategy, not guesswork.
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
              Your Funding Strategy Starts With the Review.
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-10">
              Complete the form and take the first step toward understanding which funding path may fit your current profile.
            </p>
            <div className="flex justify-center">
              <button 
                onClick={() => document.getElementById('application-form').scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center justify-center px-12 py-5 bg-gradient-to-r from-accent-gold to-yellow-600 text-white font-bold rounded-full transition-all duration-300 hover:shadow-[0_0_40px_rgba(200,157,60,0.4)] hover:scale-105 text-lg"
              >
                Submit My Funding Review <ArrowRight className="ml-2 w-6 h-6" />
              </button>
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

export default ApplyNow;
