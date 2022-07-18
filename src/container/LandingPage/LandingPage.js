import React from "react";
import LandingPageContent from "../../components/LandingPageContent/LandingPageContent";
import Navbar from "../../components/Navbar/Navbar";
import "./LandingPage.css"

function LandingPage(){
    return(
        <div className="landingpagr_container">
        <Navbar/>
        <LandingPageContent />
        </div>
    )
}

export default LandingPage;