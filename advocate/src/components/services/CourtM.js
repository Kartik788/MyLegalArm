import React from 'react';

const YourComponent = () => {
  return (
    <div style={{ backgroundColor: '#f5f5f5', minHeight: '100vh', padding: '20px', fontFamily: 'Arial, sans-serif', color: '#333', fontSize: '14px' }}>
      <h1 style={{ fontSize: '2em', marginBottom: '20px', color: 'black', textAlign: 'center' }}>Court Marriage</h1>
      
      <div style={{ backgroundColor: 'white', padding: '15px', margin: '10px 0', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
        <h2 style={{ fontSize: '1.5em', color: 'black', marginBottom: '10px', borderBottom: '2px solid black', paddingBottom: '8px' }}>Overview</h2>
        <p style={{ color: '#666' }}>Court Marriage is an economical, and hassle-free alternative to a traditional marriage. Couples from different nationality, religion, and caste can solemnize and register their marriage through a simple procedure carried out in the presence of marriage registrar and 3 witnesses.</p>
      </div>

      <div style={{ backgroundColor: 'white', padding: '15px', margin: '10px 0', borderRadius: '8px', boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)' }}>
        <h2 style={{ fontSize: '1.5em', color: 'black', marginBottom: '10px', borderBottom: '2px solid black', paddingBottom: '8px' }}>Steps involved in Court Marriage</h2>
        <ul style={{ color: '#666', paddingLeft: '15px' }}>
          <li><h3 style={{ fontSize: '1.2em', color: 'black' }}>DOCUMENTS REQUIRED</h3> <p>We will provide you a checklist of documents to capture your details. Your Case Manager will then connect with you within a business day to understand your requirements</p></li>
          <li><h3 style={{ fontSize: '1.2em', color: 'black' }}>DRAFTING OF NOTICE OF INTENDED MARRIAGE</h3> <p>Upon receiving the filled questionnaire, we will draft a notice of intended marriage</p></li>
          <li><h3 style={{ fontSize: '1.2em', color: 'black' }}>DECIDING PLACE OF SOLEMNIZATION OF MARRIAGE</h3> <p>Your Court Marriage can be solemnized at the office of the marriage officer of the district where either one of you have stayed for at least 30 days, prior to your filing of the notice.
You are then required to select the jurisdiction of where you want to get your marriage solemnized</p></li>
          <li><h3 style={{ fontSize: '1.2em', color: 'black' }}>FINALISATION OF DOCUMENTATION</h3> <p>Our experts will setup a mutually convenient time for you, your partner and three witnesses to meet at the office of the marriage registrar to finalise the documentation. Upon finalisation, Notice of intended marriage will be filed</p></li>
          <li><h3 style={{ fontSize: '1.2em', color: 'black' }}>PUBLICATION OF NOTICE</h3> <p>The marriage officer will publish the notice and invite objections to the intended marriage within 30 days of publication</p></li>
          <li><h3 style={{ fontSize: '1.2em', color: 'black' }}>OBJECTIONS TO MARRIAGE</h3> <p>In case an objection is raised, the Marriage Officer will decide on the objections after giving the parties an opportunity to present their case. If the objections are found to be true, the marriage cannot be solemnized. However, an appeal against the decision of the Marriage Officer can be filed in the district court under the jurisdiction of the Marriage Officer</p></li>
          <li><h3 style={{ fontSize: '1.2em', color: 'black' }}>DATE OF MARRIAGE</h3> <p>In case of no objections or if objections were removed after 30 days of Notice publication, based on a mutually convenient time, you and your partner along with the same three witnesses will appear before the marriage officer to sign a declaration and get the marriage solemnized</p></li>
          <li><h3 style={{ fontSize: '1.2em', color: 'black' }}>MARRIAGE CERTIFICATE</h3> <p>After signing the declaration, the marriage officer will issue a marriage certificate. The marriage certificate will have to be signed by the parties and three witnesses. Upon signing of the document, the marriage certificate will be issued to the couple</p></li>
        </ul>
      </div>

      <div style={{ backgroundColor: 'white', padding: '15px', margin: '10px 0', borderRadius: '8px', boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)' }}>
        <h2 style={{ fontSize: '1.5em', color: 'black', marginBottom: '10px', borderBottom: '2px solid black', paddingBottom: '8px' }}>Required Documents</h2>
        <ul style={{ color: '#666', paddingLeft: '15px' }}>
          <li><p style={{ fontSize: '1.2em' }}>4 Passport size photographs each of bride and groom</p></li>
          <li><p style={{ fontSize: '1.2em' }}>Residential Proof of both bride and groom (photocopy of any one of the following - Aadhar Card, Voter Card, Passport, Ration Card, Driving License, Lease Deed/Rent Deed)</p></li>
          <li><p style={{ fontSize: '1.2em' }}>Proof of Date of Birth of both bride and groom (photocopy of any one of the following - class 10th certificate, passport, birth certificate)</p></li>
          <li><p style={{ fontSize: '1.2em' }}>Notice of Intended Marriage duly signed by both bride and groom</p></li>
          <li><p style={{ fontSize: '1.2em' }}>Copy of divorce decree/order in case of a divorcee and death certificate of spouse in case of widow/widower.</p></li>
          <li><p style={{ fontSize: '1.2em' }}>One passport size photograph of each witness</p></li>
          <li><p style={{ fontSize: '1.2em' }}>Photocopy of PAN card of each witness</p></li>
          <li><p style={{ fontSize: '1.2em' }}>Photocopy of Identity Document of each witness [photocopy of any one of the following - Aadhaar Card, Any Govt. recognised document, Driving License, NFS Ration Card, PAN Card, Passport, Voter ID Card (front and back side)]</p></li>
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
