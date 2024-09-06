import React, { useEffect, useState } from 'react';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { doc, setDoc, getDocs, query, where, collection } from "firebase/firestore";
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';
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

function Navbar() {

  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false); // State to determine whether to show login or sign-up section

  // Add the following state declarations
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    mobile: ''
    // Add more form fields as needed
  });

  const handleFormChange = (fieldName, value) => {
    setFormData({
      ...formData,
      [fieldName]: value,
    });
  };

  const [errorMessage, setErrorMessage] = useState('');
  const { setCustomer } = useCustomer();

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSignInClick = () => {
    console.log('SignIn button clicked!');
    // Open the modal for login by updating the state
    setIsModalOpen(true);
    setIsSignUp(false); // Show login section
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    // Validate form fields
    if (!formData.email || !formData.password) {
      setErrorMessage('Please fill in all the details.up');
      return;
    }

    // If all fields are filled, proceed to send request to Firestore
    setErrorMessage('');

    try {
      const uniqueId = uuidv4(); // Generate a unique ID using uuid
      // Add a new document to the "users" collection in Firestore with dynamic form data
      await setDoc(doc(db, "Customers", uniqueId), {
        name: formData.name,
        email: formData.email,
        mobile: formData.mobile,
        password: formData.password,
        // Add more fields as needed
      });
    } catch (error) {
      console.error('Error submitting form data:', error.message);
    }
  };




  const handleSignIn = async () => {
    if (!formData.email || !formData.password) {
      setErrorMessage('Please fill in all the details.');
      return;
    }

    setErrorMessage('');

    try {
      const q = query(
        collection(db, 'Customers'),
        where('email', '==', formData.email),
        where('password', '==', formData.password)
      );

      const querySnapshot = await getDocs(q);

      if (querySnapshot.size === 1) {
        const userData = querySnapshot.docs[0].data();
        const userId = querySnapshot.docs[0].id; // Retrieve the document ID
        console.log('Sign-in successful!', userData, 'User ID:', userId);

        // Set the customer ID using the document ID
        setCustomer(userId);

        navigate('/customer');
      } else {
        console.log('Sign-in failed. User not found or multiple users with the same email/password.');
      }
    } catch (error) {
      console.error('Error during sign-in:', error.message);
    }
  };



  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#" style={{ fontWeight: 'bold' }}>
            MyLegalArm
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">

                <a className="nav-link" href="/law">
                  For Lawyers
                </a>

              </li>
              <li className="nav-item">
                <a className="nav-link" href="/consultation">
                  Consultation
                </a>
              </li>


              {/* <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true">
                  Disabled
                </a>
              </li> */}
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="button" onClick={handleSignInClick}>
                SignIn
              </button>
            </form>
          </div>
        </div>
      </nav>

      {/* Modal for SignIn/SignUp */}
      {isModalOpen && (
        <div className="modal" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{isSignUp ? 'Sign Up' : 'Sign In'}</h5>
                <button type="button" className="btn-close" onClick={handleCloseModal} aria-label="Close"></button>
              </div>
              <div className="modal-body">

                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input type="email" className="form-control" id="email" placeholder="Enter your email" value={formData.email} onChange={(e) => handleFormChange('email', e.target.value)} />
                </div>
                {isSignUp && (
                  <>
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">
                        Name
                      </label>
                      <input type="text" className="form-control" id="name" placeholder="Enter your name" value={formData.name}
                        onChange={(e) => handleFormChange('name', e.target.value)} />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="mobile" className="form-label">
                        Mobile Number
                      </label>
                      <input type="tel" className="form-control" id="mobile" placeholder="Enter your mobile number" value={formData.mobile}
                        onChange={(e) => handleFormChange('mobile', e.target.value)} />
                    </div>
                  </>
                )}
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input type="password" className="form-control" id="password" placeholder="Enter your password" value={formData.password}
                    onChange={(e) => handleFormChange('password', e.target.value)} />
                </div>
                <button type="button" className="btn btn-primary me-2 text-center" onClick={isSignUp ? handleSignUp : handleSignIn}>
                  {isSignUp ? 'Sign Up' : 'Sign In'}
                </button>
                {isSignUp && (
                  <p>Already have an account? <button type="button" className="btn btn-link" onClick={() => setIsSignUp(false)}>Login</button></p>
                )}
                {!isSignUp && (
                  <p>Don't have an account? <button type="button" className="btn btn-link" onClick={() => setIsSignUp(true)}>Sign Up</button></p>
                )}
                {/* The "Close" button is removed here */}
              </div>
            </div>
          </div>
        </div>
      )}


    </div>


  );
}

export default Navbar;
