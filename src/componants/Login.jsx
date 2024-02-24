import React from 'react'
import {auth}  from "../Firebase"
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import './Login.css'
 
const Login = () => {
  const navigate = useNavigate()
  const goggleClick = async()=>{
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup (auth,provider)
   // console.log(result)
    navigate('/blog')
  }
  return (
    <>
    

    <div className="login-container">
    <img src="https://pngimg.com/uploads/google/google_PNG19635.png" alt="Google Logo" className="google-logo"/>
    <button onClick={goggleClick} className="google-login-button">Login with Google</button>
  </div>
      
    </>
  )
}

export default Login
