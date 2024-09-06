import React from 'react';

function LowerHeading() {
  return (
    <div style={{ textAlign: 'center', padding: '200px',backgroundColor:'white' }}>
      <h1 style={{fontWeight:'bold'}}>Make legal simple with MyLegalArm!</h1>
      <h3 style={{marginTop:'20px',fontSize:22}}>400+ Corporates and 27,000+ Customers successfully connected with 10,000+ top Lawyers.</h3>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <button style={{width:'350px',height:'45px', marginTop:'30px',marginRight:'20px',color:'green',fontWeight:'bold',border:'2px solid green', borderRadius:'5px',backgroundColor:'white'}}>Sign Up</button>
        <button style={{width: '350px',height:'45px', marginTop:'30px',marginLeft:'20px',color:'white',fontWeight:'bold',border:'2px solid green', borderRadius:'5px',backgroundColor:'green'}}>Request a callback</button>
      </div>
    </div>
  );
};

export default LowerHeading;
