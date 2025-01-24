import React from 'react';
import './Loading.css';

const Loading = () => {
  return (
    <div className="loading-container">
      <div className="running-person"></div>
      <div className="message">Finding your feed...</div>
    </div>
  );
};

export default Loading;
