import React, { useEffect, useState } from 'react';
import { useCustomer } from './CustomerContext';
import { getDocs, query, where, collection } from 'firebase/firestore';
import { db } from './Firebase';

const PastCases = () => {
  const { customerId } = useCustomer();
  const [pastCases, setPastCases] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPastCases = async () => {
      try {
        const q = query(collection(db, 'PastCases'), where('CustomerID', '==', customerId));
        const querySnapshot = await getDocs(q);

        const casesData = [];
        querySnapshot.forEach((doc) => {
          casesData.push({ id: doc.id, ...doc.data() });
        });

        setPastCases(casesData);
      } catch (error) {
        console.error('Error fetching past cases:', error.message);
        setError('Error fetching past cases. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchPastCases();
  }, [customerId]);

  return (
    <div className="container-fluid mt-5">
      <h2 className="text-center mb-4">Past Cases</h2>
      <div className="row">
        {loading ? (
          <p className="text-center">Loading...</p>
        ) : error ? (
          <p className="text-center text-danger">{error}</p>
        ) : (
          pastCases.map((pastCase) => (
            <div key={pastCase.id} className="col-12 mb-4" style={{ margin: 25 }}>
              <div className="card shadow w-100 mx-2">
                <div className="card-body">
                  <h5 className="card-title">{pastCase.CaseHeading}</h5>
                  <p className="card-subtitle mb-2 text-muted">{`Case Type: ${pastCase.CaseType}`}</p>
                  <p className="card-text">{`Description: ${pastCase.CaseDescription}`}</p>
                  <p className="card-text">{`Customer ID: ${pastCase.CustomerID}`}</p>
                  <p className="card-text">{`Lawyer ID: ${pastCase.LawyerID}`}</p>
                  <p className="card-text">{`Opposing Party Info: ${pastCase.OpposingPartyInfo}`}</p>
                  <p className="card-text">{`Start Date: ${pastCase.StartDate}`}</p>
                  <p className="card-text">{`End Date: ${pastCase.CloseDate}`}</p>

                  {/* Chronological Order of Events */}
                  <div>
                    <h6 className="fw-bold">Chronological Order of Events:</h6>
                    <ul className="list-unstyled">
                      {pastCase.OrderEvents.map((event, index) => (
                        <li key={index} className="mb-2">
                          <span className="bullet">&#8226;</span> {event}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <p className="card-text">{`Documents: ${pastCase.Evidence}`}</p>
                  <p className="card-text">{`Desired Outcome: ${pastCase.DesiredOutcome}`}</p>
                  <p className="card-text">{`Additional Information: ${pastCase.AdditionalInfo}`}</p>
                  <p className="card-text">{`Status: ${pastCase.Status}`}</p>

                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default PastCases;
