import React from "react";
import "./Navbar.css";
import search from "../../images/search.png"
import { SIGN_IN_BODY_TEXT } from "../constants/components"
import { useNavigate } from "react-router-dom"
import Button from "../../global/Button/Button"


function Navbar() {

    const navigate = useNavigate()

    function goToSignInPage() {
        navigate("/sign-in")
    }

    return (
        <div className="navbar_container">
            <img
                className="navbar_logo"
                src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="Logo"
            />

            <div className="navbar_search">
                <input type="text" placeholder="Search in Amazon " />
                <img src={search} alt="search" />
            </div>

            <div className="navbar_buttons">

                <div>
                    <Button text={SIGN_IN_BODY_TEXT.SIGN_IN} onClick={goToSignInPage} />
                </div>

                <div>
                    <Button text={SIGN_IN_BODY_TEXT.ORDERS} onClick={goToSignInPage} />
                </div>

                <div>
                    <Button text={SIGN_IN_BODY_TEXT.CONTACT} onClick={goToSignInPage} />
                </div>

            </div>




        </div>
    );
}
export default Navbar;


