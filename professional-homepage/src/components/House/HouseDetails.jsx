import React, { useState } from 'react';
import BookingForm from './BookingForm';
import './style.css';

const HouseDetails = ({ house, onClose }) => {
  const [showBooking, setShowBooking] = useState(false);

  return (
    <div className="house-details">
      <button onClick={onClose} className="close-btn">Close</button>
      <h2>{house.name}</h2>
      <p>{house.description}</p>
      <p><strong>Price:</strong> {house.price}</p>
      <p><strong>Location:</strong> {house.location}</p>
      
      <div className="image-gallery">
        {house.images.map((img, index) => (
          <img key={index} src={img} alt={`${house.name} ${index + 1}`} className="gallery-image" />
        ))}
      </div>

      <button onClick={() => setShowBooking(true)} className="book-btn">Book Now</button>

      {showBooking && <BookingForm house={house} />}
    </div>
  );
};

export default HouseDetails;
