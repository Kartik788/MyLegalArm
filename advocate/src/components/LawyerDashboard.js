// CustomerDashboard.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLawyer } from './LawyerContext';
import { getDoc, doc, collection, getDocs, query, where } from 'firebase/firestore';
import { db } from './Firebase'; // Import your Firebase configuration

const LawyerDashboard = () => {
    const { lawyerId } = useLawyer();
    const [lawyerName, setLawyerName] = useState('');

    useEffect(() => {
        const fetchLawyerName = async () => {
            try {
                const lawyerRef = doc(collection(db, 'Lawyers'), lawyerId);
                const lawyerDoc = await getDoc(lawyerRef);

                if (lawyerDoc.exists()) {
                    const userData = lawyerDoc.data();
                    const name = userData.name;

                    setLawyerName(name);
                } else {
                    console.log('Lawyer not found.');
                }
            } catch (error) {
                console.error('Error fetching lawyer data:', error.message);
            }
        };

        fetchLawyerName();
    }, [lawyerId]);

    return (
        <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHvZ0pbf4bXvAJgVZVuRQqrNWnoWl96cV6wQ&usqp=CAU" alt="Image Alt Text" width={150} />

            <div className="container mt-5">
                <h2 className="text-center mb-4">Hi, {lawyerName}</h2>

                <div className="row justify-content-evenly">
                    <div className="col-md-3"> {/* Increased width to 3 columns */}
                        <Link to="/lawyer/active-cases">
                            <div className="card text-center p-3">
                                <h4>Active Cases</h4>
                                <p>View your active cases</p>
                            </div>
                        </Link>
                    </div>

                    <div className="col-md-3"> {/* Increased width to 3 columns */}
                        <Link to="/lawyer/past-cases">
                            <div className="card text-center p-3">
                                <h4>Past Cases</h4>
                                <p>View your past cases</p>
                            </div>
                        </Link>
                    </div>

                    {/* New Section: Pending Cases */}
                    <div className="col-md-3"> {/* Increased width to 3 columns */}
                        <Link to="/lawyer/incoming-cases">
                            <div className="card text-center p-3">
                                <h4>Incoming Cases</h4>
                                <p>View your incoming cases</p>
                            </div>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default LawyerDashboard;
