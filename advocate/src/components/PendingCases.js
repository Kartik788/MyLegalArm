import React, { useEffect, useState } from 'react';
import { useCustomer } from './CustomerContext';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from './Firebase';

const PendingCases = () => {
    const { customerId } = useCustomer();
    const [pendingCases, setPendingCases] = useState([]);

    useEffect(() => {
        const fetchPendingCases = async () => {
            try {
                // Create a query to get documents from the "PendingCases" collection where customerId matches
                const q = query(collection(db, 'PendingCases'), where('customerId', '==', customerId));
                const querySnapshot = await getDocs(q);

                // Process the documents and store them in the state
                const cases = [];
                querySnapshot.forEach((doc) => {
                    cases.push({ id: doc.id, ...doc.data() });
                });

                setPendingCases(cases);
            } catch (error) {
                console.error('Error fetching pending cases:', error.message);
            }
        };

        fetchPendingCases();
    }, [customerId]);

    return (
        <div className="mt-4 mx-3">
            <h2 className="text-center mb-4">Pending Cases</h2>
            <div className="card-deck">
                {pendingCases.map((pendingCase) => (
                    <div key={pendingCase.id} className="card shadow mb-4">
                        <div className="card-header">
                            <h5 className="card-title mb-0">Case ID: {pendingCase.customerId}</h5>
                        </div>
                        <div className="card-body">
                            <p className="card-text">Brief Case Name: {pendingCase.briefCaseName}</p>
                            <p className="card-text">Case Type: {pendingCase.caseType}</p>
                            <p className="card-text">Case Description: {pendingCase.caseDescription}</p>
                            <p className="card-text">Opposing Party Info: {pendingCase.opposingPartyInfo}</p>
                            <p className="card-text">Order of Events: {pendingCase.orderOfEvents.join(', ')}</p>
                            <p className="card-text">Desired Outcome: {pendingCase.desiredOutcome}</p>
                            <p className="card-text">Additional Info: {pendingCase.additionalInfo}</p>
                            {/* Render other fields */}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PendingCases;
