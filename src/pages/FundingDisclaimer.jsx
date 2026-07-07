import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CTABanner from '../components/CTABanner';

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

const FundingDisclaimer = () => {
  return (
    <div className="flex flex-col w-full bg-bg-light min-h-screen">
      
      {/* Header Section */}
      <section className="bg-primary-navy pt-40 pb-20 px-6 sm:px-8 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-green rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-gold rounded-full blur-[100px] -translate-x-1/2 translate-y-1/2"></div>
        </div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <FadeUp>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
              Funding Disclaimer
            </h1>
            <p className="text-lg text-gray-400 font-medium tracking-wide">
              Last Updated: [Add Date]
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 px-6 sm:px-8">
        <div className="max-w-4xl mx-auto bg-white p-10 md:p-16 rounded-[2rem] shadow-lg border border-border-gray relative overflow-hidden">
          
          <div className="prose prose-lg max-w-none text-text-soft prose-headings:font-heading prose-headings:font-bold prose-headings:text-primary-navy prose-a:text-primary-green hover:prose-a:text-primary-navy prose-li:text-text-soft">
            
            <FadeUp delay={0.1}>
              <h2>Section 1: General Funding Disclaimer</h2>
              <p>Unity Financial Solution provides funding review, funding strategy, business funding readiness, personal credit card stacking support, business credit card stacking support, SBA loan readiness support, and related business funding guidance.</p>
              <p className="font-bold text-primary-navy">Unity Financial Solution does not guarantee approvals, funding amounts, credit limits, interest rates, repayment terms, loan offers, credit card offers, SBA eligibility, or any specific financial result.</p>
              <p>All funding decisions are made by third-party lenders, banks, credit card issuers, SBA participating lenders, or financial institutions based on their own underwriting guidelines.</p>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h2>Section 2: No Guaranteed Approval</h2>
              <p>Submitting a form, completing a funding review, speaking with our team, providing documents, or using Unity Financial Solution services does not guarantee that you will be approved for funding.</p>
              <p>Approval may depend on several factors, including but not limited to:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8">
                <ul>
                  <li>Credit profile</li>
                  <li>Credit score</li>
                  <li>Credit utilization</li>
                  <li>Recent inquiries</li>
                  <li>Income</li>
                  <li>Business revenue</li>
                  <li>Time in business</li>
                  <li>Industry type</li>
                </ul>
                <ul>
                  <li>Existing debt</li>
                  <li>Bank statements</li>
                  <li>Tax returns</li>
                  <li>Business documentation</li>
                  <li>Lender requirements</li>
                  <li>Underwriting guidelines</li>
                  <li>Verification results</li>
                </ul>
              </div>
              <p className="italic">Every applicant and business profile is different.</p>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h2>Section 3: Past Results Do Not Guarantee Future Outcomes</h2>
              <p>Any examples, case studies, testimonials, funding results, approval amounts, or experience statements shared by Unity Financial Solution are for informational and marketing purposes only.</p>
              <p className="font-bold text-primary-navy">Past results do not guarantee future results.</p>
              <p>A previous client’s approval, credit limit, funding amount, loan offer, or funding outcome does not mean that you will receive the same or similar result.</p>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h2>Section 4: Credit Card Stacking Disclaimer</h2>
              <p>Unity Financial Solution may provide guidance related to personal credit card stacking and business credit card stacking.</p>
              <p>Credit card stacking is a funding strategy where qualified applicants may apply for multiple credit cards in a structured sequence.</p>
              <p>Unity Financial Solution does not guarantee:</p>
              <ul>
                <li>Credit card approval</li>
                <li>Specific credit limits</li>
                <li>Introductory offers</li>
                <li>Interest rates</li>
                <li>Balance transfer offers</li>
                <li>Business credit card approval</li>
                <li>Personal credit card approval</li>
                <li>Approval timing</li>
                <li>Credit score impact</li>
              </ul>
              <p>All credit card decisions are made by the issuing banks or credit card companies.</p>
              <p>Some credit card applications may result in hard inquiries, which may impact your credit profile.</p>
              <p>You are responsible for reviewing all credit card terms, fees, rates, repayment obligations, and account requirements before accepting any offer.</p>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h2>Section 5: SBA Loan Disclaimer</h2>
              <p>Unity Financial Solution is not the U.S. Small Business Administration and is not affiliated with, endorsed by, or acting on behalf of the SBA.</p>
              <p>Unity Financial Solution may provide SBA loan readiness support, document review guidance, and funding path education.</p>
              <p>Unity Financial Solution does not guarantee:</p>
              <ul>
                <li>SBA loan eligibility</li>
                <li>SBA loan approval</li>
                <li>SBA loan amount</li>
                <li>SBA interest rate</li>
                <li>SBA repayment terms</li>
                <li>SBA lender offer</li>
                <li>SBA processing timeline</li>
              </ul>
              <p>SBA-backed loans are made through participating lenders and are subject to SBA rules, lender requirements, borrower eligibility, documentation, credit approval, and underwriting.</p>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h2>Section 6: Business Funding Disclaimer</h2>
              <p>Business funding options may depend on the strength of both the business profile and the owner profile.</p>
              <p>Factors may include:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8">
                <ul>
                  <li>Business entity status</li>
                  <li>EIN</li>
                  <li>Business bank account</li>
                  <li>Revenue history</li>
                  <li>Monthly deposits</li>
                  <li>Time in business</li>
                  <li>Industry risk</li>
                </ul>
                <ul>
                  <li>Business documentation</li>
                  <li>Business credit profile</li>
                  <li>Owner credit profile</li>
                  <li>Existing debt obligations</li>
                  <li>Use of funds</li>
                  <li>Lender underwriting requirements</li>
                </ul>
              </div>
              <p className="font-bold text-primary-navy">Unity Financial Solution does not guarantee that any business will qualify for funding.</p>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h2>Section 7: No Financial, Legal, Tax, or Credit Repair Advice</h2>
              <p>Unity Financial Solution does not provide legal, tax, accounting, investment, or credit repair services.</p>
              <p>Any information provided by Unity Financial Solution is for general business funding education, preparation, and strategy purposes only.</p>
              <p>You should consult with a licensed attorney, accountant, tax professional, financial advisor, or other qualified professional before making legal, tax, financial, accounting, or investment decisions.</p>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h2>Section 8: Client Responsibility</h2>
              <p>You are responsible for providing truthful, accurate, complete, and current information during the funding review process.</p>
              <p>You are also responsible for:</p>
              <ul>
                <li>Reviewing all lender offers</li>
                <li>Understanding repayment terms</li>
                <li>Understanding interest rates and fees</li>
                <li>Making payments on time</li>
                <li>Managing credit responsibly</li>
                <li>Using funds responsibly</li>
                <li>Reading all agreements before signing</li>
                <li>Confirming that any funding product fits your business or personal needs</li>
              </ul>
              <p>Unity Financial Solution is not responsible for missed payments, late fees, interest charges, account closures, credit score changes, business losses, or financial decisions made after accepting funding.</p>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h2>Section 9: Third-Party Lenders</h2>
              <p>Unity Financial Solution may work with or refer clients to third-party lenders, banks, credit card issuers, funding partners, SBA participating lenders, or financial institutions.</p>
              <p>These third parties operate independently and have their own requirements, pricing, underwriting, terms, fees, privacy policies, and approval processes.</p>
              <p>Unity Financial Solution is not responsible for third-party decisions, delays, denials, approvals, terms, rates, fees, account actions, or final funding outcomes.</p>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h2>Section 10: Funding Review Is Not an Approval</h2>
              <p>A Unity Financial Solution funding review is not a loan application approval, credit card approval, SBA approval, or lender commitment.</p>
              <p>The funding review is used to help understand your profile and identify possible funding paths.</p>
              <p>A funding review may result in:</p>
              <ul>
                <li>A possible funding path</li>
                <li>A request for additional documents</li>
                <li>A readiness recommendation</li>
                <li>A different funding direction</li>
                <li>A recommendation to improve your profile before applying</li>
                <li>No available funding option at that time</li>
              </ul>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h2>Section 11: No Timeline Guarantee</h2>
              <p>Unity Financial Solution does not guarantee any specific timeline for approval, lender review, underwriting, document review, credit card decisions, SBA decisions, or funding.</p>
              <p>Timelines may vary based on:</p>
              <ul>
                <li>Funding product</li>
                <li>Lender process</li>
                <li>Applicant readiness</li>
                <li>Document availability</li>
                <li>Verification requirements</li>
                <li>Underwriting workload</li>
                <li>Additional information requests</li>
                <li>Third-party processing delays</li>
              </ul>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h2>Section 12: Final Disclaimer</h2>
              <p>By using this website, submitting a funding review form, speaking with our team, or using Unity Financial Solution services, you understand and agree that funding is not guaranteed.</p>
              <p className="font-bold text-primary-navy">All approvals, denials, limits, amounts, rates, terms, and offers are determined by third-party lenders, banks, credit card issuers, SBA participating lenders, or financial institutions.</p>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h2>Contact Information</h2>
              <p>For questions about this Funding Disclaimer, contact Unity Financial Solution:</p>
              <div className="bg-bg-light p-6 rounded-xl border border-border-gray not-prose mt-4">
                <p className="font-bold text-primary-navy mb-2">Unity Financial Solution</p>
                <p className="text-text-soft"><span className="font-semibold text-primary-navy">Email:</span> info@unityfinancialsolution.com</p>
                <p className="text-text-soft"><span className="font-semibold text-primary-navy">Phone:</span> (858) 239-0594</p>
                <p className="text-text-soft"><span className="font-semibold text-primary-navy">Address:</span> [Add Business Address]</p>
              </div>
            </FadeUp>

            <FadeUp delay={0.1}>
              <div className="mt-12 p-6 bg-red-50 border-l-4 border-red-500 rounded-r-xl not-prose">
                <p className="font-bold text-red-700 mb-1">Legal Notice</p>
                <p className="text-sm text-red-600">This Funding Disclaimer is a website content template and should be reviewed by a qualified attorney before publishing.</p>
              </div>
            </FadeUp>

          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
};

export default FundingDisclaimer;
