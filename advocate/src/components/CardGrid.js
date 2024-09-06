// CardGrid.js
import React from 'react';
import { Link } from 'react-router-dom';

const CardGrid = () => {
  const cardData = [
    { icon: '📚', title: 'Legal Property Possession Delay', buttonText: 'Book Now' },
    { icon: '⚖️', title: 'Legal Apostille Certificate', buttonText: 'Book Now' },
    { icon: '📝', title: 'Document Possession Delay', buttonText: 'Book Now' },
    { icon: '💼', title: 'Mutual Consent Divorce Law', buttonText: 'Book Now' },
    { icon: '🏠', title: 'Trademark Registration', buttonText: 'Book Now' },
    { icon: '📑', title: 'Cheque Bounce Complaint', buttonText: 'Book Now' },
    { icon: '🔐', title: 'Wrongful Termination - Legal Notice', buttonText: 'Book Now' },
    { icon: '🤝', title: 'Recovery of Money', buttonText: 'Book Now' },
  ];

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Legal Services</h2>

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
                  <h5
                    className="card-title fs-5 mb-3 text-center"
                    style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', color: '#333' }}
                  >
                    {card.title}
                  </h5>
                  <button
                    className="btn btn-primary mt-auto"
                    style={{
                      backgroundColor: '#4caf50',
                      borderColor: '#4caf50',
                      transition: 'background-color 0.3s ease-in-out',
                    }}
                    onClick={() => handleBookNow(card.title)}
                    onMouseOver={(e) => {
                      e.currentTarget.style.backgroundColor = '#45a049';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.backgroundColor = '#4caf50';
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

export default CardGrid;
