// CustomerDashboard.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCustomer } from './CustomerContext';
import { getDoc, doc, collection, getDocs, query, where } from 'firebase/firestore';
import { db } from './Firebase'; // Import your Firebase configuration

const CustomerDashboard = () => {
    const { customerId } = useCustomer();
    const [customerName, setCustomerName] = useState('');

    useEffect(() => {
        const fetchCustomerName = async () => {
            try {
                // Check if customerName is already stored in localStorage
                const storedName = localStorage.getItem('customerName');
                if (storedName) {
                    setCustomerName(storedName);
                    return;
                }

                const customerRef = doc(collection(db, 'Customers'), customerId);
                const customerDoc = await getDoc(customerRef);

                if (customerDoc.exists()) {
                    const userData = customerDoc.data();
                    const name = userData.name;

                    // Save name to localStorage
                    localStorage.setItem('customerName', name);

                    setCustomerName(name);
                } else {
                    console.log('Customer not found.');
                }
            } catch (error) {
                console.error('Error fetching customer data:', error.message);
            }
        };

        fetchCustomerName();
    }, [customerId]);

    return (
        <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHvZ0pbf4bXvAJgVZVuRQqrNWnoWl96cV6wQ&usqp=CAU" alt="Image Alt Text" width={150} />

            <div className="container mt-5">
                <h2 className="text-center mb-4">Hi, {customerName}</h2>

                <div className="row">
                <div className="col-md-3">
                        <Link to="/customer/active-cases">
                            <div className="card text-center p-3">
                                <h4>Active Cases</h4>
                                <p>View your active cases</p>
                            </div>
                        </Link>
                    </div>
                    <div className="col-md-3">
                        <Link to="/customer/past-cases">
                            <div className="card text-center p-3">
                                <h4>Past Cases</h4>
                                <p>View your past cases</p>
                            </div>
                        </Link>
                    </div>
                    <div className="col-md-3">
                        <Link to="/customer/book-consultation">
                            <div className="card text-center p-3">
                                <h4>Book a Consultation</h4>
                                <p>Schedule a consultation with a lawyer</p>
                            </div>
                        </Link>
                    </div>

                    {/* New Section: Pending Cases */}
                    <div className="col-md-3">
                        <Link to="/customer/pending-cases">
                            <div className="card text-center p-3">
                                <h4>Pending Cases</h4>
                                <p>View your pending cases</p>
                            </div>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default CustomerDashboard;
