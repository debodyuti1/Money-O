import React, {useState, useRef} from "react"
import './signUp.css'
import SignUpVector from '../../assets/signUpVector.png'
import axios from 'axios'
import { useHistory } from "react-router"


const SignUp = () => { 

    const username = useRef()
    const fullname = useRef()
    const email= useRef()
    const password = useRef()
    const history = useHistory()
    

    const handleSubmit = async (e) =>{
        e.preventDefault();
        const user = {
                    fname: fullname.current.value,
                    username: username.current.value,
                    email: email.current.value,
                    password: password.current.value
                  }

                  try {
                            await axios.post("/auth/register" , user)
                            history.push("/MoneyO")
                          } catch (error) {
                            console.log(error);
                          }
                        }
    
    return(
        <div className="signUpPage"> 
            <div className="row">
                <div className="col-lg-6">
                    <img src={SignUpVector} />
                </div>
                <div className="signUpContainer col-lg-6">
                <form onSubmit={handleSubmit} className="loginBox">
                <span className="SignUpTitle" >Sign Up</span><br />
                    <input className="SignUpFields" ref={fullname} required placeholder="Enter Full Name" /><br />
                    <input  className="SignUpFields" type="email" ref={email} required  placeholder="Enter Email" />
                    <input  className="SignUpFields" required ref={username} placeholder="Enter Username" />
                    <input  className="SignUpFields" ref={password} minLength="6" required type="password" placeholder="Enter Password" />
                    <button className="SignInButton" type="submit" > Sign Up </button><br/>
                    <span className="donthaveaccount">Already have an account? <a href="/login"><span className="RegisterNowLink" >Login now </span></a> </span>
                </form>
                   
                </div>
            </div>
        </div>
    )
}

export default SignUp