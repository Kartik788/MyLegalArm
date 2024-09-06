import React from 'react';

const YourComponent = () => {
  return (
    <div style={{ backgroundColor: '#f5f5f5', minHeight: '100vh', padding: '20px', fontFamily: 'Arial, sans-serif', color: '#333', fontSize: '14px' }}>
      <h1 style={{ fontSize: '2em', marginBottom: '20px', color: 'black', textAlign: 'center' }}>Medical Negligence</h1>

      <div style={{ backgroundColor: 'white', padding: '15px', margin: '10px 0', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
        <h2 style={{ fontSize: '1.5em', color: 'black', marginBottom: '10px', borderBottom: '2px solid black', paddingBottom: '8px' }}>Overview</h2>
        <p style={{ color: '#666' }}>Medical Negligence basically is the misconduct by a medical practitioner or doctor by not providing enough care resulting in breach of their duties and harming the patients which are their consumers.</p>
      </div>

      <div style={{ backgroundColor: 'white', padding: '15px', margin: '10px 0', borderRadius: '8px', boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)' }}>
        <h2 style={{ fontSize: '1.5em', color: 'black', marginBottom: '10px', borderBottom: '2px solid black', paddingBottom: '8px' }}>Steps involved in medical negligence complaint</h2>
        <ul style={{ color: '#666', paddingLeft: '15px' }}>
          <li><h3 style={{ fontSize: '1.2em', color: 'black' }}>REQUEST</h3> <p>Once you send in a request, our representative will get in touch with you to understand your requirements.</p></li>
          <li><h3 style={{ fontSize: '1.2em', color: 'black' }}>EXPERT ASSIGNMENT</h3> <p>As per your requirements, we will assign an expert.</p></li>
          <li><h3 style={{ fontSize: '1.2em', color: 'black' }}>CONSULTATION</h3> <p>On a mutually convenient date, a time-bound consultation with the expert would be arranged through a suitable mode which can either be over the phone, through video or in-person meeting.</p></li>

        </ul>
      </div>

      <div style={{ backgroundColor: 'white', padding: '15px', margin: '10px 0', borderRadius: '8px', boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)' }}>
        <h2 style={{ fontSize: '1.5em', color: 'black', marginBottom: '10px', borderBottom: '2px solid black', paddingBottom: '8px' }}>Required Documents</h2>
        <ul style={{ color: '#666', paddingLeft: '15px' }}>
          <li><p style={{ fontSize: '1.2em' }}>Cases must be built on evidence, so it&#39;s important that the person making the claim can prove what happened to them was a mistake and that they suffered injury or harm as a result of that mistake. Documents that could help prove medical negligence

            Discharge summary, referral notes, and death summary in case of natural death are important documents for the patient. Hence, these have to be given without charge for all including patients who leave against medical advice.</p></li>
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
