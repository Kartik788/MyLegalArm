import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import ForLawyers from './components/ForLawyers';
import Consultation from './components/Consultation';
import MoneyRecovery from './components/services/MoneyRecovery';
import RERA from './components/services/RERA';
import NCLT from './components/services/NCLT';
import LAC from './components/services/LAC';
import Divorce from './components/services/Divorce';
import TR from './components/services/TR'
import CBC from './components/services/CBC';
import WT from './components/services/WT';
import CourtM from './components/services/CourtM';
import MarriageC from './components/services/MarriageC';
import NameChange from './components/services/NameChange';
import MedicalN from './components/services/MedicalN';
import ApostilleC from './components/services/ApostilleC';
import GstReg from './components/services/GstReg';
import CompanyI from './components/services/CompanyI';
import FssaiL from './components/services/FssaiL';
import ActiveCases from './components/ActiveCases';
import PastCases from './components/PastCases';
import CustomerDashboard from './components/CustomerDashboard';
import LawyerDashboard from './components/LawyerDashboard';
import BookConsultation from './components/BookConsultation';
import PendingCases from './components/PendingCases';
import { CustomerProvider } from './components/CustomerContext';
import { LawyerProvider } from './components/LawyerContext';
import LawyerActiveCases from './components/LawyerActiveCases';
import LawyerPastCases from './components/LawyerPastCases';
import LawyerIncomingCases from './components/LawyerIncomingCases';

function App() {
  return (
    <Router>
      <CustomerProvider>
      <LawyerProvider>

      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/law" element={<ForLawyers />} />
          <Route path="/consultation" element={<Consultation />} />
          <Route path="/dashboard" element={<LawyerDashboard />} />

          <Route path="/services/recovery-of-money" element={<MoneyRecovery />} />
          <Route path="/services/legal-property-possession-delay" element={<RERA />} />
          <Route path="/services/legal-apostille-certificate" element={<LAC />} />
          <Route path="/services/document-possession-delay" element={<NCLT />} />
          <Route path="/services/mutual-consent-divorce-law" element={<Divorce />} />
          <Route path="/services/trademark-registration" element={<TR />} />
          <Route path="/services/cheque-bounce-complaint" element={<CBC />} />
          <Route path="/services/wrongful-termination---legal-notice" element={<WT />} />

          <Route path="/services/court-marriage" element={<CourtM />} />
          <Route path="/services/marriage-certificate" element={<MarriageC />} />
          <Route path="/services/name-change" element={<NameChange />} />
          <Route path="/services/medical-negligence" element={<MedicalN />} />
          <Route path="/services/apostille-certificate" element={<ApostilleC />} />
          <Route path="/services/gst-registration" element={<GstReg />} />
          <Route path="/services/company-incorporation" element={<CompanyI />} />
          <Route path="/services/fssai-license" element={<FssaiL />} />

          <Route path="/customer" element={<CustomerDashboard />} />
          <Route path="/customer/active-cases" element={<ActiveCases />} />
          <Route path="/customer/past-cases" element={<PastCases />} />
          <Route path="/customer/book-consultation" element={<BookConsultation/>}/>
          <Route path="/customer/pending-cases" element={<PendingCases/>}/>

          <Route path="/lawyer/active-cases" element={<LawyerActiveCases />} />
          <Route path="/lawyer/past-cases" element={<LawyerPastCases/>}/>
          <Route path="/lawyer/incoming-cases" element={<LawyerIncomingCases/>}/>

        </Routes>
      </div>
      </LawyerProvider>
      </CustomerProvider>
    </Router>
  );
}

export default App;
