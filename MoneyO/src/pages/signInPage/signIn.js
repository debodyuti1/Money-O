import React from "react"
import './signIn.css'
import SignUpVector from '../../assets/signUpVector.png'


const SignIn = () => {
    return(
        <div className="signUpPage">
            <div className="row">
                <div className="col-lg-6">
                    <img src={SignUpVector} />
                </div>
                <div className="signUpContainer col-lg-6">
                    <span className="SignUpTitle" >Sign Up</span><br />
                    <input className="SignUpFields" placeholder="Enter Email" />
                    <input className="SignUpFields" placeholder="Enter Password" />
                    
                    <button> Sign In </button>
                </div>
            </div>
        </div>
    )
}

export default SignIn