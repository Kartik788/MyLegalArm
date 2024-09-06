// ImageWithText.js
import React from 'react';

function ImageWithText1({ imageUrl, heading, subheading }) {
    return (
        <div className="image-with-text-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop:'75px',backgroundColor:'#cbf2ee'}}>
            <img src={imageUrl} alt="Your Image" className="image" style={{width:'300px',height:'300px'}} />
            <div className="text-container" style={{marginLeft:'40px'}}>
                <h2 style={{fontWeight:'bold'}}>{heading}</h2>
                <p>{subheading}</p>
            </div>
        </div>
    );
};

export default ImageWithText1;
