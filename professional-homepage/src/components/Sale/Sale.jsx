import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import Footer from '../Footer/Footer';

const Sale = () => {
  return (
    <>
    <div className="sale">
      <header className="header">
        <h1>sale Options</h1>
      </header>

      <section className="section">
        <h2>Choose a sale Option</h2>
        <div className="sale-buttons">
          <Link to="/sale/apartment">
            <button className="sale-button">Apartment</button>
          </Link>
          <Link to="/sale/builder-floor">
            <button className="sale-button">Builder Floor</button>
          </Link>
          <Link to="/sale/independent-house">
            <button className="sale-button">Independent House</button>
          </Link>
          <Link to="/sale/office-accommodation">
            <button className="sale-button">Office Accommodation</button>
          </Link>
          <Link to="/sale/Plot">
            <button className="sale-button">Plot</button>
          </Link>
          <Link to="/sale/retail">
            <button className="sale-button">Retail</button>
          </Link>
          <Link to="/sale/Villa">
            <button className='sale-button'>Villa</button>
          </Link>
        </div>
      </section>


    </div>
         <Footer/>
        </>
  );
};

export default Sale;
