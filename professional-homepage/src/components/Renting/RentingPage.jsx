import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const RentingPage = () => {
  return (
    <div className="renting-page">
      <header className="header">
        <h1>Renting Options</h1>
      </header>

      <section className="section">
        <h2>Choose a Renting Option</h2>
        <div className="renting-buttons">
          <Link to="/renting/apartment">
            <button className="renting-button">Apartment</button>
          </Link>
          <Link to="/renting/builder-floor">
            <button className="renting-button">Builder Floor</button>
          </Link>
          <Link to="/renting/independent-house">
            <button className="renting-button">Independent House</button>
          </Link>
          <Link to="/renting/office-accommodation">
            <button className="renting-button">Office Accommodation</button>
          </Link>
          <Link to="/renting/penthouse">
            <button className="renting-button">PentHouse</button>
          </Link>
          <Link to="/renting/retail">
            <button className="renting-button">Retail</button>
          </Link>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2025 Your Company. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default RentingPage;
