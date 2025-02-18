import axios from "axios";
import validator from "validator";

function validateEmail(email) {
    if (validator.isEmail(email)) {
        return true;
    } else {
        return false;
    }
};
function validatePassword(password) {
    if (validator.isStrongPassword(password)) {
        return true;
    } else {
        return false;
    }
}

export const handleInput = async (action) => {
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const newPasswordInput = document.getElementById("newPassword");

    const name = nameInput?.value?.trim() || "";
    const email = emailInput?.value?.trim() || "";
    const password = passwordInput?.value?.trim() || "";
    const newPassword = newPasswordInput?.value?.trim() || "";

    const signUp = async(postData) => {
        const validemail = validateEmail(postData.email);
        const validpassword = validatePassword(postData.password);

        if (validemail === false) {
            alert("Please enter a valid email");
        }
        if (validpassword === false) {
            alert("Password is not strong enough");
        }
        if (validemail === true && validpassword === true) {
            try{
                const signUpResult = await axios.post('http://localhost:4000/signup', postData)
                if (signUpResult.data === "success"){
                    return true;
                }
                else {
                    return false;
                }
            } catch (error) {
                console.error(error);
            }
        } else {
            return false;
        }
    }

    const login = async(postData) => {
        if (validateEmail === false) {
            alert("Please enter a valid email");
            return false;
        } else {
            try{
                const loginResult = await axios.post('http://localhost:4000/login', postData)
                if (loginResult.data === "success"){
                    return true;
                }
                else {
                    return false;
                }
            } catch (error){
                console.error(error);
            }
        }
    }

    const reset = async(postData) => {
        if (validateEmail(postData.email) === false) {
            alert("Please enter a valid email");
            return false;
        } else {
            try{
                const resetResult = await axios.post('http://localhost:4000/reset', postData)
                if (resetResult.data === "success"){
                    return true;
                }
                else {
                    return false;
                }
            } catch (error) {
                console.error(error);
            }
        }
    }

    if (action === "Sign Up" && !(name && email && password)){
        alert("Please fill in all fields");
    }
    else if (action === "Log In" && !(email && password)){
        alert("Please fill in all fields");
    }
    else if (action === "Forgot Password" && !(name && email && newPassword)){
        alert("Please fill in all fields");
    }
    else if (action === "Sign Up"){
        const signUpInput = { name, email, password };
        const result = await signUp(signUpInput);
        if (result === false){
            alert("Unsuccessful sign up");
        }
        else{
            alert("Successfully signed up");
            return true;
        }
    }
    else if (action === "Log In"){
        const loginInput = {email, password};
        const result = await login(loginInput);
        if (result === false){
            alert("Unsuccessful login attempt")
        }
        else{
            alert("Successfully logged in!");
            return true;
        }
    }
    else{
        const resetInput = {name, email, newPassword};
        const result = await reset(resetInput);
        if (result === false){
            alert("Password unchanged");
        }
        else{
            alert("Successfully changed password!");
            return true;
        }
    }

};