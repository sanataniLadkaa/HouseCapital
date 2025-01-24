import React from 'react';
// import LegalAssistance from './LegalAssistance';
// import AppraisalValuation from './AppraisalValuation';
// import Investment from './Investment';
import Footer from '../Footer/Footer';
import './Assistance.css';
import { Link } from 'react-router-dom';

const Assistance = () => {
  return (
   
    <>
    <div className="renting-page">
      <header className="header">
        <h1>Assistance Options</h1>
      </header>

      <section className="section">
        <h2>Choose a Assistance Option</h2>
        <div className="renting-buttons">
          <Link to="/assistance/investment">
            <button className="renting-button">Investment</button>
          </Link>
          <Link to="/assistance/legal-assistance">
            <button className="renting-button">LegasAssitance</button>
          </Link>
          
        </div>
      </section>

     
    </div>
    <Footer/>
    </>

  );
};

export default Assistance;


