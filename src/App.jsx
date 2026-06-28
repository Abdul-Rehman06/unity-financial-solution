import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'

// Pages
import Home from './pages/Home'
import FundingSolutions from './pages/FundingSolutions'
import ApplyNow from './pages/ApplyNow'
import HowItWorks from './pages/HowItWorks'
import AboutUs from './pages/AboutUs'
import FAQ from './pages/FAQ'
import Contact from './pages/Contact'
import Results from './pages/Results'

// Service Pages
import PersonalCredit from './pages/PersonalCredit'
import BusinessCredit from './pages/BusinessCredit'
import SBALoans from './pages/SBALoans'
import Readiness from './pages/Readiness'

// Legal Pages
import Terms from './pages/Terms'
import Privacy from './pages/Privacy'
import FundingDisclaimer from './pages/FundingDisclaimer'
import SMSTerms from './pages/SMSTerms'
import { RefundPolicy, ESignConsent } from './pages/AdditionalLegal'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="funding-solutions" element={<FundingSolutions />} />
        <Route path="apply" element={<ApplyNow />} />
        <Route path="how-it-works" element={<HowItWorks />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="faq" element={<FAQ />} />
        <Route path="contact" element={<Contact />} />
        <Route path="results" element={<Results />} />
        
        {/* Service Routes */}
        <Route path="personal-credit-card-stacking" element={<PersonalCredit />} />
        <Route path="business-credit-card-stacking" element={<BusinessCredit />} />
        <Route path="sba-loans" element={<SBALoans />} />
        <Route path="business-funding-readiness" element={<Readiness />} />

        {/* Legal Routes */}
        <Route path="terms-conditions" element={<Terms />} />
        <Route path="privacy-policy" element={<Privacy />} />
        <Route path="funding-disclaimer" element={<FundingDisclaimer />} />
        <Route path="sms-terms" element={<SMSTerms />} />
        <Route path="refund-policy" element={<RefundPolicy />} />
        <Route path="e-sign-consent" element={<ESignConsent />} />
      </Route>
    </Routes>
  )
}

export default App
