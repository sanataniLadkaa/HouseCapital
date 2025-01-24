import React from 'react';
import './Renting.css';
import Footer from '../Footer/Footer';

const Apartment = () => {
  return (
    <>
    <div className="renting-container">
      <h1>Apartment for Rent</h1>
      <p>
        Renting an apartment is an ideal solution for individuals or families looking for a comfortable and convenient place to live. With a range of sizes and locations available, apartments offer a variety of living options.
      </p>
      <h2>Features of Apartments for Rent</h2>
      <ul>
        <li>Modern amenities and facilities</li>
        <li>Various sizes to suit different needs</li>
        <li>Accessible locations close to shopping, transport, and schools</li>
        <li>Flexible lease terms and conditions</li>
      </ul>

      {/* Footer included here */}
      
    </div>
   <Footer /></>
  );
};

export default Apartment;
