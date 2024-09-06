// GovernmentReg.js
import React from 'react';
import { Link } from 'react-router-dom';

const GovernmentReg = () => {
  const cardData = [
    { icon: '📚', title: 'Marriage Certificate', buttonText: 'Book Now' },
    { icon: '⚖️', title: 'Court Marriage', buttonText: 'Book Now' },
    { icon: '📝', title: 'Name Change', buttonText: 'Book Now' },
    { icon: '💼', title: 'Apostille Certificate', buttonText: 'Book Now' },
    { icon: '🏠', title: 'Medical Negligence', buttonText: 'Book Now' },
    { icon: '📑', title: 'Company Incorporation', buttonText: 'Book Now' },
    { icon: '🔐', title: 'GST Registration', buttonText: 'Book Now' },
    { icon: '🤝', title: 'FSSAI License', buttonText: 'Book Now' },
    { icon: '🤝', title: 'FSSAI Legal Heir Certificate', buttonText: 'Book Now' },
  ];

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Government Registration</h2>

      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
        {cardData.map((card, index) => (
          <div className="col" key={index} style={{ marginBottom: '20px' }}>
            <Link to={`/services/${card.title.replace(/\s+/g, '-').toLowerCase()}`}>
              {/* Link to navigate to the specific service page */}
              <div
                className="card h-100"
                style={{
                  backgroundColor: '#fff',
                  border: '1px solid #e0e0e0',
                  borderRadius: '10px',
                  transition: 'transform 0.3s ease-in-out',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                  overflow: 'hidden',
                }}
                onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              >
                <div
                  className="card-body d-flex flex-column align-items-center"
                  style={{ padding: '20px' }}
                >
                  <span style={{ fontSize: '2rem', marginBottom: '1rem' }}>{card.icon}</span>
                  <h5 className="card-title fs-5 mb-3 text-center">{card.title}</h5>
                  <button
                    className="btn btn-primary mt-auto"
                    style={{
                      backgroundColor: '#28a745', // Green color
                      borderColor: '#28a745',
                    }}
                    onClick={() => handleBookNow(card.title)}
                    onMouseOver={(e) => {
                      e.currentTarget.style.backgroundColor = '#218838';
                      e.currentTarget.style.borderColor = '#218838';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.backgroundColor = '#28a745';
                      e.currentTarget.style.borderColor = '#28a745';
                    }}
                  >
                    {card.buttonText}
                  </button>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

const handleBookNow = (title) => {
  // Implement your logic for booking based on the card title
  console.log(`Book Now clicked for ${title}`);
};

export default GovernmentReg;
