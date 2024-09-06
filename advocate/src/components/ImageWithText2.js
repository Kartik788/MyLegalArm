// ImageWithText.js
import React from 'react';

function ImageWithText2({ imageUrl, heading, subheading }) {
    return (
        <div className="image-with-text-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' ,marginTop:'75px'}}>
            <div className="text-container">
                <h2 style={{fontWeight:'bold'}}>{heading}</h2>
                <p>{subheading}</p>
            </div>
            <img src={imageUrl} alt="Your Image" className="image" style={{width:'300px',height:'300px'}}/>

        </div>
    );
};

export default ImageWithText2;
