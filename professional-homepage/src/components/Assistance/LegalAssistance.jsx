import React from 'react';
import './Assistance.css';
import Footer from '../Footer/Footer'; // Importing the Footer component

const LegalAssistance = () => {
  return (
    <>
    <div className="section">
      <h2>Legal Assistance</h2>
      <p>
        Our legal experts provide comprehensive assistance for all property-related legal matters. Whether it's drafting lease agreements, resolving property disputes, or advising on property rights, we are here to help.
      </p>
      {/* Include the Footer at the bottom */}
      
    </div>
    <Footer /></>
  );
};

export default LegalAssistance;
