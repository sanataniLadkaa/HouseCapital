import React from 'react';
import LegalAssistance from './LegalAssistance';
import AppraisalValuation from './AppraisalValuation';
import Investment from './Investment';
import './Assistance.css';
import Footer from '../Footer/Footer';

const Assistance = () => {
  return (
    <>
    <div className="assistance">
      <div className="banner">
        <h1>Assistance Services</h1>
        <p>Your trusted partner for all property-related assistance.</p>
      </div>
      <div className="content">
        <LegalAssistance />
        <AppraisalValuation />
        <Investment />
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Assistance;
