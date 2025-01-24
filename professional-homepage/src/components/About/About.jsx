import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about">
      <div className="banner">
        <h1>About Us</h1>
        <p>Welcome to New Capital Properties, where your property journey begins.</p>
      </div>
      <div className="content">
        <div className="section">
          <h2>Our Mission</h2>
          <p>
            Our mission is to provide exceptional property solutions to our clients. Whether you are buying, selling, renting,
            or managing a property, we aim to deliver a smooth and hassle-free experience with utmost transparency and integrity.
          </p>
        </div>
        <div className="section">
          <h2>Our Vision</h2>
          <p>
            To become the leading real estate firm, trusted for its expertise, commitment to quality, and a wide range of property solutions.
          </p>
        </div>
        <div className="section">
          <h2>Our Values</h2>
          <ul>
            <li><strong>Integrity:</strong> We value honesty and transparency in all our dealings.</li>
            <li><strong>Excellence:</strong> We are committed to providing the highest level of service.</li>
            <li><strong>Customer-Centric:</strong> Our clients’ needs are always our top priority.</li>
            <li><strong>Innovation:</strong> We embrace new technologies and ideas to improve our services.</li>
          </ul>
        </div>
      </div>
      <div className="team">
        <h2>Meet Our Team</h2>
        <div className="team-members">
          <div className="team-member">
            <img src="team-member-1.jpg" alt="Team Member" />
            <h3>John Doe</h3>
            <p>CEO & Founder</p>
          </div>
          <div className="team-member">
            <img src="team-member-2.jpg" alt="Team Member" />
            <h3>Jane Smith</h3>
            <p>Director of Sales</p>
          </div>
          <div className="team-member">
            <img src="team-member-3.jpg" alt="Team Member" />
            <h3>Emily Johnson</h3>
            <p>Property Manager</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
