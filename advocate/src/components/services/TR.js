import React from 'react';

const YourComponent = () => {
  return (
    <div style={{ backgroundColor: '#f5f5f5', minHeight: '100vh', padding: '20px', fontFamily: 'Arial, sans-serif', color: '#333', fontSize: '14px' }}>
      <h1 style={{ fontSize: '2em', marginBottom: '20px', color: 'black', textAlign: 'center' }}>Trademark Registration</h1>

      <div style={{ backgroundColor: 'white', padding: '15px', margin: '10px 0', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
        <h2 style={{ fontSize: '1.5em', color: 'black', marginBottom: '10px', borderBottom: '2px solid black', paddingBottom: '8px' }}>Overview</h2>
        <p style={{ color: '#666' }}>A trademark is a "brand name" or "logo" that helps you protect the identity of your business. To restrict others from using your brand name or logo, MyAdvo will help you register your trademark through an expert trademark lawyer.</p>
      </div>

      <div style={{ backgroundColor: 'white', padding: '15px', margin: '10px 0', borderRadius: '8px', boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)' }}>
        <h2 style={{ fontSize: '1.5em', color: 'black', marginBottom: '10px', borderBottom: '2px solid black', paddingBottom: '8px' }}>Steps involved in filing of Trademark application</h2>
        <ul style={{ color: '#666', paddingLeft: '15px' }}>
          <li><h3 style={{ fontSize: '1.2em', color: 'black' }}>REQUEST</h3> <p>We will provide a checklist of documents to be shared by you</p></li>
          <li><h3 style={{ fontSize: '1.2em', color: 'black' }}>TRADEMARK CLASSIFICATION</h3> <p>We will assist you in classifying the trademark in relevant class based on its usage in goods or services</p></li>
          <li><h3 style={{ fontSize: '1.2em', color: 'black' }}>TRADEMARK SEARCH</h3> <p>We will search in trademark registry records to make sure that your desired trademark is available</p></li>
          <li><h3 style={{ fontSize: '1.2em', color: 'black' }}>DOCUMENTATION TO FILE TRADEMARK APPLICATION</h3> <p>We will share the drafts of authorisation letter (Form 48) , Affidavit and a checklist of documents to be filed with the application for your perusal</p></li>
          <li><h3 style={{ fontSize: '1.2em', color: 'black' }}>FILING OF TRADEMARK APPLICATION</h3> <p>We will file the application along with fees. You can use TM over the trademark after generation of filing receipt</p></li>
          <li><h3 style={{ fontSize: '1.2em', color: 'black' }}>UPDATES</h3> <p>We will provide regular updates to you until the registration process is complete</p></li>
          
        </ul>
      </div>

      <div style={{ backgroundColor: 'white', padding: '15px', margin: '10px 0', borderRadius: '8px', boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)' }}>
        <h2 style={{ fontSize: '1.5em', color: 'black', marginBottom: '10px', borderBottom: '2px solid black', paddingBottom: '8px' }}>Required Documents</h2>
        <ul style={{ color: '#666', paddingLeft: '15px' }}>
          <li><p style={{ fontSize: '1.2em' }}>Soft copy of trademark, logo, or brand name</p></li>
          <li><p style={{ fontSize: '1.2em' }}>Signed Form-48, which is an authorisation from the applicant to a Trademark Attorney to file the trademark application on his/her behalf</p></li>
          <li><p style={{ fontSize: '1.2em' }}>Identity and Address Proof of the Proprietor or Signatory of the company</p></li>
          <li><p style={{ fontSize: '1.2em' }}>Photocopy of one of the following documents will suffice: Passport, Voter ID card, Driving license, PAN card, or Aadhar card</p></li>
          <li><p style={{ fontSize: '1.2em' }}>Photocopy of Incorporation Certificate of the company or Partnership Deed</p></li>
          <li><p style={{ fontSize: '1.2em' }}>A list of goods and/or services for which registration is required</p></li>
          <li><p style={{ fontSize: '1.2em' }}>Notarized Affidavit in case Trademark has been in use prior to the date of application</p></li>
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
