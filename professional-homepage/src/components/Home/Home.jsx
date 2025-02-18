import React from 'react';
import { Link } from 'react-router-dom'; // Correct import for Link
import './style.css';
import PurchasePage from '../House/PurchasePage';
import axios from 'axios';


const Home = () => {
  
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get('https://house-capital.vercel.app/api/services');
        setServices(response.data);
      } catch (error) {
        console.error('Error fetching services:', error);
      }
    };
  const openChatbot = () => {
    const chatbotWindow = window.open(
      'chat.html',  // Path relative to public directory
      'ChatbotWindow', 
      'width=400,height=600,left=100,top=100,resizable=no,scrollbars=no'
    );
  
    if (!chatbotWindow) {
      alert("Popup blocked! Please allow popups for this website.");
    }
  };
  
  
  
  

  return (
    <div className="homepage">
      <header className="header">
        {/* Your header content here */}
      </header>

      <section className="hero">
        <h1>Welcome to yours Real Capital </h1>
        <p>Your success starts here. Let's achieve your goals together.</p>
        <Link to="/contact-us">
          <button className="cta-button">Get Started</button>
        </Link>
      </section>

      <section id="about" className="section">
        <h2>About Us</h2>
        <p>We are a team of professionals committed to delivering the best solutions for our clients.</p>
      </section>

      <section id="AI" className='section'>
        {/* <h2>House recommendation</h2> */}
        <PurchasePage/>
      </section>

      <section id="services" className="section">
      
        <h2>Services</h2>
        
        <div className="services-container">
        
          <Link to="/property-management/property-maintenance" className="service-card">
            Property Management
          </Link>
          {/* <Link to="/renting/apartment" className="service-card">
            Apartment Renting
          </Link> */}
          <Link to="/renting" className="service-card">
            Renting
          </Link>
          <Link to="/sale" className="service-card">
          Sale
          </Link>
        </div>
      </section>

      <section id="services" className="section">
        <h2>Assistance</h2>
        <div className="services-container">
          <Link to="/Assistance" className="service-card">
          Assistance
          </Link>
          
        </div>
        
      </section>
<section id="services" className="section">

  <h2>Purchase</h2>

  <div className="services-container">
    <Link to="/purchase" className="service-card">
    Purchase
    </Link>
  </div>
  
</section>


      <footer className="footer">
        <p>&copy; 2025 Your Company. All Rights Reserved.</p>
      </footer>
      <button className="chatbot-button" onClick={openChatbot}>
        💬 Chat with AI
      </button>
    </div>
  );
};

export default Home;
