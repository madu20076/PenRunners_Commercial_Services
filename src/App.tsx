import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Industries from './pages/Industries';
import ServiceAreas from './pages/ServiceAreas';
import LocalSEOPage from './pages/LocalSEOPage';
import About from './pages/About';
import VendorApplication from './pages/VendorApplication';
import GovernmentServices from './pages/GovernmentServices';
import RequestQuotePage from './pages/RequestQuotePage';

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* Main Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/service-areas" element={<ServiceAreas />} />
          <Route path="/about" element={<About />} />
          <Route path="/request-quote" element={<RequestQuotePage />} />
          <Route path="/become-a-service-partner" element={<VendorApplication />} />
          <Route path="/vendor-application" element={<VendorApplication />} />
          <Route path="/government-institutional-services" element={<GovernmentServices />} />

          {/* Local Area SEO Landing Pages */}
          <Route path="/commercial-cleaning-sugar-land" element={<LocalSEOPage />} />
          <Route path="/pressure-washing-sugar-land" element={<LocalSEOPage />} />
          <Route path="/post-construction-cleaning-sugar-land" element={<LocalSEOPage />} />
          <Route path="/commercial-cleaning-katy" element={<LocalSEOPage />} />
          <Route path="/pressure-washing-katy" element={<LocalSEOPage />} />
          <Route path="/post-construction-cleaning-katy" element={<LocalSEOPage />} />
          <Route path="/commercial-cleaning-richmond-tx" element={<LocalSEOPage />} />
          <Route path="/commercial-cleaning-missouri-city-tx" element={<LocalSEOPage />} />
          <Route path="/commercial-cleaning-pearland" element={<LocalSEOPage />} />
          <Route path="/commercial-cleaning-cypress-tx" element={<LocalSEOPage />} />

          {/* 12 Individual Commercial Service Pages handled via slug */}
          <Route path="/commercial-pressure-washing-houston" element={<ServiceDetail />} />
          <Route path="/post-construction-cleaning-houston" element={<ServiceDetail />} />
          <Route path="/commercial-janitorial-services-houston" element={<ServiceDetail />} />
          <Route path="/exterior-building-cleaning-houston" element={<ServiceDetail />} />
          <Route path="/concrete-sidewalk-cleaning-houston" element={<ServiceDetail />} />
          <Route path="/commercial-window-cleaning-houston" element={<ServiceDetail />} />
          <Route path="/parking-lot-cleaning-sweeping-houston" element={<ServiceDetail />} />
          <Route path="/commercial-property-cleanouts-houston" element={<ServiceDetail />} />
          <Route path="/apartment-turnover-cleaning-houston" element={<ServiceDetail />} />
          <Route path="/day-porter-services-houston" element={<ServiceDetail />} />
          <Route path="/commercial-floor-carpet-cleaning-houston" element={<ServiceDetail />} />
          <Route path="/grounds-exterior-maintenance-houston" element={<ServiceDetail />} />

          {/* Catch-all route */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </Router>
  );
}
