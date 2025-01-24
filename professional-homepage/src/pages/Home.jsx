import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const Home = () => {
  return (
    <>
      <Navbar />
      <main className="home-container">
        <section className="hero">
          <h1>Welcome to New Capital Properties</h1>
          <p>Your one-stop solution for real estate needs.</p>
          <button className="cta-button">Explore Now</button>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
