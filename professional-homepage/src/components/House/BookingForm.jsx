import React, { useState } from 'react';
import './style.css';

const BookingForm = ({ house }) => {
  const [formData, setFormData] = useState({ name: '', email: '', date: '' });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const bookingData = {
      ...formData,
      house: house.name
    };

    try {
      const response = await fetch('http://localhost:5000/api/book-house', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bookingData),
      });

      if (response.ok) {
        const result = await response.json();
        setMessage(result.message);
        setFormData({ name: '', email: '', date: '' });
      } else {
        setMessage('Booking failed. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('Error submitting booking. Please try later.');
    }
  };

  return (
    <div className="booking-form">
      <h3>Book {house.name}</h3>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="name" 
          placeholder="Your Name" 
          value={formData.name} 
          onChange={handleChange} 
          required 
        />
        <input 
          type="email" 
          name="email" 
          placeholder="Your Email" 
          value={formData.email} 
          onChange={handleChange} 
          required 
        />
        <input 
          type="date" 
          name="date" 
          value={formData.date} 
          onChange={handleChange} 
          required 
        />
        <button type="submit">Confirm Booking</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default BookingForm;
