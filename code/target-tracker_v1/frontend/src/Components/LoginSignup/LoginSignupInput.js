import axios from "axios";

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
        try{
            const signUpResult = await axios.post('http://localhost:4000/signup', postData)
            console.log(signUpResult.data);
            if (signUpResult.data === "success"){
                return true;
            }
            else {
                return false;
            }
        } catch (error) {
            console.error(error);
        }
    }

    const login = async(postData) => {
        try{
            const loginResult = await axios.post('http://localhost:4000/login', postData)
            console.log(loginResult.data);
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

    const reset = async(postData) => {
        try{
            const resetResult = await axios.post('http://localhost:4000/reset', postData)
            console.log(resetResult.data);
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
            alert("Sorry, email taken");
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
            alert("Sorry, incorrect login details")
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
            alert("Please fill in correct email and name");
        }
        else{
            alert("Successfully changed password!");
            return true;
        }
    }

};