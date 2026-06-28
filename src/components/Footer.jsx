import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-primary-navy text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Column 1: Brand */}
          <div className="space-y-4">
            <img 
              src="/assets/logos/secondary-logo.png" 
              alt="Unity Financial Solution" 
              className="h-12 w-auto bg-white p-1 rounded" 
            />
            <p className="font-heading font-semibold text-lg text-accent-gold">
              Funding built with strategy, not guesswork.
            </p>
            <p className="text-sm text-gray-300 leading-relaxed mt-4">
              Unity Financial Solution does not guarantee funding approvals, credit limits, funding amounts, interest rates, repayment terms, or loan offers. All funding decisions are made by third-party lenders, banks, credit card issuers, or financial institutions based on their own underwriting guidelines. Past results do not guarantee future outcomes.
            </p>
          </div>

          {/* Column 2: Funding Solutions */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4 text-white">Funding Solutions</h3>
            <ul className="space-y-3">
              <li><Link to="/personal-credit-card-stacking" className="text-gray-300 hover:text-accent-gold transition-colors">Personal Credit Card Stacking</Link></li>
              <li><Link to="/business-credit-card-stacking" className="text-gray-300 hover:text-accent-gold transition-colors">Business Credit Card Stacking</Link></li>
              <li><Link to="/sba-loans" className="text-gray-300 hover:text-accent-gold transition-colors">SBA Loans</Link></li>
              <li><Link to="/business-funding-readiness" className="text-gray-300 hover:text-accent-gold transition-colors">Business Funding Readiness</Link></li>
              <li><Link to="/apply" className="text-gray-300 hover:text-accent-gold transition-colors">Funding Review</Link></li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4 text-white">Company</h3>
            <ul className="space-y-3">
              <li><Link to="/about-us" className="text-gray-300 hover:text-accent-gold transition-colors">About Us</Link></li>
              <li><Link to="/how-it-works" className="text-gray-300 hover:text-accent-gold transition-colors">How It Works</Link></li>
              <li><Link to="/results" className="text-gray-300 hover:text-accent-gold transition-colors">Case Studies</Link></li>
              <li><Link to="/faq" className="text-gray-300 hover:text-accent-gold transition-colors">FAQ</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-accent-gold transition-colors">Contact</Link></li>
              <li><Link to="/apply" className="text-gray-300 hover:text-accent-gold transition-colors">Apply Now</Link></li>
            </ul>
          </div>

          {/* Column 4: Legal */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4 text-white">Legal</h3>
            <ul className="space-y-3">
              <li><Link to="/terms-conditions" className="text-gray-300 hover:text-accent-gold transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/privacy-policy" className="text-gray-300 hover:text-accent-gold transition-colors">Privacy Policy</Link></li>
              <li><Link to="/funding-disclaimer" className="text-gray-300 hover:text-accent-gold transition-colors">Funding Disclaimer</Link></li>
              <li><Link to="/sms-terms" className="text-gray-300 hover:text-accent-gold transition-colors">SMS Terms</Link></li>
              <li><Link to="/refund-policy" className="text-gray-300 hover:text-accent-gold transition-colors">Refund Policy</Link></li>
              <li><Link to="/e-sign-consent" className="text-gray-300 hover:text-accent-gold transition-colors">E-Sign Consent</Link></li>
            </ul>
          </div>

        </div>
        
        <div className="pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Unity Financial Solution. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
