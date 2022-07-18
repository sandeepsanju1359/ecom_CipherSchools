import React, { useState } from "react";
import "./SignInBody.css"
import {SIGN_IN_BODY_TEXT} from "../constants/components"
import Button from "../../global/Button/Button";
import Input from "../../global/Input/Input";

function SignInBody() {

    const [showSignInBox, setShowSignInBox] = useState(true)

    function setShowSigInBoxAs(parameter){
        setShowSignInBox(parameter)
    }


    return (
        <>
            {showSignInBox ?
                (
                    <div className="signinbody_container">
                        <div className="signinbody_form">
                            <p className="signinbody_title">{SIGN_IN_BODY_TEXT.SIGN_IN} </p>
                            <Input text={SIGN_IN_BODY_TEXT.EMAIL_PLACEHOLDER} type="text" />
                            <Input text={SIGN_IN_BODY_TEXT.PASSWORD_PLACEHOLDER} type="password" />
                            <Button text={SIGN_IN_BODY_TEXT.SIGN_IN} />
                            <Button text={SIGN_IN_BODY_TEXT.LOGIN_AS_GUEST_USER} />
                            <p className="signinbody_text">{SIGN_IN_BODY_TEXT.NEW_USER}{" "}<span onClick={() => setShowSigInBoxAs(false)}>{SIGN_IN_BODY_TEXT.SIGN_UP_NOW}</span></p>
                        </div>

                    </div>
                ) :
                (
                    <div className="signinbody_container">
                        <div className="signinbody_form">
                            <p className="signinbody_title">{SIGN_IN_BODY_TEXT.SIGN_UP} </p>
                            <Input text="Name" type="text" />
                            <Input text={SIGN_IN_BODY_TEXT.EMAIL_PLACEHOLDER} type="text" />
                            <Input text={SIGN_IN_BODY_TEXT.PASSWORD_PLACEHOLDER} type="password" />
                            <Button text={SIGN_IN_BODY_TEXT.SIGN_UP} />
                            <Button text={SIGN_IN_BODY_TEXT.LOGIN_AS_GUEST_USER} />
                            <p className="signinbody_text">{SIGN_IN_BODY_TEXT.ALREADY_USER} <span onClick={() => setShowSigInBoxAs(true)}>{SIGN_IN_BODY_TEXT.SIGN_IN} {"."}</span></p>
                        </div>

                    </div>
                )}




        </>

    )
}

export default SignInBody;