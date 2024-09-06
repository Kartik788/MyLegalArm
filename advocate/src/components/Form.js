import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { doc, setDoc, getDocs, query, where, collection } from "firebase/firestore";
import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';
import { useLawyer } from "./LawyerContext";

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

function Form() {
    const { setLawyer } = useLawyer();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        password: '',
        barCouncilId: '',
        officeAddress: '',
        city: '',
        experience: '',
        expertise: [],
    });

    const [errorMessage, setErrorMessage] = useState('');
    const [isSignUp, setIsSignUp] = useState(true); // Default to sign-up section
    const [location, setLocation] = useState({
        latitude: null,
        longitude: null,
    });

    useEffect(() => {
        // Use the Geolocation API to get the user's location
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    setLocation({ latitude, longitude });
                },
                (error) => {
                    console.error('Error getting location:', error.message);
                }
            );
        } else {
            console.error('Geolocation is not supported by this browser.');
        }
    }, []);

    const handleCheckboxChange = (e) => {
        const { name } = e.target;

        setFormData((prevData) => {
            const updatedExpertise = [...prevData.expertise];

            // Toggle the expertise in the array
            if (updatedExpertise.includes(name)) {
                updatedExpertise.splice(updatedExpertise.indexOf(name), 1);
            } else {
                updatedExpertise.push(name);
            }

            return {
                ...prevData,
                expertise: updatedExpertise,
            };
        });
    };


    const handleFormChange = (e) => {
        const { name, value, type, checked } = e.target;

        // Handle checkboxes separately
        if (type === 'checkbox') {
            const updatedExpertise = checked
                ? [...formData.expertise, value]
                : formData.expertise.filter((item) => item !== value);

            setFormData({
                ...formData,
                expertise: updatedExpertise,
            });
        } else {
            setFormData({
                ...formData,
                [name]: value,
            });
        }
    };

    const signIn = async (e) => {
        e.preventDefault();

        // Validate form fields
        if (!formData.email || !formData.password) {
            setErrorMessage('Please fill in all the details.');
            return;
        }

        // If all fields are filled, proceed to sign in
        setErrorMessage('');

        try {
            // Query Firestore for the user with the given email and password
            const q = query(
                collection(db, 'Lawyers'),
                where('email', '==', formData.email),
                where('password', '==', formData.password)
            );

            const querySnapshot = await getDocs(q);

            // Check if there is exactly one matching user
            if (querySnapshot.size === 1) {
                // Get the user data
                const userData = querySnapshot.docs[0].data();
                const lawyerId = querySnapshot.docs[0].id;

                setLawyer(lawyerId);

                // Log success and user data to the console
                console.log('Sign-in successful!', userData);
                navigate('/dashboard');
            } else {
                // If no user or multiple users found, log failure
                console.log(
                    'Sign-in failed. User not found or multiple users with the same email/password.'
                );
            }
        } catch (error) {
            console.error('Error during sign-in:', error.message);
        }
    };





    const signUp = async (e) => {
        e.preventDefault();

        // Validate form fields
        if (!formData.email || !formData.password) {
            setErrorMessage('Please fill in all the details.up');
            return;
        }

        // If all fields are filled, proceed to send request to Firestore
        setErrorMessage('');
        console.log("hi")

        try {
            const uniqueId = uuidv4(); // Generate a unique ID using uuid
            // Add a new document to the "users" collection in Firestore with dynamic form data
            await setDoc(doc(db, "Lawyers", uniqueId), {
                name: formData.name,
                email: formData.email,
                mobile: formData.mobile,
                password: formData.password,
                barCouncilId: formData.barCouncilId,
                location: location,
                officeAddress: formData.officeAddress,
                city: formData.city,
                experience: formData.experience,
                expertise: formData.expertise,
                // Add more fields as needed
            });
        } catch (error) {
            console.error('Error submitting form data:', error.message);
        }
    };

    return (
        <div>
            {/* Modern toggle switch */}
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
                <span
                    style={{
                        cursor: 'pointer',
                        padding: '10px',
                        fontSize: '16px',
                        fontWeight: isSignUp ? 'bold' : 'normal',
                        textDecoration: isSignUp ? 'underline' : 'none',
                        color: isSignUp ? '#333' : '#999',
                        marginRight: '20px',
                    }}
                    onClick={() => setIsSignUp(true)}
                >
                    Sign Up
                </span>
                <span
                    style={{
                        cursor: 'pointer',
                        padding: '10px',
                        fontSize: '16px',
                        fontWeight: !isSignUp ? 'bold' : 'normal',
                        textDecoration: !isSignUp ? 'underline' : 'none',
                        color: !isSignUp ? '#333' : '#999',
                    }}
                    onClick={() => setIsSignUp(false)}
                >
                    Sign In
                </span>
            </div>

            {/* Content specific to the ForLawyers component */}
            <div style={{ textAlign: 'center', padding: '20px', paddingTop: '50px' }}>
                <h1>{isSignUp ? 'Join MyLegalArm Network' : 'Sign In to MyLegalArm'}</h1>
                <p>
                    {isSignUp
                        ? 'Join our pool of 10,000+ Expert Lawyers serving clients through great customer experience'
                        : 'Access your MyLegalArm account'}
                </p>
            </div>

            {/* Form in the center */}
            <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '20px', paddingBottom: '50px' }}>
                <div>
                    <form onSubmit={isSignUp ? signUp : signIn}>
                        {/* Common fields for both sign-up and sign-in */}
                        <label style={{ marginBottom: '5px' }}>
                            Email:
                            <input
                                style={{ marginLeft: '87px', width: '300px' }}
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleFormChange}
                            />
                        </label>
                        <br />
                        <label style={{ marginBottom: '5px' }}>
                            Password:
                            <input
                                style={{ marginLeft: '59px', width: '300px' }}
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleFormChange}
                            />
                        </label>
                        <br />

                        {/* Additional fields for sign-up */}
                        {isSignUp && (
                            <>
                                <label style={{ marginBottom: '5px' }}>
                                    Name:
                                    <input
                                        style={{ marginLeft: '83px', width: '300px' }}
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleFormChange}
                                    />
                                </label>
                                <br />
                                <label style={{ marginBottom: '5px' }}>
                                    Mobile:
                                    <input
                                        style={{ marginLeft: '76px', width: '300px' }}
                                        type="tel"
                                        name="mobile"
                                        value={formData.mobile}
                                        onChange={handleFormChange}
                                    />
                                </label>
                                <br />
                                <label style={{ marginBottom: '5px' }}>
                                    Bar Council ID:
                                    <input
                                        style={{ marginLeft: '25px', width: '300px' }}
                                        type="text"
                                        name="barCouncilId"
                                        value={formData.barCouncilId}
                                        onChange={handleFormChange}
                                    />
                                </label>
                                <br />
                                <label style={{ marginBottom: '5px' }}>
                                    Office Address:
                                    <input
                                        style={{ marginLeft: '22px', width: '300px' }}
                                        type="text"
                                        name="officeAddress"
                                        value={formData.officeAddress}
                                        onChange={handleFormChange}
                                    />
                                </label>
                                <br />
                                <label style={{ marginBottom: '5px' }}>
                                    City:
                                    <input
                                        style={{ marginLeft: '98px', width: '300px' }}
                                        type="text"
                                        name="city"
                                        value={formData.city}
                                        onChange={handleFormChange}
                                    />
                                </label>
                                <br />
                                <label style={{ marginBottom: '5px' }}>
                                    Experience(years):
                                    <input
                                        style={{ marginLeft: '2px', width: '300px' }}
                                        type="text"
                                        name="experience"
                                        value={formData.experience}
                                        onChange={handleFormChange}
                                    />
                                </label>
                                <br />
                                <label style={{ marginBottom: '5px',marginTop:'25px' }}>
                                    Field of Expertise:
                                    <div style={{ marginLeft: '10px', width: '300px' }}>
                                        <label>
                                            <input
                                                type="checkbox"
                                                name="Property Law"
                                                checked={formData.expertise.includes('Property Law')}
                                                onChange={handleCheckboxChange}
                                            />
                                            Property Law
                                        </label>
                                        <br />
                                        <label>
                                            <input
                                                type="checkbox"
                                                name="Divorce"
                                                checked={formData.expertise.includes('Divorce')}
                                                onChange={handleCheckboxChange}
                                            />
                                            Divorce
                                        </label>
                                        <br />
                                        {/* Add more checkboxes for other expertise options */}
                                        <label>
                                            <input
                                                type="checkbox"
                                                name="Family"
                                                checked={formData.expertise.includes('Family')}
                                                onChange={handleCheckboxChange}
                                            />
                                            Family
                                        </label>
                                        <br />
                                        {/* Add more checkboxes for other expertise options */}
                                        {/* ... */}
                                        <label>
                                            <input
                                                type="checkbox"
                                                name="Employment"
                                                checked={formData.expertise.includes('Employment')}
                                                onChange={handleCheckboxChange}
                                            />
                                            Employment
                                        </label>
                                        <br />
                                        <label>
                                            <input
                                                type="checkbox"
                                                name="Recovery of Money"
                                                checked={formData.expertise.includes('Recovery of Money')}
                                                onChange={handleCheckboxChange}
                                            />
                                            Recovery of Money
                                        </label>
                                        <br />
                                        <label>
                                            <input
                                                type="checkbox"
                                                name="Startup"
                                                checked={formData.expertise.includes('Startup')}
                                                onChange={handleCheckboxChange}
                                            />
                                            Startup
                                        </label>
                                        <br />
                                        <label>
                                            <input
                                                type="checkbox"
                                                name="IPR"
                                                checked={formData.expertise.includes('IPR')}
                                                onChange={handleCheckboxChange}
                                            />
                                            IPR
                                        </label>
                                        <br />

                                        <label>
                                            <input
                                                type="checkbox"
                                                name="Corporate"
                                                checked={formData.expertise.includes('Corporate')}
                                                onChange={handleCheckboxChange}
                                            />
                                            Corporate
                                        </label>
                                        <br />

                                        <label>
                                            <input
                                                type="checkbox"
                                                name="General Legal"
                                                checked={formData.expertise.includes('General Legal')}
                                                onChange={handleCheckboxChange}
                                            />
                                            General Legal
                                        </label>
                                        <br />

                                        <label>
                                            <input
                                                type="checkbox"
                                                name="Criminal"
                                                checked={formData.expertise.includes('Criminal')}
                                                onChange={handleCheckboxChange}
                                            />
                                            Criminal
                                        </label>
                                        <br />

                                        <label>
                                            <input
                                                type="checkbox"
                                                name="Consumer Protection"
                                                checked={formData.expertise.includes('Consumer Protection')}
                                                onChange={handleCheckboxChange}
                                            />
                                            Consumer Protection
                                        </label>
                                        <br />
                                        <label>
                                            <input
                                                type="checkbox"
                                                name="Civil"
                                                checked={formData.expertise.includes('Civil')}
                                                onChange={handleCheckboxChange}
                                            />
                                            Civil
                                        </label>
                                        <br />

                                        <label>
                                            <input
                                                type="checkbox"
                                                name="Corporate and Individual Taxation"
                                                checked={formData.expertise.includes('Corporate and Individual Taxation')}
                                                onChange={handleCheckboxChange}
                                            />
                                            Corporate and Individual Taxation
                                        </label>
                                        <br />

                                        <label>
                                            <input
                                                type="checkbox"
                                                name="Marriage"
                                                checked={formData.expertise.includes('Marriage')}
                                                onChange={handleCheckboxChange}
                                            />
                                            Marriage
                                        </label>
                                        <br />

                                        <label>
                                            <input
                                                type="checkbox"
                                                name="Immigration Services"
                                                checked={formData.expertise.includes('Immigration Services')}
                                                onChange={handleCheckboxChange}
                                            />
                                            Immigration Services
                                        </label>
                                        <br />

                                        <label>
                                            <input
                                                type="checkbox"
                                                name="Licenses"
                                                checked={formData.expertise.includes('Licenses')}
                                                onChange={handleCheckboxChange}
                                            />
                                            Licenses
                                        </label>
                                        <br />
                                        {/* Add more checkboxes for other expertise options */}
                                        {/* ... */}
                                    </div>
                                </label>
                                <br />
                            </>
                        )}

                        {/* Error message */}
                        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

                        {/* Button horizontally centered */}
                        <button
                            type="submit"
                            style={{ display: 'block', margin: 'auto', width: '100px' }}
                            onClick={isSignUp ? signUp : signIn}
                        >
                            {isSignUp ? 'Sign Up' : 'Sign In'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Form;
