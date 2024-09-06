import React from 'react';

const YourComponent = () => {
  return (
    <div style={{ backgroundColor: '#f5f5f5', minHeight: '100vh', padding: '20px', fontFamily: 'Arial, sans-serif', color: '#333', fontSize: '14px' }}>
      <h1 style={{ fontSize: '2em', marginBottom: '20px', color: 'black', textAlign: 'center' }}>Possession Delay - NCLT</h1>

      <div style={{ backgroundColor: 'white', padding: '15px', margin: '10px 0', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
        <h2 style={{ fontSize: '1.5em', color: 'black', marginBottom: '10px', borderBottom: '2px solid black', paddingBottom: '8px' }}>Overview</h2>
        <p style={{ color: '#666' }}>If the real estate company is in poor financial condition and is unable to continue or finish the concerned real estate project, home-buyers can initiate insolvency proceedings in the National Company Law Tribunal.

          Before initiating insolvency proceedings, sending a legal notice to the builder serves as a final warning. In case a settlement is still not reached, you should then file the application for initiating insolvency process..</p>
      </div>

      <div style={{ backgroundColor: 'white', padding: '15px', margin: '10px 0', borderRadius: '8px', boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)' }}>
        <h2 style={{ fontSize: '1.5em', color: 'black', marginBottom: '10px', borderBottom: '2px solid black', paddingBottom: '8px' }}>Steps involved in Insolvency proceedings against the real estate company</h2>
        <ul style={{ color: '#666', paddingLeft: '15px' }}>
          <li><h3 style={{ fontSize: '1.2em', color: 'black' }}>DOCUMENT VERIFICATION</h3> <p>You will be required to share scanned copies of documents related to the property for verification by a lawyer</p></li>
          <li><h3 style={{ fontSize: '1.2em', color: 'black' }}>COMPLAINT DRAFTING</h3> <p>The application will be drafted and shared with you for your review and approval within 7 days of receiving the documents</p></li>
          <li><h3 style={{ fontSize: '1.2em', color: 'black' }}>FILING OF COMPLAINT</h3> <p>The application will be filed before the NCLT within 3 working days of approval of the draft</p></li>
          <li><h3 style={{ fontSize: '1.2em', color: 'black' }}>ADMISSION HEARING</h3> <p>The lawyer will make preliminary arguments before NCLT and get the Application admitted</p></li>
          <li><h3 style={{ fontSize: '1.2em', color: 'black' }}>APPOINTMENT OF RESOLUTION PROFESSIONAL (RP)</h3> <p>NCLT will confirm a Resolution Professional to oversee the process</p></li>
          <li><h3 style={{ fontSize: '1.2em', color: 'black' }}>CORPORATE INSOLVENCY RESOLUTION PROCESS</h3> <p>The resolution process comprises of various stages: 1) Publication of notice 2) Processing of claim 3) Information Memorandum 4) Meeting of Committee of Creditors (COC) 5) Call for resolution plan</p></li>
          <li><h3 style={{ fontSize: '1.2em', color: 'black' }}>ACCEPTANCE/REJECTION OF RESOLUTION PLAN</h3> <p>After receiving the resolution plan, the RP will conduct a meeting of COC for voting. If 66% of voting is done in favour of a resolution plan, then it will be adopted by COC</p></li>
          <li><h3 style={{ fontSize: '1.2em', color: 'black' }}>LIQUIDATION</h3> <p>In case where a resolution plan is not accepted, COC will opt for liquidation of such real estate company</p></li>
        </ul>
      </div>

      <div style={{ backgroundColor: 'white', padding: '15px', margin: '10px 0', borderRadius: '8px', boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)' }}>
        <h2 style={{ fontSize: '1.5em', color: 'black', marginBottom: '10px', borderBottom: '2px solid black', paddingBottom: '8px' }}>Required Documents</h2>
        <ul style={{ color: '#666', paddingLeft: '15px' }}>
          <li><p style={{ fontSize: '1.2em' }}>Application for buying of property in the Project</p></li>
          <li><p style={{ fontSize: '1.2em' }}>Builder-Buyer Agreement</p></li>
          <li><p style={{ fontSize: '1.2em' }}>Receipts of payments made to the Builder</p></li>
          <li><p style={{ fontSize: '1.2em' }}>Letters/ email correspondences between the Buyer and the Builder</p></li>
          <li><p style={{ fontSize: '1.2em' }}>Brochure of the Project</p></li>
          <li><p style={{ fontSize: '1.2em' }}>- Letter of Allotment</p></li>
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
