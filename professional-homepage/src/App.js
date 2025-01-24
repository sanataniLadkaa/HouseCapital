import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import NotFound from './components/NotFound'; // Import the NotFound component
import Loading from './Loading';
import PurchasePage from './components/House/PurchasePage';

// Lazy load components
const Navbar = lazy(() => import('./components/Navbar/Navbar'));
const Home = lazy(() => import('./components/Home/Home'));
const About = lazy(() => import('./components/About/About'));
const ContactUs = lazy(() => import('./components/ContactUs/ContactUs'));
const LeaseAgreement = lazy(() => import('./components/Documentation/LeaseAgreement'));
const TenantAgreement = lazy(() => import('./components/Documentation/TenantAgreement'));
const PropertyRegistration = lazy(() => import('./components/Documentation/PropertyRegistration'));
const PropertyMaintenance = lazy(() => import('./components/PropertyManagement/PropertyMaintenance'));
const TenantManagement = lazy(() => import('./components/PropertyManagement/TenantManagement'));
const LegalAssistance = lazy(() => import('./components/Assistance/LegalAssistance'));
const Assistance = lazy(() => import('./components/Assistance/Assistance'));
const Investment = lazy(() => import('./components/Assistance/Investment'));
const RentingPage = lazy(() => import('./components/Renting/RentingPage'));
const RetailRent = lazy(() => import('./components/Renting/Retail'));
const OfficeAccommodation = lazy(() => import('./components/Renting/OfficeAccommodation'));
const ApartmentRent = lazy(() => import('./components/Renting/Apartment'));
const IndependentHouseRent = lazy(() => import('./components/Renting/IndependentHouse'));
const PentHouseRent = lazy(() => import('./components/Renting/PentHouse'));
const BuilderFloorRent = lazy(() => import('./components/Renting/BuilderFloor'));
const PlotPurchase = lazy(() => import('./components/Purchase/Plot'));
const RetailPurchase = lazy(() => import('./components/Purchase/Retail'));
const Sale = lazy(() => import('./components/Sale/Sale'));
const OfficeSale = lazy(() => import('./components/Sale/Office'));
const PlotSale = lazy(() => import('./components/Sale/Plot'));
const RetailSale = lazy(() => import('./components/Sale/Retail'));
const BuilderFloorSale = lazy(() => import('./components/Sale/BuilderFloor'));
const VillaSale = lazy(() => import('./components/Sale/Villa'));
const ApartmentSale = lazy(() => import('./components/Sale/Apartment'));
const IndependentHouseSale = lazy(() => import('./components/Sale/IndependentHouse'));
const NotFound = lazy(() => import('./components/NotFound')); // Create a 404 component
const Purchase = lazy(() => import('./components/Purchase/Purchase'));
const App = () => {
  return (
    <Router>
      <div>
        <Suspense fallback={<Loading />}>
          <Navbar />
          <Routes>
            {/* Main Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact-us" element={<ContactUs />} />

            {/* Documentation */}
            <Route path="/documentation/lease-agreement" element={<LeaseAgreement />} />
            <Route path="/documentation/tenant-agreement" element={<TenantAgreement />} />
            <Route path="/documentation/property-registration" element={<PropertyRegistration />} />

            {/* Property Management */}
            <Route path="/property-management/property-maintenance" element={<PropertyMaintenance />} />
            <Route path="/property-management/tenant-management" element={<TenantManagement />} />

            {/* Assistance */}
            <Route path="/Assistance" element={<Assistance/>}/>
            <Route path="/assistance/legal-assistance" element={<LegalAssistance />} />
            {/* <Route path="/assistance/appraisal-valuation" element={<AppraisalValuation />} /> */}
            <Route path="/assistance/investment" element={<Investment />} />

            {/* Renting */}
            <Route path="/renting" element={<RentingPage />} />
            <Route path="/renting/retail" element={<RetailRent />} />
            <Route path="/renting/office-accommodation" element={<OfficeAccommodation />} />
            <Route path="/renting/apartment" element={<ApartmentRent />} />
            <Route path="/renting/independent-house" element={<IndependentHouseRent />} />
            <Route path="/renting/pent-house" element={<PentHouseRent />} />
            <Route path="/renting/builder-floor" element={<BuilderFloorRent />} />

            {/* Purchase */}
            <Route path="/purchase" element={<Purchase/>}/>
            <Route path="/purchase/plot" element={<PlotPurchase />} />
            <Route path="/purchase/retail" element={<RetailPurchase />} />

            {/* Sale */}
            <Route path="/sale" element={<Sale />} />
            <Route path="/sale/office" element={<OfficeSale />} />
            <Route path="/sale/plot" element={<PlotSale />} />
            <Route path="/sale/retail" element={<RetailSale />} />
            <Route path="/sale/builder-floor" element={<BuilderFloorSale />} />
            <Route path="/sale/villa" element={<VillaSale />} />
            <Route path="/sale/apartment" element={<ApartmentSale />} />
            <Route path="/sale/independent-house" element={<IndependentHouseSale />} />

           {/*Purchase House*/}
           <Route path="/" element={<Home />} />
        <Route path="/purchaseHouse" element={<PurchasePage />} />

            {/* 404 Fallback */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
};

export default App;


