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

const SMSTerms = () => {
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
              SMS Terms & Conditions
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
              <h2>Section 1: SMS Program Overview</h2>
              <p>By providing your phone number to Unity Financial Solution, you agree to receive text messages from Unity Financial Solution regarding your funding inquiry, funding review, appointments, document requests, service updates, application status, reminders, and related offers.</p>
              <p>Messages may be sent by manual or automated technology depending on the communication type.</p>
              <p>Message frequency may vary.</p>
              <p className="font-bold text-primary-navy">Message and data rates may apply.</p>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h2>Section 2: Consent to Receive Text Messages</h2>
              <p>By submitting a form, checking a consent box, scheduling a consultation, or otherwise providing your phone number, you consent to receive SMS/text messages from Unity Financial Solution.</p>
              <p>You understand that consent to receive marketing text messages is not a condition of purchase.</p>
              <p>You may still use Unity Financial Solution services even if you choose not to consent to promotional text messages.</p>
              <p className="italic text-sm">FCC guidance explains that automated texts generally require prior consent, and consumers can revoke consent to receive robocalls or robotexts.</p>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h2>Section 3: Types of Messages You May Receive</h2>
              <p>Unity Financial Solution may send text messages related to:</p>
              <ul>
                <li>Funding review confirmation</li>
                <li>Appointment reminders</li>
                <li>Missed call follow-ups</li>
                <li>Document request reminders</li>
                <li>Funding review updates</li>
                <li>Application status updates</li>
                <li>Service-related messages</li>
                <li>Follow-up questions</li>
                <li>Promotional offers</li>
                <li>Educational funding information</li>
                <li>Re-engagement messages</li>
              </ul>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h2>Section 4: Message Frequency</h2>
              <p>Message frequency may vary based on your inquiry, funding review status, scheduled appointments, document requests, and communication activity.</p>
              <p>You may receive multiple messages during active service periods or when follow-up is needed.</p>
              <p>Unity Financial Solution does not guarantee any specific message frequency.</p>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h2>Section 5: Message and Data Rates</h2>
              <p>Message and data rates may apply depending on your mobile carrier and phone plan.</p>
              <p>Unity Financial Solution is not responsible for message charges, data charges, carrier fees, delayed messages, undelivered messages, or mobile service issues.</p>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h2>Section 6: How to Opt Out</h2>
              <p>You may opt out of text messages at any time by replying:</p>
              <div className="bg-bg-light p-4 rounded-lg font-mono font-bold text-primary-navy inline-block mb-4">STOP</div>
              <p>You may also use other reasonable methods to request that Unity Financial Solution stop sending text messages, such as contacting us directly by phone or email.</p>
              <p>Once you opt out, you may receive one final confirmation message confirming that you have been unsubscribed.</p>
              <p className="italic text-sm">The FCC states that consumers may revoke consent for robocalls or robotexts and provides guidance on stopping unwanted texts.</p>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h2>Section 7: Help Instructions</h2>
              <p>For help, you may reply:</p>
              <div className="bg-bg-light p-4 rounded-lg font-mono font-bold text-primary-navy inline-block mb-4">HELP</div>
              <p>You may also contact Unity Financial Solution directly:</p>
              <ul>
                <li><strong>Email:</strong> [Add Email Address]</li>
                <li><strong>Phone:</strong> [Add Phone Number]</li>
              </ul>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h2>Section 8: Opt-Out Processing</h2>
              <p>Unity Financial Solution will make reasonable efforts to process opt-out requests promptly.</p>
              <p>After opting out, you may no longer receive promotional text messages from Unity Financial Solution unless you provide consent again.</p>
              <p>Please note that opting out of SMS messages may not stop certain non-marketing communications sent through other channels, such as email, phone calls, or legally required notices.</p>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h2>Section 9: No Guarantee of Delivery</h2>
              <p>Unity Financial Solution does not guarantee that text messages will always be delivered.</p>
              <p>Message delivery may depend on:</p>
              <ul>
                <li>Mobile carrier systems</li>
                <li>Network availability</li>
                <li>Device settings</li>
                <li>Phone number accuracy</li>
                <li>Spam filtering</li>
                <li>Service interruptions</li>
                <li>Platform or software issues</li>
              </ul>
              <p>Unity Financial Solution is not responsible for delayed, blocked, failed, or undelivered messages.</p>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h2>Section 10: Accurate Phone Number Required</h2>
              <p>You agree to provide a valid phone number that belongs to you or that you are authorized to use.</p>
              <p>If your phone number changes, you agree to notify Unity Financial Solution.</p>
              <p>You agree not to provide a phone number that belongs to another person without permission.</p>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h2>Section 11: Carrier Disclaimer</h2>
              <p>Mobile carriers are not liable for delayed or undelivered messages.</p>
              <p>Supported carriers may vary depending on your mobile service provider and location.</p>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h2>Section 12: Privacy</h2>
              <p>Unity Financial Solution respects your privacy.</p>
              <p>Information collected through SMS communications may be used to communicate with you, manage your funding inquiry, provide service updates, send reminders, improve our process, and maintain business records.</p>
              <p>For more information about how Unity Financial Solution collects, uses, stores, and shares information, please review our Privacy Policy.</p>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h2>Section 13: Marketing and Promotional Messages</h2>
              <p>Unity Financial Solution may send promotional or marketing text messages if you have provided consent.</p>
              <p>Promotional messages may include funding-related offers, service reminders, educational information, re-engagement messages, or updates about Unity Financial Solution services.</p>
              <p>You may opt out at any time by replying STOP or contacting us directly.</p>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h2>Section 14: Email Communication Notice</h2>
              <p>If you also provide your email address, Unity Financial Solution may contact you by email regarding your inquiry, service updates, appointments, document requests, and related offers.</p>
              <p className="italic text-sm">Commercial email messages must follow CAN-SPAM requirements, including giving recipients the right to stop receiving future commercial emails.</p>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h2>Section 15: Changes to SMS Terms</h2>
              <p>Unity Financial Solution may update these SMS Terms & Conditions at any time.</p>
              <p>Updates will be posted on this page with a revised “Last Updated” date.</p>
              <p>Your continued participation in Unity Financial Solution SMS communications after changes are posted means you accept the updated SMS Terms.</p>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h2>Section 16: Contact Information</h2>
              <p>For questions about these SMS Terms & Conditions, contact Unity Financial Solution:</p>
              <div className="bg-bg-light p-6 rounded-xl border border-border-gray not-prose mt-4">
                <p className="font-bold text-primary-navy mb-2">Unity Financial Solution</p>
                <p className="text-text-soft"><span className="font-semibold text-primary-navy">Email:</span> [Add Email Address]</p>
                <p className="text-text-soft"><span className="font-semibold text-primary-navy">Phone:</span> [Add Phone Number]</p>
                <p className="text-text-soft"><span className="font-semibold text-primary-navy">Address:</span> [Add Business Address]</p>
              </div>
            </FadeUp>

            <FadeUp delay={0.1}>
              <div className="mt-12 p-6 bg-red-50 border-l-4 border-red-500 rounded-r-xl not-prose">
                <p className="font-bold text-red-700 mb-1">Legal Notice</p>
                <p className="text-sm text-red-600">This SMS Terms & Conditions page is a website content template and should be reviewed by a qualified attorney before publishing.</p>
              </div>
            </FadeUp>

          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
};

export default SMSTerms;
