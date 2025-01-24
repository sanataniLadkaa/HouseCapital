import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/');
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <button 
        onClick={goToHome} 
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          color: '#fff',
          backgroundColor: '#007BFF',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          marginTop: '20px'
        }}
      >
        Go to Home
      </button> <br></br><br></br>
      <img 
        src="/assets/images/illustration-oops-404-error-with-a-broken-robot-internet-web-browser-server-robot-error-404-found-host-not-found.png" 
        alt="404 Error Illustration" 
        style={{ maxWidth: '100%', height: 'auto', marginBottom: '20px' }} 
      />
      

    </div>
  );
};

export default NotFound;
