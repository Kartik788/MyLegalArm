import React, { useState,useEffect } from 'react';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { doc, setDoc, getDocs, query, where, collection } from "firebase/firestore";
import { v4 as uuidv4 } from 'uuid';
import { useCustomer } from './CustomerContext';

// Initialize Firebase with your configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1FOEk9juU_uWqLHNgWWVoL9nfLnnxw28",
  authDomain: "advocates-74104.firebaseapp.com",
  projectId: "advocates-74104",
  storageBucket: "advocates-74104.appspot.com",
  messagingSenderId: "10552889468",
  appId: "1:10552889468:web:7f7665570b41f76fbcb9f9",
  measurementId: "G-74W28KWKSD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

const StylishForm = () => {
  const { customerId } = useCustomer();

  const [briefCaseName, setBriefCaseName] = useState('');
  const [caseType, setCaseType] = useState('');
  const [caseDescription, setCaseDescription] = useState('');
  const [opposingPartyInfo, setOpposingPartyInfo] = useState('');
  const [orderOfEvents, setOrderOfEvents] = useState([]);
  const [newEvent, setNewEvent] = useState('');
  const [desiredOutcome, setDesiredOutcome] = useState('');
  const [additionalInfo, setAdditionalInfo] = useState('');
  const [currentLocation, setCurrentLocation] = useState(null);

  useEffect(() => {
    // Get current location when component mounts
    const fetchLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setCurrentLocation({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude
            });
          },
          (error) => {
            console.error('Error fetching location:', error.message);
          }
        );
      } else {
        console.log('Geolocation is not supported by this browser.');
      }
    };

    fetchLocation();
  }, []);


  const handleBriefCaseNameChange = (e) => {
    setBriefCaseName(e.target.value);
  };

  const handleCaseTypeChange = (e) => {
    setCaseType(e.target.value);
  };

  const handleCaseDescriptionChange = (e) => {
    setCaseDescription(e.target.value);
  };

  const handleAdditionalInfoChange = (e) => {
    setAdditionalInfo(e.target.value);
  };

  const handleOpposingPartyInfoChange = (e) => {
    setOpposingPartyInfo(e.target.value);
  };

  const handleOrderOfEventsChange = (e) => {
    setNewEvent(e.target.value);
  };

  const handleAddEvent = () => {
    if (newEvent.trim() !== '') {
      setOrderOfEvents((prevEvents) => [...prevEvents, newEvent]);
      setNewEvent('');
    }
  };

  const handleDeleteEvent = (index) => {
    setOrderOfEvents((prevEvents) => prevEvents.filter((_, i) => i !== index));
  };

  const handleDesiredOutcomeChange = (e) => {
    setDesiredOutcome(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form fields (you can customize this part)
    if (!briefCaseName || !caseType || !caseDescription || !opposingPartyInfo || orderOfEvents.length === 0 || !desiredOutcome) {
      // Add more validation if needed
      console.log('Please fill in all the details');
      return;
    }

    // If all fields are filled, proceed to send request to Firestore

    try {
      // Generate a unique ID using uuid
      const uniqueId = uuidv4();

      // Add a new document to the "PendingCases" collection in Firestore with form data
      await setDoc(doc(db, "PendingCases", uniqueId), {
        customerId,
        briefCaseName,
        caseType,
        caseDescription,
        opposingPartyInfo,
        orderOfEvents,
        desiredOutcome,
        additionalInfo,
        currentLocation,
      });

      console.log('Form data sent to Firestore successfully!');
    } catch (error) {
      console.error('Error submitting form data:', error.message);
    }
  };


  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Case Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="briefCaseName" className="form-label">
            Brief Case Name
          </label>
          <input
            type="text"
            className="form-control"
            id="briefCaseName"
            value={briefCaseName}
            onChange={handleBriefCaseNameChange}
            placeholder="Enter brief case name"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="caseType" className="form-label">
            Case Type
          </label>
          <select
            className="form-select"
            id="caseType"
            value={caseType}
            onChange={handleCaseTypeChange}
            required
          >
            <option value="">Select Case Type</option>
            <option value="Property Law">Property Law</option>
            <option value="Divorce">Divorce</option>
            <option value="Family">Family</option>
            <option value="Employment">Employment</option>
            <option value="Recovery of Money">Recovery of Money</option>
            <option value="Startup">Startup</option>
            <option value="IPR">IPR</option>
            <option value="Corporate">Corporate</option>

            <option value="General Legal">General Legal</option>
            <option value="Criminal">Criminal</option>
            <option value="Consumer Protection">Consumer Protection</option>
            <option value="Civil">Civil</option>
            <option value="Corporate and Individual Taxation">Corporate and Individual Taxation</option>
            <option value="Marriage">Marriage</option>
            <option value="Immigration Services">Immigration Services</option>
            <option value="Licenses">Licenses</option>

          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="caseDescription" className="form-label">
            Case Description
          </label>
          <textarea
            className="form-control"
            id="caseDescription"
            value={caseDescription}
            onChange={handleCaseDescriptionChange}
            placeholder="Enter case description"
            rows="4"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="opposingPartyInfo" className="form-label">
            Opposing Party Info
          </label>
          <textarea
            className="form-control"
            id="opposingPartyInfo"
            value={opposingPartyInfo}
            onChange={handleOpposingPartyInfoChange}
            placeholder="Enter opposing party information"
            rows="4"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="orderOfEvents" className="form-label">
            Chronological Order of Events
          </label>
          <div className="d-flex">
            <textarea
              className="form-control"
              id="orderOfEvents"
              value={newEvent}
              onChange={handleOrderOfEventsChange}
              placeholder="Enter new event"
              rows="4"
            />
            <button type="button" className="btn btn-primary ms-2" onClick={handleAddEvent}>
              Add Event
            </button>
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label">Visual Timeline</label>
          <ul className="list-group">
            {orderOfEvents.map((event, index) => (
              <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                {event}
                <button
                  type="button"
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDeleteEvent(index)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-3">
          <label htmlFor="desiredOutcome" className="form-label">
            Desired Outcome
          </label>
          <textarea
            className="form-control"
            id="desiredOutcome"
            value={desiredOutcome}
            onChange={handleDesiredOutcomeChange}
            placeholder="Enter desired outcome"
            rows="4"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="additionalInfo" className="form-label">
            Additional Information
          </label>
          <textarea
            className="form-control"
            id="additionalInfo"
            value={additionalInfo}
            onChange={handleAdditionalInfoChange}
            placeholder="Enter additional information"
            rows="4"
          />
        </div>

        <div className="d-flex justify-content-center" style={{ margin: 25 }}>
          <button type="submit" className="btn btn-primary" style={{ width: 200 }}>
            Submit
          </button>
        </div>

      </form>
    </div>
  );
};

export default StylishForm;
