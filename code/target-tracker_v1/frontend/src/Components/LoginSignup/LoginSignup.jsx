import React, { useState } from 'react';
import './LoginSignup.css';
import { handleInput } from './LoginSignupInput';

import user_icon from '../Assets/person.png';
import email_icon from '../Assets/email.png';
import password_icon from '../Assets/password.png';

import { message } from 'antd';

const LoginSignup = ({ goToDashboard, goToManagerDashboard }) => {
  const [action, setAction] = useState("Log In");

  const handleLoginClick = async () => {
    if (action !== "Log In") {
      setAction("Log In");
    } else {
      const loginResult = await handleInput("Log In");

      if (loginResult.success === true) {
        if (loginResult.role === "manager") {
          goToManagerDashboard(loginResult.email); // Redirect managers to Admin Dashboard
        } else {
          goToDashboard(loginResult.email); // Redirect users to User Dashboard
        }
      } else if (loginResult.reset === true) {
        setAction("Forgot Password");
      } else {
        // alert("Login failed. Please check your credentials.");
        message.error("Login failed. Please check your credentials.");
      }
    }
  };

  const handleSignupClick = async () => {
    if (action !== "Sign Up") {
      setAction("Sign Up");
    } else {
      const signupResult = await handleInput("Sign Up");
      if (signupResult === true) {
        setAction("Log In");
      }
    }
  };

  const handleBackClick = () => {
    if (action === "Forgot Password") {
      setAction("Log In");
    }
  };

  const handleResetClick = async () => {
    if (action === "Forgot Password") {
      const resetResult = await handleInput("Forgot Password");
      if (resetResult === true) {
        setAction("Log In");
      }
    }
  };

  return (
    <div className='container'>
      <div className='header'>
        <div className='text'>{action}</div>
        <div className='underline'></div>
      </div>
      
      <div className='inputs'>
        {(action === "Sign Up" || action === "Forgot Password") && (
          <div className='input'>
            <img src={user_icon} alt='' />
            <input id="name" type='text' placeholder='Name' />
          </div>
        )}

        <div className='input'>
          <img src={email_icon} alt='' />
          <input id="email" type='email' placeholder='Email ID' />
        </div>

        {action === "Forgot Password" ? (
          <div>
            <div className='input'>
              <img src={password_icon} alt='' />
              <input id="newPassword" type='password' placeholder='New Password' />
            </div>
            <div className='input'>
              <img src={password_icon} alt='' />
              <input id="newpassword" type='password' placeholder='Confirm New Password' />
            </div>
          </div>
        ) : (
          <div>
            <div className='input'>
              <img src={password_icon} alt='' />
              <input id="password" type='password' placeholder='Password' />
            </div>
            <div className='requirements'>
            {action === "Sign Up" && (
              <p className="password-requirements">
                Password must be at least <b>8 characters</b> long and include:
                <b> 1 uppercase</b>, <b>1 lowercase</b>, <b>1 number</b>, and <b>1 special character</b>.
              </p>
            )}
            </div>
          </div>
        )}
      </div>

      {action === "Log In" && (
        <div className="forgot-password">
          Forgot Password? <span onClick={() => setAction("Forgot Password")}>Click Here</span>
        </div>
      )}

      <div className="submit-container">
        {action !== "Forgot Password" && (
          <div className={action === "Login" ? "submit gray" : "submit"} onClick={handleSignupClick}>Sign Up</div>
        )}
        {action !== "Forgot Password" && (
          <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={handleLoginClick}>Login</div>
        )}
        {action === "Forgot Password" && (
          <div className="submit" onClick={handleResetClick}>Submit</div>
        )}
        {action === "Forgot Password" && (
          <div className="back" onClick={handleBackClick}>Back</div>
        )}
      </div>
    </div>
  );
}

export default LoginSignup;











































/*import React, {useState} from 'react';
import './LoginSignup.css';
import {handleInput} from './LoginSignupInput';

import user_icon from '../Assets/person.png';
import email_icon from '../Assets/email.png';
import password_icon from '../Assets/password.png';

const LoginSignup = ({ goToDashboard }) => {

  const [action, setAction] = useState("Log In");
//   const [email, setEmail] = useState("");

const handleLoginClick = async () => {
    if (action !== "Log In") {
        setAction("Log In");
    } else {
        const loginResult = await handleInput("Log In");

        if (loginResult.success === true) {  // Checks if login was successful
            if (loginResult.role === "manager") {
                window.location.href = "/admin";  // Redirect managers to Admin Dashboard
            } else {
                window.location.href = "/user/dashboard";  // Redirect users to User Dashboard
            }
        } else {
            alert("Login failed. Please check your credentials.");
        }
    }
};

/*
  const handleLoginClick = async () => {
    if (action !== "Log In"){
        setAction("Log In");
    }
    else {
        const loginResult = await handleInput("Log In");
        if (loginResult.result === true){
            // setEmail(loginResult.email);
            goToDashboard(loginResult.email);
        }
    }
  };
*/
/*const handleSignupClick = async () => {
if (action !== "Sign Up"){
    setAction("Sign Up");
}
else {
    const signupResult = await handleInput("Sign Up");
    if (signupResult === true){
        setAction("Log In"); 
    }
}
};

const handleBackClick = async () => {
if (action === "Forgot Password"){
    setAction("Log In");
}
}

const handleResetClick = async () => {
if (action === "Forgot Password"){
    const resetResult = await handleInput("Forgot Password");
    if (resetResult === true){
        setAction("Log In");
    }
}
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
               <input id = "name" type='text' placeholder='Name'/>
            </div> 
            ): null}

            <div className='input'>
                <img src={email_icon} alt='' />
                <input id = "email" type='email' placeholder='Email ID'/>
            </div>

            {action === "Forgot Password" ? (
                <div>
                <div className='input'>
                    <img src={password_icon} alt='' />
                    <input id = "newPassword" type='password' placeholder='New Password'/>
                </div>
                <div className='input'>
                    <img src={password_icon} alt='' />
                    <input id = "newpassword" type='password' placeholder='New Password'/>
                </div>
                </div>
            ) : (
                <div className='input'>
                    <img src={password_icon} alt='' />
                    <input id = "password" type='password' placeholder='Password'/>
                </div>
                {action === "Sign Up" && (
                    <p className="password-requirements">
                        Password must be at least <b>8 characters</b> long and include:
                        <b> 1 uppercase</b>, <b>1 lowercase</b>, <b>1 number</b>, and <b>1 special character</b>.
                    </p>
                )}
            </div> 
            )}
        </div>
            {action==="Log In" && (
                <div className="forgot-password">Forgot Password? <span onClick={() => setAction("Forgot Password")}>Click Here</span></div>
            )}

            <div className="submit-container">
                {action !== "Forgot Password" && (
                    <div className={action === "Login" ? "submit gray" : "submit"} onClick={handleSignupClick}>Sign Up</div>
                )}
                {action !== "Forgot Password" && (
                    <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={handleLoginClick}>Login</div>
                )}
                {action === "Forgot Password" && (
                    <div className="submit" onClick={handleResetClick}>Submit</div>
                )}
                {action === "Forgot Password" && (
                    <div className="back" onClick={handleBackClick}>Back</div>
                )}
                
            </div>

            {/* <button className="go-to-dashboard" onClick={handleDashboardClick}>
             Go to Dashboard
             </button> }*/

        /*</div>
    );
}

export default LoginSignup*/