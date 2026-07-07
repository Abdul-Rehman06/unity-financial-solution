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

const Privacy = () => {
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
              Privacy Policy
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
              <p>Unity Financial Solution respects your privacy and is committed to protecting the personal information you provide to us.</p>
              <p>This Privacy Policy explains how Unity Financial Solution collects, uses, stores, shares, and protects information when you visit our website, submit a funding review form, contact our team, use our services, or communicate with us by phone, email, text message, or other methods.</p>
              <p>By using our website or submitting your information, you agree to the terms of this Privacy Policy.</p>
              <p className="italic text-sm">Because Unity Financial Solution may collect financial and business information, this policy should be reviewed by an attorney to confirm whether additional financial privacy notices are required. The FTC states that certain financial institutions must provide privacy notices about their information-sharing practices and may need to allow consumers to opt out of certain sharing with nonaffiliated third parties.</p>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h2>Section 2: Information We Collect</h2>
              <p>Unity Financial Solution may collect personal, financial, business, and contact information that you voluntarily provide through our website forms, phone calls, text messages, emails, applications, consultations, or service-related communications.</p>
              <p>Information may include:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8">
                <ul>
                  <li>Full name</li>
                  <li>Email address</li>
                  <li>Phone number</li>
                  <li>Mailing address</li>
                  <li>State of residence</li>
                  <li>Date of birth</li>
                  <li>Estimated credit score</li>
                  <li>Credit utilization range</li>
                  <li>Recent inquiry information</li>
                  <li>Income range</li>
                  <li>Business name</li>
                </ul>
                <ul>
                  <li>Business entity type</li>
                  <li>EIN status</li>
                  <li>Business website</li>
                  <li>Time in business</li>
                  <li>Monthly revenue range</li>
                  <li>Funding amount requested</li>
                  <li>Use of funds</li>
                  <li>Bank statement information, when provided</li>
                  <li>Tax or financial document information, when provided</li>
                  <li>Messages or notes you submit to us</li>
                  <li>Communication preferences</li>
                </ul>
              </div>
              <p>We may also collect technical information such as IP address, browser type, device type, pages visited, referral source, and website activity.</p>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h2>Section 3: How We Use Your Information</h2>
              <p>Unity Financial Solution may use the information we collect to:</p>
              <ul>
                <li>Review your funding inquiry</li>
                <li>Contact you about your funding review</li>
                <li>Evaluate possible funding paths</li>
                <li>Provide funding strategy guidance</li>
                <li>Review business funding readiness</li>
                <li>Review personal or business credit card stacking eligibility factors</li>
                <li>Review SBA loan readiness factors</li>
                <li>Request additional documents, when needed</li>
                <li>Schedule consultations or follow-up calls</li>
                <li>Send service-related messages</li>
                <li>Send email or SMS updates</li>
                <li>Improve our website and services</li>
                <li>Maintain internal records</li>
                <li>Protect against fraud or misuse</li>
                <li>Comply with applicable laws and legal obligations</li>
              </ul>
              <p className="font-medium text-primary-navy">We do not use your information to guarantee funding, credit approval, loan approval, or any specific financial outcome.</p>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h2>Section 4: How We Share Your Information</h2>
              <p>Unity Financial Solution may share your information with third parties when necessary to provide services, process your inquiry, or support your funding review.</p>
              <p>Information may be shared with:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8">
                <ul>
                  <li>Funding partners</li>
                  <li>Lenders</li>
                  <li>Banks</li>
                  <li>Credit card issuers</li>
                  <li>SBA participating lenders</li>
                  <li>Processing partners</li>
                  <li>CRM and automation platforms</li>
                </ul>
                <ul>
                  <li>Email and SMS providers</li>
                  <li>Payment processors</li>
                  <li>Document collection platforms</li>
                  <li>Internal team members</li>
                  <li>Legal, compliance, or professional advisors</li>
                  <li>Service providers that help operate our business</li>
                </ul>
              </div>
              <p>We may also share information if required by law, court order, subpoena, legal process, fraud investigation, or government request.</p>
              <p>Unity Financial Solution does not sell your personal information as a core business model. If this ever changes, this Privacy Policy should be updated before any such practice begins.</p>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h2>Section 5: Funding Partner and Lender Sharing</h2>
              <p>When you submit a funding review, you understand that Unity Financial Solution may review your information internally and may share relevant information with third-party lenders, banks, credit card issuers, funding partners, or financial institutions when appropriate.</p>
              <p>These third parties may have their own privacy policies, underwriting rules, eligibility requirements, and data practices.</p>
              <p>Unity Financial Solution is not responsible for the privacy practices, decisions, or policies of third-party lenders, banks, credit card issuers, or financial institutions.</p>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h2>Section 6: Financial Information</h2>
              <p>Unity Financial Solution may collect or review financial information when needed for funding readiness, SBA loan support, business funding review, or document preparation.</p>
              <p>Financial information may include:</p>
              <ul>
                <li>Revenue details</li>
                <li>Bank statement information</li>
                <li>Tax return information</li>
                <li>Profit and loss information</li>
                <li>Business debt information</li>
                <li>Income details</li>
                <li>Funding request details</li>
                <li>Use of funds</li>
                <li>Business financial documents</li>
              </ul>
              <p>We use this information only for funding review, funding readiness, service delivery, communication, internal recordkeeping, and related business purposes.</p>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h2>Section 7: Credit Information</h2>
              <p>Unity Financial Solution may ask you to provide estimated credit information, including credit score range, utilization, inquiries, recent denials, and other credit profile details.</p>
              <p>Unity Financial Solution does not guarantee credit card approvals, credit limits, funding amounts, interest rates, repayment terms, or lender offers.</p>
              <p>Any credit-related decisions are made by third-party banks, credit card issuers, lenders, or financial institutions based on their own underwriting guidelines.</p>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h2>Section 8: Website Tracking and Cookies</h2>
              <p>Our website may use cookies, pixels, analytics tools, tracking technologies, or similar tools to improve user experience, measure website activity, understand traffic sources, and support marketing efforts.</p>
              <p>These tools may collect information such as:</p>
              <ul>
                <li>Pages visited</li>
                <li>Time spent on the website</li>
                <li>Device type</li>
                <li>Browser type</li>
                <li>IP address</li>
                <li>Referral source</li>
                <li>Form activity</li>
                <li>Advertising interaction</li>
              </ul>
              <p>You may be able to disable cookies through your browser settings, but some website features may not function properly if cookies are disabled.</p>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h2>Section 9: Email and SMS Communication</h2>
              <p>By submitting your contact information, you agree that Unity Financial Solution may contact you by phone, email, text message, or other communication methods regarding your funding inquiry, services, documents, appointments, offers, and follow-up communications.</p>
              <p>Message and data rates may apply.</p>
              <p>Consent is not a condition of purchase.</p>
              <p>You may opt out of marketing emails by using the unsubscribe link in the email, where available. The FTC’s CAN-SPAM guidance states that commercial email rules include requirements for commercial messages and give recipients the right to stop receiving them.</p>
              <p>You may opt out of text messages by replying STOP or by contacting us directly. The FCC has stated that consumers may revoke consent for calls or texts in any reasonable manner.</p>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h2>Section 10: How We Protect Your Information</h2>
              <p>Unity Financial Solution takes reasonable steps to protect personal, business, and financial information from unauthorized access, misuse, loss, disclosure, alteration, or destruction.</p>
              <p>Security measures may include:</p>
              <ul>
                <li>Limited access to sensitive information</li>
                <li>Secure document handling processes</li>
                <li>CRM access controls</li>
                <li>Password-protected systems</li>
                <li>Internal team access limits</li>
                <li>Vendor and platform security tools</li>
                <li>Reasonable administrative, technical, and physical safeguards</li>
              </ul>
              <p>No website, platform, email system, CRM, or digital storage method can be guaranteed 100% secure. You submit information at your own risk.</p>
              <p className="italic text-sm">The FTC advises businesses to collect only what they need, keep sensitive information safe, and dispose of it securely.</p>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h2>Section 11: How Long We Keep Your Information</h2>
              <p>Unity Financial Solution may retain your information for as long as needed to:</p>
              <ul>
                <li>Review your funding inquiry</li>
                <li>Provide services</li>
                <li>Maintain business records</li>
                <li>Comply with legal obligations</li>
                <li>Resolve disputes</li>
                <li>Prevent fraud</li>
                <li>Improve services</li>
                <li>Support future communication</li>
              </ul>
              <p>We may delete, archive, or anonymize information when it is no longer needed, unless we are required to keep it for legal, compliance, tax, accounting, or business purposes.</p>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h2>Section 12: Your Privacy Choices</h2>
              <p>Depending on your location and applicable law, you may have certain rights regarding your personal information.</p>
              <p>You may request to:</p>
              <ul>
                <li>Access certain personal information we have about you</li>
                <li>Correct inaccurate information</li>
                <li>Update your contact information</li>
                <li>Opt out of marketing emails</li>
                <li>Opt out of text messages</li>
                <li>Request deletion of certain information, where applicable</li>
                <li>Ask questions about how your information is used</li>
              </ul>
              <p>To make a privacy request, contact us using the information listed at the bottom of this page.</p>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h2>Section 13: State Privacy Rights</h2>
              <p>Some states may provide additional privacy rights to residents.</p>
              <p>If you are a resident of a state with specific privacy laws, you may have additional rights related to access, correction, deletion, data portability, or opting out of certain data uses.</p>
              <p>Unity Financial Solution will respond to privacy requests as required by applicable law.</p>
              <p className="italic text-sm text-primary-navy font-medium">Recommended placeholder: If your business serves clients nationwide, have an attorney review this section for state-specific requirements, including California, Colorado, Connecticut, Virginia, Utah, and other applicable state privacy laws.</p>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h2>Section 14: Children’s Privacy</h2>
              <p>Unity Financial Solution does not knowingly collect personal information from children under the age of 13.</p>
              <p>Our website and services are intended for adults and business owners seeking funding-related services.</p>
              <p>If we become aware that we collected information from a child under 13, we will take reasonable steps to delete that information.</p>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h2>Section 15: Third-Party Websites</h2>
              <p>Our website may contain links to third-party websites, platforms, lenders, partners, payment processors, scheduling tools, or document collection tools.</p>
              <p>Unity Financial Solution is not responsible for the privacy practices, security, content, policies, or actions of third-party websites or platforms.</p>
              <p>You should review the privacy policies of any third-party website before submitting information.</p>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h2>Section 16: Accuracy of Information</h2>
              <p>You are responsible for providing accurate, complete, and current information.</p>
              <p>If your information changes, you should contact Unity Financial Solution to update your records.</p>
              <p>Unity Financial Solution is not responsible for issues caused by inaccurate, incomplete, outdated, or misleading information submitted by users.</p>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h2>Section 17: Data Transfers and Service Providers</h2>
              <p>Unity Financial Solution may use third-party software, CRM systems, automation tools, email platforms, SMS platforms, payment processors, cloud storage providers, and business service providers.</p>
              <p>Your information may be processed or stored by these providers as part of our normal business operations.</p>
              <p>We use service providers to help operate our business, communicate with clients, manage funding inquiries, process payments, collect documents, and deliver services.</p>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h2>Section 18: Changes to This Privacy Policy</h2>
              <p>Unity Financial Solution may update this Privacy Policy at any time.</p>
              <p>When updates are made, the “Last Updated” date at the top of this page will be revised.</p>
              <p>Your continued use of the website or services after updates are posted means you accept the updated Privacy Policy.</p>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h2>Section 19: Contact Information</h2>
              <p>If you have questions about this Privacy Policy or want to make a privacy-related request, contact Unity Financial Solution:</p>
              <div className="bg-bg-light p-6 rounded-xl border border-border-gray not-prose mt-4">
                <p className="font-bold text-primary-navy mb-2">Unity Financial Solution</p>
                <p className="text-text-soft"><span className="font-semibold text-primary-navy">Email:</span> info@unityfinancialsolution.com</p>
                <p className="text-text-soft"><span className="font-semibold text-primary-navy">Phone:</span> (858) 239-0594</p>
                <p className="text-text-soft"><span className="font-semibold text-primary-navy">Address:</span> [Add Business Address]</p>
              </div>
            </FadeUp>

            <FadeUp delay={0.1}>
              <div className="mt-12 p-6 bg-red-50 border-l-4 border-red-500 rounded-r-xl not-prose">
                <p className="font-bold text-red-700 mb-1">Final Legal Notice</p>
                <p className="text-sm text-red-600">This Privacy Policy is a website content template and should be reviewed by a qualified attorney before publishing, especially because Unity Financial Solution may collect financial, credit, business, and funding-related information.</p>
              </div>
            </FadeUp>

          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
};

export default Privacy;
