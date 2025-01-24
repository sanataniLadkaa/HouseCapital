import React from 'react';
import './Documentation.css';
import Footer from '../Footer/Footer';

const TenantAgreement = () => {
  return (
    <>
    <div className="documentation-container">
      <h1>Tenant Agreement</h1>
      <p>
        A tenant agreement is a contract between the property owner (landlord) and the person renting the property (tenant).
        It contains information about the property, responsibilities, and rights of both parties.
      </p>
      <p>
        The tenant agreement is crucial to ensure that both parties understand the terms and conditions of the tenancy.
        It covers aspects like rent payment, lease duration, and maintenance responsibilities.
      </p>
      <h2>Important Points in a Tenant Agreement</h2>
      <ul>
        <li>Rent amount and payment due dates</li>
        <li>Conditions for renewing or terminating the agreement</li>
        <li>Tenant's rights and obligations</li>
        <li>Property maintenance and repairs</li>
        <li>Deposit terms and conditions</li>
      </ul>
    </div>
    <Footer/>
    </>
  );
};

export default TenantAgreement;
