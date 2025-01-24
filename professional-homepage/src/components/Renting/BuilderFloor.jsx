import React from 'react';
import './Renting.css';
import Footer from '../Footer/Footer';

const BuilderFloor = () => {
  return (
    <>
    <div className="renting-container">
      <h1>Builder Floor for Rent</h1>
      <p>
        A builder floor is an independent floor in a multi-story building. It offers the advantages of privacy and space with the added benefit of being part of a community.
      </p>
      <h2>Features of Builder Floors</h2>
      <ul>
        <li>Separate entry and exit for each floor</li>
        <li>Ample living space with custom floor plans</li>
        <li>Ideal for families and small businesses</li>
        <li>Close proximity to urban amenities</li>
      </ul>

      {/* Footer included here */}
      
    </div>
    <Footer />
    </>
  );
};

export default BuilderFloor;
