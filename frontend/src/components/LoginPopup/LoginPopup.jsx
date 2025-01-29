import React from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'
const LoginPopup = ({setShowLogin}) => {

    const[currentState,setCurrentState]=useState("Sign Up")

  return (
    <div className='login-popup'>
        <form className="login-popup-container">
            <div className="login-popup-title">
                <h2>{currentState}</h2>
                <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
            </div>
            <div className="login-popup-inputs">
                {currentState==="Login"?<></>:<input type="text" placeholder='Your Name' required/>}                
                <input type="email" placeholder='Your Email' required/>
                <input type="password" placeholder='Password' required/>
            </div>
            <button>{currentState==="Sign Up"?"Create Account":"Login"}</button>
            <div className="login-popup-condition">
                <input type="checkbox" required/>
                <p>By proceeding, I agree to the Terms of Use & Privacy Policy.</p>
            </div>
            {currentState==="Login"
            ?<p>Create a new account? <span onClick={()=>setCurrentState("Sign Up")} >Sign Up here</span></p>
            :<p>Already have an account? <span onClick={()=>setCurrentState("Login")}>Login Here</span></p>
            }
            
            
        </form>
    </div>
  )
}

export default LoginPopup
