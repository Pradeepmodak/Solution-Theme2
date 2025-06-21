import React, { useState } from "react"
import './LoginSignup.css'
 import user_icon from '../../../assets/person.png'
 import email_icon from '../../../assets/email.png'
 import pass_icon from '../../../assets/password.png'


export const LoginPage=()=>{
const[action,setAction]=useState("Login");

    return(
        <div className="container">
           <div className="header">
               <div className="text">
                   {action}
               </div>
               <div className="underline"></div>
           </div>
           <div className="inputs">
            {action==="Login"?<div></div>:<div className="input">
                <img src={user_icon} alt=""/>
                <input type="text" placeholder="Name"></input>
            </div>}
             <div className="input">
                <img src={email_icon} alt=""/>
                <input type="email" placeholder="Email Id"/>
            </div>
             <div className="input">
                <img src={pass_icon} alt=""/>
                <input type="password"placeholder="password"/>
            </div>
           </div>
           {action=="Sign Up"?<div></div>: <div className="forget_password">Forgot Password ? <span>Click here</span></div>}
           <div className="submit-container">
            <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
            <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Log In</div>
           </div>
        </div>
    )
}