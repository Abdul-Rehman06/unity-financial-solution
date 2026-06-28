import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
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

export const RefundPolicy = () => {
  return (
    <div className="flex flex-col w-full bg-bg-light min-h-screen">
      
      {/* Header Section */}
      <section className="bg-primary-navy pt-40 pb-20 px-6 sm:px-8 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-green rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-gold rounded-full blur-[100px] -translate-x-1/2 translate-y-1/2"></div>
        </div>
        
        <div className="absolute inset-0 z-0 opacity-40 mix-blend-multiply pointer-events-none">
          <MeshGradient speed={6} intensity={1.2} grain={0.3} />
        </div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <FadeUp>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
              Refund Policy
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
              <h2>Section 1: Overview</h2>
              <p>This Refund Policy explains how refunds, cancellations, and service fees are handled by Unity Financial Solution.</p>
              <p>By purchasing a service, submitting payment, enrolling in a funding review, or using Unity Financial Solution services, you agree to this Refund Policy.</p>
              <p>Unity Financial Solution provides funding review, funding strategy, business funding readiness, credit card stacking support, SBA loan readiness support, and related business funding guidance.</p>
              <p>Because these services may involve time, review work, consulting, document preparation, strategy development, and administrative processing, refund eligibility may depend on the service purchased and the work already performed.</p>
              <p className="italic text-sm">Refund and cancellation policies should be clearly disclosed to customers before purchase; some business models and states may have specific disclosure rules, so this page should be reviewed by an attorney before publishing.</p>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h2>Section 2: No Guarantee of Funding</h2>
              <p>Payment for Unity Financial Solution services does not guarantee:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8">
                <ul>
                  <li>Funding approval</li>
                  <li>Credit card approval</li>
                  <li>SBA loan approval</li>
                  <li>Business loan approval</li>
                  <li>Credit limits</li>
                  <li>Loan amounts</li>
                </ul>
                <ul>
                  <li>Interest rates</li>
                  <li>Repayment terms</li>
                  <li>Lender offers</li>
                  <li>Specific timelines</li>
                  <li>Specific financial outcomes</li>
                </ul>
              </div>
              <p>All funding decisions are made by third-party lenders, banks, credit card issuers, SBA participating lenders, or financial institutions based on their own underwriting guidelines.</p>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h2>Section 3: General Refund Policy</h2>
              <p>Unless otherwise stated in writing, fees paid to Unity Financial Solution may become non-refundable once work has started.</p>
              <p>Work may include, but is not limited to:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8">
                <ul>
                  <li>Funding review</li>
                  <li>Profile review</li>
                  <li>Credit or business readiness review</li>
                  <li>Consultation preparation</li>
                  <li>Strategy development</li>
                  <li>Document review</li>
                </ul>
                <ul>
                  <li>Document request processing</li>
                  <li>Internal file setup</li>
                  <li>Application preparation support</li>
                  <li>Administrative work</li>
                  <li>Communication with funding partners or lenders</li>
                  <li>Service delivery by team members</li>
                </ul>
              </div>
              <p>If no work has started, a refund request may be reviewed on a case-by-case basis.</p>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h2>Section 4: Non-Refundable Fees</h2>
              <p>The following fees may be non-refundable once paid, unless otherwise stated in writing:</p>
              <ul>
                <li>Funding review fees</li>
                <li>Consultation fees</li>
                <li>Strategy fees</li>
                <li>Document review fees</li>
                <li>Application preparation fees</li>
                <li>Business readiness review fees</li>
                <li>Processing fees</li>
                <li>Administrative fees</li>
                <li>Setup fees</li>
                <li>Rush service fees</li>
                <li>Completed service fees</li>
                <li>Fees for work already performed</li>
              </ul>
              <p className="font-bold text-primary-navy">Unity Financial Solution may deny refund requests for services that have already been started, completed, or substantially performed.</p>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h2>Section 5: Refund Requests</h2>
              <p>To request a refund, you must contact Unity Financial Solution directly.</p>
              <p>Refund requests should include:</p>
              <ul>
                <li>Full name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Date of purchase</li>
                <li>Service purchased</li>
                <li>Reason for refund request</li>
                <li>Any supporting details</li>
              </ul>
              <p>Refund requests should be sent to:</p>
              <ul>
                <li><strong>Email:</strong> [Add Refund Email Address]</li>
                <li><strong>Phone:</strong> [Add Phone Number]</li>
              </ul>
              <p>Unity Financial Solution will review refund requests and respond based on the service purchased, work completed, and applicable policy terms.</p>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h2>Section 6: Cancellation Policy</h2>
              <p>You may request to cancel a service before work begins.</p>
              <p>If work has already started, cancellation does not automatically qualify you for a refund.</p>
              <p>If the service includes scheduled calls, consultations, document review, application preparation, or funding strategy work, cancellation may be subject to the terms provided at the time of purchase.</p>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h2>Section 7: Missed Appointments</h2>
              <p>If your service includes a scheduled call or consultation, you are responsible for attending at the scheduled time.</p>
              <p>Missed appointments may not qualify for a refund.</p>
              <p>Unity Financial Solution may allow rescheduling at its discretion.</p>
              <div className="bg-bg-light p-4 rounded-lg italic text-sm mt-4 border border-border-gray">
                <strong>Suggested appointment policy:</strong> Clients must provide at least 24 hours’ notice to reschedule a consultation. Missed calls, no-shows, or late cancellations may result in the session being marked as completed.
              </div>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h2>Section 8: Client Delay or Failure to Provide Documents</h2>
              <p>Some services require clients to provide information, documents, or responses in order for Unity Financial Solution to complete the review or strategy process.</p>
              <p>If you fail to provide requested documents, fail to respond, provide incomplete information, or delay the process, you may not be entitled to a refund.</p>
              <p className="font-bold text-primary-navy">Client delay does not automatically cancel the service or create refund eligibility.</p>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h2>Section 9: Inaccurate or Misleading Information</h2>
              <p>Refunds may be denied if the client provides inaccurate, incomplete, false, outdated, or misleading information.</p>
              <p>Unity Financial Solution relies on client-provided information to review funding options, readiness, documentation, and strategy.</p>
              <p>If information provided by the client affects the review, causes delays, changes eligibility, or results in a different funding direction, Unity Financial Solution is not responsible for issuing a refund.</p>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h2>Section 10: Third-Party Lender Decisions</h2>
              <p>Refunds will not be issued because of a third-party lender, bank, credit card issuer, SBA participating lender, or financial institution decision.</p>
              <p>This includes:</p>
              <ul>
                <li>Denial of funding</li>
                <li>Lower-than-expected credit limits</li>
                <li>Lower-than-expected loan amount</li>
                <li>Higher-than-expected interest rate</li>
                <li>Different repayment terms</li>
                <li>Additional document requests</li>
                <li>Delayed underwriting</li>
                <li>Account closure</li>
                <li>Lender policy change</li>
                <li>Expired offer</li>
                <li>No available offer</li>
              </ul>
              <p className="font-bold text-primary-navy">Unity Financial Solution does not control third-party funding decisions.</p>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h2>Section 11: Chargebacks and Payment Disputes</h2>
              <p>If you dispute a payment with your bank, credit card company, or payment provider, Unity Financial Solution reserves the right to pause or terminate services while the dispute is being reviewed.</p>
              <p>If a chargeback is filed after services have been started or completed, Unity Financial Solution may provide documentation showing the service purchased, work performed, communications, forms submitted, and policy terms agreed to by the client.</p>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h2>Section 12: Approved Refunds</h2>
              <p>If a refund is approved, it will be processed back to the original payment method when possible.</p>
              <p>Refund processing times may vary depending on the payment processor, bank, or card issuer.</p>
              <p>Unity Financial Solution is not responsible for delays caused by third-party payment processors or financial institutions.</p>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h2>Section 13: Partial Refunds</h2>
              <p>Unity Financial Solution may approve partial refunds at its discretion.</p>
              <p>Partial refunds may be reduced based on:</p>
              <ul>
                <li>Work already completed</li>
                <li>Time spent by the team</li>
                <li>Administrative setup</li>
                <li>Document review performed</li>
                <li>Strategy work completed</li>
                <li>Consultation time used</li>
                <li>Third-party processing fees</li>
                <li>Payment processor fees</li>
              </ul>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h2>Section 14: Digital Products, Templates, or Downloadable Materials</h2>
              <p>If Unity Financial Solution sells digital products, templates, guides, forms, educational materials, or downloadable content, those purchases may be non-refundable once access is granted or the material is delivered.</p>
              <p>This includes:</p>
              <ul>
                <li>Downloadable files</li>
                <li>Templates</li>
                <li>Training materials</li>
                <li>Funding guides</li>
                <li>Educational resources</li>
                <li>Recorded content</li>
                <li>Digital access products</li>
              </ul>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h2>Section 15: Subscription or Recurring Payments</h2>
              <p>If Unity Financial Solution offers subscription services, recurring billing, memberships, or ongoing support plans, cancellation terms should be disclosed at the time of purchase.</p>
              <p>Cancellation stops future billing but does not automatically create a refund for previous payments.</p>
              <p className="italic text-sm">If subscription services are offered, make cancellation simple and clear. The FTC has taken action around recurring-payment cancellation practices and announced a “click-to-cancel” rule requiring sellers to make cancellation as easy as sign-up for covered negative-option programs.</p>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h2>Section 16: No Refund for Change of Mind After Work Begins</h2>
              <p>Unity Financial Solution may deny refund requests based only on a client’s change of mind after work has started.</p>
              <p>Once review, strategy, preparation, consulting, document review, or administrative processing has begun, the service has started and may be considered non-refundable.</p>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h2>Section 17: Service Credits</h2>
              <p>In some cases, Unity Financial Solution may offer a service credit instead of a refund.</p>
              <p>Service credits may be used toward future eligible services, subject to approval and availability.</p>
              <p>Service credits have no cash value unless otherwise stated in writing.</p>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h2>Section 18: Changes to This Refund Policy</h2>
              <p>Unity Financial Solution may update this Refund Policy at any time.</p>
              <p>Updates will be posted on this page with a revised “Last Updated” date.</p>
              <p>Your continued use of the website or services after updates are posted means you accept the updated Refund Policy.</p>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h2>Section 19: Contact Information</h2>
              <p>For refund or cancellation questions, contact Unity Financial Solution:</p>
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
                <p className="text-sm text-red-600">This Refund Policy is a website content template and should be reviewed by a qualified attorney before publishing.</p>
              </div>
            </FadeUp>

          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
};

export const ESignConsent = () => {
  return (
    <div className="flex flex-col w-full bg-bg-light min-h-screen">
      
      {/* Header Section */}
      <section className="bg-primary-navy pt-40 pb-20 px-6 sm:px-8 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-green rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-gold rounded-full blur-[100px] -translate-x-1/2 translate-y-1/2"></div>
        </div>
        
        <div className="absolute inset-0 z-0 opacity-40 mix-blend-multiply pointer-events-none">
          <MeshGradient speed={6} intensity={1.2} grain={0.3} />
        </div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <FadeUp>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
              E-Sign Consent
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
              <h2>Section 1: Consent to Electronic Records and Signatures</h2>
              <p>By using the Unity Financial Solution website, submitting forms, checking consent boxes, clicking buttons, electronically signing documents, or communicating with us electronically, you agree to use electronic records and electronic signatures in connection with Unity Financial Solution services.</p>
              <p>This E-Sign Consent applies to electronic communications, agreements, forms, disclosures, notices, funding review documents, service agreements, and other records related to your use of Unity Financial Solution.</p>
              <p className="italic text-sm">The federal E-Sign Act allows electronic records to satisfy legal writing requirements when the consumer affirmatively consents and has not withdrawn consent.</p>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h2>Section 2: Scope of Consent</h2>
              <p>Your consent applies to electronic records and communications related to:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8">
                <ul>
                  <li>Funding review forms</li>
                  <li>Personal credit card stacking inquiries</li>
                  <li>Business credit card stacking inquiries</li>
                  <li>SBA loan readiness support</li>
                  <li>Business funding readiness reviews</li>
                  <li>Service agreements</li>
                  <li>Payment authorizations</li>
                  <li>Refund policy acknowledgments</li>
                </ul>
                <ul>
                  <li>Terms & Conditions acknowledgments</li>
                  <li>Privacy Policy acknowledgments</li>
                  <li>SMS consent acknowledgments</li>
                  <li>Document requests</li>
                  <li>Appointment confirmations</li>
                  <li>Notices and disclosures</li>
                  <li>Email and SMS communications</li>
                  <li>Other service-related records</li>
                </ul>
              </div>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h2>Section 3: Electronic Signature Agreement</h2>
              <p>You agree that your electronic signature, checkbox selection, typed name, button click, form submission, or other electronic action may be used to show your agreement, authorization, consent, or acknowledgment.</p>
              <p>You understand that electronic signatures may have the same legal effect as handwritten signatures where permitted by applicable law.</p>
              <p className="italic text-sm">Electronic signature laws generally require consent to conduct business electronically and a clear connection between the electronic signature and the person signing.</p>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h2>Section 4: Consent to Receive Electronic Communications</h2>
              <p>You agree that Unity Financial Solution may provide communications electronically through:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8">
                <ul>
                  <li>Email</li>
                  <li>Text message</li>
                  <li>Website forms</li>
                  <li>Client portals</li>
                  <li>Electronic document platforms</li>
                </ul>
                <ul>
                  <li>CRM notifications</li>
                  <li>Online agreements</li>
                  <li>Digital invoices</li>
                  <li>Electronic receipts</li>
                  <li>Other digital communication methods</li>
                </ul>
              </div>
              <p>Electronic communications may include service messages, funding review updates, document requests, appointment reminders, payment notices, legal disclosures, and other important information.</p>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h2>Section 5: Hardware and Software Requirements</h2>
              <p>To access, view, sign, download, save, and print electronic records, you should have access to:</p>
              <ul>
                <li>A computer, tablet, or smartphone</li>
                <li>Internet access</li>
                <li>A working email account</li>
                <li>A working phone number, when SMS is used</li>
                <li>A modern web browser</li>
                <li>PDF reader software or browser PDF access</li>
                <li>Ability to download or print documents</li>
                <li>Sufficient storage to save electronic records</li>
              </ul>
              <p>By consenting, you confirm that you have the ability to access electronic records in the formats Unity Financial Solution may provide.</p>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h2>Section 6: Right to Request Paper Copies</h2>
              <p>You may request a paper copy of certain electronic records by contacting Unity Financial Solution.</p>
              <p>Paper copies may be provided at our discretion and may be subject to reasonable processing, printing, or mailing fees where permitted by law.</p>
              <p>To request a paper copy, contact:</p>
              <ul>
                <li><strong>Email:</strong> [Add Email Address]</li>
                <li><strong>Phone:</strong> [Add Phone Number]</li>
              </ul>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h2>Section 7: Right to Withdraw Consent</h2>
              <p>You may withdraw your consent to receive electronic records and communications at any time by contacting Unity Financial Solution.</p>
              <p>To withdraw consent, contact:</p>
              <ul>
                <li><strong>Email:</strong> [Add Email Address]</li>
                <li><strong>Phone:</strong> [Add Phone Number]</li>
              </ul>
              <p>Withdrawing consent may affect our ability to provide services, process your funding review, send documents, complete agreements, or communicate with you efficiently.</p>
              <p className="font-bold text-primary-navy">Withdrawal of consent does not affect the legal validity of electronic records or electronic signatures provided before the withdrawal.</p>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h2>Section 8: Updating Your Contact Information</h2>
              <p>You agree to keep your email address, phone number, mailing address, and other contact information current.</p>
              <p>If your contact information changes, you are responsible for notifying Unity Financial Solution.</p>
              <p>Unity Financial Solution is not responsible for missed communications caused by inaccurate, outdated, blocked, or inactive contact information provided by you.</p>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h2>Section 9: Copies of Records</h2>
              <p>You should download, save, or print copies of any important electronic records, disclosures, agreements, or confirmations for your own records.</p>
              <p>Unity Financial Solution may retain electronic records as part of its normal business recordkeeping practices, but you should not rely on Unity Financial Solution as your only storage source for important documents.</p>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h2>Section 10: Security and Access</h2>
              <p>You are responsible for maintaining access to your email account, phone number, device, passwords, and any client portal or document platform used in connection with Unity Financial Solution services.</p>
              <p>You should not share secure links, passwords, access codes, or private documents with unauthorized individuals.</p>
              <p>If you believe your email, phone, or account access has been compromised, contact Unity Financial Solution immediately.</p>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h2>Section 11: Electronic Records May Replace Paper Records</h2>
              <p>By agreeing to this E-Sign Consent, you understand that electronic communications and records may replace paper communications and paper records.</p>
              <p>This means Unity Financial Solution may provide notices, agreements, disclosures, confirmations, and other service-related records electronically instead of mailing paper versions.</p>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h2>Section 12: No Funding Guarantee</h2>
              <p>Your electronic signature, form submission, or consent does not mean you are approved for funding.</p>
              <p>Unity Financial Solution does not guarantee approvals, funding amounts, credit limits, interest rates, repayment terms, SBA eligibility, or lender offers.</p>
              <p>All funding decisions are made by third-party lenders, banks, credit card issuers, SBA participating lenders, or financial institutions.</p>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h2>Section 13: Changes to This E-Sign Consent</h2>
              <p>Unity Financial Solution may update this E-Sign Consent at any time.</p>
              <p>Updates will be posted on this page with a revised “Last Updated” date.</p>
              <p>Your continued use of the website, services, forms, electronic signatures, or electronic communications after updates are posted means you accept the updated E-Sign Consent.</p>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h2>Section 14: Contact Information</h2>
              <p>For questions about this E-Sign Consent, contact Unity Financial Solution:</p>
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
                <p className="text-sm text-red-600">This E-Sign Consent is a website content template and should be reviewed by a qualified attorney before publishing.</p>
              </div>
            </FadeUp>

          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
};
