import axios from "axios";

export const getUserInfo = async(email) => {
    const postData = {"email": email};
    const result = await axios.post('http://localhost:4000/userdata', postData);
    return {"name":result.data.name,"role":result.data.role};
};