import axios from "axios";
import validator from "validator";

function validateEmail(email) {
    return validator.isEmail(email);
};

function validatePassword(password) {
    return validator.isStrongPassword(password);
};

/*function validateEmail(email) {
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
}*/

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
        const validEmail = validateEmail(postData.email);
        const validPassword = validatePassword(postData.password);

        if (!validEmail) {
            alert("Please enter a valid email");
            return false;
        }

        if (!validPassword) {
            alert("Password needs to be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character");
            return false;
        }

        try {
            const signUpResult = await axios.post('http://localhost:4000/signup', postData);
            return signUpResult.data === "success";
        } catch (error) {
            console.error(error);
            return false;
        }
    };

        /*

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
    }*/

    const login = async(postData) => {
        if (!validateEmail(postData.email)) {
            alert("Please enter a valid email");
            return {success: false};
        }

        try {
            const loginResult = await axios.post('http://localhost:4000/login', postData);
            if (loginResult.data.success) {
                alert("Successfully logged in!");
                return {
                    success: true, 
                    id: loginResult.data.id,
                    role: loginResult.data.role,
                    email: postData.email
                };
            } else {
                if (loginResult.data.message.includes("locked")){
                    alert("3 Unsuccessful login attempts. Please reset password");
                    return {success: false,
                            reset: true
                    };
                } else {
                    alert("Unsuccessful login attempt");
                    return {success: false};
                }
            }
        } catch (error) {
            console.error("Login error:", error);
            alert("Login failed. Please try again.");
            return {success: false};
        }
    };

        /*

        if (validateEmail === false) {
            alert("Please enter a valid email");
            return false;
        } else {
            try{
                const loginResult = await axios.post('http://localhost:4000/login', postData)
                if (loginResult.data === "success"){
                    // console.log(postData.email);
                    return true;
                }
                else {
                    return false;
                }
            } catch (error){
                console.error(error);
            }
        }
    }*/

    const reset = async(postData) => {
        if (!validateEmail(postData.email)) {
            alert("Please enter a valid email");
            return false;
        }

        try {
            const resetResult = await axios.post('http://localhost:4000/reset', postData);
            return resetResult.data === "success";
        } catch (error) {
            console.error(error);
            return false;
        }
    };

/*
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
    }*/

    if (action === "Sign Up" && !(name && email && password)){
        alert("Please fill in all fields");
        return false;
    }
    if (action === "Log In" && !(email && password)){
        alert("Please fill in all fields");
        return false;
    }
    if (action === "Forgot Password" && !(name && email && newPassword)){
        alert("Please fill in all fields");
        return false;
    }

    if (action === "Sign Up"){
        const signUpInput = { name, email, password };
        const result = await signUp(signUpInput);
        if (!result){
            alert("Unsuccessful sign up");
            return false;
        }
        alert("Successfully signed up");
        return true;
    }

    if (action === "Log In"){
        const loginInput = {email, password};
        const result = await login(loginInput);
        if (!result){
            alert("Unsuccessful login attempt")
            return false;
        }
        return result;
    }
    /*
        else{
            alert("Successfully logged in!");
            return {"result": true, "email": email};
        }
    }*/

    if (action === "Forgot Password"){
        const resetInput = {name, email, newPassword};
        const result = await reset(resetInput);
        if (!result){
            alert("Password unchanged");
            return false;
        }
        alert("Successfully changed password!");
        return true;
    }
};

/*
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

};*/