import React from 'react';

const Logo = () => {
  return (
    <div 
      style={{
        width: '40px',
        height: '40px',
        backgroundColor: '#0066ff',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <span style={{
        color: 'white',
        fontSize: '24px',
        fontWeight: 'bold',
        fontFamily: 'Arial, sans-serif'
      }}>
        A
      </span>
    </div>
  );
};

export default Logo; 