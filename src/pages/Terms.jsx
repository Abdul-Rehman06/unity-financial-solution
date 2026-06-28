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

const Terms = () => {
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
              Terms & Conditions
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
              <h2>Section 1: Introduction</h2>
              <p>Welcome to Unity Financial Solution.</p>
              <p>These Terms & Conditions govern your access to and use of the Unity Financial Solution website, forms, services, communications, and related content.</p>
              <p>By using this website, submitting a funding review form, scheduling a consultation, communicating with our team, or using any Unity Financial Solution service, you agree to these Terms & Conditions.</p>
              <p>Please read these terms carefully before using this website or submitting your information.</p>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h2>Section 2: Company Services</h2>
              <p>Unity Financial Solution provides funding review, funding strategy, business funding readiness, credit card stacking support, SBA loan readiness support, and related business funding guidance.</p>
              <p>Our services may include:</p>
              <ul>
                <li>Personal credit card stacking review</li>
                <li>Business credit card stacking review</li>
                <li>SBA loan readiness support</li>
                <li>Business funding readiness review</li>
                <li>Business profile review</li>
                <li>Documentation readiness guidance</li>
                <li>Funding strategy direction</li>
                <li>Application preparation support</li>
                <li>Lender-readiness guidance</li>
              </ul>
              <p>Unity Financial Solution does not operate as a bank, credit card issuer, direct lender, or the U.S. Small Business Administration.</p>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h2>Section 3: No Guarantee of Funding</h2>
              <p>Unity Financial Solution does not guarantee:</p>
              <ul>
                <li>Funding approval</li>
                <li>Credit card approval</li>
                <li>SBA loan approval</li>
                <li>Business loan approval</li>
                <li>Credit limits</li>
                <li>Loan amounts</li>
                <li>Interest rates</li>
                <li>Repayment terms</li>
                <li>Lender offers</li>
                <li>Approval timelines</li>
                <li>Specific financial outcomes</li>
              </ul>
              <p>All funding decisions are made by third-party lenders, banks, credit card issuers, SBA participating lenders, or financial institutions based on their own underwriting guidelines.</p>
              <p>Past results do not guarantee future outcomes.</p>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h2>Section 4: Truthful Information Required</h2>
              <p>You agree to provide accurate, truthful, current, and complete information when submitting forms, applications, documents, or communications to Unity Financial Solution.</p>
              <p>You understand that inaccurate, incomplete, false, or misleading information may affect your funding review, lender submission, eligibility, or available options.</p>
              <p>Unity Financial Solution reserves the right to refuse service, pause service, or terminate service if information provided appears inaccurate, incomplete, fraudulent, or misleading.</p>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h2>Section 5: Client Responsibilities</h2>
              <p>By using Unity Financial Solution services, you agree that you are responsible for:</p>
              <ul>
                <li>Providing accurate personal and business information</li>
                <li>Reviewing all information before submission</li>
                <li>Supplying requested documents when applicable</li>
                <li>Understanding the risks of credit and funding products</li>
                <li>Reading lender terms before accepting any offer</li>
                <li>Making payments on any approved credit or loan products</li>
                <li>Managing credit accounts responsibly</li>
                <li>Complying with all applicable laws and lender requirements</li>
              </ul>
              <p>Unity Financial Solution is not responsible for missed payments, account mismanagement, late fees, interest charges, declined applications, or decisions made by third-party lenders.</p>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h2>Section 6: Third-Party Lenders and Financial Institutions</h2>
              <p>Unity Financial Solution may help you understand funding options or prepare for possible lender review.</p>
              <p>Any funding offer, credit card approval, loan approval, rate, limit, term, or condition is determined solely by the applicable third-party lender, bank, credit card issuer, SBA participating lender, or financial institution.</p>
              <p>Unity Financial Solution is not responsible for third-party lender decisions, delays, denials, requests, underwriting changes, pricing, fees, terms, account closures, or final funding outcomes.</p>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h2>Section 7: SBA Loan Notice</h2>
              <p>Unity Financial Solution is not the U.S. Small Business Administration and is not affiliated with, endorsed by, or acting on behalf of the SBA.</p>
              <p>SBA-backed loans are made through participating lenders and are subject to SBA rules, lender requirements, borrower eligibility, documentation, credit approval, and underwriting.</p>
              <p>Unity Financial Solution may provide SBA readiness support, but does not guarantee SBA eligibility, approval, funding amount, rate, or term.</p>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h2>Section 8: No Legal, Tax, Credit Repair, or Financial Advice</h2>
              <p>Unity Financial Solution does not provide legal, tax, accounting, investment, or credit repair services.</p>
              <p>Any information provided by Unity Financial Solution is for general business funding education, preparation, and strategy purposes only.</p>
              <p>You should consult with a licensed attorney, tax professional, accountant, financial advisor, or other qualified professional before making legal, tax, accounting, investment, or financial decisions.</p>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h2>Section 9: Marketing and Website Claims</h2>
              <p>Unity Financial Solution makes every effort to keep website content accurate and professional.</p>
              <p>Any funding results, testimonials, examples, case studies, or experience statements are provided for informational and marketing purposes only and do not guarantee future results.</p>
              <p>Advertising and marketing claims should be truthful, not misleading, and supported by evidence. Objective business claims should be backed by reasonable support.</p>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h2>Section 10: Fees and Payments</h2>
              <p>Certain Unity Financial Solution services may require payment.</p>
              <p>All fees, payment terms, service terms, and billing details should be disclosed before purchase or service enrollment.</p>
              <p>By purchasing a service, you agree to the pricing, payment schedule, and service terms presented at the time of purchase.</p>
              <p>Unity Financial Solution reserves the right to change pricing, service offerings, and payment terms at any time. Changes will not affect services already purchased unless otherwise stated in writing.</p>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h2>Section 11: Refund Policy</h2>
              <p>Refund eligibility depends on the specific service purchased and the work already performed.</p>
              <p>Unless otherwise stated in writing, fees may be non-refundable once review work, consultation work, document preparation, funding strategy work, or application support has begun.</p>
              <p>Any approved refund will be handled according to the refund terms provided at the time of purchase.</p>
              <p>For full details, please review our Refund Policy page.</p>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h2>Section 12: Communication Consent</h2>
              <p>By submitting your contact information to Unity Financial Solution, you agree that Unity Financial Solution may contact you by phone, email, text message, or other communication methods regarding your inquiry, funding review, services, documents, appointments, and related offers.</p>
              <p>Message and data rates may apply.</p>
              <p>Consent to receive marketing communications is not a condition of purchase.</p>
              <p>You may opt out of text messages at any time by replying STOP. The FCC states that consumers may opt out of robocalls or robotexts at any time in any reasonable manner, even if consent was previously given.</p>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h2>Section 13: Electronic Signatures and Records</h2>
              <p>By using this website, submitting forms, checking boxes, clicking buttons, or electronically signing documents, you agree that electronic signatures and electronic records may be used in connection with Unity Financial Solution services.</p>
              <p>You agree that your electronic actions may have the same legal effect as a handwritten signature, where permitted by applicable law.</p>
              <p>For full details, please review our E-Sign Consent page.</p>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h2>Section 14: Website Use</h2>
              <p>You agree not to use this website for any unlawful, abusive, fraudulent, harmful, or unauthorized purpose.</p>
              <p>You agree not to:</p>
              <ul>
                <li>Submit false or misleading information</li>
                <li>Attempt to access restricted systems</li>
                <li>Copy or misuse website content</li>
                <li>Interfere with website security</li>
                <li>Use the website to commit fraud</li>
                <li>Impersonate another person or business</li>
                <li>Upload malicious software or harmful code</li>
              </ul>
              <p>Unity Financial Solution may restrict or terminate access if misuse is suspected.</p>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h2>Section 15: Intellectual Property</h2>
              <p>All website content, branding, logos, graphics, copy, designs, processes, forms, materials, and related assets are owned by or licensed to Unity Financial Solution unless otherwise stated.</p>
              <p>You may not copy, reproduce, distribute, modify, sell, or use Unity Financial Solution content without written permission.</p>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h2>Section 16: Limitation of Liability</h2>
              <p>To the fullest extent permitted by law, Unity Financial Solution is not liable for any direct, indirect, incidental, consequential, special, punitive, or financial damages arising from:</p>
              <ul>
                <li>Use of the website</li>
                <li>Use of services</li>
                <li>Funding denials</li>
                <li>Lender decisions</li>
                <li>Credit card issuer decisions</li>
                <li>SBA lender decisions</li>
                <li>Delays in funding</li>
                <li>Account closures</li>
                <li>Interest charges</li>
                <li>Fees</li>
                <li>Credit score impact</li>
                <li>Business losses</li>
                <li>Lost profits</li>
                <li>Third-party actions</li>
              </ul>
              <p>Your use of this website and services is at your own risk.</p>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h2>Section 17: Indemnification</h2>
              <p>You agree to defend, indemnify, and hold harmless Unity Financial Solution, its owners, employees, contractors, partners, affiliates, and representatives from any claims, damages, losses, liabilities, costs, or expenses arising from:</p>
              <ul>
                <li>Your use of the website</li>
                <li>Your use of services</li>
                <li>Your violation of these Terms</li>
                <li>Your submission of inaccurate information</li>
                <li>Your violation of lender requirements</li>
                <li>Your violation of applicable laws</li>
                <li>Your misuse of funding, credit, or loan products</li>
              </ul>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h2>Section 18: No Warranty</h2>
              <p>Unity Financial Solution provides this website and related services on an “as available” and “as is” basis.</p>
              <p>Unity Financial Solution does not warrant that the website, services, content, or communications will be uninterrupted, error-free, secure, or free from technical issues.</p>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h2>Section 19: Changes to These Terms</h2>
              <p>Unity Financial Solution may update these Terms & Conditions at any time.</p>
              <p>Updates will be posted on this page with a revised “Last Updated” date.</p>
              <p>Your continued use of the website or services after changes are posted means you accept the updated Terms & Conditions.</p>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h2>Section 20: Governing Law</h2>
              <p>These Terms & Conditions shall be governed by the laws of the state where Unity Financial Solution operates, unless otherwise required by applicable law.</p>
              <p className="italic">These Terms shall be governed by the laws of the State of [Add State].</p>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h2>Section 21: Contact Information</h2>
              <p>For questions about these Terms & Conditions, contact Unity Financial Solution:</p>
              <div className="bg-bg-light p-6 rounded-xl border border-border-gray not-prose mt-4">
                <p className="font-bold text-primary-navy mb-2">Unity Financial Solution</p>
                <p className="text-text-soft"><span className="font-semibold text-primary-navy">Email:</span> [Add Email Address]</p>
                <p className="text-text-soft"><span className="font-semibold text-primary-navy">Phone:</span> [Add Phone Number]</p>
                <p className="text-text-soft"><span className="font-semibold text-primary-navy">Address:</span> [Add Business Address]</p>
              </div>
            </FadeUp>

            <FadeUp delay={0.1}>
              <div className="mt-12 p-6 bg-red-50 border-l-4 border-red-500 rounded-r-xl not-prose">
                <p className="font-bold text-red-700 mb-1">Final Legal Notice</p>
                <p className="text-sm text-red-600">This Terms & Conditions page is a website content template and should be reviewed by a qualified attorney before publishing.</p>
              </div>
            </FadeUp>

          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
};

export default Terms;
