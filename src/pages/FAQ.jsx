import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Plus, Minus, CheckCircle2 } from 'lucide-react';
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

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className={`bg-white rounded-2xl border ${isOpen ? 'border-primary-navy/20 shadow-lg' : 'border-border-gray shadow-sm'} overflow-hidden transition-all duration-300`}>
      <button
        className="w-full px-8 py-6 text-left flex justify-between items-center focus:outline-none group"
        onClick={onClick}
      >
        <span className={`font-heading font-bold text-xl md:text-2xl pr-8 transition-colors ${isOpen ? 'text-primary-green' : 'text-primary-navy group-hover:text-primary-green'}`}>
          {question}
        </span>
        <div className={`flex-shrink-0 w-12 h-12 rounded-full border flex items-center justify-center transition-colors ${isOpen ? 'border-primary-green bg-primary-green/5' : 'border-border-gray group-hover:border-primary-green'}`}>
          {isOpen ? (
            <Minus className="w-6 h-6 text-primary-navy" />
          ) : (
            <Plus className="w-6 h-6 text-primary-navy" />
          )}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="px-8 pb-8 text-lg text-text-soft leading-relaxed space-y-4">
              {Array.isArray(answer) ? (
                answer.map((block, idx) => {
                  if (block.type === 'paragraph') {
                    return <p key={idx}>{block.content}</p>;
                  } else if (block.type === 'list') {
                    return (
                      <div key={idx} className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                        {block.items.map((item, itemIdx) => (
                          <div key={itemIdx} className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-primary-green flex-shrink-0 mt-0.5" />
                            <span className="text-base text-primary-navy font-medium">{item}</span>
                          </div>
                        ))}
                      </div>
                    );
                  }
                  return null;
                })
              ) : (
                <p>{answer}</p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQCategory = ({ title, faqs, startIndex, openIndex, setOpenIndex }) => {
  return (
    <div className="mb-20 last:mb-0">
      <FadeUp>
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-navy mb-8 border-b border-border-gray pb-4">
          {title}
        </h2>
      </FadeUp>
      <div className="space-y-6">
        {faqs.map((faq, index) => {
          const globalIndex = startIndex + index;
          return (
            <FadeUp key={globalIndex} delay={index * 0.1}>
              <FAQItem 
                question={faq.question} 
                answer={faq.answer} 
                isOpen={openIndex === globalIndex}
                onClick={() => setOpenIndex(openIndex === globalIndex ? null : globalIndex)}
              />
            </FadeUp>
          );
        })}
      </div>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqCategories = [
    {
      title: "General Funding Questions",
      faqs: [
        {
          question: "Do you guarantee funding?",
          answer: [
            { type: 'paragraph', content: "No. Unity Financial Solution does not guarantee funding approvals, credit limits, loan amounts, interest rates, repayment terms, or lender offers." },
            { type: 'paragraph', content: "All funding decisions are made by third-party lenders, banks, credit card issuers, or financial institutions based on their own underwriting guidelines." }
          ]
        },
        {
          question: "What does Unity Financial Solution do?",
          answer: [
            { type: 'paragraph', content: "Unity Financial Solution helps individuals, entrepreneurs, and business owners explore funding options through personal credit card stacking, business credit card stacking, SBA loan support, and business funding readiness." },
            { type: 'paragraph', content: "Our process starts with reviewing your profile so we can help identify which funding path may fit your current situation." }
          ]
        },
        {
          question: "What type of funding do you help with?",
          answer: [
            { type: 'paragraph', content: "Unity Financial Solution helps with:" },
            { type: 'list', items: [
              "Personal credit card stacking", "Business credit card stacking", "SBA loan readiness",
              "Business funding preparation", "Business profile review", "Funding strategy direction"
            ]}
          ]
        },
        {
          question: "Who is Unity Financial Solution for?",
          answer: [
            { type: 'paragraph', content: "Unity Financial Solution is for individuals, entrepreneurs, startup founders, business owners, and established companies looking to understand their funding options." },
            { type: 'paragraph', content: "We may also help people who were previously denied funding and want to understand what may need to be improved before applying again." }
          ]
        },
        {
          question: "How does the process start?",
          answer: [
            { type: 'paragraph', content: "The process starts by completing the funding review form. Once submitted, our team reviews your personal, business, credit, revenue, and funding information to help identify possible next steps." }
          ]
        }
      ]
    },
    {
      title: "Credit Card Stacking Questions",
      faqs: [
        {
          question: "What is credit card stacking?",
          answer: [
            { type: 'paragraph', content: "Credit card stacking is a funding strategy where qualified applicants apply for multiple credit cards in a structured sequence to potentially access higher total available credit." },
            { type: 'paragraph', content: "The strategy may involve personal credit cards, business credit cards, or both, depending on the client’s profile and funding goals." }
          ]
        },
        {
          question: "Do you offer personal credit card stacking?",
          answer: [
            { type: 'paragraph', content: "Yes. Unity Financial Solution helps qualified individuals explore personal credit card stacking based on credit profile, income, utilization, inquiries, current credit limits, and approval readiness." }
          ]
        },
        {
          question: "Do you offer business credit card stacking?",
          answer: [
            { type: 'paragraph', content: "Yes. Unity Financial Solution helps qualified business owners explore business credit card stacking based on business structure, personal credit, business profile, revenue, banking, and lender readiness." }
          ]
        },
        {
          question: "Do you guarantee credit card approvals?",
          answer: [
            { type: 'paragraph', content: "No. Credit card approvals, credit limits, rates, fees, and terms are determined by the issuing banks and credit card companies." },
            { type: 'paragraph', content: "Unity Financial Solution does not control or guarantee the final decision." }
          ]
        },
        {
          question: "Will credit card stacking affect my credit?",
          answer: [
            { type: 'paragraph', content: "Some credit card applications may result in hard inquiries. The impact depends on the lender, the application type, your credit profile, and how many applications are submitted." },
            { type: 'paragraph', content: "Unity Financial Solution helps clients understand the importance of strategy before applying." }
          ]
        },
        {
          question: "Do I need good credit for credit card stacking?",
          answer: [
            { type: 'paragraph', content: "Credit card stacking is generally stronger for applicants with good credit, low utilization, positive payment history, strong existing limits, verifiable income, and limited recent inquiries." },
            { type: 'paragraph', content: "Every profile is different, which is why the review comes first." }
          ]
        }
      ]
    },
    {
      title: "Business Funding Questions",
      faqs: [
        {
          question: "Can a new business get funding?",
          answer: [
            { type: 'paragraph', content: "Possibly. New businesses may have funding options, but available options depend on personal credit, income, business setup, industry, banking, documentation, and lender requirements." }
          ]
        },
        {
          question: "Do I need an LLC or corporation?",
          answer: [
            { type: 'paragraph', content: "Having a properly formed business entity may help support a stronger business funding profile. Some funding options may require a business entity, while others may depend more on personal credit and income." },
            { type: 'paragraph', content: "Requirements vary by lender and funding type." }
          ]
        },
        {
          question: "Does my business need revenue?",
          answer: [
            { type: 'paragraph', content: "Some funding options may be available for newer businesses with limited revenue, especially when the owner has strong personal credit and income." },
            { type: 'paragraph', content: "Other funding options, including many larger business loans and SBA loan pathways, may require documented revenue and financial records." }
          ]
        },
        {
          question: "What makes a business look fundable?",
          answer: [
            { type: 'paragraph', content: "A stronger business funding profile may include:" },
            { type: 'list', items: [
              "Active business entity", "EIN", "Business bank account", "Consistent business information",
              "Professional website", "Business email", "Documented revenue", "Organized bank statements",
              "Strong personal credit", "Clear use of funds", "Proper documentation"
            ]}
          ]
        },
        {
          question: "What if my business was denied before?",
          answer: [
            { type: 'paragraph', content: "A previous denial does not automatically mean you have no options. It may mean your profile was not ready, the wrong product was selected, documentation was missing, or the lender did not fit your situation." },
            { type: 'paragraph', content: "Unity Financial Solution can help review your profile and identify possible next steps." }
          ]
        }
      ]
    },
    {
      title: "SBA Loan Questions",
      faqs: [
        {
          question: "Do you offer SBA loans directly?",
          answer: [
            { type: 'paragraph', content: "Unity Financial Solution is not the SBA and does not directly guarantee SBA loans. We help business owners understand SBA loan readiness, documentation requirements, and possible lending pathways." },
            { type: 'paragraph', content: "SBA-backed loans are issued through participating lenders and are subject to eligibility, underwriting, and documentation requirements." }
          ]
        },
        {
          question: "Who may be a good fit for SBA loan support?",
          answer: [
            { type: 'paragraph', content: "SBA loan support may be a good fit for established businesses with revenue history, organized financial documents, bank statements, tax records, and a clear use of funds." }
          ]
        },
        {
          question: "What can SBA loan funding be used for?",
          answer: [
            { type: 'paragraph', content: "SBA loan funding may be used for different business purposes depending on the program and lender guidelines. Common uses may include:" },
            { type: 'list', items: [
              "Working capital", "Equipment", "Inventory", "Expansion", "Commercial real estate",
              "Business acquisition, when eligible", "Debt refinance, when eligible"
            ]}
          ]
        },
        {
          question: "What documents may be needed for SBA loan review?",
          answer: [
            { type: 'paragraph', content: "Documents may vary, but commonly requested items may include:" },
            { type: 'list', items: [
              "Business formation documents", "EIN confirmation", "Business bank statements",
              "Business tax returns", "Personal tax returns", "Profit and loss statement",
              "Balance sheet", "Debt schedule", "Use of funds statement", "Business plan, when needed"
            ]}
          ]
        },
        {
          question: "How long does SBA funding take?",
          answer: [
            { type: 'paragraph', content: "Timing depends on the lender, loan program, documentation, underwriting, business profile, and how prepared the file is." },
            { type: 'paragraph', content: "A more organized file may help create a smoother review process, but no timeline is guaranteed." }
          ]
        }
      ]
    },
    {
      title: "Funding Review Questions",
      faqs: [
        {
          question: "What is a funding review?",
          answer: [
            { type: 'paragraph', content: "A funding review is the first step in understanding your funding options. Unity Financial Solution reviews your personal, business, credit, revenue, documentation, and funding information to help identify possible next steps." }
          ]
        },
        {
          question: "Does submitting a funding review mean I am approved?",
          answer: [
            { type: 'paragraph', content: "No. Submitting a funding review does not mean you are approved for funding. It only allows our team to review your profile and help identify possible funding paths." }
          ]
        },
        {
          question: "What information do I need to submit?",
          answer: [
            { type: 'paragraph', content: "You may be asked to provide:" },
            { type: 'list', items: [
              "Name", "Email", "Phone number", "State", "Estimated credit score", "Income range",
              "Funding amount requested", "Funding type interested in", "Business name, if applicable",
              "Time in business, if applicable", "Monthly revenue, if applicable", "Use of funds"
            ]}
          ]
        },
        {
          question: "Will I need to provide documents?",
          answer: [
            { type: 'paragraph', content: "Depending on the funding path, documents may be needed. Business credit cards may require less documentation, while SBA loans and larger funding options may require more complete financial records." }
          ]
        },
        {
          question: "What happens after I submit the form?",
          answer: [
            { type: 'paragraph', content: "After you submit the form, Unity Financial Solution reviews your information and contacts you regarding possible next steps." },
            { type: 'paragraph', content: "Those next steps may include a profile review, document request, strategy call, funding path recommendation, or readiness plan." }
          ]
        }
      ]
    },
    {
      title: "Approval and Results Questions",
      faqs: [
        {
          question: "How much funding can I get?",
          answer: [
            { type: 'paragraph', content: "Funding amounts depend on your credit profile, income, business revenue, documentation, lender criteria, underwriting, and the funding product." },
            { type: 'paragraph', content: "Unity Financial Solution does not guarantee any specific funding amount." }
          ]
        },
        {
          question: "What can affect my approval chances?",
          answer: [
            { type: 'paragraph', content: "Approval may be affected by:" },
            { type: 'list', items: [
              "Credit score", "Credit utilization", "Recent inquiries", "Payment history",
              "Income", "Business revenue", "Time in business", "Industry type",
              "Existing debt", "Bank statements", "Tax returns", "Documentation", "Lender guidelines"
            ]}
          ]
        },
        {
          question: "Can you help if my profile is not ready?",
          answer: [
            { type: 'paragraph', content: "Yes. If your profile is not ready, Unity Financial Solution may recommend business funding readiness steps before applying." },
            { type: 'paragraph', content: "This may include preparing documents, improving business credibility, reviewing credit profile issues, or choosing a different funding path." }
          ]
        },
        {
          question: "Do past results guarantee my results?",
          answer: [
            { type: 'paragraph', content: "No. Past results do not guarantee future outcomes. Every client profile is different, and all funding decisions are made by lenders and financial institutions." }
          ]
        }
      ]
    }
  ];

  let currentFaqIndex = 0;

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
              Frequently Asked Questions
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-8 leading-tight">
              Questions About Funding, Credit Card Stacking, <br className="hidden md:block"/>
              <span className="bg-clip-text bg-gradient-to-r from-primary-green to-accent-gold">and SBA Loan Support?</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto font-light mb-12">
              Get clear answers about how Unity Financial Solution helps individuals, entrepreneurs, and business owners review their funding options before applying.
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
              Unity Financial Solution does not guarantee approvals, funding amounts, credit limits, interest rates, repayment terms, or lender offers.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* FAQ Categories Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-bg-light rounded-full blur-[100px] opacity-50 -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-bg-light rounded-full blur-[100px] opacity-50 translate-y-1/2 -translate-x-1/3"></div>
        
        <div className="max-w-[1000px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          {faqCategories.map((category, catIndex) => {
            const startIndex = currentFaqIndex;
            currentFaqIndex += category.faqs.length;
            return (
              <FAQCategory 
                key={catIndex}
                title={category.title}
                faqs={category.faqs}
                startIndex={startIndex}
                openIndex={openIndex}
                setOpenIndex={setOpenIndex}
              />
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-primary-navy relative overflow-hidden text-center">
        <div className="absolute inset-0 opacity-10">
          <MeshGradient speed={4} intensity={1.5} grain={0.2} />
        </div>
        <div className="max-w-[800px] mx-auto px-6 relative z-10">
          <FadeUp>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-8 leading-tight">
              Still Have Questions About Your Funding Options?
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-10">
              Start with a funding review. Unity Financial Solution will review your information and help identify which funding path may fit your current profile.
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
          Unity Financial Solution does not guarantee approvals, funding amounts, credit limits, interest rates, repayment terms, SBA eligibility, or lender offers. All funding decisions are made by third-party lenders, banks, credit card issuers, or financial institutions based on their own underwriting guidelines. Past results do not guarantee future outcomes.
        </p>
      </div>
    </div>
  );
};

export default FAQ;
