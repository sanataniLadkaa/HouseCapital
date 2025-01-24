import React from 'react';
import './style.css';

const HouseList = ({ houses, onSelectHouse }) => {
  return (
    <div className="house-list">
      <h2>Available Houses</h2>
      <div className="house-container">
        {houses.map((house) => (
          <div key={house.id} className="house-card" onClick={() => onSelectHouse(house)}>
            <img src={house.images[0]} alt={house.name} className="house-image" />
            <h3>{house.name}</h3>
            <p>{house.price}</p>
            <p>{house.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HouseList;
