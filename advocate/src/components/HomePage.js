import React from 'react';
import Navbar from './Navbar';
import BigHeading from './BigHeading';
import SmallHeading from './SmallHeading';
import Carousel from './Carousel';
import LoveMyAdvo from './LoveMyAdvo';
import ImageWithText1 from './ImageWithText1';
import ImageWithText2 from './ImageWithText2';
import LowerHeading from './LowerHeading';
import AboveFooter from './AboveFooter';
import Footer from './Footer';
import CardGrid from './CardGrid';
import GovernmentReg from './GovernmentReg';
import BookConsultation from './BookConsultation'

function HomePage() {
    return (
        <div>
            <Navbar />
            <BigHeading />
            <SmallHeading />
            <Carousel />
            <CardGrid/>
            <GovernmentReg/>
            <LoveMyAdvo />
            <ImageWithText1 heading={"Find Lawyers Near You Instantly"} subheading={"Immediate Legal Support in Emergencies: Call, Connect, and Pay Your Nearest Lawyer on the Spot"} imageUrl={"./lawyer.png"} />
            <ImageWithText2 heading={"Simplifying Your Legal Journey"} subheading={"Effortless Solutions for Every Legal Need: Streamlined, Accessible, and Stress-Free Assistance at Your Fingertips"} imageUrl={"./simplicity.png"} />
            <ImageWithText1 heading={"Top-Notch Lawyers"} subheading={"Unparalleled Legal Advocacy: Our Elite Team of Attorneys Ensures Your Rights and Peace of Mind"} imageUrl={"./toplawyer.png"} />
            <LowerHeading />
            <AboveFooter />
            <Footer /> 
        </div>
    );
};

export default HomePage;
