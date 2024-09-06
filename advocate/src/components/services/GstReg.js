import React from 'react';

const YourComponent = () => {
  return (
    <div style={{ backgroundColor: '#f5f5f5', minHeight: '100vh', padding: '20px', fontFamily: 'Arial, sans-serif', color: '#333', fontSize: '14px' }}>
      <h1 style={{ fontSize: '2em', marginBottom: '20px', color: 'black', textAlign: 'center' }}>GST Registration</h1>
      
      <div style={{ backgroundColor: 'white', padding: '15px', margin: '10px 0', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
        <h2 style={{ fontSize: '1.5em', color: 'black', marginBottom: '10px', borderBottom: '2px solid black', paddingBottom: '8px' }}>Overview</h2>
        <p style={{ color: '#666' }}>Goods and Service Tax (GST) In registration is compulsory for all businesses/ individuals involved in buying, selling or providing of services in India and having an annual turnover of more than Rs. 20 lakhs. It is also compulsory for those involved in the interstate supply of goods. MyAdvo will help you obtain GST In Registration through a GST registration expert.</p>
      </div>

      <div style={{ backgroundColor: 'white', padding: '15px', margin: '10px 0', borderRadius: '8px', boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)' }}>
        <h2 style={{ fontSize: '1.5em', color: 'black', marginBottom: '10px', borderBottom: '2px solid black', paddingBottom: '8px' }}>Steps involved in Goods and Service Tax (GST) registration</h2>
        <ul style={{ color: '#666', paddingLeft: '15px' }}>
          <li><h3 style={{ fontSize: '1.2em', color: 'black' }}>REQUEST</h3> <p>Once you send in a request, our representative will get in touch with you to understand your requirements</p></li>
          <li><h3 style={{ fontSize: '1.2em', color: 'black' }}>DOCUMENTS AND QUESTIONNAIRE</h3> <p>A checklist of documents and a questionnaire will be provided to record the details of your organisation and employees</p></li>
          <li><h3 style={{ fontSize: '1.2em', color: 'black' }}>EXPERT ASSIGNMENT</h3> <p>As per your requirements, we will connect you to a GST registration expert</p></li>
          <li><h3 style={{ fontSize: '1.2em', color: 'black' }}>APPLICATION FOR REGISTRATION</h3> <p>Once the documents are received, the expert will draft and file the application for GST registration. Application Reference Number (ARN) will be provided to you</p></li>
          <li><h3 style={{ fontSize: '1.2em', color: 'black' }}>GST REGISTRATION</h3> <p>Upon registration, which could take between 7-10 days, GST Identification Number (GSTIN) and GST Certificate will be sent to you</p></li>
          
        </ul>
      </div>

      <div style={{ backgroundColor: 'white', padding: '15px', margin: '10px 0', borderRadius: '8px', boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)' }}>
        <h2 style={{ fontSize: '1.5em', color: 'black', marginBottom: '10px', borderBottom: '2px solid black', paddingBottom: '8px' }}>Required Documents</h2>
        <ul style={{ color: '#666', paddingLeft: '15px' }}>
          <li><p style={{ fontSize: '1.2em' }}>PAN of the Applicant</p></li>
          <li><p style={{ fontSize: '1.2em' }}>Aadhaar card</p></li>
          <li><p style={{ fontSize: '1.2em' }}>Proof of business registration or Incorporation certificate</p></li>
          <li><p style={{ fontSize: '1.2em' }}>Identity and Address proof of Promoters/Director with Photographs</p></li>
          <li><p style={{ fontSize: '1.2em' }}>Address proof of the place of business</p></li>
          <li><p style={{ fontSize: '1.2em' }}>Bank Account statement/Cancelled cheque</p></li>
          <li><p style={{ fontSize: '1.2em' }}>Digital Signature</p></li>
          <li><p style={{ fontSize: '1.2em' }}>Letter of Authorization/Board Resolution for Authorized Signatory</p></li>
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
