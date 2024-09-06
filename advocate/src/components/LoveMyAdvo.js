import React from 'react';

function LoveMyAdvo() {
    return (
        <div style={{ textAlign: 'center',marginTop:'75px' }}>
            <h1 style={{fontWeight:'bold'}}>Why users love MyLegalArm</h1>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '60px' }}>

                <div>
                    <img src='./price.png' style={{width:'80px',height:'80px'}}></img>
                    <h1 style={{fontSize:'25px',fontWeight:'bold',marginTop:'35px'}}>Fixed Pricing</h1>
                    <p style={{width:'250px'}}>Prices are fixed across various services and consultations</p>
                </div>

                <div style={{marginLeft:'210px',marginRight:'210px'}}>
                    <img src='./attorney.png' style={{width:'80px',height:'80px'}}></img>
                    <h1 style={{fontSize:'25px',fontWeight:'bold',marginTop:'35px'}}>Expert Lawyers</h1>
                    <p style={{width:'250px'}}>24x7 Expert assistance for any legal problem</p>
                </div>

                <div>
                    <img src='./customer-care.png' style={{width:'80px',height:'80px'}}></img>
                    <h1 style={{fontSize:'25px',fontWeight:'bold',marginTop:'35px'}}>Dedicated Support</h1>
                    <p style={{width:'250px'}}>Case Manager to assist you throughout the case lifecycle</p>
                </div>

            </div>

        </div>
    );
};

export default LoveMyAdvo;
