import React from 'react';

const YourComponent = () => {
  return (
    <div style={{ backgroundColor: '#f5f5f5', minHeight: '100vh', padding: '20px', fontFamily: 'Arial, sans-serif', color: '#333', fontSize: '14px' }}>
      <h1 style={{ fontSize: '2em', marginBottom: '20px', color: 'black', textAlign: 'center' }}>Wrongful Termination - Legal Notice</h1>

      <div style={{ backgroundColor: 'white', padding: '15px', margin: '10px 0', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
        <h2 style={{ fontSize: '1.5em', color: 'black', marginBottom: '10px', borderBottom: '2px solid black', paddingBottom: '8px' }}>Overview</h2>
        <p style={{ color: '#666' }}>Send a legal notice as a final communication to your employer to resolve the issue before you file a case against them in a court of law. A legal notice typically prompts the receiver to take immediate action and resolve the issue.</p>
      </div>

      <div style={{ backgroundColor: 'white', padding: '15px', margin: '10px 0', borderRadius: '8px', boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)' }}>
        <h2 style={{ fontSize: '1.5em', color: 'black', marginBottom: '10px', borderBottom: '2px solid black', paddingBottom: '8px' }}>Steps involved in sending a legal notice</h2>
        <ul style={{ color: '#666', paddingLeft: '15px' }}>
          <li><h3 style={{ fontSize: '1.2em', color: 'black' }}>REQUEST</h3> <p>Once you send in a request, our representative will get in touch with you to understand your requirements</p></li>
          <li><h3 style={{ fontSize: '1.2em', color: 'black' }}>LAWYER ASSIGNMENT</h3> <p>As per your requirements, we will connect you to an expert employment lawyer</p></li>
          <li><h3 style={{ fontSize: '1.2em', color: 'black' }}>DRAFTING LEGAL NOTICE</h3> <p>Within 3 to 4 working days the lawyer will prepare the draft and share it for your review and approval</p></li>
          <li><h3 style={{ fontSize: '1.2em', color: 'black' }}>LEGAL NOTICE DISPATCHED</h3> <p>Once you approve the draft, the lawyer will send the legal notice on his letterhead</p></li>
          
        </ul>
      </div>

      <div style={{ backgroundColor: 'white', padding: '15px', margin: '10px 0', borderRadius: '8px', boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)' }}>
        <h2 style={{ fontSize: '1.5em', color: 'black', marginBottom: '10px', borderBottom: '2px solid black', paddingBottom: '8px' }}>Required Documents</h2>
        <ul style={{ color: '#666', paddingLeft: '15px' }}>
          <li><p style={{ fontSize: '1.2em' }}>Employment agreement</p></li>
          <li><p style={{ fontSize: '1.2em' }}>Job offer letter</p></li>
          <li><p style={{ fontSize: '1.2em' }}>Termination/resignation letter</p></li>
          <li><p style={{ fontSize: '1.2em' }}>Past payslips</p></li>
          <li><p style={{ fontSize: '1.2em' }}>Any written/ recorded communication with the employer regarding the matter</p></li>
          
        </ul>
      </div>

      <div style={{ backgroundColor: 'white', padding: '15px', margin: '10px 0', borderRadius: '8px', boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)' }}>
        <h2 style={{ fontSize: '1.5em', color: 'black', marginBottom: '10px', borderBottom: '2px solid black', paddingBottom: '8px' }}>Book a Consultation</h2>
        <p style={{ color: '#666' }}>Need expert advice on your property possession delay? Book a consultation with our legal experts.</p>
        <button style={{ padding: '12px', width: '10%', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Book Now</button>
      </div>
    </div>
  );
};

export default YourComponent;
