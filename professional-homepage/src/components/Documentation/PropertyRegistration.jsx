import React from 'react';
import './Documentation.css';
import Footer from '../Footer/Footer';

const PropertyRegistration = () => {
  return (
    <>
    <div className="documentation-container">
      <h1>Property Registration</h1>
      <p>
        Property registration is the legal process by which ownership of a property is officially recognized by the government.
        It involves recording the ownership in a government registry and helps protect both buyers and sellers.
      </p>
      <p>
        The process includes verifying the ownership, ensuring that there are no legal disputes, and registering the transfer of ownership in the property records.
      </p>
      <h2>Steps in Property Registration</h2>
      <ul>
        <li>Verification of ownership and documents</li>
        <li>Payment of stamp duty and registration fees</li>
        <li>Filling out the property registration application</li>
        <li>Submission of property documents to the relevant authorities</li>
        <li>Receipt of the registered title deed</li>
      </ul>
    </div>
<Footer/>
</>
  );
};

export default PropertyRegistration;
