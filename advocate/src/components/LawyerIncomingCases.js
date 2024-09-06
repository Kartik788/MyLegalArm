import React, { useState, useEffect } from 'react';
import { useLawyer } from './LawyerContext';
import { getDocs, getDoc, doc, collection, updateDoc ,setDoc, deleteDoc} from 'firebase/firestore';
import { db } from './Firebase';
import { Card, Container, Col, Row, Button } from 'react-bootstrap';

const LawyerIncomingCases = () => {
  const { lawyerId } = useLawyer();
  const [lawyerLocation, setLawyerLocation] = useState(null);
  const [selectedCases, setSelectedCases] = useState([]);

  useEffect(() => {
    const fetchLawyerLocation = async () => {
      try {
        const lawyerDocRef = doc(collection(db, 'Lawyers'), lawyerId);
        const lawyerDocSnapshot = await getDoc(lawyerDocRef);

        if (lawyerDocSnapshot.exists()) {
          const userData = lawyerDocSnapshot.data();
          const location = userData.location;
          setLawyerLocation(location);

          fetchPendingCases(location);
        } else {
          console.log('Lawyer not found.');
        }
      } catch (error) {
        console.error('Error fetching lawyer location:', error.message);
      }
    };

    fetchLawyerLocation();
  }, [lawyerId]);

  const fetchPendingCases = async (lawyerLocation) => {
    try {
      const pendingCasesRef = collection(db, 'PendingCases');
      const pendingCasesSnapshot = await getDocs(pendingCasesRef);

      const selectedCases = [];

      pendingCasesSnapshot.forEach((doc) => {
        const caseData = doc.data();
        const caseLocation = caseData.currentLocation;
        const distance = calculateDistance(lawyerLocation, caseLocation);

        if (distance <= 10) {
          selectedCases.push({ id: doc.id, distance, ...caseData });
        }
      });

      setSelectedCases(selectedCases);
    } catch (error) {
      console.error('Error fetching pending cases:', error.message);
    }
  };

  const calculateDistance = (location1, location2) => {
    const earthRadius = 6371; // Earth's radius in kilometers
    const lat1 = location1.latitude;
    const lon1 = location1.longitude;
    const lat2 = location2.latitude;
    const lon2 = location2.longitude;

    const dLat = toRadians(lat2 - lat1);
    const dLon = toRadians(lon2 - lon1);

    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRadians(lat1)) *
        Math.cos(toRadians(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    const distance = earthRadius * c; // Distance in kilometers

    return distance;
  };

  const toRadians = (degrees) => {
    return (degrees * Math.PI) / 180;
  };

  const acceptCase = async (caseId) => {
    try {
      const caseRef = doc(collection(db, 'PendingCases'), caseId);
      const caseDoc = await getDoc(caseRef);

      if (caseDoc.exists()) {
        const caseData = caseDoc.data();

        await updateDoc(caseRef, { status: 'Accepted', assignedLawyer: lawyerId });

        const activeCasesRef = collection(db, 'ActiveCases');
        await setDoc(doc(activeCasesRef, caseId), caseData);

        await deleteDoc(caseRef);

        // Refetch pending cases after accepting one
        fetchPendingCases(lawyerLocation);
      } else {
        console.log('Case not found.');
      }
    } catch (error) {
      console.error('Error accepting case:', error.message);
    }
  };
  

  return (
    <Container>
      <h2 className="text-center mb-4">Incoming Cases</h2>

      {selectedCases.length > 0 ? (
        <Row xs={1} md={2} lg={3} className="g-4">
          {selectedCases.map((caseItem) => (
            <Col key={caseItem.id} className="d-flex justify-content-center">
              <Card style={{ width: '100%' }}>
                <Card.Body>
                  <Card.Title>Case ID: {caseItem.id}</Card.Title>
                  <Card.Text>Distance from Lawyer: {caseItem.distance} km</Card.Text>
                  <Card.Text>Brief Case Name: {caseItem.briefCaseName}</Card.Text>
                  <Card.Text>Case Description: {caseItem.caseDescription}</Card.Text>
                  <Card.Text>Case Type: {caseItem.caseType}</Card.Text>
                  <Card.Text>Customer ID: {caseItem.customerId}</Card.Text>
                  <Card.Text>Desired Outcome: {caseItem.desiredOutcome}</Card.Text>
                  <Card.Text>Opposing Party Info: {caseItem.opposingPartyInfo}</Card.Text>
                  <Card.Text>Additional Info: {caseItem.additionalInfo}</Card.Text>
                  <Card.Text>Order of Events:</Card.Text>
                  <Card.Text>Distance from each lawyer</Card.Text>
                  <Card.Text>Fees of each lawyer</Card.Text>
                  <ul>
                    {caseItem.orderOfEvents.map((event, index) => (
                      <li key={index}>{event}</li>
                    ))}
                  </ul>
                  <Button onClick={() => acceptCase(caseItem.id)} variant="success">Accept</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      ) : (
        <p className="text-center">No cases within 10 km radius.</p>
      )}
    </Container>
  );
};

export default LawyerIncomingCases;
