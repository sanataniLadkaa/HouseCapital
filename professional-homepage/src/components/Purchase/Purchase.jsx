import React from 'react';
// import { Link } from 'react-router-dom';
import './Purchase.css';
import Plot from './Plot';
import Commercial from './Commercial'
import Retail from './Retail'
const RentingPage = () => {
  return (
    <div className="renting-page">
      <header className="header">
        <h1>Purchasing Options</h1>
      </header>

      <section className="section">
        <h2>Choose a Purchasing Option</h2>
        <div className="renting-buttons">
        <Plot/>
        <Commercial/>
        <Retail/>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2025 Your Company. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default RentingPage;
