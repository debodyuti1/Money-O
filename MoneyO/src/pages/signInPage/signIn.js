import React from "react"
import './signIn.css'
import SignUpVector from '../../assets/signUpVector.png'
import {useContext, useRef} from 'react'
import { AuthContext } from "../../context/AuthContext";
import { loginCall } from "../../apiCalls"
import axios from 'axios'
import { useHistory } from "react-router"


const SignIn = () => {
    
    const email = useRef()
    const password= useRef()
    const history = useHistory()
    const {users,dispatch} = useContext(AuthContext)

    const handleClick = async (e) =>{
        e.preventDefault();
        e.preventDefault();
        loginCall({email:email.current.value, password:password.current.value}, dispatch )
      }    
    return(
        <form className="signUpPage" onSubmit={handleClick}>
            <div className="row">
                <div className="col-lg-6">
                    <img src={SignUpVector} />
                </div>
                <div className="signUpContainer col-lg-6">
                    <span className="SignUpTitle" >Sign in</span><br /><br />
                    <input ref={email} required type="email"  className="SignUpFields" placeholder="Enter Email" />
                    <input ref={password} required type="password" minLength = "6" className="SignUpFields" placeholder="Enter Password" />
                    <button className="SignInButton" type="submit" > Login </button><br/>
                    <span className="donthaveaccount">Don't have an account? <a href="/signup"><span className="RegisterNowLink" >Register Now </span></a> </span>
                </div>
            </div>
        </form>
    )
}

export default SignIn