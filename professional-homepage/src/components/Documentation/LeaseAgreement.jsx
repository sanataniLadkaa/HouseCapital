import React from 'react';
import './Documentation.css';
import Footer from '../Footer/Footer';

const LeaseAgreement = () => {
  return (
<>
<div className="documentation-container">
      <h1>Lease Agreement</h1>
      <p>
        A lease agreement is a legally binding contract between a landlord and tenant. 
        It outlines the terms under which the tenant agrees to rent the property from the landlord.
      </p>
      <p>
        The lease includes various details such as rent amount, payment due dates, lease duration, 
        property maintenance responsibilities, and other terms and conditions.
      </p>
      <h2>Key Terms in a Lease Agreement</h2>
      <ul>
        <li>Tenant's responsibilities</li>
        <li>Landlord's obligations</li>
        <li>Lease term duration</li>
        <li>Rent payment schedule</li>
        <li>Security deposit details</li>
      </ul>
    </div>
    <Footer/>
    </>
  );
};

export default LeaseAgreement;
