import React, {useState} from 'react';
import './LoginSignup.css';

import user_icon from '../Assets/person.png';
import email_icon from '../Assets/email.png';
import password_icon from '../Assets/password.png';


const LoginSignup = ({ goToDashboard }) => {

  const [action,setAction] = useState("Login");
  const handleDashboardClick = () => {
    goToDashboard();  
  }
  return (
    <div className='container'>
        <div className='header'>
            <div className='text'>{action}</div>
            <div className='underline'></div>
        </div>
        <div className='inputs'>
            {action === "Sign Up" || action === "Forgot Password" ? (
            <div className='input'>
                <img src={user_icon} alt='' />
               <input type='text' placeholder='Name'/>
            </div> 
            ): null}

            <div className='input'>
                <img src={email_icon} alt='' />
                <input type='email' placeholder='Email ID'/>
            </div>

            {action === "Forgot Password" ? (
                <div className='input'>
                    <img src={password_icon} alt='' />
                    <input type='password' placeholder='New Password'/>
                </div>
            ) : (
                <div className='input'>
                    <img src={password_icon} alt='' />
                    <input type='password' placeholder='Password'/>
                </div>
            )}
        </div>
            {action==="Login" && (
                <div className="forgot-password">Forgot Password? <span onClick={() => setAction("Forgot Password")}>Click Here</span></div>
            )}
            <div className="submit-container">
                {action !== "Forgot Password" && (
                    <div className={action === "Login" ? "submit gray" : "submit"} onClick={() => setAction("Sign Up")}>Sign Up</div>
                )}
                {action !== "Forgot Password" && (
                    <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={() => setAction("Login")}>Login</div>
                )}
                {action === "Forgot Password" && (
                    <div className="submit" onClick={() => setAction("Login")}>Submit</div>
                )}
            </div>
            <button className="go-to-dashboard" onClick={handleDashboardClick}>
             Go to Dashboard
             </button>

        </div>
    );
}


export default LoginSignup