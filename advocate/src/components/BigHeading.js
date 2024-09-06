// src/components/BigHeading.js
import React from 'react';

function BigHeading() {

    const headingStyle = {
        fontSize: '2.2rem',  // Adjust the size as needed
        fontWeight: 'bold',
        color: '#333333',
      };

  return (
    <div className="text-center mt-4">
      <h1 className="display-3" style={headingStyle}>Your trusted legal partner </h1>
    </div>
  );
}

export default BigHeading;
